import React, { useCallback } from "react";
import { Box, TextTemplate } from "@atoms";
import { ViewStyle, View, ScrollView } from "react-native";
import { LEADERBOARD_INFO } from "@ids";
import { Style, TOP_BAR, StyleSheet } from "@styles";
import { Navigation } from "@navigation/main";
import { GenericHeadingAbsolute } from "@organisms";
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
      <ScrollView style={styles.scrollView}>
        <Box p={24}>
          <TextTemplate type="h2">{t("screens.leaderboard.podium.info_heading")}</TextTemplate>
          <View style={styles.sectionContainer}>
            <TextTemplate type="b1b">{t("screens.leaderboard.podium.communities_info.heading")}</TextTemplate>
            <TextTemplate type="b2">{t("screens.leaderboard.podium.communities_info.content")}</TextTemplate>
          </View>
          <View style={styles.sectionContainer}>
            <TextTemplate type="b1b">{t("screens.leaderboard.podium.steps_info.heading")}</TextTemplate>
            <TextTemplate type="b2">{t("screens.leaderboard.podium.steps_info.content")}</TextTemplate>
          </View>
          <View style={styles.sectionContainer}>
            <TextTemplate type="b1b">{t("screens.leaderboard.podium.yudoku_info.heading")}</TextTemplate>
            <TextTemplate type="b2">{t("screens.leaderboard.podium.yudoku_info.content")}</TextTemplate>
          </View>
          <View style={styles.sectionContainer}>
            <TextTemplate type="b1b">{t("screens.leaderboard.podium.opting_info.heading")}</TextTemplate>
            <TextTemplate type="b2">{t("screens.leaderboard.podium.opting_info.content")}</TextTemplate>
          </View>
        </Box>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={goBack} />
    </View>
  );
}

export default LeaderboardInfoScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: Style.adjust(40),
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  scrollView: {
    ...StyleSheet.absoluteFillObject,
    top: TOP_BAR.TOP_BAR_WITH_PAD,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
});
