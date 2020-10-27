import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Button } from "@atoms";
import { Style } from "@styles";
import LinearGradient from "react-native-linear-gradient";

interface Props {
  hideFirstButton: boolean;
  secondButtonLabel: string;
  buttonTitle: string;
  isButtonDisabled: boolean;
  isButtonLoading: boolean;
  buttonAction: () => void;
  secondButtonAction: () => void;
  isInlineCTA?: boolean;
}

const CTA_HEIGHT = 180;

const _CTA = ({
  hideFirstButton,
  secondButtonAction,
  secondButtonLabel,
  isButtonDisabled,
  buttonTitle,
  buttonAction,
  isButtonLoading,
  isInlineCTA = false,
}: Props) => {
  const hasSecondButton = !!(secondButtonLabel && secondButtonAction);

  if (hideFirstButton && !hasSecondButton) {
    return null;
  }

  const secondButtonExtraStyle = { height: Style.hasNotch ? 144 : 128, paddingTop: Style.hasNotch ? 40 : 80 };
  const absolutelyPositionedStyles = !isInlineCTA ? styles.absolute : {};

  return (
    <View
      pointerEvents="box-none"
      style={[
        styles.button,
        absolutelyPositionedStyles,
        hasSecondButton && !hideFirstButton ? secondButtonExtraStyle : {},
      ]}
    >
      <LinearGradient
        pointerEvents="none"
        colors={["rgba(255,255,255,1)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
        style={styles.gradient}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
      />
      <Button
        show={!hideFirstButton}
        disabled={isButtonDisabled}
        label={buttonTitle}
        onPress={buttonAction}
        type="Primary"
        isLoading={isButtonLoading}
      />
      <Button
        show={hasSecondButton}
        type="Link"
        label={secondButtonLabel}
        onPress={secondButtonAction}
        wrapperStyle={styles.secondButton}
      />
    </View>
  );
};

export const CTA = Object.assign(_CTA, { height: CTA_HEIGHT });

const styles = {
  button: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
    height: CTA_HEIGHT,
  } as ViewStyle,
  secondButton: {
    marginTop: 8,
  } as ViewStyle,
  absolute: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 40,
    paddingTop: 80,
  } as ViewStyle,
  gradient: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
};
