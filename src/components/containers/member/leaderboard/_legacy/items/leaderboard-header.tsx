import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { LinkButton } from "@molecules";

export interface ILeaderboardHeaderProps {
  onBack: () => void;
}

const _LeaderboardHeader = (props: ILeaderboardHeaderProps) => {
  const { onBack } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.ellipseWrapper}>
        <Text>...</Text>
      </View>
      <View style={styles.backWrapper}>
        <LinkButton label="Back to top" onPress={onBack} />
      </View>
    </View>
  );
};

export const LeaderboardHeader = memo(_LeaderboardHeader);

const styles = {
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  ellipseWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    paddingLeft: 24,
    paddingBottom: 16,
  } as ViewStyle,
  backWrapper: {
    marginLeft: "auto",
    paddingRight: 8,
    paddingTop: 16,
    paddingBottom: 16,
  } as ViewStyle,
};
