import * as React from "react";
import { View } from "react-native";
import { Button, TextTemplate } from "@atoms";
import styles from "./streaks.styles";
import LottieView from "lottie-react-native";
import StreakCompletion from "@components/screens/member/streaks/subcomponents/streak-completion";
import StreakStart from "./subcomponents/streak-start";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface IProps {
  isLoading: boolean;
  heading: string | string[];
  subHeading: string | string[];
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
  isLoading,
  primaryButtonLabel,
  onSubmit,
  timeRemaining,
  onClose,
  onPressCtaSecondary,
  reward,
}: IProps) => {
  const currentStreakCompleted = onPressCtaSecondary ? streakCompleted : streakCompleted - 1;
  const { header, subHeader, image } = buildArrayInfo(streakMax, heading, subHeading, reward)[currentStreakCompleted];

  return (
    <>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <View style={styles.lottieWrapper}>
          <LottieView source={image} autoPlay={true} loop={false} />
        </View>
        <TextTemplate type="h1">{header}</TextTemplate>
        <View style={styles.streaksWrapper}>
          {streakMax === streakCompleted && !streakAwardId ? (
            <StreakCompletion reward={reward} timeRemaining={timeRemaining} />
          ) : (
            <StreakStart heading={subHeader} streakMax={streakMax} streakCompleted={streakCompleted} />
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
          {!onPressCtaSecondary ? null : (
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

const buildArrayInfo = (
  streakMax: number,
  heading: string | string[],
  subHeading: string | string[],
  reward: string
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

  return info;
};

export default StreaksScreen;
