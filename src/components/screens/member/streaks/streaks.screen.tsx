import React, { useMemo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { Button, LinkButton } from "@molecules";
import { ActiveBuffsButton } from "@organisms";
import styles from "./streaks.styles";
import LottieView from "lottie-react-native";
import StreakCompletion from "@components/screens/member/streaks/subcomponents/streak-completion";
import StreakStart from "./subcomponents/streak-start";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Style } from "@styles";
import { DETOX_ENABLED } from "@services/socket";
import { BuffArea } from "@graphql/_core/schema/globalTypes";
import { t } from "@locale";

interface IProps {
  isLoading: boolean;
  heading: string | string[];
  subHeading: string | string[];
  ribbonLabel: string;
  timeRemaining: string;
  accessibilityTimeRemaining: string;
  streakAwardId: string;
  streakCompleted: number;
  streakMax: number;
  primaryButtonLabel: string;
  reward: string;
  onSubmit: (() => void) | null;
  onClose: () => void;
  onPressCtaSecondary?: (() => void) | null;
}

const StreaksScreen = ({
  streakAwardId,
  streakMax,
  streakCompleted,
  heading,
  subHeading,
  ribbonLabel,
  isLoading,
  primaryButtonLabel,
  onSubmit,
  timeRemaining,
  onClose,
  onPressCtaSecondary,
  reward,
  accessibilityTimeRemaining,
}: IProps) => {
  const currentStreakCompleted = onPressCtaSecondary ? streakCompleted : streakCompleted - 1;
  const isStreakCompleted = streakMax === streakCompleted && !streakAwardId;
  const hideBuffs = streakMax === streakCompleted;

  const isNotValidTime = timeRemaining.startsWith("NaNd");
  const autoPlayLottie = DETOX_ENABLED ? false : true;

  const streakInfo = getStreakInfo(streakMax, heading, subHeading, reward, currentStreakCompleted);
  const buffTypes = useMemo(() => [BuffArea.streak], []);

  const accessibilityLabel = useMemo(
    () =>
      isStreakCompleted
        ? t("screens.streak.accessibility.streak_completed", {
          header: streakInfo?.header,
          ribbonLabel,
          time: accessibilityTimeRemaining,
        })
        : t("screens.streak.accessibility.streak_start", {
          header: streakInfo?.header,
          subHeader: streakInfo?.subHeader,
          streakCompleted,
          streakMax,
        }),
    [
      isStreakCompleted,
      streakInfo?.header,
      streakInfo?.subHeader,
      ribbonLabel,
      accessibilityTimeRemaining,
      streakCompleted,
      streakMax,
    ]
  );
  return (
    <>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <View style={styles.lottieWrapper}>
          <LottieView source={streakInfo?.image} autoPlay={autoPlayLottie} loop={false} />
          {hideBuffs ? null : (
            <ActiveBuffsButton style={styles.activeBuffsButton} iconWidth={35} iconHeight={35} buffTypes={buffTypes} />
          )}
        </View>

        <View accessible={true} accessibilityLabel={accessibilityLabel} style={styles.progressWrapper}>
          <TextTemplate type={Style.isShortToMedium() ? "h2" : "h1"} textAlign="center">
            {streakInfo?.header}
          </TextTemplate>
          <View style={styles.streaksWrapper}>
            {isStreakCompleted ? (
              <StreakCompletion timeRemaining={timeRemaining} isNotValidTime={isNotValidTime} label={ribbonLabel} />
            ) : (
              <StreakStart heading={streakInfo?.subHeader} streakMax={streakMax} streakCompleted={streakCompleted} />
            )}
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            isLoading={isLoading}
            wrapperStyle={styles.buttonPrimaryWrapper}
            onPress={onSubmit}
            label={primaryButtonLabel}
          />
          {!onPressCtaSecondary || isNotValidTime ? null : (
            <LinkButton wrapperStyle={styles.buttonSecondaryWrapper} onPress={onPressCtaSecondary} label={t("labels.cta.later")} />
          )}
        </View>
      </View>
      <GenericHeadingAbsolute onRightIconPress={onClose} />
    </>
  );
};

const getStreakInfo = (
  streakMax: number,
  heading: string | string[],
  subHeading: string | string[],
  reward: string,
  currentStreakCompleted: number
) => {
  const images = [
    require("./assets/day-1.json"),
    require("./assets/day-2.json"),
    require("./assets/day-3.json"),
    require("./assets/day-4.json"),
    require("./assets/day-5.json"),
  ];

  const info = images.map((image, index) => ({
    header: typeof heading === "string" ? heading : heading[index],
    subHeader: typeof subHeading === "string" ? subHeading : subHeading[index].replace("${reward}", reward),
    image,
  }));

  if (streakMax === 4) {
    info.splice(2, 1);
  }

  if (streakMax === 3) {
    info.splice(1, 2);
  }

  //This a fallback in case the user is on 5/5 streaks and some how nextStreakAvailableAt is empty
  if (!info[currentStreakCompleted]?.header) {
    return info[info.length - 1];
  }

  return info[currentStreakCompleted];
};

export default StreaksScreen;
