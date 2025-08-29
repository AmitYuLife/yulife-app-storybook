import React from "react";
import { Platform, View, ViewStyle } from "react-native";
import { Image } from "@atoms";
import { Button, TouchableOpacityWithDelay } from "@molecules";
import { Style, StyleSheet } from "@styles";
import media from "@styles/media";
import { BUTTON_CLOSE, DISMISS_BUTTON } from "@ids";

interface Props {
  button: {
    label: string;
    onPress: () => void;
    isLoading: boolean;
    disabled: boolean;
  };
  close: {
    onPress: (currentIndex: number) => void;
    icon: {
      uri?: string;
    };
  };
  currentIndex: number;
}

export const Dismiss = ({ button, close, currentIndex }: Props) =>
  button.disabled ? null : (
    <>
      {!button ? null : (
        <View style={styles.button}>
          <Button
            testID={BUTTON_CLOSE}
            disabled={button.disabled}
            isLoading={button.isLoading}
            translatedLabel={button.label}
            onPress={button.onPress}
          />
        </View>
      )}
      {!close ? null : (
        <TouchableOpacityWithDelay style={styles.closeIconWrapper} onPress={() => close.onPress(currentIndex)}>
          <Image
            testID={DISMISS_BUTTON}
            suppressLoadingUi={true}
            width={Style.adjust(16)}
            height={Style.adjust(16)}
            source={{ uri: close.icon.uri }}
            style={styles.closeIcon}
          />
        </TouchableOpacityWithDelay>
      )}
    </>
  );

const buttonBottom = media.select(
  [
    {
      condition: Platform.OS === "android",
      value: Style.adjust(64),
    },
  ],
  Style.adjust(32)
);

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: Style.adjust(32),
    right: Style.adjust(32),
    bottom: buttonBottom,
  } as ViewStyle,
  closeIconWrapper: {
    position: "absolute",
    top: Style.adjust(40),
    right: 0,
    height: Style.adjust(16),
    width: Style.adjust(16),
    padding: Style.adjust(16),
  } as ViewStyle,
  closeIcon: {
    position: "absolute",
    height: Style.adjust(16),
    width: Style.adjust(16),
  } as ViewStyle,
});
