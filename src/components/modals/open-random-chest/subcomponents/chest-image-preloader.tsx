import { useImagePreload } from "@hooks";
import { memo, ReactNode } from "react";

interface IChestImagePreloaderProps {
  images?: string[];
  children: ReactNode;
}

const ChestImagePreloader = ({ images, children }: IChestImagePreloaderProps) => {
  const { hasLoaded } = useImagePreload({ images });

  if (!hasLoaded) {
    return null;
  }

  return children;
};

export default memo(ChestImagePreloader);
