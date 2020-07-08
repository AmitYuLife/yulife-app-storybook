import { NavBar, TopBar } from "@molecules/index";
import * as React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
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
  totalCoins,
}: IProps) {
  const { backgroundColour, progressBarType, source, style, topBarType, exitChallenge } = getWorldStyle(
    challengeType,
    currentWorld
  );

  return (
    <SafeAreaView style={StyleSheet.flatten([styles.wrapper, { backgroundColor: backgroundColour }])}>
      <Image resizeMethod="resize" resizeMode="cover" source={source} style={style} />
      <TopBar
        coins={totalCoins}
        type={topBarType}
        menuLabel={challengeType}
        onPressLeftIcon={onLeftMenuPress}
        timer={endDateTime}
      />
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
      <NavBar activeIndex={1} hasNotification={false} additionalBottom={2} />
    </SafeAreaView>
  );
}
