import * as React from "react";
import { useState, useCallback } from "react";
import { Animated, View, Platform, ViewStyle } from "react-native";
import styles from "./blur-provider.styles";

import BlurredWrapper from "../blurred-wrapper/blurred-wrapper";
type BackgroundColours = "default" | "dark";

export interface IToggleBlur {
  hideOverlay: () => void;
  showOverlay: () => void;
  toggleOverlay: () => void;
}

interface IProps {
  renderOverlay: (prop: IToggleBlur) => React.ReactNode;
  render: (prop: IToggleBlur) => React.ReactNode;
  backgroundColor?: BackgroundColours;
  style?: ViewStyle;
}

// TODO: Purge this there's no need for it, use BlurredWrapper and useModal
function BlurProvider({ render, renderOverlay, backgroundColor: propsBackgroundColor = "default", style }: IProps) {
  const [isVisible, setVisibilityState] = useState(false);

  const [animatedWrapperOpacity] = useState(new Animated.Value(0));
  const [animatedWrapperPosition] = useState(new Animated.Value(-1000));

  const animate = useCallback(
    (shouldDisplay: boolean) => {
      const animateOpacity = Animated.timing(animatedWrapperOpacity, {
        duration: 300,
        toValue: shouldDisplay ? 1 : 0,
        useNativeDriver: true,
      });

      const animatePosition = Animated.timing(animatedWrapperPosition, {
        duration: 0,
        toValue: shouldDisplay ? 0 : -1000,
        useNativeDriver: true,
      });

      if (shouldDisplay) {
        return Animated.sequence([animatePosition, animateOpacity]).start();
      }

      return Animated.sequence([animateOpacity, animatePosition]).start();
    },
    [animatedWrapperOpacity, animatedWrapperPosition]
  );

  const showOverlay = useCallback(() => {
    setVisibilityState(true);
    animate(true);
  }, [animate]);

  const hideOverlay = useCallback(() => {
    setVisibilityState(false);
    animate(false);
  }, [animate]);

  const toggleOverlay = useCallback(() => {
    const newState = !isVisible;

    setVisibilityState(newState);
    animate(newState);
  }, [isVisible, animate]);

  const renderProps = {
    hideOverlay,
    showOverlay,
    toggleOverlay,
  };

  const backgroundColor =
    propsBackgroundColor === "dark"
      ? Platform.select({ ios: "rgba(0,0,0,0.5)", android: "rgba(0,0,0,0.3)" })
      : "transparent";

  return (
    <View style={[styles.wrapper, style]}>
      <View style={styles.flex}>{render(renderProps)}</View>
      <BlurredWrapper
        tint="light"
        isVisible={isVisible}
        backgroundColor={backgroundColor}
        testID="blur-provider.overlay-container"
      >
        <>{!isVisible ? null : renderOverlay(renderProps)}</>
      </BlurredWrapper>
    </View>
  );
}

export default BlurProvider;
