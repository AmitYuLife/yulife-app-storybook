import React from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import { Button, Image } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Style } from "@styles";
import media from "@styles/media";
import { BUTTON_CLOSE } from "@ids";

interface Props {
  button: {
    label: string;
    onPress: () => void;
  };
  close: {
    onPress: (currentIndex: number) => void;
    icon: {
      uri: string;
    };
  };
  currentIndex: number;
}

export const Dismiss = ({ button, close, currentIndex }: Props) => {
  return (
    <>
      {!button ? null : (
        <View style={styles.button} testID={BUTTON_CLOSE}>
          <Button label={button.label} onPress={button.onPress} />
        </View>
      )}
      {!close ? null : (
        <TouchableOpacityWithDelay style={styles.closeIconWrapper} onPress={() => close.onPress(currentIndex)}>
          <Image
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
};

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
