import React from "react";
import { Platform } from "react-native";
import { Text } from "@atoms";
import styles from "./daily-steps.screen.styles";
import { t } from "@locale";

const DailyStepsFitKitUnavailable = () => (
  <>
    <Text bold={true} style={styles.headingOffline}>
      {t("screens.daily.fitkit.unavailable.heading")}
    </Text>
    <Text style={styles.lastUpdate}>
      {Platform.select({
        android: t("screens.daily.fitkit.unavailable.subheading_android"),
        ios: t("screens.daily.fitkit.unavailable.subheading_ios"),
      })}
    </Text>
  </>
);

export default DailyStepsFitKitUnavailable;
