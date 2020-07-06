import React, { memo } from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, Platform, ViewStyle, TextStyle, View } from "react-native";
import MinimalButton from "@atoms/button/minimalButton";
import { Colours, Style } from "@styles";

interface Props {
  onNavigateBack: () => void;
}

export const ContinueButton = memo(({ onNavigateBack }: Props) => {
  return (
    <LinearGradient colors={["#ffffff00", "#fafafe"]} locations={[0, 0.25]} style={styles.button}>
      <View style={styles.wrapper}>
        <MinimalButton
          backgroundColor={Colours.darkHotPink}
          shadowColor={Colours.darkHotPinkShadow}
          height={53}
          title="Continue"
          onPress={onNavigateBack}
          color="white"
          borderRadius={50}
          titleStyle={styles.title}
        />
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
    height: Platform.select({ ios: 120, android: 90 }),
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
