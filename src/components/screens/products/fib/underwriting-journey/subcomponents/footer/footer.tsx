import React, { useEffect, useState, useRef } from "react";

import { StyleSheet, View, ViewStyle, Text, TextStyle, Keyboard, Animated, Platform } from "react-native";
import { Style } from "@styles";
import { Button } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";

interface IFooterProps {
  hideOnKeyboardOpen?: boolean;
  firstButton: {
    action: () => void;
    label: string;
    disabled?: boolean;
  };
  secondButton?: {
    action: () => void;
    label: string;
  };
  onPreviousButtonPressed?: () => void;
}

export default function Footer(props: IFooterProps) {
  const { firstButton, secondButton, onPreviousButtonPressed, hideOnKeyboardOpen } = props;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [isKeyboardVisible, setKeyboardVisibilityState] = useState(false);

  useEffect(() => {
    const animation = Animated.timing(fadeAnim, {
      toValue: isKeyboardVisible ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    });

    animation.start();

    return animation.stop;
  }, [isKeyboardVisible, fadeAnim]);

  useEffect(() => {
    const onKeyBoardDidShow = () => setKeyboardVisibilityState(true);
    const onKeyBoardDidHide = () => setKeyboardVisibilityState(false);

    Keyboard.addListener("keyboardDidShow", onKeyBoardDidShow);
    Keyboard.addListener("keyboardDidHide", onKeyBoardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", onKeyBoardDidShow);
      Keyboard.removeListener("keyboardDidHide", onKeyBoardDidHide);
    };
  }, []);

  const stylesTwo = {
    display: "none",
    opacity: fadeAnim,
    height: Platform.select({ ios: 0 }),
    position: Platform.select({ ios: "relative", android: "absolute" }),
  };

  const shouldHide = isKeyboardVisible && hideOnKeyboardOpen;
  const hiddenStyles = shouldHide ? stylesTwo : {};

  let paddingBottomWrapper = 68 + (Style.hasNotch ? 16 : 0);

  if (!onPreviousButtonPressed && isKeyboardVisible) {
    paddingBottomWrapper = 22;
  }

  if (onPreviousButtonPressed) {
    paddingBottomWrapper = Platform.select({ ios: isKeyboardVisible ? 0 : Style.hasNotch ? 16 : 0, android: 0 });
  }

  return (
    <Animated.View
      pointerEvents={shouldHide ? "none" : "auto"}
      style={StyleSheet.flatten([styles.wrapper, hiddenStyles, { paddingBottom: paddingBottomWrapper }])}
    >
      <View style={styles.buttonsWrapper}>
        <View style={styles.innerButtonsWrapper}>
          <Button
            type="Primary"
            size={secondButton ? "Small" : "Large"}
            onPress={firstButton.action}
            label={firstButton.label}
            disabled={firstButton.disabled}
            delay={300}
            disableAnimation={true}
          />
          {!secondButton ? null : (
            <Button
              size="Small"
              type="Primary"
              onPress={secondButton.action}
              label={secondButton.label}
              delay={300}
              disableAnimation={true}
            />
          )}
        </View>
      </View>
      {!onPreviousButtonPressed ? null : (
        <TouchableOpacityWithDelay style={styles.previousQuestionWrapper} onPress={onPreviousButtonPressed} delay={300}>
          <Text style={styles.previousQuestion}>Previous Question</Text>
        </TouchableOpacityWithDelay>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  } as ViewStyle,
  buttonsWrapper: {
    width: Style.DEVICE_WIDTH,
    paddingHorizontal: Style.adjust(16),
    marginTop: 10,
  } as ViewStyle,
  innerButtonsWrapper: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  } as ViewStyle,
  previousQuestionWrapper: {
    marginBottom: 20,
    marginTop: 8,
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  } as ViewStyle,
  previousQuestion: {
    color: "#E30D76",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "underline",
    alignSelf: "center",
  } as TextStyle,
});
