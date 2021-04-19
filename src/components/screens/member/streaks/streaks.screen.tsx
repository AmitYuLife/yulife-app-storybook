import * as React from "react";
import { View } from "react-native";
import { Button, TextTemplate } from "@atoms";
import styles from "./streaks.styles";
import LottieView from "lottie-react-native";
import StreakCompletion from "@components/screens/member/streaks/subcomponents/streak-completion";
import StreakStart from "./subcomponents/streak-start";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { Style } from "@styles";

interface IProps {
  isLoading: boolean;
  heading: string | string[];
  subHeading: string | string[];
  ribbonLabel: string;
  timeRemaining: string;
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
}: IProps) => {
  const currentStreakCompleted = onPressCtaSecondary ? streakCompleted : streakCompleted - 1;
  const isStreakCompleted = streakMax === streakCompleted && !streakAwardId;

  const isNotValidTime = timeRemaining.startsWith("NaNd");

  const streakInfo = getStreakInfo(streakMax, heading, subHeading, reward, currentStreakCompleted);
  return (
    <>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <View style={styles.lottieWrapper}>
          <LottieView source={streakInfo?.image} autoPlay={true} loop={false} />
        </View>
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
        <View style={styles.buttonWrapper}>
          <Button
            isLoading={isLoading}
            wrapperStyle={styles.buttonPrimaryWrapper}
            type="Primary"
            onPress={onSubmit}
            label={primaryButtonLabel}
          />
          {!onPressCtaSecondary || isNotValidTime ? null : (
            <Button
              wrapperStyle={styles.buttonSecondaryWrapper}
              type="Link"
              onPress={onPressCtaSecondary}
              label="Later"
            />
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
