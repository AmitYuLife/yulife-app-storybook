import React, { memo } from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, ViewStyle, TextStyle, View } from "react-native";
import Button from "@atoms/button/button";
import { Style } from "@styles";

interface Props {
  onPress: () => void;
}

export const ContinueButton = memo(({ onPress }: Props) => {
  return (
    <LinearGradient colors={["#ffffff00", "#fafafe"]} locations={[0, 0.25]} style={styles.button}>
      <View style={styles.wrapper}>
        <Button label="Continue" onPress={onPress} />
      </View>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    height: Style.adjust(90),
    bottom: 0,
  } as ViewStyle,
  wrapper: {
    width: Style.DEVICE_WIDTH - 70,
  } as ViewStyle,
  title: {
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
  } as TextStyle,
});
