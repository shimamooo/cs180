"use client";

interface ImageGridProps {
  images: string[];
  columns?: number;
  className?: string;
}

export function ImageGrid({
  images,
  columns = 3,
  className = "",
}: ImageGridProps) {
  const gridCols =
    {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
    }[columns] || "grid-cols-3";

  return (
    <div
      className={`grid ${gridCols} my-8 justify-items-center gap-4 ${className}`}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="h-auto max-w-full rounded-lg object-cover shadow-lg transition-transform hover:scale-105"
        />
      ))}
    </div>
  );
}
