import React, { memo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { ActivityHistoryCalendarIcon } from "@atoms/icon/activity-history-calendar-icon";
import { t } from "@locale";
import { NAV_BAR, Style, StyleSheet } from "@styles";

const ActivityHistoryEmpty = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityHistoryCalendarIcon />
      <View style={styles.description}>
        <TextTemplate type="b2" textAlign="center">
          {t("screens.activity_history.empty_message")}
        </TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: Style.DEVICE_HEIGHT - NAV_BAR.DEFAULT_FULL_HEIGHT * 2,
  },
  description: {
    marginTop: Style.adjust(32),
  },
});

export default memo(ActivityHistoryEmpty);
