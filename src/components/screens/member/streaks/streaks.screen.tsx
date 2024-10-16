import React, { useCallback, useMemo } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Button, LinkButton } from "@molecules";

import styles from "./streaks.styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { DETOX_ENABLED } from "@services/socket";
import { BuffArea } from "@graphql/__generated";
import { t } from "@locale";
import { StreaksLegacy } from "./_legacy/streaks.legacy";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import { Fade } from "@atoms";
import { STREAKS_SCREEN_BUTTON } from "@ids";
import StreakSaverCountContainer from "@components/molecules/streak-saver-count/streak-saver-count.container";
import { useDispatch } from "react-redux";
import { dismissStreakModal } from "@redux/streaks/streaks.actions";

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
  onClose,
  onPressCtaSecondary,
  reward,
  accessibilityTimeRemaining,
  children,
}: IProps) => {
  const dispatch = useDispatch();
  const features = useSelector(getUserFeatures);
  const currentStreakCompleted = onPressCtaSecondary ? streakCompleted : streakCompleted - 1;
  const isStreakCompleted = streakMax === streakCompleted && !streakAwardId;
  const hideBuffs = streakMax === streakCompleted;

  const isNotValidTime = timeRemaining.startsWith("NaNd");
  const autoPlayLottie = DETOX_ENABLED ? false : true;

  const streakInfo = getStreakInfo(streakMax, heading, subHeading, reward, currentStreakCompleted);
  const buffTypes = useMemo(() => [BuffArea.Streak], []);

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
    onSubmit();
    dispatch(dismissStreakModal());
  }, [onSubmit]);

  const hideLinkButton = isStreakCompleted || !onPressCtaSecondary || isNotValidTime;

  return (
    <>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <StreaksLegacy
          streakInfo={streakInfo}
          autoPlayLottie={autoPlayLottie}
          hideBuffs={hideBuffs}
          isStreakCompleted={isStreakCompleted}
          timeRemaining={timeRemaining}
          isNotValidTime={isNotValidTime}
          ribbonLabel={ribbonLabel}
          streakCompleted={streakCompleted}
          streakMax={streakMax}
          buffTypes={buffTypes}
          accessibilityLabel={accessibilityLabel}
        />
        {children}
        {!features.useStreakDetails ? null : <View style={hideLinkButton ? styles.bottomPad : styles.bottomPadLarge} />}
      </ScrollView>
      <SafeAreaView pointerEvents="box-none" style={styles.buttonWrapper}>
        <Fade />
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
      <GenericHeadingAbsolute onRightIconPress={onClose} />
      <View style={styles.streakCountContainer}>
        <StreakSaverCountContainer />
      </View>
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
    subHeader: (typeof subHeading === "string" ? subHeading : subHeading[index]).replace("${reward}", reward),
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
