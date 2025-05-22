import { getRouteState } from "@redux/app/app.selectors";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const useFocusEffect = (
  fn: () => void,
  {
    componentId,
    defer,
  }: {
    componentId: string;
    defer?: boolean;
  }
) => {
  const currentRoute = useSelector(getRouteState);
  const hasInitialied = useRef(false);

  useEffect(() => {
    if (currentRoute === componentId) {
      if (defer && !hasInitialied.current) {
        hasInitialied.current = true;
        return;
      }

      fn();
    }
  }, [currentRoute, componentId, fn, defer]);
};
