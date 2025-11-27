import React, { useCallback, useMemo } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Button, LinkButton } from "@molecules";

import styles from "./streaks.styles";
import { DETOX_ENABLED } from "@services/socket";
import { t } from "@locale";
import { StreaksLegacy } from "./_legacy/streaks.legacy";
import { STREAKS_SCREEN_BUTTON } from "@ids";
import StreakSaverCountContainer from "@components/molecules/streak-saver-count/streak-saver-count.container";
import { useDispatch, useSelector } from "react-redux";
import { dismissStreakModal } from "@redux/streaks/streaks.actions";
import { getTheme } from "@app/theme";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import CentredScreen from "@components/molecules/centred-screen/centred-screen";
import { noop, VoidFunction } from "@utils";

interface IProps {
  isLoading: boolean;
  heading: string;
  subHeading: string;
  ribbonLabel: string;
  timeRemaining: string;
  accessibilityTimeRemaining: string;
  streakAwardId: string;
  streakCompleted: number;
  streakMax: number;
  primaryButtonLabel: string;
  reward: string;
  onSubmit?: (() => void) | null;
  onPressCtaSecondary?: (() => void) | null;
  onIconPress: VoidFunction;
  children?: React.ReactNode;
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
  onPressCtaSecondary,
  reward,
  accessibilityTimeRemaining,
  children,
}: IProps) => {
  const dispatch = useDispatch();
  const isStreakCompleted = streakMax === streakCompleted && !streakAwardId;

  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const { challengeSuccessScreen } = getTheme(currentLevel, yuniversalMap);

  const isNotValidTime = timeRemaining.startsWith("NaNd");
  const autoPlayLottie = DETOX_ENABLED ? false : true;

  const streakInfo = getStreakInfo(streakMax, heading, subHeading, streakCompleted);

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

  const handlePress = useCallback(() => {
    onSubmit?.();
    dispatch(dismissStreakModal());
  }, [onSubmit]);

  const hideLinkButton = isStreakCompleted || !onPressCtaSecondary || isNotValidTime;

  return (
    <>
      <CentredScreen {...challengeSuccessScreen}>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <GenericHeadingPad />
          <StreaksLegacy
            streakInfo={streakInfo}
            autoPlayLottie={autoPlayLottie}
            isStreakCompleted={isStreakCompleted}
            timeRemaining={timeRemaining}
            isNotValidTime={isNotValidTime}
            ribbonLabel={ribbonLabel}
            streakCompleted={streakCompleted}
            streakMax={streakMax}
            accessibilityLabel={accessibilityLabel}
            reward={Number(reward)}
            streakAwardId={streakAwardId}
            textColor={challengeSuccessScreen?.textStyle?.color}
          />
          {children}
          <View style={hideLinkButton ? styles.bottomPad : styles.bottomPadLarge} />
        </ScrollView>
        <SafeAreaView pointerEvents="box-none" style={styles.buttonWrapper}>
          <Button
            isLoading={isLoading}
            wrapperStyle={styles.buttonPrimaryWrapper}
            onPress={handlePress}
            testID={STREAKS_SCREEN_BUTTON}
            translatedLabel={primaryButtonLabel}
            size="Fill"
          />
          {hideLinkButton ? null : (
            <LinkButton
              wrapperStyle={styles.buttonSecondaryWrapper}
              onPress={onPressCtaSecondary}
              translationKey="labels.cta.later"
            />
          )}
        </SafeAreaView>

        <GenericHeadingAbsolute
          backgroundColor="transparent"
          rightIcon="COINS"
          onRightIconPress={noop}
          disabled={true}
          color={challengeSuccessScreen?.textStyle?.color}
        />

        <View style={styles.streakCountContainer}>
          <StreakSaverCountContainer textColor={challengeSuccessScreen?.textStyle?.color} />
        </View>
      </CentredScreen>
    </>
  );
};

const getStreakInfo = (streakMax: number, heading: string, subHeading: string, streakCompleted: number) => {
  const images = [
    require("./assets/day-0.json"),
    require("./assets/day-1.json"),
    require("./assets/day-2.json"),
    require("./assets/day-3.json"),
    require("./assets/day-4.json"),
    require("./assets/day-5.json"),
  ];

  const info = images.map((image) => ({
    header: heading,
    subHeader: subHeading,
    image,
  }));

  if (streakMax === 4) {
    info.splice(3, 1);
  }

  if (streakMax === 3) {
    info.splice(2, 2);
  }

  //This a fallback in case the user is on 5/5 streaks and some how nextStreakAvailableAt is empty
  if (!info[streakCompleted]?.header) {
    return info[info.length - 1];
  }

  return info[streakCompleted];
};

export default StreaksScreen;
