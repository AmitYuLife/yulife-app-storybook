import { BlurViewProps } from "@danielsaraldi/react-native-blur-view";
import { memo, ReactElement, useMemo } from "react";

import { StyleSheet } from "@styles";
import { useNavigation } from "@navigation/navigation.context";
import { View, ViewStyle } from "react-native";
import Blur, { IBlurProps } from "../blur/blur";
import Animated, { FadeIn, FadeInDown, FadeOut, FadeOutDown } from "react-native-reanimated";

interface IProps extends Pick<BlurViewProps, "type"> {
  children: ReactElement;
  backgroundColor?: string;
  tint?: "light" | "dark";
  testID?: string;
  isVisible?: boolean;
  isBlurred?: boolean;
  contentStyle?: ViewStyle;
}

const BlurredWrapper = ({
  children,
  tint = "light",
  backgroundColor = "rgba(0,0,0,.5)",
  testID,
  isVisible = true,
  contentStyle,
  isBlurred = true,
}: IProps) => {
  const { componentId } = useNavigation();

  const wrapperStyle = useMemo(
    () => ({
      backgroundColor,
      ...StyleSheet.absoluteFillObject,
    }),
    [backgroundColor]
  );

  const containerStyle = useMemo((): ViewStyle => {
    return {
      height: "100%",
      width: "100%",
      position: "static",
      ...contentStyle,
    };
  }, [contentStyle]);

  if (!isVisible) {
    return null;
  }

  return (
    <Animated.View
      style={wrapperStyle}
      pointerEvents={isVisible ? undefined : "none"}
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(200)}
    >
      <BlurContainer style={wrapperStyle} isBlurred={isBlurred} targetId={componentId} type={tint}>
        <View style={containerStyle} testID={testID}>
          <Animated.View
            style={styles.container}
            entering={FadeInDown.duration(300)}
            exiting={FadeOutDown.duration(300)}
          >
            {children}
          </Animated.View>
        </View>
      </BlurContainer>
    </Animated.View>
  );
};

interface IBlurContainerProps extends IBlurProps {
  isBlurred: boolean;
}

const BlurContainer = ({ children, style, isBlurred, ...blurProps }: IBlurContainerProps) => {
  if (isBlurred) {
    return (
      <Blur style={style} {...blurProps}>
        {children}
      </Blur>
    );
  }

  return <View style={style}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default memo(BlurredWrapper);
