import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text, Button } from "@atoms";
import { EmptyAvatar } from "@components/molecules";
import { Colours, Style } from "@styles";

export interface IAvatarCreationPromptProps {
  onPressCta: () => void;
}

const CREATE_AVATAR_CAPTION_COPY = "Create your avatar to unlock personal protection and earn 100 YuCoin.";
const CREATE_AVATAR_CTA_COPY = "Get started";

const _AvatarCreationPrompt = (props: IAvatarCreationPromptProps) => {
  const { onPressCta } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.emptyAvatarWrapper}>
        <EmptyAvatar />
      </View>
      <View style={styles.promptWrapper}>
        <Text style={styles.promptLabel}>{CREATE_AVATAR_CAPTION_COPY}</Text>
        <View style={styles.promptCtaWrapper}>
          <Button type="Primary" size="Fill" label={CREATE_AVATAR_CTA_COPY} onPress={onPressCta} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: Style.adjust(17),
    paddingTop: Style.adjust(24),
  } as ViewStyle,
  emptyAvatarWrapper: {
    flex: 1,
  } as ViewStyle,
  promptWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: Style.adjust(32),
  } as ViewStyle,
  promptLabel: {
    letterSpacing: 1,
    color: Colours.neutral.n700,
    fontSize: Style.adjust(13),
    lineHeight: Style.adjust(20),
  } as TextStyle,
  promptCtaWrapper: {
    marginTop: Style.adjust(20),
  } as TextStyle,
});

export const AvatarCreationPrompt = memo(_AvatarCreationPrompt);
