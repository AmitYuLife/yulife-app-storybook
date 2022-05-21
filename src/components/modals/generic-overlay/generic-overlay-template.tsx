import React, { useCallback } from "react";
import GenericOverlay from "./generic-overlay";
import { Navigation } from "react-native-navigation";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Button, SecondaryButton } from "@molecules";
import { Style, Colours } from "@styles";
import { useBackHandler } from "@hooks";

interface IButton {
  label: string;
  onPress: () => void;
}

export interface GenericOverlayTemplateProps {
  onClose: () => void;
  heading?: string;
  buttons?: IButton[];
}

const GenericOverlayTemplate = (props: GenericOverlayTemplateProps) => {
  const { onClose = dismissOverlay, heading = "", buttons = [] } = props;

  const backHandler = useCallback(() => {
    onClose();
    return true;
  }, [onClose]);

  useBackHandler(backHandler);
  return (
    <GenericOverlay onClose={onClose}>
      <View style={styles.wrapper}>
        <View style={styles.headingWrapper}>
          <Text bold={true} style={styles.heading}>
            {heading}
          </Text>
        </View>
        <View style={styles.buttonsWrapper}>
          {buttons.map((button, index) => {
            const ButtonType = getButtonType(index);

            return (
              <View key={index}>
                <ButtonType label={button.label} onPress={button.onPress} />
                <View style={styles.buttonPad} />
              </View>
            );
          })}
        </View>
      </View>
    </GenericOverlay>
  );
};

export default GenericOverlayTemplate;

function dismissOverlay() {
  Navigation.dismissAllModals();
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Style.adjust(24),
    paddingBottom: Style.adjust(80),
  } as ViewStyle,
  buttonsWrapper: {
    marginTop: Style.adjust(32),
  } as ViewStyle,
  buttonPad: {
    height: Style.adjust(8),
  } as ViewStyle,
  headingWrapper: {
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  heading: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    color: Colours.neutral.n800,
    textAlign: "center",
  } as TextStyle,
});

function getButtonType(index: number) {
  switch (index) {
    case 0:
      return Button;
    default:
      return SecondaryButton;
  }
}
