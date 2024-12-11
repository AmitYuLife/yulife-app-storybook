import React, { memo, useMemo } from "react";
import { NameAndLevel, Pressable, Yumoji } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad, GiftSendPrompt } from "@organisms";
import { Colours, Style } from "@styles";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { t } from "@locale";
import { INSPECT_SCREEN, YUMOJI, USER_INFO } from "@ids";
import AverageStatsSection, { ActivityItems } from "./sections/average.stats.section";
import StatsSection, { Section } from "./sections/stats.section";
import { Box } from "@atoms";
import { VoidFunction } from "@utils";

const AVATAR_WIDTH = Style.adjust(160) * 0.95;
const AVATAR_HEIGHT = Style.adjust(328) * 0.95;
const EMPTY_AVATAR_WIDTH = Style.adjust(111);
const EMPTY_AVATAR_HEIGHT = Style.adjust(298);

export interface InspectProps {
  general: Section;
  duel: Section;
  activity: ActivityItems;
  yumoji: string;
  userName: string;
  shortName: string;
  level: number;
  yuniversalMap: number;
  inspectOtherUser: boolean;
  onClose: VoidFunction;
  challengeDuel: VoidFunction;
  onYumojiPress: VoidFunction;
  onGiftPress?: VoidFunction;
}

const InspectScreen = ({
  general,
  duel,
  yumoji,
  onClose,
  challengeDuel,
  activity,
  userName,
  level,
  yuniversalMap,
  inspectOtherUser,
  onYumojiPress,
  onGiftPress,
  shortName,
}: InspectProps) => {
  const actionButtonLabel = useMemo(
    () => (inspectOtherUser ? t("screens.inspect.duel.challenge_duel") : t("screens.inspect.duel.challenge_somebody")),
    [inspectOtherUser]
  );

  return (
    <View style={styles.wrapper} testID={INSPECT_SCREEN}>
      <GenericHeadingPad />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerStyle}
        testID={USER_INFO(`${userName} ${level}`)}
      >
        <NameAndLevel name={userName} level={level} yuniversalMap={yuniversalMap} />
        <View style={styles.yumojiWrapper} testID={YUMOJI}>
          <Pressable delay={1000} onPress={onYumojiPress} type="onLongPress">
            <Yumoji
              width={AVATAR_WIDTH}
              height={AVATAR_HEIGHT}
              emptyWidth={EMPTY_AVATAR_WIDTH}
              emptyHeight={EMPTY_AVATAR_HEIGHT}
              uri={yumoji}
            />
          </Pressable>
        </View>
        {onGiftPress ? (
          <Box mt={16}>
            <GiftSendPrompt name={shortName} onPress={onGiftPress} />
          </Box>
        ) : null}
        <StatsSection section={duel} actionButtonLabel={actionButtonLabel} onPress={challengeDuel} />
        <StatsSection section={general} />
        <AverageStatsSection activity={activity} inspectOtherUser={inspectOtherUser} />
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={onClose} />
    </View>
  );
};

export default memo(InspectScreen);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(24),
    height: Style.DEVICE_HEIGHT,
    backgroundColor: Colours.neutral.n50,
  },
  containerStyle: {
    paddingBottom: Style.adjust(Platform.select({ ios: 20, android: 50 })),
  },
  yumojiWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(10),
    marginTop: Style.adjust(16),
  },
});
