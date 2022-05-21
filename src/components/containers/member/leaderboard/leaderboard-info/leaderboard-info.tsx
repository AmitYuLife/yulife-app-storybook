import React, { useCallback } from "react";
import { Text } from "@atoms";
import { StyleSheet, TextStyle, ViewStyle, View } from "react-native";
import { LEADERBOARD_INFO } from "@ids";
import { Style } from "@styles";
import { Navigation } from "react-native-navigation";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useBackHandler } from "@hooks";

interface IProps {
  componentId: string;
  onLeftIconPress?: () => void;
}

const copy = `The leaderboards are set to a 30 day rolling system. That means they show your step history for just the last 30 days.\n\nTo keep your steps up, aim to do more than you did 30 days ago!`;

function LeaderboardInfoScreen({ componentId }: IProps) {
  const goBack = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  useBackHandler(() => {
    goBack();
    return true;
  });

  return (
    <View style={styles.wrapper} testID={LEADERBOARD_INFO}>
      <GenericHeadingPad />
      <Text style={styles.text}>{copy}</Text>
      <GenericHeadingAbsolute heading="About Leaderboards" onLeftIconPress={goBack} />
    </View>
  );
}

export default LeaderboardInfoScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
    color: "#5A5A5C",
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    marginTop: Style.SCALE_UP_AND_DOWN(31),
    marginLeft: Style.SCALE_UP_AND_DOWN(24),
    marginRight: Style.SCALE_UP_AND_DOWN(24),
  } as TextStyle,
});
