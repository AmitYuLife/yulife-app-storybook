import React, { memo, useCallback, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import moment from "moment";
import { TextTemplate } from "@atoms";
import { Button, Markdown } from "@molecules";
import { DatePicker } from "@organisms";
import { styles } from "./smoking-streak-lapsed.styles";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { DATE_FORMAT, getDateTimeWithoutTzAsUtc } from "@utils";
import { t } from "@locale";
import { SMOKING_LAPSE_SCREEN_2 } from "@ids";

interface Props {
  smokingState: HealthSmokingState;
  onSubmit: (date: string) => void;
}

export const SmokingStreakLapsedPage2 = memo(({ smokingState, onSubmit }: Props) => {
  const [date, setDate] = useState("");

  const { minDate, maxDate } = useMemo(
    () => ({
      minDate: getDateTimeWithoutTzAsUtc(smokingState?.lastStreakUpdate).add(1, "day").format(),
      maxDate: moment().format(),
    }),
    [smokingState]
  );

  const onPress = useCallback(() => {
    onSubmit(date);
  }, [onSubmit, date]);

  return (
    <>
      <ScrollView
        overScrollMode="never"
        bounces={false}
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
        testID={SMOKING_LAPSE_SCREEN_2}
      >
        <View style={styles.title}>
          <TextTemplate type="h3">{t("modals.smoking_streak_lapsed.page_2.title")}</TextTemplate>
        </View>
        <View style={styles.markdown}>
          <Markdown text={t("modals.smoking_streak_lapsed.page_2.markdown")} />
        </View>
        <DatePicker dateFormat={DATE_FORMAT} minDate={minDate} maxDate={maxDate} large={true} onChange={setDate} />
        <View style={styles.bottomPad} />
      </ScrollView>
      <View style={styles.buttonSection}>
        <Button
          testID="smoking-lapsed-submit-button"
          translationKey={"modals.smoking_streak_lapsed.page_2.cta"}
          onPress={onPress}
          size="Fill"
          disabled={!date}
        />
      </View>
    </>
  );
});
