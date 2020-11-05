import moment from "moment";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";
import { GetCommunityGoals_getCommunityGoals } from "@graphql/_core/schema";

interface Props {
  goal: GetCommunityGoals_getCommunityGoals;
}

export function CommunityGoalTimeStatus({ goal }: Props) {
  const now = moment();

  if (goal.isExpired) {
    const endsAt = moment(goal.endDate, "YYYY-MM-DD").endOf("day");
    const duration = moment.duration(now.diff(endsAt));
    const days = duration.days();

    return (
      <View style={[styles.wrapper, styles.expired]}>
        <Text bold={true} style={styles.text}>
          Ended {days}d ago
        </Text>
      </View>
    );
  }

  const startsAt = moment(goal.startDate, "YYYY-MM-DD").startOf("day");

  if (startsAt.isBefore(now)) {
    const endsAt = moment(goal.endDate, "YYYY-MM-DD").endOf("day");
    const duration = moment.duration(endsAt.diff(now));
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();

    return (
      <View style={[styles.wrapper, styles.ongoing]}>
        <Text bold={true} style={styles.text}>
          {days}d {hours}h {minutes}m remaining!
        </Text>
      </View>
    );
  }

  const duration = moment.duration(startsAt.diff(now));
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();

  return (
    <View style={[styles.wrapper, styles.notStarted]}>
      <Text bold={true} style={styles.text}>
        Starts in {days}d {hours}h {minutes}m!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(4),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Style.adjust(4),
  },
  notStarted: {
    backgroundColor: Colours.neutral.n100,
  },
  ongoing: {
    backgroundColor: "#BDE3F1",
  },
  expired: {
    backgroundColor: Colours.neutral.n200,
  },
  text: {
    fontSize: Style.adjust(10),
  },
});
