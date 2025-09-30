import skimage.io as skio
import numpy as np
from scipy.signal import convolve2d
import skimage as sk
import cv2

# 1.1

def convolution_4_for_loops(image, kernel):
    height, width = image.shape
    kernel_height, kernel_width = kernel.shape

    cc_kernel = np.flipud(np.fliplr(kernel))

    pad_top = kernel_height // 2
    pad_bottom = kernel_height - pad_top - 1
    pad_left = kernel_width // 2
    pad_right = kernel_width - pad_left - 1

    padded_image = np.pad(
        image,
        ((pad_top, pad_bottom), (pad_left, pad_right)),
        mode='constant'
    )

    output = np.zeros((height, width))

    for i in range(height):
        for j in range(width):
            acc = 0.0
            for u in range(kernel_height):
                for v in range(kernel_width):
                    acc += (
                        padded_image[i + u, j + v] *
                        cc_kernel[u, v]
                    )
            output[i, j] = acc

    return output

def convolution_2_for_loops(image, kernel):
    height = image.shape[0]
    width = image.shape[1]
    kernel_height = kernel.shape[0]
    kernel_width = kernel.shape[1]
    cc_kernel = np.flipud(np.fliplr(kernel))
    pad_h = kernel_height // 2
    pad_w = kernel_width // 2
    padded_image = np.pad(image, ((pad_h, pad_h), (pad_w, pad_w)), mode='constant')

    output= np.zeros((height, width))

    for i in range(height):
        for j in range(width):
            region = padded_image[i : i + kernel_height, j : j + kernel_width]
            region_flat = region.flatten()
            kernel_flat = cc_kernel.flatten()
            output[i, j] = np.dot(region_flat, kernel_flat)

    return output

myself_image = skio.imread('image/myself.jpg', as_gray=True)
box_filter = 1 / 81 * np.ones((9, 9))
Dx = np.array([[1, 0, -1]])
Dy = np.array([[1], [0], [-1]])

myself_box_filter = convolve2d(myself_image, box_filter, mode="same")
skio.imsave('output/myself_box_filter_c2d.jpg', sk.img_as_ubyte(myself_box_filter))

skio.imsave('output/myself_box_filter_c2.jpg', sk.img_as_ubyte(convolution_2_for_loops(myself_image, box_filter)))

skio.imsave('output/myself_box_filter_c4.jpg', sk.img_as_ubyte(convolution_4_for_loops(myself_image, box_filter)))

myself_Dx = convolve2d(myself_image, Dx, mode='same')
skio.imsave('output/myself_Dx_c2d.jpg', sk.img_as_ubyte(myself_Dx))

skio.imsave('output/myself_Dx_c2.jpg', sk.img_as_ubyte(convolution_2_for_loops(myself_image, Dx)))

skio.imsave('output/myself_Dx_c4.jpg', sk.img_as_ubyte(convolution_4_for_loops(myself_image, Dx)))

myself_Dy = convolve2d(myself_image, Dy, mode='same')
skio.imsave('output/myself_Dy_c2d.jpg', sk.img_as_ubyte(myself_Dy))

skio.imsave('output/myself_Dy_c2.jpg', sk.img_as_ubyte(convolution_2_for_loops(myself_image, Dy)))

skio.imsave('output/myself_Dy_c4.jpg', sk.img_as_ubyte(convolution_4_for_loops(myself_image, Dy)))

# 1.2

cameraman_image = skio.imread('image/cameraman.png', as_gray=True)
cameraman_Dx = convolve2d(cameraman_image, Dx, mode='same')
skio.imsave('output/cameraman_Dx.jpg', sk.img_as_ubyte(cameraman_Dx))
cameraman_Dy = convolve2d(cameraman_image, Dy, mode='same')
skio.imsave('output/cameraman_Dy.jpg', sk.img_as_ubyte(cameraman_Dy))
cameraman_gradient_magnitude = np.sqrt(cameraman_Dx**2 + cameraman_Dy**2)

