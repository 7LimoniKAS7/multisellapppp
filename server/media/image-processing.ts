import sharp from "sharp";

export async function prepareMarketplaceImage(input: Buffer) {
  const base = sharp(input).rotate();
  const metadata = await base.metadata();

  const resized = await base
    .resize({
      width: 1800,
      height: 1800,
      fit: "inside",
      withoutEnlargement: true
    })
    .jpeg({
      quality: 88,
      mozjpeg: true
    })
    .toBuffer();

  const squarePreview = await sharp(input)
    .rotate()
    .resize(800, 800, {
      fit: "cover"
    })
    .webp({
      quality: 86
    })
    .toBuffer();

  return {
    original: metadata,
    resized,
    squarePreview
  };
}
