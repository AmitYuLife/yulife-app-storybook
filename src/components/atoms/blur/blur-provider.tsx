import * as React from "react";
import { useState, useRef, useCallback } from "react";
import { Animated, View, findNodeHandle, Platform, ViewStyle } from "react-native";
import Blur from "./blur";
import styles from "./blur-provider.styles";

import { StyleSheet } from "@styles";
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

function BlurProvider({ render, renderOverlay, backgroundColor: propsBackgroundColor = "default", style }: IProps) {
  const [isVisible, setVisibilityState] = useState(false);

  const [animatedWrapperOpacity] = useState(new Animated.Value(0));
  const [animatedWrapperPosition] = useState(new Animated.Value(-1000));

  const [viewNodeHandle, setViewNodeHandle] = useState<number | null>(null);
  const viewRef = useRef<View | null>(null);

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

  const updateViewNodeHandle = useCallback(() => {
    const newViewNodeHandler = findNodeHandle(viewRef.current);
    setViewNodeHandle(newViewNodeHandler);
  }, []);

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
      <View ref={viewRef} onLayout={updateViewNodeHandle} style={styles.flex}>
        {render(renderProps)}
      </View>
      {!viewNodeHandle ? null : (
        <Blur
          blurRef={viewNodeHandle}
          wrapperOpacity={animatedWrapperOpacity}
          wrapperPosition={animatedWrapperPosition}
        />
      )}
      <Animated.View
        testID="blur-provider.overlay-container"
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor,
          opacity: animatedWrapperOpacity,
          transform: [
            {
              translateX: animatedWrapperPosition,
            },
          ],
        }}
      >
        {!isVisible ? null : renderOverlay(renderProps)}
      </Animated.View>
    </View>
  );
}

export default BlurProvider;
