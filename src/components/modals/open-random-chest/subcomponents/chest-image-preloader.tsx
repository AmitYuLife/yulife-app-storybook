import { prefetchImages } from "@atoms";
import { memo, ReactNode, useEffect, useState } from "react";

interface IChestImagePreloaderProps {
  images?: string[];
  children: ReactNode;
}

const ChestImagePreloader = ({ images, children }: IChestImagePreloaderProps) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        await prefetchImages(images, "memory-disk");
      } finally {
        // We still want to continue if an image fails to load
        setHasLoaded(true);
      }
    })();
  }, [images]);

  if (!hasLoaded) {
    return null;
  }

  return children;
};

export default memo(ChestImagePreloader);
