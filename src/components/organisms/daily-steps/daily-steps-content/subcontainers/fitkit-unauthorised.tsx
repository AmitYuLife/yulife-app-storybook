import React from "react";
import { Alert, StyleSheet, TextStyle, Platform, View } from "react-native";
import { Button, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { openGoogleFit } from "@services/app-link";
import { androidAlertCopy, getFitKitNotAuthorizedCopy } from "./copy";

interface Props {
  onPress: () => void;
  hasRequestedPermission: boolean;
}

export const FitkitUnauthorised = ({ onPress, hasRequestedPermission }: Props) => {
  const { buttonLabel, message } = getFitKitNotAuthorizedCopy(hasRequestedPermission);

  const handlePress = () => {
    const { title, message: alertMessage, dismissLabel, downloadLabel, confirmLabel } = androidAlertCopy;
    if (Platform.OS === "android") {
      const buttons = [
        {
          text: dismissLabel,
        },
        {
          text: downloadLabel,
          onPress: openGoogleFit,
        },
        {
          text: confirmLabel,
          onPress: onPress,
        },
      ];
      return Alert.alert(title, alertMessage, buttons, { cancelable: true });
    }

    return onPress();
  };

  return (
    <>
      <View style={styles.wrapper}>
        <TextTemplate textAlign="center" type="b2">
          {message}
        </TextTemplate>
      </View>
      <Button label={buttonLabel} onPress={handlePress} type="Primary" size="Medium" />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.SCALE_UP_AND_DOWN(20),
    width: Style.SCALE_UP_AND_DOWN(300),
  } as TextStyle,
});
