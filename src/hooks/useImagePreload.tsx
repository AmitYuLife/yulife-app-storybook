import { prefetchImages } from "@atoms";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";

interface IImagePreloadArgs {
  images: string[] | undefined;
}

export const useImagePreload = ({ images }: IImagePreloadArgs) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!images) {
      return;
    }

    if (isEmpty(images)) {
      setHasLoaded(true);
      return;
    }

    (async () => {
      try {
        await prefetchImages(images, "memory-disk");
      } finally {
        // If an image fails to load we can continue
        setHasLoaded(true);
      }
    })();
  }, [images]);

  return { hasLoaded };
};
