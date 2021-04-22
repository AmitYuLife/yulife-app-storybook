import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Colours, Style } from "@styles";
import { navigateToAvatarCreationScreen } from "../navigation/navigateToAvatarCreationScreen";
import { GET_STARTED_BUTTON, EMPTY_YUSCREEN_COPY } from "@ids";
import LinearGradient from "react-native-linear-gradient";

const CREATE_AVATAR_CAPTION_COPY = "Build your Yumoji to unlock power-ups and earn 100 YuCoin!";
const CREATE_AVATAR_CTA_COPY = "Create your Yumoji";

const _AvatarCreationPrompt = () => {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]}
        locations={[0.8, 0]}
        style={styles.gradient}
      />
      <View style={styles.body}>
        <Text testID={EMPTY_YUSCREEN_COPY} bold={true} style={styles.promptLabel}>
          {CREATE_AVATAR_CAPTION_COPY}
        </Text>
        <Button testID={GET_STARTED_BUTTON} label={CREATE_AVATAR_CTA_COPY} onPress={navigateToAvatarCreationScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(340),
    position: "absolute",
    justifyContent: "flex-end",
    paddingBottom: 30,
  } as ViewStyle,
  body: {
    paddingHorizontal: Style.adjust(32),
  } as ViewStyle,
  gradient: {
    width: "100%",
    height: Style.adjust(320),
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.8,
  } as ViewStyle,
  promptLabel: {
    textAlign: "center",
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    color: Colours.neutral.n800,
    marginBottom: Style.adjust(24),
  } as TextStyle,
});

export const AvatarCreationPrompt = memo(_AvatarCreationPrompt);
