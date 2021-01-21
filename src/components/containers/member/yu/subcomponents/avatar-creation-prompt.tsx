import React, { memo, useMemo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text, Button } from "@atoms";
import { EmptyAvatar } from "@components/molecules";
import { Colours, Style } from "@styles";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { navigateToAvatarCreationScreen } from "../navigation/navigateToAvatarCreationScreen";
import { GET_STARTED_BUTTON, EMPTY_YUSCREEN_COPY } from "@ids";

const CREATE_AVATAR_CAPTION_COPY = "Build your Yumoji to unlock power-ups and earn 100 YuCoin!";
const CREATE_AVATAR_CTA_COPY = "Get started";

const _AvatarCreationPrompt = () => {
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const avatarSource = useMemo(() => {
    const uri = data?.getYulifer?.avatarRemoteFiles?.pngFull;
    return uri ? { uri } : null;
  }, [data]);

  if (avatarSource) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.emptyAvatarWrapper}>
        <EmptyAvatar />
      </View>
      <View style={styles.promptWrapper}>
        <Text style={styles.promptLabel} testID={EMPTY_YUSCREEN_COPY}>
          {CREATE_AVATAR_CAPTION_COPY}
        </Text>
        <View style={styles.promptCtaWrapper}>
          <Button
            type="Primary"
            size="Fill"
            label={CREATE_AVATAR_CTA_COPY}
            onPress={navigateToAvatarCreationScreen}
            testID={GET_STARTED_BUTTON}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: Style.adjust(16),
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
    color: Colours.neutral.n700,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  } as TextStyle,
  promptCtaWrapper: {
    marginTop: Style.adjust(20),
  } as TextStyle,
});

export const AvatarCreationPrompt = memo(_AvatarCreationPrompt);
