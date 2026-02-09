import { memo } from "react";
import { View, ViewProps } from "react-native";
import Animated from "react-native-reanimated";
import { IBoxProps } from "./box.types";
import { useBoxProps } from "@hooks";

const Box = ({ forceAnimated, entering, exiting, children, viewRef, testID, ...props }: IBoxProps & ViewProps) => {
  const isAnimated = !!entering || !!exiting || forceAnimated;
  const ViewComponent = isAnimated ? Animated.View : View;
  const boxProps = useBoxProps(props);

  return (
    <ViewComponent
      collapsable={testID ? false : undefined}
      {...boxProps}
      testID={testID}
      entering={entering}
      exiting={exiting}
      ref={viewRef}
    >
      {children}
    </ViewComponent>
  );
};

export default memo(Box);
