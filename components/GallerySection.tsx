import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export function GallerySection() {
  const images = restaurant.gallery;
  if (!images.length) return null;

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-3 text-center">
        Gallery
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-center mb-12">
        A Look Inside
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`relative overflow-hidden group ${
              img.size === "large"
                ? "col-span-2 row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
