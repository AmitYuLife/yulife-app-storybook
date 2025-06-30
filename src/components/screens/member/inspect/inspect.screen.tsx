import React, { memo, useMemo } from "react";
import { Pressable, Yumoji } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad, GiftSendPrompt, NameLevelMiniAvatar } from "@organisms";
import { Colours, Style, TOP_BAR } from "@styles";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { t } from "@locale";
import { INSPECT_SCREEN, YUMOJI, USER_INFO } from "@ids";
import AverageStatsSection, { ActivityItems } from "./sections/average.stats.section";
import StatsSection, { Section } from "./sections/stats.section";
import { Box } from "@atoms";
import { VoidFunction } from "@utils";
import AchievementsShowcase, { IAchievement } from "@organisms/achievements-showcase/achievements-showcase";

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
  componentId?: string;
  showAchievements: boolean;
  achievements: {
    list: IAchievement[];
    points?: number;
    numberOfSlots?: number;
  };
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
  inspectOtherUser,
  onYumojiPress,
  onGiftPress,
  shortName,
  yuniversalMap,
  componentId,
  achievements,
  showAchievements,
}: InspectProps) => {
  const actionButtonLabel = useMemo(
    () => (inspectOtherUser ? t("screens.inspect.duel.challenge_duel") : t("screens.inspect.duel.challenge_somebody")),
    [inspectOtherUser]
  );

  return (
    <View style={styles.wrapper} testID={INSPECT_SCREEN}>
      <GenericHeadingPad />
      <ScrollView
        bounces={!showAchievements}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerStyle}
        testID={USER_INFO(`${userName} ${level}`)}
      >
        <Box ph={24}>
          {showAchievements ? (
            <Box flexDirection="row" pr={5} mt={12}>
              <Box width={"55%"}>
                <NameLevelMiniAvatar
                  name={userName}
                  level={level}
                  yuniversalMap={yuniversalMap}
                  showYumoji={false}
                  hideDisplayedLevel={!!(inspectOtherUser && yuniversalMap)}
                />
                <Box mt={24}>
                  <AchievementsShowcase
                    componentId={componentId}
                    points={achievements.points}
                    achievements={achievements.list}
                    numberOfSlots={achievements.numberOfSlots}
                    isInspectingUser={inspectOtherUser}
                  />
                </Box>
              </Box>
              <Box testID={YUMOJI} mt={16}>
                <Pressable delay={1000} onLongPress={onYumojiPress}>
                  <Yumoji
                    width={AVATAR_WIDTH}
                    height={AVATAR_HEIGHT}
                    emptyWidth={EMPTY_AVATAR_WIDTH}
                    emptyHeight={EMPTY_AVATAR_HEIGHT}
                    uri={yumoji}
                  />
                </Pressable>
              </Box>
            </Box>
          ) : (
            <>
              <Box alignItems="center" mt={24}>
                <NameLevelMiniAvatar
                  name={userName}
                  level={level}
                  yuniversalMap={yuniversalMap}
                  showYumoji={false}
                  centerContent={true}
                  hideDisplayedLevel={!!(inspectOtherUser && yuniversalMap)}
                />
              </Box>
              <View style={styles.yumojiWrapper} testID={YUMOJI}>
                <Pressable delay={1000} onLongPress={onYumojiPress}>
                  <Yumoji
                    width={AVATAR_WIDTH}
                    height={AVATAR_HEIGHT}
                    emptyWidth={EMPTY_AVATAR_WIDTH}
                    emptyHeight={EMPTY_AVATAR_HEIGHT}
                    uri={yumoji}
                  />
                </Pressable>
              </View>
            </>
          )}

          {onGiftPress ? (
            <Box mt={16}>
              <GiftSendPrompt name={shortName} onPress={onGiftPress} />
            </Box>
          ) : null}
          <StatsSection section={duel} actionButtonLabel={actionButtonLabel} onPress={challengeDuel} />
          <StatsSection section={general} />
          <AverageStatsSection activity={activity} inspectOtherUser={inspectOtherUser} />
        </Box>
      </ScrollView>
      {!showAchievements ? null : <Box style={styles.shadowBox} width={"100%"} h={4} />}
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={onClose} />
    </View>
  );
};

export default memo(InspectScreen);

const styles = StyleSheet.create({
  wrapper: {
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
  shadowBox: {
    position: "absolute",
    top: TOP_BAR.TOP_BAR_WITH_PAD,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    backgroundColor: "white",
  },
});