cameraman_edge_image = cameraman_gradient_magnitude > 0.2
skio.imsave('output/cameraman_edge_image.jpg', sk.img_as_ubyte(cameraman_edge_image))

# 1.3

gaussian_filter = cv2.getGaussianKernel(5,1) @ cv2.getGaussianKernel(5,1).T

blurred_cameraman_image = convolve2d(cameraman_image, gaussian_filter)
skio.imsave('output/blurred_cameraman_image.jpg', sk.img_as_ubyte(blurred_cameraman_image))

blurred_cameraman_Dx = convolve2d(blurred_cameraman_image, Dx, mode='same')
blurred_cameraman_Dy = convolve2d(blurred_cameraman_image, Dy, mode='same')

blurred_cameraman_gradient_magnitude = np.sqrt(blurred_cameraman_Dx**2 + blurred_cameraman_Dy**2)

blurred_cameraman_edge_image = blurred_cameraman_gradient_magnitude > 0.1
skio.imsave('output/blurred_cameraman_edge_image.jpg', sk.img_as_ubyte(blurred_cameraman_edge_image))

DoG_Dx = convolve2d(gaussian_filter, Dx, mode='same')
DoG_Dy = convolve2d(gaussian_filter, Dy, mode='same')

skio.imsave('output/DoG_Dx.jpg', sk.img_as_ubyte(DoG_Dx))

skio.imsave('output/DoG_Dy.jpg', sk.img_as_ubyte(DoG_Dy))

cameraman_DoG_Dx = convolve2d(cameraman_image, DoG_Dx, mode='same')
cameraman_DoG_Dy = convolve2d(cameraman_image, DoG_Dy, mode='same')

DoG_Dx_cameraman_gradient_magnitude = np.sqrt(cameraman_DoG_Dx**2 + cameraman_DoG_Dy**2)

DoG_Dx_cameraman_edge_image = DoG_Dx_cameraman_gradient_magnitude > 0.1
skio.imsave('output/blurred_cameraman_edge_image.jpg', sk.img_as_ubyte(blurred_cameraman_edge_image))

# 2.1

taj = skio.imread('image/taj.jpg')
taj = sk.img_as_float(taj)

taj_blurred_channels = []
for c in range(3):
  blurred = convolve2d(taj[:, :, c], gaussian_filter, mode='same')
  taj_blurred_channels.append(blurred)

taj_low_freq = np.stack(taj_blurred_channels, axis=-1)

# subtract the gaussian blurred taj from the original image
taj_high_freq = taj - taj_low_freq
alpha = 2
taj_sharpened = taj + alpha * taj_high_freq
# skio.imshow(taj_sharpened)

# unsharp mask filter
unit_impulse = np.zeros((5, 5))
unit_impulse[2, 2] = 1
unsharp_mask_filter = (1 + alpha) * unit_impulse - alpha * gaussian_filter
taj_sharpened_umf_channels = []
for c in range(3):
  blurred = convolve2d(taj[:, :, c], unsharp_mask_filter, mode='same')
  taj_sharpened_umf_channels.append(blurred)

taj_sharpened_umf = np.stack(taj_sharpened_umf_channels, axis=-1)
# skio.imshow(taj_sharpened_umf)

# 2.2

import math
import numpy as np
import matplotlib.pyplot as plt
import skimage.transform as sktr


def get_points(im1, im2):
    print('Please select 2 points in each image for alignment.')
    plt.imshow(im1)
    p1, p2 = plt.ginput(2)
    plt.close()
    plt.imshow(im2)
    p3, p4 = plt.ginput(2)
    plt.close()
    return (p1, p2, p3, p4)

def recenter(im, r, c):
    R, C, _ = im.shape
    rpad = (int) (np.abs(2*r+1 - R))
    cpad = (int) (np.abs(2*c+1 - C))
    return np.pad(
        im, [(0 if r > (R-1)/2 else rpad, 0 if r < (R-1)/2 else rpad),
             (0 if c > (C-1)/2 else cpad, 0 if c < (C-1)/2 else cpad),
             (0, 0)], 'constant')

