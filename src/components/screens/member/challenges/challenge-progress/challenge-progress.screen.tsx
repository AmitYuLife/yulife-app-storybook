import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import { getWorldStyle } from "./challenge-progress.screen.helpers";
import styles from "./challenge-progress.screen.styles";
import Exit from "./subcomponents/exit";
import ProgressBar from "./subcomponents/progress-bar";
import { Instructions } from "./subcomponents/instructions";
import { ChallengeType } from "@molecules/challenge-tile/challenge-tile.types";
import { BUTTON_CLOSE_CHALLENGE, CHALLENGE_PROGRESS_BAR } from "@ids";
import { HeadspaceButton } from "./subcomponents/headspace-button";
import { CalmButton } from "./subcomponents/calm-button";
import { NavBar } from "@components/organisms";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";

interface IProps extends IConnectedScreenProps {
  challengeType: ChallengeType;
  endDateTime: string;
  showCounter?: boolean;
  userProgress: number;
  currentWorld: number;
  progressTargets: number[];
  unit: "steps" | "minutes";
  onDismissPress: () => void;
}

export default function ChallengeProgressScreen({
  challengeType,
  currentWorld = 0,
  endDateTime,
  onDismissPress,
  onLeftMenuPress,
  showCounter = false,
  progressTargets,
  unit,
  userProgress,
}: IProps) {
  const { backgroundColour, progressBarType, source, style, topBarType, exitChallenge } = getWorldStyle(
    challengeType,
    currentWorld
  );

  return (
    <View style={StyleSheet.flatten([styles.wrapper, { backgroundColor: backgroundColour }])}>
      <View style={styles.pad} />
      <Image resizeMethod="resize" resizeMode="cover" source={source} style={style} />
      <View style={styles.progressBarWrapper} testID={CHALLENGE_PROGRESS_BAR}>
        <ProgressBar
          amount={userProgress}
          showCounter={showCounter}
          goals={progressTargets}
          styleType={progressBarType}
          type={unit}
        />
      </View>
      {challengeType === "meditation" && !userProgress ? (
        <View style={styles.meditationInstructionsWrapper}>
          <Instructions />
          <View style={styles.logoWrapper}>
            <HeadspaceButton />
            <CalmButton />
          </View>
        </View>
      ) : null}
      <View style={styles.exitChallengeWrapper} testID={BUTTON_CLOSE_CHALLENGE}>
        <Exit onPress={onDismissPress} {...exitChallenge} />
      </View>
      <TopBarAbsolute
        type={topBarType}
        menuLabel={challengeType}
        onPressLeftIcon={onLeftMenuPress}
        timer={endDateTime}
      />
      <NavBar activeIndex={1} additionalBottom={2} />
    </View>
  );
}
