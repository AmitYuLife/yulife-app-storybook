import { useEffect } from "react";

export function useAsyncEffect<T>(effect: () => Promise<void>, dependencies: T[]) {
  useEffect(() => {
    (async () => {
      effect();
    })();
  }, dependencies);
}
