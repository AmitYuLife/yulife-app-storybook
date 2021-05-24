import React, { useEffect, useRef } from "react";
import { StyleSheet, View, ViewStyle, Animated, Platform, Easing } from "react-native";
import { Style } from "@styles";
import { Button, LinkButton } from "@atoms";

interface FooterButton {
  action: () => void;
  label: string;
  disabled?: boolean;
}

interface IFooterProps {
  firstButton: FooterButton;
  secondButton?: FooterButton;
  linkButton?: FooterButton;
  isInList?: boolean;
  id?: string;
}

const INVISIBLE_OPACITY = 0;
const VISIBLE_OPACITY = 1;
const INVISIBLE_TRANSLATE_Y = Style.DEVICE_HEIGHT;
const VISIBLE_TRANSLATE_Y = 0;

function Footer(props: IFooterProps) {
  const { firstButton, secondButton, linkButton, isInList, id } = props;
  const { current: opacity } = useRef(new Animated.Value(VISIBLE_OPACITY));
  const { current: translateY } = useRef(new Animated.Value(VISIBLE_TRANSLATE_Y));

  useEffect(() => {
    const opacity1 = Animated.timing(opacity, {
      toValue: INVISIBLE_OPACITY,
      duration: 0,
      useNativeDriver: true,
    });
    const opacity2 = Animated.timing(opacity, {
      toValue: VISIBLE_OPACITY,
      duration: Platform.select({ ios: 1000, android: 100 }),
      easing: Easing.elastic(0.1),
      useNativeDriver: true,
    });
    const translateY1 = Animated.timing(translateY, {
      toValue: INVISIBLE_TRANSLATE_Y,
      duration: 0,
      useNativeDriver: true,
    });
    const translateY2 = Animated.timing(translateY, {
      toValue: VISIBLE_TRANSLATE_Y,
      duration: 1000,
      easing: Easing.elastic(0.1),
      useNativeDriver: true,
    });

    const step1 = Animated.parallel([opacity1, translateY1]);
    const step2 = Animated.parallel([opacity2, translateY2]);
    Animated.sequence([step1, step2]).start();

    return () => {
      opacity.stopAnimation();
      translateY.stopAnimation();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        isInList ? styles.inListWrapper : styles.absoluteWrapper,
        { opacity },
        {
          transform: [
            {
              translateY: Platform.select({
                ios: new Animated.Value(0),
                android: translateY,
              }),
            },
          ],
        },
      ]}
    >
      <View style={styles.buttonsWrapper}>
        <View style={linkButton ? styles.innerButtonsColumn : styles.innerButtonsRow}>
          <Button
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
              onPress={secondButton.action}
              label={secondButton.label}
              delay={300}
              disableAnimation={true}
              disabled={secondButton.disabled}
            />
          )}
          {!linkButton ? null : (
            <LinkButton
              onPress={linkButton.action}
              label={linkButton.label}
              delay={300}
              disabled={linkButton.disabled}
            />
          )}
        </View>
      </View>
    </Animated.View>
  );
}

const HEIGHT = 180;

export default Object.assign(Footer, {
  HEIGHT,
});

const styles = StyleSheet.create({
  absoluteWrapper: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    paddingBottom: 0,
    height: HEIGHT,
  } as ViewStyle,
  inListWrapper: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    minHeight: HEIGHT - 80,
    maxHeight: HEIGHT,
  } as ViewStyle,
  buttonsWrapper: {
    width: Style.DEVICE_WIDTH,
    paddingHorizontal: Style.adjust(16),
    marginTop: 10,
    paddingBottom: 32,
  } as ViewStyle,
  innerButtonsRow: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  } as ViewStyle,
  innerButtonsColumn: {
    width: "100%",
    justifyContent: "space-around",
  } as ViewStyle,
  gradient: {
    height: "100%",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});
