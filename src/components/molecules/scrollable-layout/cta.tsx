import React from "react";
import { View, ViewStyle } from "react-native";
import { Button, LinkButton } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import { GP_CONTINUE } from "@ids";
import { initialWindowMetrics } from "react-native-safe-area-context";

interface Props {
  hideFirstButton: boolean;
  secondButtonLabel: string;
  buttonTitle: string;
  isButtonDisabled: boolean;
  isButtonLoading: boolean;
  buttonAction: () => void;
  secondButtonAction: () => void;
  isInlineCTA?: boolean;
  removeCtaFade?: boolean;
  testID?: string;
}

const CTA_HEIGHT = 128 + (initialWindowMetrics?.insets?.bottom ?? 0);

const _CTA = ({
  hideFirstButton,
  secondButtonAction,
  secondButtonLabel,
  isButtonDisabled,
  buttonTitle,
  buttonAction,
  isButtonLoading,
  isInlineCTA = false,
  removeCtaFade,
  testID,
}: Props) => {
  const hasSecondButton = !!(secondButtonLabel && secondButtonAction);

  if (hideFirstButton && !hasSecondButton) {
    return null;
  }

  const absolutelyPositionedStyles = !isInlineCTA ? styles.absolute : {};

  return (
    <View pointerEvents="box-none" style={[styles.button, absolutelyPositionedStyles]} testID={testID}>
      {removeCtaFade ? null : (
        <LinearGradient
          pointerEvents="none"
          colors={[Colours.overlay.whiteSolid, Colours.overlay.whiteSolid, Colours.overlay.whiteTransparent]}
          style={styles.gradient}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
        />
      )}
      <Button
        show={!hideFirstButton}
        disabled={isButtonDisabled}
        translatedLabel={buttonTitle}
        onPress={buttonAction}
        isLoading={isButtonLoading}
        testID={GP_CONTINUE}
      />
      <LinkButton
        testID="scrollable-layout-cta-second-button"
        show={hasSecondButton}
        translatedLabel={secondButtonLabel}
        onPress={secondButtonAction}
        wrapperStyle={StyleSheet.flatten([
          styles.secondButton,
          hideFirstButton ? { marginBottom: 0 } : { marginBottom: 40 },
        ])}
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
    marginTop: 4,
  } as ViewStyle,
  absolute: {
    position: "absolute",
    start: 0,
    end: 0,
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