def find_centers(p1, p2):
    cx = np.round(np.mean([p1[0], p2[0]]))
    cy = np.round(np.mean([p1[1], p2[1]]))
    return cx, cy

def align_image_centers(im1, im2, pts):
    p1, p2, p3, p4 = pts
    h1, w1, b1 = im1.shape
    h2, w2, b2 = im2.shape
    
    cx1, cy1 = find_centers(p1, p2)
    cx2, cy2 = find_centers(p3, p4)

    im1 = recenter(im1, cy1, cx1)
    skio.imsave(f'output/im1_aligned_g1.jpg', sk.img_as_ubyte(im1))
    im2 = recenter(im2, cy2, cx2)
    skio.imsave(f'output/im2_aligned_g2.jpg', sk.img_as_ubyte(im2))
    return im1, im2

def rescale_images(im1, im2, pts):
    p1, p2, p3, p4 = pts
    len1 = np.sqrt((p2[1] - p1[1])**2 + (p2[0] - p1[0])**2)
    len2 = np.sqrt((p4[1] - p3[1])**2 + (p4[0] - p3[0])**2)
    dscale = len2/len1
    if dscale < 1:
        im1 = sktr.rescale(im1, dscale, channel_axis=2) # preserve color channels
    else:
        im2 = sktr.rescale(im2, 1./dscale, channel_axis=2) # preserve color channels
    return im1, im2

def rotate_im1(im1, im2, pts):
    p1, p2, p3, p4 = pts
    theta1 = math.atan2(-(p2[1] - p1[1]), (p2[0] - p1[0]))
    theta2 = math.atan2(-(p4[1] - p3[1]), (p4[0] - p3[0]))
    dtheta = theta2 - theta1
    im1 = sktr.rotate(im1, dtheta*180/np.pi)
    return im1, dtheta

def match_img_size(im1, im2):
    # Make images the same size
    h1, w1, c1 = im1.shape
    h2, w2, c2 = im2.shape
    if h1 < h2:
        im2 = im2[int(np.floor((h2-h1)/2.)) : -int(np.ceil((h2-h1)/2.)), :, :]
    elif h1 > h2:
        im1 = im1[int(np.floor((h1-h2)/2.)) : -int(np.ceil((h1-h2)/2.)), :, :]
    if w1 < w2:
        im2 = im2[:, int(np.floor((w2-w1)/2.)) : -int(np.ceil((w2-w1)/2.)), :]
    elif w1 > w2:
        im1 = im1[:, int(np.floor((w1-w2)/2.)) : -int(np.ceil((w1-w2)/2.)), :]
    assert im1.shape == im2.shape
    return im1, im2

def align_images(im1, im2):
    pts = get_points(im1, im2)
    im1, im2 = align_image_centers(im1, im2, pts)
    im1, im2 = rescale_images(im1, im2, pts)
    im1, angle = rotate_im1(im1, im2, pts)
    im1, im2 = match_img_size(im1, im2)
    return im1, im2

import matplotlib.pyplot as plt

# First load images

# high sf
im1 = plt.imread('image/DerekPicture.jpg')/255.

# low sf
im2 = plt.imread('image/nutmeg.jpg')/255

# Next align images (this code is provided, but may be improved)
im1_aligned, im2_aligned = align_images(im1, im2)

## You will provide the code below. Sigma1 and sigma2 are arbitrary
## cutoff values for the high and low frequencies

def hybrid_image(im1, im2, sigma1, sigma2):
  im1_gray = np.mean(im1, axis=-1)
  im2_gray = np.mean(im2, axis=-1)
  high_sf_im1 = im1_gray - convolve2d(im1_gray, cv2.getGaussianKernel(6 * sigma1,sigma1) @ cv2.getGaussianKernel(6 * sigma1,sigma1).T, mode='same')
  low_sf_im2 = convolve2d(im2_gray, cv2.getGaussianKernel(6 * sigma2,sigma1) @ cv2.getGaussianKernel(6 * sigma2,sigma2).T, mode='same')
  return np.clip(high_sf_im1 + low_sf_im2, 0, 1)

