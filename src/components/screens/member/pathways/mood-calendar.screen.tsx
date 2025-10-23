import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { StyleSheet } from "@styles";
import { GenericHeadingAbsolute, GenericHeadingPad, MoodCalendar } from "@organisms";
import { IMonth } from "@organisms/mood-calendar/mood-month";
import { t } from "@locale";

export interface IMoodCalendarScreenProps {
  onClose: () => void;
  data: IMonth[];
  onEndReached: () => void;
  loading: boolean;
}

const MoodCalendarScreen = memo(({ onClose, data, onEndReached, loading }: IMoodCalendarScreenProps) => {
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <MoodCalendar data={data} onEndReached={onEndReached} loading={loading} />
      <GenericHeadingAbsolute heading={t("screens.mood-calendar.title")} onRightIconPress={onClose} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

export default memo(MoodCalendarScreen);
