import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Button, InfoPanel } from "@molecules";
import { IMAGE, IMAGE_SIZE, styles } from "./smoking-streak-lapsed.styles";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { VoidFunction } from "@utils";
import { t } from "@locale";
import { SMOKING_LAPSE_SCREEN_1, SMOKING_LAPSE_SCREEN_HEADER, SMOKING_LAPSE_SCREEN_IMAGE } from "@ids";

interface Props {
  smokingState: HealthSmokingState;
  onSubmit: VoidFunction;
}

export const SmokingStreakLapsedPage1 = memo(({ smokingState, onSubmit }: Props) => (
  <>
    <ScrollView
      overScrollMode="never"
      bounces={false}
      style={styles.scrollview}
      showsVerticalScrollIndicator={false}
      testID={SMOKING_LAPSE_SCREEN_1}
    >
      <View style={styles.imageWrapper} testID={SMOKING_LAPSE_SCREEN_IMAGE}>
        <Image source={IMAGE} width={IMAGE_SIZE} height={IMAGE_SIZE} />
      </View>
      <TextTemplate type="h3" textAlign="center" testID={SMOKING_LAPSE_SCREEN_HEADER}>
        {t("modals.smoking_streak_lapsed.page_1.title")}
      </TextTemplate>
      <View style={styles.textBody}>
        <TextTemplate type="b2" textAlign="center">
          {t("modals.smoking_streak_lapsed.page_1.text_1")}
        </TextTemplate>
        <TextTemplate type="b2" textAlign="center">
          {t("modals.smoking_streak_lapsed.page_1.text_2")}
        </TextTemplate>
      </View>
      <InfoPanel
        type="info"
        showIcon={true}
        titleMarkdown={t("modals.smoking_streak_lapsed.page_1.info_title")}
        markdown={t("modals.smoking_streak_lapsed.page_1.info", { goal: smokingState.maxStreak })}
      />
      <View style={styles.bottomPad} />
    </ScrollView>
    <View style={styles.buttonSection}>
      <Button
        testID="smoking-lapsed-next-button"
        translationKey={"modals.smoking_streak_lapsed.page_1.cta"}
        onPress={onSubmit}
        size="Fill"
      />
    </View>
  </>
));
