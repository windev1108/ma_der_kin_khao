import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export function FeaturedDish() {
  const dish = restaurant.signatureDish;
  if (!dish) return null;

  return (
    <section className="relative py-0">
      <div className="relative h-[70vh] min-h-[420px] w-full">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-14 text-white max-w-xl">
          <p className="text-xs tracking-[0.2em] uppercase text-white/70 mb-3">
            Signature
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl mb-3">
            {dish.name}
          </h2>
          <p className="text-white/85 mb-4">{dish.description}</p>
          {dish.price && <p className="text-sm tracking-wide">{dish.price}</p>}
        </div>
      </div>
    </section>
  );
}
