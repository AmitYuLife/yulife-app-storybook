import React from "react";
import { StyleSheet, TextStyle, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { Style } from "@styles";
import { getFitKitNotAuthorizedCopy } from "./copy";

interface Props {
  onPress: () => void;
  hasRequestedPermission: boolean;
  isIosMotionAuthorised: boolean;
}

export const FitkitUnauthorised = ({ onPress, isIosMotionAuthorised, hasRequestedPermission }: Props) => {
  const { buttonLabel, message } = getFitKitNotAuthorizedCopy({ hasRequestedPermission, isIosMotionAuthorised });

  const handlePress = () => {
    return onPress();
  };

  return (
    <>
      <View style={styles.wrapper}>
        <TextTemplate textAlign="center" type="b2">
          {message}
        </TextTemplate>
      </View>
      <Button label={buttonLabel} onPress={handlePress} size="Medium" />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.SCALE_UP_AND_DOWN(20),
    width: Style.SCALE_UP_AND_DOWN(300),
  } as TextStyle,
});
