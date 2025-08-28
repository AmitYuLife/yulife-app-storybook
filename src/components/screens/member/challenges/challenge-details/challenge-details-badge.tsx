import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { CHALLENGE_DETAILS_BADGE } from "@ids";

export enum ChallengeDetailsBadgeIntent {
  boost = "boost",
  surge = "surge",
}

export interface IChallengeDetailsBadgeProps {
  text: string;
  icon?: JSX.Element;
  intent: ChallengeDetailsBadgeIntent;
}

export const ChallengeDetailsBadge = memo(({ text, intent, icon }: IChallengeDetailsBadgeProps): JSX.Element => {
  const intentStyles = useMemo((): { background: string; text: string } => {
    switch (intent) {
      case ChallengeDetailsBadgeIntent.boost:
        return { background: Colours.primary.p40, text: Colours.primary.p600 };
      default:
        return { background: Colours.secondary.s100S3, text: Colours.neutral.white };
    }
  }, [intent]);

  return (
    <View style={[styles.badge, { backgroundColor: intentStyles.background }]} testID={CHALLENGE_DETAILS_BADGE(text)}>
      {icon ? <View style={styles.badgeIcon}>{icon}</View> : null}
      <TextTemplate type="l2b" color={intentStyles.text}>
        {text}
      </TextTemplate>
    </View>
  );
});

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginEnd: Style.adjust(5),
    borderRadius: Style.adjust(8),
    paddingVertical: Style.adjust(2),
    paddingHorizontal: Style.adjust(10),
  },
  badgeIcon: {
    marginEnd: Style.adjust(5),
  },
});
