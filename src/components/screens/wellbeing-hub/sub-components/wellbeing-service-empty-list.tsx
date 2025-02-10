import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";
import { t } from "@locale";
import { HandWithHeartIcon } from "@atoms/icon/hand-with-heart-icon";

const WellBeingServiceEmptyList: FC = () => (
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <HandWithHeartIcon />
      <View style={styles.title}>
        <TextTemplate type="h2">{t("screens.wellbeing_hub.no_results.title")}</TextTemplate>
      </View>
      <TextTemplate type="b2" textAlign="center">
        {t("screens.wellbeing_hub.no_results.description")}
      </TextTemplate>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    flexGrow: 0.9,
    paddingHorizontal: Style.adjust(32),
    justifyContent: "center",
  } as ViewStyle,
  container: {
    alignItems: "center",
  } as ViewStyle,
  title: {
    marginTop: Style.adjust(32),
    marginBottom: Style.adjust(16),
  } as ViewStyle,
});

export default WellBeingServiceEmptyList;
