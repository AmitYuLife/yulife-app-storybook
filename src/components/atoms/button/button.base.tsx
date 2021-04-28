import React, { ComponentProps, memo, useEffect, useState } from "react";
import { Animated, StyleSheet, ActivityIndicator, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { Style } from "@styles";
import { getOptionallyDisabledColor } from "@styles/getOptionallyDisabledColor";
import { TextTemplate } from "@atoms/text/text-template";

interface IProps {
  disabled?: boolean;
  testID?: string;
  onPress: () => void;
  isLoading?: boolean;
  title?: string;
  borderColor?: string;
  color?: string;
  backgroundColor?: string;
  backgroundGradient?: string[];
  shadowColor?: string;
  borderRadius?: number;
  height: number;
  delay?: number;
  disableAnimation?: boolean;
  children?: React.ReactElement;
  hideShadow?: boolean;
}

interface IState {
  isPressedIn: boolean;
  translateYAnimation: Animated.Value;
}

const SHADOW_DIFF = 8;
const SHADOW_TRIM = 2;

export function ButtonBase(props: IProps) {
  const {
    children = null,
    onPress,
    height = Style.adjust(50),
    borderRadius = props.height / 2,
    delay,
    disableAnimation,
    hideShadow,
  } = props;
  const [translateYAnimation] = useState(new Animated.Value(0));
  const { isPressedIn, handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress, delay });

  useEffect(() => {
    if (disableAnimation) {
      return;
    }

    Animated.timing(translateYAnimation, {
      toValue: isPressedIn ? 2 : 0,
      duration: 60,
      useNativeDriver: true,
    }).start();
  }, [isPressedIn, translateYAnimation, disableAnimation]);

  return (
    <View style={[styles.flex, { height }]}>
      {hideShadow ? null : (
        <Shadow
          shadowColor={props.shadowColor}
          testID={props.testID}
          height={height - SHADOW_DIFF - SHADOW_TRIM}
          borderRadius={borderRadius}
          disabled={props.disabled}
        />
      )}
      <Main
        backgroundColor={props.backgroundColor}
        backgroundGradient={props.backgroundGradient}
        borderColor={props.borderColor}
        color={props.color}
        isLoading={props.isLoading}
        testID={props.testID}
        disabled={props.disabled}
        title={props.title}
        height={height - (hideShadow ? 0 : SHADOW_DIFF)}
        borderRadius={borderRadius}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        isPressedIn={isPressedIn}
        translateYAnimation={translateYAnimation}
      >
        <View>{children}</View>
      </Main>
    </View>
  );
}

type ShadowProps = "height" | "borderRadius" | "shadowColor" | "testID" | "disabled";

function Shadow({ height, borderRadius, shadowColor, testID, disabled }: Pick<IProps, ShadowProps>) {
  const backgroundColor = getOptionallyDisabledColor({ color: shadowColor, disabled });

  return (
    <View style={[styles.shadow, { height, borderRadius, backgroundColor }]}>
      <View testID={`${testID}-disabled-overlay`} />
    </View>
  );
}

function Main({
  translateYAnimation,
  borderRadius = 50,
  height,
  backgroundColor,
  backgroundGradient,
  borderColor,
  color,
  isLoading,
  testID,
  disabled,
  onPressIn,
  onPressOut,
  onPress,
  title,
  children,
}: IProps & IState & ComponentProps<typeof TouchableWithoutFeedback>) {
  const adjustedColor = getOptionallyDisabledColor({ color, disabled });
  const adjustedBorderColor = getOptionallyDisabledColor({ color: borderColor, disabled });
  const border = borderColor ? { borderColor: adjustedBorderColor, borderWidth: 1 } : {};

  return (
    <TouchableWithoutFeedback
      testID={testID}
      accessibilityLabel={disabled ? "disabled" : "enabled"}
      disabled={disabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    >
      <View style={styles.mainWrapper}>
        <Animated.View
          style={[styles.main, backgroundStyles.wrapper, { height, transform: [{ translateY: translateYAnimation }] }]}
        >
          <Background disabled={disabled} backgroundColor={backgroundColor} backgroundGradient={backgroundGradient} />
        </Animated.View>
        <Animated.View
          style={[styles.main, { height, borderRadius, transform: [{ translateY: translateYAnimation }], ...border }]}
        >
          <Content testID={`${testID}-text-view`} title={title} isLoading={isLoading} color={adjustedColor}>
            {children}
          </Content>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

interface ContentProps {
  title: string;
  isLoading: boolean;
  color: string;
  children: React.ReactElement;
  testID: string;
}
function Content({ title, isLoading, color, children, testID }: ContentProps) {
  if (isLoading) {
    return <ActivityIndicator color={color} />;
  }

  if (title) {
    return (
      <TextTemplate type="b2b" testID={testID} color={color}>
        {title}
      </TextTemplate>
    );
  }

  return children;
}

export default ButtonBase;

const Background = memo(
  ({
    backgroundGradient,
    backgroundColor = "transparent",
    disabled,
  }: {
    backgroundGradient: string[];
    backgroundColor: string;
    disabled: boolean;
  }) => {
    if (backgroundGradient?.length) {
      return <LinearGradient style={backgroundStyles.wrapper} colors={backgroundGradient} />;
    }

    const adjustedBackgroundColor = getOptionallyDisabledColor({ color: backgroundColor, disabled });

    return (
      <View style={StyleSheet.flatten([backgroundStyles.wrapper, { backgroundColor: adjustedBackgroundColor }])} />
    );
  }
);

const backgroundStyles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 999,
  } as ViewStyle,
});

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    width: "100%",
  } as ViewStyle,
  main: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  shadow: {
    width: "100%",
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
  } as ViewStyle,
  flex: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  } as ViewStyle,
  disableOverlay: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
  } as ViewStyle,
});
