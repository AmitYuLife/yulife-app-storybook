import { memo } from "react";
import { View, ViewProps } from "react-native";
import Animated from "react-native-reanimated";
import { IBoxProps } from "./box.types";
import { useBoxProps } from "@app/hooks/useBoxProps";

const Box = ({
  forceAnimated,
  entering,
  exiting,
  children,

  ...props
}: IBoxProps & ViewProps) => {
  const ViewComponent = !!entering || !!exiting || forceAnimated ? Animated.View : View;
  const boxProps = useBoxProps(props);

  return (
    <ViewComponent {...boxProps} entering={entering} exiting={exiting}>
      {children}
    </ViewComponent>
  );
};

export default memo(Box);
