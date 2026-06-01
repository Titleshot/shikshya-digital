import Image, { type ImageProps } from "next/image";

/** Pre-compressed WebP in /public — avoid double lossy encode from Next optimizer */
type SharpImageProps = Omit<ImageProps, "quality"> & {
  quality?: number;
};

export function SharpImage({
  quality = 92,
  unoptimized = true,
  ...props
}: SharpImageProps) {
  return <Image quality={quality} unoptimized={unoptimized} {...props} />;
}
