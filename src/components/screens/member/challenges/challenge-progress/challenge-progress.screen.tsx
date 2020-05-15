import { Text } from "@atoms/index";
import { NavBar, TopBar } from "@molecules/index";
import * as React from "react";
import { Image, Platform, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import assets from "./assets";
import { getWorldStyle } from "./challenge-progress.screen.helpers";
import styles from "./challenge-progress.screen.styles";
import Exit from "./subcomponents/exit";
import ProgressBar from "./subcomponents/progress-bar";
import { ChallengeType } from "@molecules/challenge-tile/challenge-tile.types";
import { BUTTON_CLOSE_CHALLENGE, CHALLENGE_PROGRESS_BAR } from "@ids";
import { openHeadspace, openCalm } from "@services/app-link";

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
          <View style={styles.instructionWrapper}>
            <Text style={styles.instructionHeading}>Choose</Text>
            <Text style={styles.instructionHeading}>an app to start</Text>
            <Text style={styles.instructionText}>{`Or use any meditation app that`}</Text>
            <Text style={styles.instructionText}>
              {`integrates with ${Platform.select({
                ios: "apple health",
                android: "google fit",
              })}.`}
            </Text>
            <Text style={styles.instructionText}>Results will be shown here.</Text>
          </View>
          <View style={styles.logoWrapper}>
            <TouchableOpacity onPress={openHeadspace}>
              <Image style={StyleSheet.flatten([styles.logo, styles.headspaceBorder])} source={assets.headspace} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openCalm}>
              <Image style={styles.logo} source={assets.calm} />
            </TouchableOpacity>
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
