import { ReactNode, memo, useEffect } from "react";

export const PropUpdateContainer = memo(({ children, onRender }: { children: ReactNode; onRender: () => void }) => {
  useEffect(() => {
    onRender();
  }, [onRender]);

  return <>{children}</>;
});
