import { memo, ReactNode, useCallback, useContext, useRef } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { RaysSpotlightContext } from "./rays-spotlight-layout";
import { IBoxProps } from "@atoms/box/box.types";
import { useBoxProps } from "@hooks";

interface IRaysSpotlightFocalProps extends IBoxProps {
  children: ReactNode;
  style?: ViewStyle;
}

const RaysSpotlightFocal = ({ children, ...props }: IRaysSpotlightFocalProps) => {
  const { style: boxStyle } = useBoxProps(props);
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
    <View ref={ref} style={boxStyle} onLayout={handleLayout} collapsable={false}>
      {children}
    </View>
  );
};

export default memo(RaysSpotlightFocal);
