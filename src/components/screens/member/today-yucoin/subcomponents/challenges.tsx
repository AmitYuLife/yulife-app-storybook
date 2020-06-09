import React, { ComponentProps } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Steps, YuCoinsEarned } from "./common";
import Surge from "./surge";
import PassiveChallengeInstructions from "./passive-challenge-instructions";
import ProgressBar from "./progress-bar";
import { Pad } from "@atoms/index";

interface IProps {
  instructions: string;
  hide: boolean;
  steps: string;
  surge: ComponentProps<typeof Surge>;
  yucoinsEarned: number;
  progressBar: ComponentProps<typeof ProgressBar>;
  pad?: number;
}

export default function Challenges({ instructions, hide, steps, surge, yucoinsEarned, progressBar, pad }: IProps) {
  return hide ? null : (
    <>
      <View style={styles.passiveChallengeWrapper}>
        <Steps>{steps}</Steps>
        <Surge {...surge} />
        <YuCoinsEarned>{yucoinsEarned}</YuCoinsEarned>
      </View>
      <PassiveChallengeInstructions>{instructions}</PassiveChallengeInstructions>
      <ProgressBar {...progressBar} />
      {!pad ? null : <Pad height={pad} />}
    </>
  );
}

const styles = StyleSheet.create({
  passiveChallengeWrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
});
