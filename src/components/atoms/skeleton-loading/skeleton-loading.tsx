import React, { FC, memo } from "react";
import Animated from "react-native-reanimated";
import { useLoadingAnimation } from "./useLoadingAnimation";
import { IBoxProps } from "@atoms/box/box.types";
import { useBoxProps } from "@hooks";
import { Colours } from "@styles";

const SkeletonLoading: FC<IBoxProps> = (props) => {
  const loadingAnimation = useLoadingAnimation();
  const boxProps = useBoxProps({ bg: Colours.metallic.m100, br: 8, ...props });

  return <Animated.View {...boxProps} style={[loadingAnimation, boxProps.style]} />;
};

export default memo(SkeletonLoading);
