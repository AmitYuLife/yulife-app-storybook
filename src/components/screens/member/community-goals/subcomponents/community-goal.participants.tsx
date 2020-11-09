import * as React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Text } from "@atoms";
import { Style } from "@styles";
import { GetCommunityGoals_getCommunityGoals } from "@graphql/_core/schema";
import { addCommasToNumber } from "@services/utils";

interface Props {
  hasNotStarted: boolean;
  goal: GetCommunityGoals_getCommunityGoals;
}

export function CommunityGoalParticipants({ goal, hasNotStarted }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <View style={styles.wrapper}>
        <ParticipantsStatus goal={goal} />
        {goal.participants.length > 0 ? (
          <Icon
            isExpired={goal.isExpired}
            hasNotStarted={hasNotStarted}
            isOpen={isOpen}
            onPress={() => setIsOpen((s) => !s)}
          />
        ) : null}
      </View>
      {!isOpen ? null : (
        <>
          <View style={styles.spacing} />
          <View>
            {
              <View style={[styles.wrapper, styles.participantWrapper]}>
                <Text bold={true} style={styles.textBase}>
                  Total
                </Text>
                <Text bold={true} style={styles.textBase}>
                  {addCommasToNumber(goal.participants.reduce((acc, i) => acc + (i?.stats?.value || 0), 0))}
                </Text>
              </View>
            }
            {goal.participants.map((p) => (
              <View key={p.userId} style={[styles.wrapper, styles.participantWrapper]}>
                <Text style={styles.textBase}>{p.nickname}</Text>
                <Text style={styles.textBase}>{addCommasToNumber(p.stats.value)}</Text>
              </View>
            ))}
          </View>
        </>
      )}
    </>
  );
}

const ICON_PATHS = {
  false: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM18 12H6m6-6v12",
  true: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM18 12H6",
};

interface IconProps {
  isOpen: boolean;
  hasNotStarted: boolean;
  isExpired: boolean;
  onPress: () => void;
}

const SIZE = Style.adjust(24);

function Icon({ isOpen, hasNotStarted, isExpired, onPress }: IconProps) {
  let stroke = "#9ED3E9";

  if (hasNotStarted || isExpired) {
    stroke = "#ABABAD";
  }

  return (
    <Svg onPress={onPress} width={SIZE} height={SIZE} viewBox="0 0 24 24" fill="none">
      <Path
        d={ICON_PATHS[String(isOpen) as "true" | "false"]}
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ParticipantsStatus({ goal }: Partial<Props>) {
  if (goal.isExpired) {
    return (
      <Text style={styles.textBase}>
        <Text bold={true}>{goal.participants.length}</Text> took part
      </Text>
    );
  }

  return (
    <Text style={styles.textBase}>
      <Text bold={true} style={styles.textBig}>
        {goal.participants.length}
      </Text>{" "}
      / {goal.maxJoiners} have joined
    </Text>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  participantWrapper: {
    height: Style.adjust(24),
  },
  spacing: {
    marginVertical: Style.adjust(8),
  },
  textBase: {
    fontSize: Style.adjust(16),
  },
  textBig: {
    fontSize: Style.adjust(24),
  },
});
