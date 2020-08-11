import React from "react";
import { StyleSheet, View, ViewStyle, Text, TextStyle } from "react-native";
import { Style } from "../../../../../../../styles";
import { Button } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";

interface IFooterProps {
  firstButton: {
    action: () => void;
    label: string;
  };
  secondButton?: {
    action: () => void;
    label: string;
  };
  onPreviousButtonPressed?: () => void;
}

export default function Footer(props: IFooterProps) {
  const { firstButton, secondButton, onPreviousButtonPressed } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonsWrapper}>
        <Button
          type="Primary"
          size={secondButton ? "Small" : "Large"}
          onPress={firstButton.action}
          label={firstButton.label}
        />
        {!secondButton ? null : (
          <Button size="Small" type="Primary" onPress={secondButton.action} label={secondButton.label} />
        )}
      </View>
      {!onPreviousButtonPressed ? null : (
        <TouchableOpacityWithDelay style={styles.previousQuestionWrapper} onPress={onPreviousButtonPressed}>
          <Text style={styles.previousQuestion}>Previous Question</Text>
        </TouchableOpacityWithDelay>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    height: 120,
    bottom: 0,
    justifyContent: "space-between",
  } as ViewStyle,
  buttonsWrapper: {
    width: Style.DEVICE_WIDTH,
    justifyContent: "space-around",
    flexDirection: "row",
  } as ViewStyle,
  previousQuestionWrapper: {
    paddingBottom: 25,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  } as ViewStyle,
  previousQuestion: {
    color: "#E30D76",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "underline",
    alignSelf: "center",
  } as TextStyle,
});
