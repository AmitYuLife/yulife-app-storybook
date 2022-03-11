import { useEffect, useRef } from "react";

export const useAutoCleanTimeout = () => {
  const timeout = useRef(null as ReturnType<typeof setTimeout>);

  useEffect(() => () => clearTimeout(timeout.current), []);

  return { timeout };
};
