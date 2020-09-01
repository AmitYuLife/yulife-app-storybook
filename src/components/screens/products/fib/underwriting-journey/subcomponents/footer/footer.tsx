import React from "react";

import { StyleSheet, View, ViewStyle, Animated } from "react-native";
import { Style } from "@styles";
import { Button } from "@atoms";

interface IFooterProps {
  firstButton: {
    action: () => void;
    label: string;
    disabled?: boolean;
  };
  secondButton?: {
    action: () => void;
    label: string;
  };
}

export default function Footer(props: IFooterProps) {
  const { firstButton, secondButton } = props;

  return (
    <Animated.View pointerEvents="auto" style={styles.wrapper}>
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
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    paddingBottom: 32,
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
});