sigma1 = 4
sigma2 = 12
hybrid = hybrid_image(im1_aligned, im2_aligned, sigma1, sigma2)

image_normalized = (hybrid - np.min(hybrid)) / (np.max(hybrid) - np.min(hybrid))
image_uint8 = (image_normalized * 255).astype(np.uint8)
skio.imsave('output/hybrid.jpg', image_uint8)

# high sf
im1 = plt.imread('image/ayanokoji.jpg')/255.

# low sf
im2 = plt.imread('image/myself.jpg')/255

# Next align images (this code is provided, but may be improved)
im1_aligned, im2_aligned = align_images(im1, im2)

## You will provide the code below. Sigma1 and sigma2 are arbitrary
## cutoff values for the high and low frequencies

sigma1 = 2
sigma2 = 6
hybrid = hybrid_image(im1_aligned, im2_aligned, sigma1, sigma2)

image_normalized = (hybrid - np.min(hybrid)) / (np.max(hybrid) - np.min(hybrid))
image_uint8 = (image_normalized * 255).astype(np.uint8)
skio.imsave('output/hybrid-ayanokoji-myself.jpg', image_uint8)

plt.imshow(np.log(np.abs(np.fft.fftshift(np.fft.fft2(image_uint8)))))
plt.title('FFT of Hybrid Image')
plt.colorbar()
plt.show()

# high sf
im1 = plt.imread('image/tomoya.jpg')/255.

# low sf
im2 = plt.imread('image/sunohara.jpg')/255

# Next align images (this code is provided, but may be improved)
im1_aligned, im2_aligned = align_images(im1, im2)

## You will provide the code below. Sigma1 and sigma2 are arbitrary
## cutoff values for the high and low frequencies

sigma1 = 6
sigma2 = 24
hybrid = hybrid_image(im1_aligned, im2_aligned, sigma1, sigma2)

image_normalized = (hybrid - np.min(hybrid)) / (np.max(hybrid) - np.min(hybrid))
image_uint8 = (image_normalized * 255).astype(np.uint8)
skio.imsave('output/hybrid-tomoya-sunohara.jpg', image_uint8)

# 2.3

def gaussian_stack(image, n=5, file_base=None):
    gaussian_stack = [image.copy()]
    
    # Save level 0 (original) if requested
    if file_base is not None:
        lvl0 = gaussian_stack[0]
        lvl0_min, lvl0_max = np.min(lvl0), np.max(lvl0)
        if lvl0_max > lvl0_min:
            lvl0_norm = (lvl0 - lvl0_min) / (lvl0_max - lvl0_min)
        else:
            lvl0_norm = np.zeros_like(lvl0)
        skio.imsave(f'output/{file_base}_g0.jpg', sk.img_as_ubyte(lvl0_norm))
    
    for i in range(1, n):
        sigma = 2 ** i
        ksize = int(2 * 3 * sigma + 1)
        gaussian_filter = cv2.getGaussianKernel(ksize, sigma) @ cv2.getGaussianKernel(ksize, sigma).T
        
        if len(image.shape) == 2:
            blurred_layer = convolve2d(image, gaussian_filter, mode='same')
        else:
            img_blurred_channels = []
            num_channels = image.shape[2]
            for c in range(num_channels):
                blurred = convolve2d(image[:, :, c], gaussian_filter, mode='same')
                img_blurred_channels.append(blurred)
            blurred_layer = np.stack(img_blurred_channels, axis=-1)

        gaussian_stack.append(blurred_layer)

        if file_base is not None:
            lvl = blurred_layer
            lvl_min, lvl_max = np.min(lvl), np.max(lvl)
            if lvl_max > lvl_min:
                lvl_norm = (lvl - lvl_min) / (lvl_max - lvl_min)
            else:
                lvl_norm = np.zeros_like(lvl)
            skio.imsave(f'output/{file_base}_g{i}.jpg', sk.img_as_ubyte(lvl_norm))
    
    return gaussian_stack

