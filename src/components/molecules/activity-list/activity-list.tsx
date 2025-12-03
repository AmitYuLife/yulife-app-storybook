import React, { memo } from "react";
import { View } from "react-native";
import { CyclingIcon } from "@atoms/icon/cycling-icon";
import { MindfulnessIcon } from "@atoms/icon/mindfulness-icon";
import { StepsIcon } from "@atoms/icon/steps-icon";
import { TextTemplate } from "@atoms";
import { Style, Colours, StyleSheet } from "@styles";
import { Counter } from "@molecules";
import { STEPS_COUNT, CYCLING_COUNT, MINDFUL_COUNT } from "@ids";
import { t } from "@locale";
import { PiggyCoinIcon } from "@atoms/icon/piggy-coin-icon";

interface IProps {
  steps: number;
  cycling: string;
  mindfulness: string;
  isPensionActive: boolean;
  pension: string;
  stepsAccessibilityLabel: string;
  cyclingAccessibilityLabel: string;
  mindfulnessAccessibilityLabel: string;
  pensionAccessibilityLabel: string;
  textColor?: string;
  showUnsynced?: boolean;
}

const ActivityList = memo(
  ({
    steps,
    cycling,
    mindfulness,
    isPensionActive,
    pension,
    stepsAccessibilityLabel,
    cyclingAccessibilityLabel,
    mindfulnessAccessibilityLabel,
    pensionAccessibilityLabel,
    textColor = Colours.neutral.n900,
    showUnsynced,
  }: IProps) => {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container} accessibilityLabel={stepsAccessibilityLabel}>
          <StepsIcon width={16} height={16} colour={textColor} />
          <View style={styles.textWrapper}>
            <TextTemplate type="b2" color={textColor} testID={STEPS_COUNT(steps)}>
              {showUnsynced ? (
                "-"
              ) : (
                <Counter
                  duration={1200}
                  value={steps}
                  type="b2"
                  color={textColor}
                  textAfterValue={steps === 1 ? t("activity_types.steps.singular") : t("activity_types.steps.plural")}
                />
              )}
            </TextTemplate>
          </View>
        </View>
        {cycling || showUnsynced ? (
          <View style={styles.container} accessibilityLabel={cyclingAccessibilityLabel}>
            <CyclingIcon width={16} height={16} colour={textColor} />
            <View style={styles.textWrapper}>
              <TextTemplate type="b2" color={textColor} testID={CYCLING_COUNT(cycling)}>
                {showUnsynced ? "-" : cycling}
              </TextTemplate>
            </View>
          </View>
        ) : null}
        {!(isPensionActive && pension) ? null : (
          <View style={styles.container} accessibilityLabel={pensionAccessibilityLabel}>
            <PiggyCoinIcon color={textColor} />
            <View style={styles.textWrapper}>
              <TextTemplate type="b2" color={textColor}>
                {pension}
              </TextTemplate>
            </View>
          </View>
        )}
        {mindfulness || showUnsynced ? (
          <View style={styles.container} accessibilityLabel={mindfulnessAccessibilityLabel}>
            <MindfulnessIcon color={textColor} />
            <View style={styles.textWrapper}>
              <TextTemplate type="b2" color={textColor} testID={MINDFUL_COUNT(mindfulness)}>
                {showUnsynced ? "-" : mindfulness}
              </TextTemplate>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: Style.adjust(8),
  },
  textWrapper: {
    marginStart: Style.adjust(4),
  },
});

export default ActivityList;
