import Image from "next/image";
import type { ProductImage } from "@/types/product";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const cover = images.find((image) => image.isCover) ?? images[0];
  const rest = images.filter((image) => image.id !== cover?.id);

  return (
    <div className="grid gap-3">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border bg-muted shadow-sm">
        <Image
          src={cover.url}
          alt={cover.alt}
          fill
          priority
          quality={90}
          sizes="(min-width: 1280px) 420px, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {rest.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg border bg-muted"
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              quality={85}
              sizes="(min-width: 1280px) 96px, 25vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
