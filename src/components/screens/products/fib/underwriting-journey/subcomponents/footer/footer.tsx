import React from "react";
import { StyleSheet, View, ViewStyle, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
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
    disabled?: boolean;
  };
}

function Footer(props: IFooterProps) {
  const { firstButton, secondButton } = props;

  return (
    <Animated.View pointerEvents="auto" style={styles.wrapper}>
      <LinearGradient
        pointerEvents="none"
        colors={["rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
        style={styles.gradient}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
      />
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
              disabled={secondButton.disabled}
            />
          )}
        </View>
      </View>
    </Animated.View>
  );
}

const HEIGHT = 120;

export default Object.assign(Footer, {
  HEIGHT,
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    paddingBottom: 0,
    height: HEIGHT,
  } as ViewStyle,
  buttonsWrapper: {
    width: Style.DEVICE_WIDTH,
    paddingHorizontal: Style.adjust(16),
    marginTop: 10,
    paddingBottom: 32,
  } as ViewStyle,
  innerButtonsWrapper: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  } as ViewStyle,
  gradient: {
    height: "100%",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});
