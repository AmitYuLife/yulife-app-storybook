import React from "react";
import SectionHeading from "./section-heading";
import { View, StyleSheet, ViewStyle } from "react-native";
import { StarInline } from "@atoms/index";
import { GetCurrentUser_getCurrentUser_todayActivity } from "@graphql/_core/schema";
import { Style } from "@styles/index";
import { ChallengesWrapper, Steps, YuCoinsEarned } from "./common";

interface IProps {
  challenges: GetCurrentUser_getCurrentUser_todayActivity[];
  showNoChallengeDone: boolean;
  activeChallenge: GetCurrentUser_getCurrentUser_todayActivity;
}

export default function Quests({ showNoChallengeDone, activeChallenge, challenges }: IProps) {
  return (
    <>
      <SectionHeading labelLeft="quests" labelRight="yucoin" />
      <ChallengesWrapper>
        <>
          {!showNoChallengeDone ? null : (
            <View style={styles.activeChallengeWrapper}>
              <Steps>quests / you haven’t done any today</Steps>
              <View style={styles.starsWrapper} />
              <YuCoinsEarned>0</YuCoinsEarned>
            </View>
          )}
          {!activeChallenge ? null : (
            <View style={styles.activeChallengeWrapper}>
              <Steps>{getLabel(activeChallenge, true)}</Steps>
              <YuCoinsEarned>{activeChallenge.earned}</YuCoinsEarned>
            </View>
          )}
          {challenges.map((challenge, i) => (
            <View key={i} style={styles.activeChallengeWrapper}>
              <Steps>{getLabel(challenge)}</Steps>
              <View style={styles.starsWrapper}>
                {!challenge.score
                  ? null
                  : Array.from({ length: 3 }).map((_, index) => (
                      <View key={index} style={styles.starWrapper}>
                        <StarInline filled={challenge.milestones > index} />
                      </View>
                    ))}
              </View>
              <YuCoinsEarned>{challenge.earned}</YuCoinsEarned>
            </View>
          ))}
        </>
      </ChallengesWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  activeChallengeWrapper: {
    flexDirection: "row",
    marginTop: Style.SCALE_UP_AND_DOWN(10),
  } as ViewStyle,
  starsWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: Style.SCALE_UP_AND_DOWN(5),
  } as ViewStyle,
  starWrapper: {
    marginLeft: 5,
    marginTop: 2,
  } as ViewStyle,
});

function getLabel(challenge: GetCurrentUser_getCurrentUser_todayActivity, isActive = false) {
  let result = `${challenge.name}`;

  if (isActive) {
    result += " / in progress...";
  } else if (challenge.score) {
    result += ` / ${challenge.score}`;
  }

  return result;
}
