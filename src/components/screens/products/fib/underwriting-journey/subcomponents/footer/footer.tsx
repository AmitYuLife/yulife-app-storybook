import React from "react";
import { StyleSheet, View, ViewStyle, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
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
}

function Footer(props: IFooterProps) {
  const { firstButton, secondButton, linkButton } = props;

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
