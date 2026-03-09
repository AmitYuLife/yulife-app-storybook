import { memo, ReactNode, useEffect, useState } from "react";

interface IDeferredRenderProps {
  children: ReactNode;
}

/**
 * Workaround for text cut off on Android.
 * Defers rendering children until after the first mount.
 * Possibly related to https://github.com/facebook/react-native/issues/53286
 * Can probably removed after upgrading to Expo 55
 */
const DeferredRender = ({ children }: IDeferredRenderProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return null;
  }

  return <>{children}</>;
};

export default memo(DeferredRender);
