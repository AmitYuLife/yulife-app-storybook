import { MutationFunctionOptions } from "@apollo/react-common";
import moment from "moment";
import * as React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import {
  GetCommunityGoals_getCommunityGoals,
  JoinCommunityGoal,
  JoinCommunityGoalVariables,
} from "@graphql/_core/schema";
import { Style, Colours } from "@styles";

import { CommunityGoalTimeStatus } from "./community-goal.time-status";
import { CommunityGoalTitle } from "./community-goal.title";
import { CommunityGoalDescription } from "./community-goal.description";
import { CommunityGoalJoinButton } from "./community-goal.join-button";
import { CommunityGoalParticipants } from "./community-goal.participants";
import { CommunityGoalProgressBar } from "./community-goal.progress-bar";

interface IProps {
  goal: GetCommunityGoals_getCommunityGoals;
  joinCommunityGoal: (options: MutationFunctionOptions<JoinCommunityGoal, JoinCommunityGoalVariables>) => Promise<{}>;
}

export function CommunityGoal({ goal, joinCommunityGoal }: IProps) {
  const { hasNotStarted, isOngoing } = getGoalStatus(goal.startDate);
  const wrapperStyles: ViewStyle[] = [styles.wrapper];

  if (goal.isExpired) {
    wrapperStyles.push(styles.expired);
  } else if (isOngoing) {
    wrapperStyles.push(styles.ongoing);
  } else {
    wrapperStyles.push(styles.notStarted);
  }

  async function handlePress() {
    try {
      await joinCommunityGoal({ variables: { communityGoalId: goal.id } });
    } catch (e) {
      // fail silently
      // TODO: show them a message?
    }
  }

  const currentGoalValue = goal.participants.reduce((acc, p) => acc + (p?.stats?.value || 0), 0);

  return (
    <View style={wrapperStyles}>
      <View style={styles.timeStatus}>
        <CommunityGoalTimeStatus goal={goal} />
      </View>
      <View style={styles.marginVertical16}>
        <CommunityGoalTitle value={goal.title} />
      </View>
      <CommunityGoalDescription value={goal.description} />
      {hasNotStarted ? null : (
        <CommunityGoalProgressBar
          isExpired={goal.isExpired}
          currentValue={currentGoalValue}
          maxValue={goal.goalValue}
        />
      )}
      {goal.isExpired && !goal.youHaveJoined ? (
        <View style={styles.marginVertical8} />
      ) : (
        <View style={styles.marginVertical16}>
          <CommunityGoalJoinButton
            youHaveJoined={goal.youHaveJoined}
            isExpired={goal.isExpired}
            hasNotStarted={hasNotStarted}
            isOngoing={isOngoing}
            onPress={handlePress}
          />
        </View>
      )}
      <CommunityGoalParticipants goal={goal} hasNotStarted={hasNotStarted} />
    </View>
  );
}

function getGoalStatus(startDate: string) {
  const now = moment();
  const startsAt = moment(startDate, "YYYY-MM-DD").startOf("day");

  return {
    isOngoing: startsAt.isBefore(now),
    hasNotStarted: startsAt.isAfter(now),
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: Style.adjust(8),
    marginBottom: Style.adjust(16),
    padding: Style.adjust(16),
    borderWidth: StyleSheet.hairlineWidth,
  },
  notStarted: {
    backgroundColor: Colours.neutral.n50,
    borderColor: "#E7E7EB",
  },
  ongoing: {
    backgroundColor: "#EEF8FB",
    borderColor: "#BDE3F1",
  },
  expired: {
    backgroundColor: Colours.neutral.n100,
    borderColor: "#D3D3D6",
  },
  timeStatus: { alignItems: "flex-start" },
  marginVertical16: { marginVertical: Style.adjust(16) },
  marginVertical8: { marginVertical: Style.adjust(8) },
});
