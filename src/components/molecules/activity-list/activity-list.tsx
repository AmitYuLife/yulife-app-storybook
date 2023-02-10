import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { CyclingIcon } from "@atoms/icon/cycling-icon";
import { MindfulnessIcon } from "@atoms/icon/mindfulness-icon";
import { StepsIcon } from "@atoms/icon/steps-icon";
import { TextTemplate } from "@atoms";
import { Style, Colours } from "@styles";
import { Counter } from "@molecules";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";
import { STEPS_COUNT, CYCLING_COUNT, MINDFUL_COUNT } from "@ids";
import { t } from "@locale";

interface IProps {
  steps: number;
  cycling: string;
  mindfulness: string;
  stepsAccessibilityLabel: string;
  cyclingAccessibilityLabel: string;
  mindfulnessAccessibilityLabel: string;
  textColor?: string;
}

const ActivityList = memo(
  ({
    steps,
    cycling,
    mindfulness,
    stepsAccessibilityLabel,
    cyclingAccessibilityLabel,
    mindfulnessAccessibilityLabel,
    textColor = Colours.neutral.n900,
  }: IProps) => {
    const counterStyle = useMemo(
      () => ({
        ...textTemplateStyle.b2,
        color: textColor,
      }),
      [textColor]
    );

    return (
      <View style={styles.wrapper}>
        <View style={styles.container} accessibilityLabel={stepsAccessibilityLabel}>
          <StepsIcon color={textColor} />
          <View style={styles.textWrapper}>
            <TextTemplate type="b2" color={textColor} testID={STEPS_COUNT(steps)}>
              <Counter
                duration={1200}
                value={steps}
                textStyle={counterStyle}
                textAfterValue={steps === 1 ? t("activity_types.steps.singular") : t("activity_types.steps.plural")}
              />
            </TextTemplate>
          </View>
        </View>
        {!cycling ? null : (
          <View style={styles.container} accessibilityLabel={cyclingAccessibilityLabel}>
            <CyclingIcon color={textColor} />
            <View style={styles.textWrapper}>
              <TextTemplate type="b2" color={textColor} testID={CYCLING_COUNT(cycling)}>
                {cycling}
              </TextTemplate>
            </View>
          </View>
        )}
        {!mindfulness ? null : (
          <View style={styles.container} accessibilityLabel={mindfulnessAccessibilityLabel}>
            <MindfulnessIcon color={textColor} />
            <View style={styles.textWrapper}>
              <TextTemplate type="b2" color={textColor} testID={MINDFUL_COUNT(mindfulness)}>
                {mindfulness}
              </TextTemplate>
            </View>
          </View>
        )}
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
    marginLeft: Style.adjust(4),
  },
});

export default ActivityList;
