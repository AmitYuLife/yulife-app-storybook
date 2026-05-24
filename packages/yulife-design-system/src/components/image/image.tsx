import { CSSProperties, ImgHTMLAttributes, forwardRef, memo, useMemo } from "react";

export interface IImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "style"> {
  source?: { uri: string } | string;
  resizeMode?: "cover" | "contain" | "fill" | "none";
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  style?: CSSProperties;
}

const Image = forwardRef<HTMLImageElement, IImageProps>(
  ({ source, resizeMode = "cover", width, height, borderRadius, style: propStyle, alt = "", ...props }, ref) => {
    const src = typeof source === "string" ? source : source?.uri;

    const style = useMemo((): CSSProperties => {
      const base: CSSProperties = {
        objectFit: resizeMode === "fill" ? "fill" : resizeMode === "none" ? "none" : resizeMode,
      };
      if (width != null) {
        base.width = typeof width === "number" ? `${width}px` : width;
      }

      if (height != null) {
        base.height = typeof height === "number" ? `${height}px` : height;
      }

      if (borderRadius != null) {
        base.borderRadius = `${borderRadius}px`;
      }

      return { ...base, ...propStyle };
    }, [resizeMode, width, height, borderRadius, propStyle]);

    return <img ref={ref} src={src} alt={alt} style={style} {...props} />;
  }
);

Image.displayName = "Image";

export default memo(Image);
