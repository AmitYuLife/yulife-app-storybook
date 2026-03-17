import * as React from "react";
import { Text } from "@atoms";
import styles from "./daily-steps.screen.styles";
import { t } from "@locale";

import { StyleSheet } from "@styles";
export interface IProps {
  isLight?: boolean;
  lastUpdate?: string;
}

const DailyStepsOffline = ({ isLight = false, lastUpdate }: IProps) => {
  const lightStyle = isLight ? styles.whiteText : {};
  const lastUpdateUnkow = t("labels.unknown");

  return (
    <>
      <Text bold={true} style={StyleSheet.flatten([styles.headingOffline, lightStyle])}>
        {t("screens.daily.offline.heading")}
      </Text>
      <Text style={StyleSheet.flatten([styles.lastUpdate, lightStyle])}>
        {t("screens.daily.offline.subheading", { lastUpdate: lastUpdate || lastUpdateUnkow })}
      </Text>
    </>
  );
};

export default DailyStepsOffline;
