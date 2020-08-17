import React from "react";
import { StyleSheet, View, ViewStyle, Text, TextStyle } from "react-native";
import { Style } from "../../../../../../../styles";
import { Button } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { isIphoneX } from "react-native-iphone-x-helper";

interface IFooterProps {
  firstButton: {
    action: () => void;
    label: string;
    disabled?: boolean;
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
            />
          )}
        </View>
      </View>
      {!onPreviousButtonPressed ? null : (
        <TouchableOpacityWithDelay style={styles.previousQuestionWrapper} onPress={onPreviousButtonPressed} delay={300}>
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
    height: isIphoneX() ? 150 : 130,
    bottom: 0,
    paddingBottom: isIphoneX() ? 20 : 0,
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  } as ViewStyle,
  buttonsWrapper: {
    width: Style.DEVICE_WIDTH,
    paddingHorizontal: Style.adjust(16),
    marginTop: 10,
  } as ViewStyle,
  innerButtonsWrapper: {
    width: "100%",
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
