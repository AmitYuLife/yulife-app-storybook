import { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

interface IUseMeasureResult {
  onLayout: (event: LayoutChangeEvent) => void;
  width: number;
  height: number;
}

interface IUseMeasureArgs {
  initialWidth?: number;
  initialHeight?: number;
}

export const useMeasure = ({ initialWidth = 0, initialHeight = 0 }: IUseMeasureArgs): IUseMeasureResult => {
  const [measurements, setMeasurements] = useState<Omit<IUseMeasureResult, "onLayout">>({
    width: initialWidth,
    height: initialHeight,
  });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setMeasurements({ width, height });
  }, []);

  return {
    ...measurements,
    onLayout,
  };
};
