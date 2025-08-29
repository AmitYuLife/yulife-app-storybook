import { View } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { memo, useCallback } from "react";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { Button, LottieView, SecondaryButton } from "@components/molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { AppleWatchIcon } from "@atoms/icon/apple-watch-icon";
import { useTranslation } from "@hooks";
import { useDispatch } from "react-redux";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { RefreshIcon } from "@atoms/icon/refresh-icon";

const BACKGROUND_ANIMATION = require("@assets/yuniversal/yuniversal_quest_map_1.json");

interface IChallengesWatchProgressProps {
  onCancel?: () => void;
  onLeftMenuPress?: () => void;
}

const ChallengesWatchProgress = ({ onCancel, onLeftMenuPress }: IChallengesWatchProgressProps) => {
  const dispatch = useDispatch();

  const t = useTranslation([
    "screens.challenge_progress_watch.title",
    "screens.challenge_progress_watch.body",
    "screens.challenge_progress_watch.button",
    "screens.challenge_progress_watch.resync",
  ]);

  const onRefresh = useCallback(() => {
    dispatch(
      getUserDataStart({
        types: [
          AppDataType.activeChallenge,
          AppDataType.activeStreak,
          AppDataType.coinLedger,
          AppDataType.challengesDoneToday,
        ],
      })
    );
  }, [dispatch]);

  return (
    <>
      <LottieView
        resizeMode="cover"
        style={styles.background}
        source={BACKGROUND_ANIMATION}
        autoPlay={true}
        loop={true}
      />
      <View style={styles.wrapper}>
        <GenericHeadingPad />
        <View style={styles.content}>
          <Box gap={60} justifyContent="center" alignItems="center">
            <View style={styles.appleWatchIcon}>
              <AppleWatchIcon />
            </View>
            <Box gap={14}>
              <TextTemplate type="h1" textAlign="center" color={"white"}>
                {t["screens.challenge_progress_watch.title"]}
              </TextTemplate>
              <TextTemplate type="b1" color="white" textAlign="center">
                {t["screens.challenge_progress_watch.body"]}
              </TextTemplate>
            </Box>
            <Box flexDirection="column" gap={5}>
              <Button onPress={onCancel} translationKey="screens.challenge_progress_watch.button" />
              <SecondaryButton
                delay={5000}
                textColor={Colours.neutral.white}
                borderColor={Colours.neutral.white}
                leftIcon={<RefreshIcon width={18} height={18} colour={Colours.neutral.white} />}
                onPress={onRefresh}
                translationKey="screens.challenge_progress_watch.resync"
              />
            </Box>
          </Box>
        </View>

        <TopBarAbsolute type={TOP_BAR_TYPES.WHITE} onPressLeftIcon={onLeftMenuPress} />

        <NavBar activeIndex={1} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Style.adjust(40),
    paddingHorizontal: Style.adjust(40),
  },
  appleWatchIcon: {
    marginStart: Style.adjust(-40),
    transform: [
      {
        translateX: 24,
      },
    ],
  },
  background: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    position: "absolute",
  },
});

export default memo(ChallengesWatchProgress);
