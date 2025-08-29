import React, { memo } from "react";
import { View } from "react-native";
import { SkeletonLoading } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Style, StyleSheet } from "@styles";
import { t } from "@locale";

interface IProps {
  handleClose: () => void;
}

const TodayEarningLoadingScreen = ({ handleClose }: IProps) => (
  <View style={styles.wrapper}>
    <GenericHeadingPad />
    <View style={styles.body}>
      <SkeletonLoading style={styles.header} />
      <SkeletonLoading style={styles.activity} />
      <SkeletonLoading style={styles.activity} />
      <SkeletonLoading style={styles.activity} />
    </View>
    <GenericHeadingAbsolute heading={t("screens.today_earning.heading.title")} onLeftIconPress={handleClose} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  body: {
    marginHorizontal: Style.adjust(24),
  },

  header: {
    width: "100%",
    height: Style.adjust(183),
    marginTop: Style.adjust(12),
  },
  activity: {
    width: "100%",
    height: Style.adjust(226),
    marginTop: Style.adjust(12),
  },
});

export default memo(TodayEarningLoadingScreen);
