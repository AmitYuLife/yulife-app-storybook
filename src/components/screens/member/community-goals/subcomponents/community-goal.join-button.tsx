import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "@atoms";
import { Style, Colours } from "@styles";
import { JOIN_COMMUNITY_GOAL_BUTTON } from "@ids";

interface Props {
  isExpired: boolean;
  hasNotStarted: boolean;
  isOngoing: boolean;
  youHaveJoined: boolean;
  onPress: () => void;
}

export function CommunityGoalJoinButton({ youHaveJoined, isExpired, isOngoing, onPress }: Props) {
  if (youHaveJoined) {
    return (
      <Text style={isOngoing ? styles.joinedOngoing : styles.joinedDefault}>
        {isExpired ? "You joined this." : "You’ve already joined this."}
      </Text>
    );
  }

  return (
    <Button
      wrapperStyle={styles.buttonWrapper}
      label="Join the challenge!"
      onPress={onPress}
      testID={JOIN_COMMUNITY_GOAL_BUTTON}
    />
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingHorizontal: Style.adjust(8),
  },
  joinedDefault: { color: Colours.neutral.n500 },
  joinedOngoing: { color: "#7892B3" },
});
