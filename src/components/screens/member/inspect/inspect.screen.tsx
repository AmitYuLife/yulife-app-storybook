import { memo, useCallback, useMemo, useState } from "react";
import { Pressable, Yumoji } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad, GiftSendPrompt, NameLevelMiniAvatar } from "@organisms";
import { Style, StyleSheet, TOP_BAR } from "@styles";
import { NativeScrollEvent, NativeSyntheticEvent, Platform, ScrollView, View, ViewStyle } from "react-native";
import { t } from "@locale";
import { INSPECT_SCREEN, YUMOJI, USER_INFO } from "@ids";
import AverageStatsSection, { ActivityItems } from "./sections/average.stats.section";
import StatsSection, { Section } from "./sections/stats.section";
import { Box, Image } from "@atoms";
import { VoidFunction } from "@utils";
import AchievementsShowcase, { IAchievement } from "@organisms/achievements-showcase/achievements-showcase";
import { PLATFORM_SIZE } from "@components/containers/member/yu/subcomponents/yu-screen-v5/yu-screen.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  componentId: string;
  showAchievements: boolean;
  achievement: IAchievement;
  currentViewedUserId: string;
}

const BACKGROUNDS_STYLES = {
  position: "absolute",
  start: 0,
  end: 0,
  ...PLATFORM_SIZE,
} as ViewStyle;

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
  achievement,
  showAchievements,
  currentViewedUserId,
}: InspectProps) => {
  const actionButtonLabel = useMemo(
    () => (inspectOtherUser ? t("screens.inspect.duel.challenge_duel") : t("screens.inspect.duel.challenge_somebody")),
    [inspectOtherUser]
  );

  const { bottom } = useSafeAreaInsets();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (!showAchievements) {
        return;
      }

      const scrolled = event.nativeEvent.contentOffset.y > AVATAR_HEIGHT;

      setScrolledPastHero((prevScrolled) => (scrolled !== prevScrolled ? scrolled : prevScrolled));
    },
    [showAchievements]
  );

  const useAchievementHeader = showAchievements && !scrolledPastHero;

  const imagesStyles = useMemo(() => {
    return {
      backgroundImage: {
        ...BACKGROUNDS_STYLES,
        bottom: Style.adjust(46),
      },
      clouds: {
        ...BACKGROUNDS_STYLES,
        bottom: Style.adjust(46),
      },
    };
  }, []);

  return (
    <View style={styles.wrapper} testID={INSPECT_SCREEN}>
      {showAchievements ? null : <GenericHeadingPad />}
      <ScrollView
        bounces={!showAchievements}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerStyle}
        testID={USER_INFO(`${userName} ${level}`)}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {showAchievements ? (
          <Box
            flexDirection="row"
            ph={Style.adjust(24)}
            pt={TOP_BAR.TOP_BAR_WITH_PAD + Style.adjust(12)}
            pr={Style.adjust(5)}
            mb={Style.adjust(58)}
            bg={achievement?.backgroundColor}
            disableAutoAdjust={true}
          >
            {achievement?.backgroundImage?.uri ? (
              <>
                <Image
                  style={imagesStyles.backgroundImage}
                  source={{ uri: achievement?.backgroundImage?.uri }}
                  {...PLATFORM_SIZE}
                />
                <Image
                  style={imagesStyles.clouds}
                  source={require("@assets/yuscreen/platforms/clouds.png")}
                  {...PLATFORM_SIZE}
                />
                <Box bg="white" h={47} position="absolute" bottom={0} left={0} right={0} />
              </>
            ) : null}

            <Box width={"55%"}>
              <NameLevelMiniAvatar
                textColour={achievement?.textColor}
                name={userName}
                level={level}
                yuniversalMap={yuniversalMap}
                showYumoji={false}
                hideDisplayedLevel={!!(inspectOtherUser && yuniversalMap)}
              />
              <Box mt={72}>
                <AchievementsShowcase
                  componentId={componentId}
                  achievement={achievement}
                  isInspectingUser={inspectOtherUser}
                  currentViewedUserId={currentViewedUserId}
                />
              </Box>
            </Box>
            <Box testID={YUMOJI} pt={5}>
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

        <Box ph={Style.adjust(24)} pb={bottom + Style.adjust(24)} disableAutoAdjust={true}>
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

      <GenericHeadingAbsolute
        logo="yulife"
        logoType={useAchievementHeader && achievement?.topBarType === "white" ? "inverted" : undefined}
        onLeftIconPress={onClose}
        backgroundColor={useAchievementHeader ? achievement?.backgroundColor : undefined}
        color={useAchievementHeader ? achievement?.textColor : undefined}
      />
    </View>
  );
};

export default memo(InspectScreen);

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
  },
  containerStyle: {
    paddingBottom: Style.adjust(Platform.select({ ios: 20, android: 50, default: 20 })),
  },
  yumojiWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(10),
    marginTop: Style.adjust(16),
  },
});