def laplacian_stack(image, n=5, file_base=None):
    gaussian_stk = gaussian_stack(image, n=n, file_base=file_base)
    laplacian_stk = []
    for i in range(n - 1):
        laplacian_layer = gaussian_stk[i] - gaussian_stk[i + 1]
        laplacian_stk.append(laplacian_layer)
        if file_base is not None:
            lvl = laplacian_layer
            lvl_min, lvl_max = np.min(lvl), np.max(lvl)
            if lvl_max > lvl_min:
                lvl_norm = (lvl - lvl_min) / (lvl_max - lvl_min)
            else:
                lvl_norm = np.zeros_like(lvl)
            skio.imsave(f'output/{file_base}_l{i}.jpg', sk.img_as_ubyte(lvl_norm))
    # residual (lowest frequency)
    residual = gaussian_stk[-1]
    laplacian_stk.append(residual)
    if file_base is not None:
        res_min, res_max = np.min(residual), np.max(residual)
        if res_max > res_min:
            res_norm = (residual - res_min) / (res_max - res_min)
        else:
            res_norm = np.zeros_like(residual)
        skio.imsave(f'output/{file_base}_l{n-1}.jpg', sk.img_as_ubyte(res_norm))
    return laplacian_stk

def collapse_laplacian(laplacian_stk):
    collapsed = laplacian_stk[0].copy()
    for i in range(1, len(laplacian_stk)):
        collapsed += laplacian_stk[i]
    return collapsed

def make_vertical_mask(h, w):
    mask = np.zeros((h, w, 3), dtype=np.float32)
    mask[:, :w//2, :] = 1.0
    return mask

def blend_images(img1, img2, mask, n=5):
    lap1 = laplacian_stack(img1, n, file_base='apple_orange_1')
    lap2 = laplacian_stack(img2, n, file_base='apple_orange_2')

    gmask = gaussian_stack(mask, n, file_base='gmask_3')

    blended_stack = []
    for i in range(n):
        blended = gmask[i] * lap1[i] + (1 - gmask[i]) * lap2[i]
        skio.imsave(f'output/apple_orange_blended_{i}.jpg', sk.img_as_ubyte(blended))
        blended_stack.append(blended)

    blended_img = collapse_laplacian(blended_stack)
    return np.clip(blended_img, 0, 1)

# Oraple

img1 = sk.img_as_float(skio.imread("image/apple.jpeg"))
img2 = sk.img_as_float(skio.imread("image/orange.jpeg"))

h, w, _ = img1.shape

mask = make_vertical_mask(h, w)

blended = blend_images(img1, img2, mask, n=5)

skio.imsave('output/oraple.jpg', sk.img_as_ubyte(blended))

# 2.4

# def make_triangle_mask(h, w):
#     mask = np.zeros((h, w), dtype=np.float32)
#     pts = np.array([[(w//2, 0), (0, h), (w, h)]], dtype=np.int32)
#     cv2.fillPoly(mask, pts, 1.0)
#     mask = np.repeat(mask[:, :, np.newaxis], 3, axis=2)
#     return mask

# # My own images

# img1 = sk.img_as_float(skio.imread("image/venice.jpg"))
# img2 = sk.img_as_float(skio.imread("image/neo_venezia.jpg"))

# h, w, _ = img1.shape

# mask = make_vertical_mask(h, w)

# blended = blend_images(img1, img2, mask, n=5)

# skio.imsave('output/blend_venice_neo_venezia.jpg', sk.img_as_ubyte(blended))

# # First blend

# # This one has an irregular mask

# img1 = sk.img_as_float(skio.imread("image/new_york.jpg"))
# img2 = sk.img_as_float(skio.imread("image/shanghai.jpg"))

# h, w, _ = img1.shape

# mask = make_triangle_mask(h, w)

# blended = blend_images(img1, img2, mask, n=5)

# skio.imsave('output/blend_triangle.jpg', sk.img_as_ubyte(blended))