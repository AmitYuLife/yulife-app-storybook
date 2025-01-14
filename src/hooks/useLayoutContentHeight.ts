import { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

type UseLayoutContentHeightHook = (
  initialValue?: number,
  valueMapper?: (height: number, oldHeight: number) => number
) => [number, (event: LayoutChangeEvent) => void];

export const useLayoutContentHeight: UseLayoutContentHeightHook = (initialValue = 0, valueMapper) => {
  const [contentHeight, setContentHeight] = useState(initialValue);
  const handleContentLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { height } = event?.nativeEvent?.layout || {};
      setContentHeight(valueMapper ? (prevHeight) => valueMapper(height, prevHeight) : height);
    },
    [valueMapper]
  );

  return [contentHeight, handleContentLayout];
};
