import React, { memo, useMemo } from "react";
import { View } from "react-native";

import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { CHALLENGE_DETAILS_BADGE } from "@ids";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

export enum ChallengeDetailsBadgeIntent {
  boost = "boost",
  surge = "surge",
}

export interface IChallengeDetailsBadgeProps {
  text: string;
  icon?: React.ReactNode;
  intent: ChallengeDetailsBadgeIntent;
}

const ChallengeDetailsBadgeComponent: React.FC<IChallengeDetailsBadgeProps> = ({ text, intent, icon }) => {
  const { theme } = useTheme();
  const intentStyles = useMemo((): { background: string; text: string } => {
    switch (intent) {
      case ChallengeDetailsBadgeIntent.boost:
        return { background: theme.colors.primary.p40, text: theme.colors.primary.p600 };
      default:
        return { background: Colours.secondary.s100S3, text: Colours.neutral.white };
    }
  }, [intent, theme.colors.primary.p40, theme.colors.primary.p600]);

  return (
    <View style={[styles.badge, { backgroundColor: intentStyles.background }]} testID={CHALLENGE_DETAILS_BADGE(text)}>
      {icon ? <View style={styles.badgeIcon}>{icon}</View> : null}
      <TextTemplate type="l2b" color={intentStyles.text}>
        {text}
      </TextTemplate>
    </View>
  );
};

export const ChallengeDetailsBadge = memo(ChallengeDetailsBadgeComponent);

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
