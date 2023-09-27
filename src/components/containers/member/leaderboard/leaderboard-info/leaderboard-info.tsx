import React, { useCallback } from "react";
import { TextTemplate } from "@atoms";
import { StyleSheet, ViewStyle, View, ScrollView } from "react-native";
import { LEADERBOARD_INFO } from "@ids";
import { Style } from "@styles";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useBackHandler } from "@hooks";
import { t } from "@locale";

interface IProps {
  componentId: string;
}

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
      <ScrollView>
        <GenericHeadingPad />
        <TextTemplate type="h2">{t("screens.leaderboard.podium.info_heading")}</TextTemplate>
        <View style={styles.sectionContainer}>
          <TextTemplate type="b1b">{t("screens.leaderboard.podium.communities_info.heading")}</TextTemplate>
          <TextTemplate type="b2">{t("screens.leaderboard.podium.communities_info.content")}</TextTemplate>
        </View>
        <View style={styles.sectionContainer}>
          <TextTemplate type="b1b">{t("screens.leaderboard.podium.steps_info.heading")}</TextTemplate>
          <TextTemplate type="b2">{t("screens.leaderboard.podium.steps_info.content")}</TextTemplate>
        </View>
        {/* <View style={styles.sectionContainer}>
          <TextTemplate type="b1b">{t("screens.leaderboard.podium.cycling_info.heading")}</TextTemplate>
          <TextTemplate type="b2">{t("screens.leaderboard.podium.cycling_info.content")}</TextTemplate>
        </View> */}
        <View style={styles.sectionContainer}>
          <TextTemplate type="b1b">{t("screens.leaderboard.podium.yudoku_info.heading")}</TextTemplate>
          <TextTemplate type="b2">{t("screens.leaderboard.podium.yudoku_info.content")}</TextTemplate>
        </View>
        <View style={styles.sectionContainer}>
          <TextTemplate type="b1b">{t("screens.leaderboard.podium.opting_info.heading")}</TextTemplate>
          <TextTemplate type="b2">{t("screens.leaderboard.podium.opting_info.content")}</TextTemplate>
        </View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={goBack} />
    </View>
  );
}

export default LeaderboardInfoScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    paddingVertical: Style.adjust(20),
  },
  wrapper: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: Style.adjust(24),
    paddingTop: Style.adjust(24),
  } as ViewStyle,
});
