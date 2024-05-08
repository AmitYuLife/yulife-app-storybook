import { StyleSheet, View } from "react-native";
import { Stack, TextTemplate } from "@atoms";
import { memo } from "react";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { Button, LottieView } from "@components/molecules";
import { Style } from "@styles";
import { AppleWatchIcon } from "@atoms/icon/apple-watch-icon";
import { useTranslation } from "@hooks";

const BACKGROUND_ANIMATION = require("@assets/yuniversal/yuniversal_quest_map_1.json");

interface IChallengesWatchProgressProps {
  onCancel?: () => void;
  onLeftMenuPress?: () => void;
}

const ChallengesWatchProgress = ({ onCancel, onLeftMenuPress }: IChallengesWatchProgressProps) => {
  const t = useTranslation([
    "screens.challenge_progress_watch.title",
    "screens.challenge_progress_watch.body",
    "screens.challenge_progress_watch.button",
  ]);

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
          <Stack gap={60} justifyContent="center" alignItems="center">
            <View style={styles.appleWatchIcon}>
              <AppleWatchIcon />
            </View>
            <Stack gap={14}>
              <TextTemplate type="h1" textAlign="center" color={"white"}>
                {t["screens.challenge_progress_watch.title"]}
              </TextTemplate>
              <TextTemplate type="b1" color="white" textAlign="center">
                {t["screens.challenge_progress_watch.body"]}
              </TextTemplate>
            </Stack>
            <Button onPress={onCancel} label={t["screens.challenge_progress_watch.button"]} />
          </Stack>
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
    marginLeft: Style.adjust(-40),
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
