import { memo, ReactNode, useCallback, useContext, useRef } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { RaysSpotlightContext } from "./rays-spotlight-layout";

interface IRaysSpotlightFocalProps {
  children: ReactNode;
  style?: ViewStyle;
}

const RaysSpotlightFocal = ({ children, style }: IRaysSpotlightFocalProps) => {
  const onFocalLayout = useContext(RaysSpotlightContext);
  const ref = useRef<View>(null);

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const { height } = e.nativeEvent.layout;
      ref.current?.measureInWindow((_x: number, y: number) => {
        onFocalLayout?.(y, height);
      });
    },
    [onFocalLayout]
  );

  return (
    <View ref={ref} style={style} onLayout={handleLayout}>
      {children}
    </View>
  );
};

export default memo(RaysSpotlightFocal);
