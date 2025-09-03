import { cn } from "~/lib/utils";
import Image, { type StaticImageData } from "next/image";
import { FaLinkedin } from "react-icons/fa";

interface LinkedInPostProps {
  url: string;
  name: string;
  headline?: string;
  profilePicture: StaticImageData;
  datePublished: string;
  children: React.ReactNode;
  photo?: StaticImageData;
  className?: string;
}

export function LinkedInPost({
  url,
  name,
  headline,
  profilePicture,
  datePublished,
  children,
  photo,
  className,
}: LinkedInPostProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white shadow-sm",
        className,
      )}
    >
      <div className="p-4 pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <figure className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
              <Image
                src={profilePicture}
                alt={`${name}'s profile`}
                layout="fill"
                className="object-cover"
              />
            </figure>

            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-1">
                <h3 className="leading-tight font-semibold text-gray-900">
                  {name}
                </h3>
              </div>
              {headline && (
                <p className="mt-0.5 text-xs text-gray-600">{headline}</p>
              )}
              <p className="mt-0.5 text-xs text-gray-500">{datePublished}</p>
            </div>
          </div>

          <a href={url} target="_blank" className="flex-shrink-0">
            <FaLinkedin className="h-5 w-5 text-blue-600" />
          </a>
        </div>
      </div>

      <div className="px-4 pb-3">
        <div className="text-sm leading-relaxed text-gray-900">{children}</div>
      </div>

      {photo && (
        <figure className="relative h-full w-full overflow-hidden rounded-lg">
          <Image src={photo} alt="Post content" />
        </figure>
      )}
    </div>
  );
}
