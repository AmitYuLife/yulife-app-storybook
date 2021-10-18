import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { CyclingIcon } from "@atoms/icon/cycling-icon";
import { MindfulnessIcon } from "@atoms/icon/mindfulness-icon";
import { StepsIcon } from "@atoms/icon/steps-icon";
import { TextTemplate } from "@atoms";
import { Style, Colours } from "@styles";
import { Counter } from "@molecules";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";
import { STEPS_COUNT } from "@ids";

interface IProps {
  steps: number;
  cycling: number;
  mindfulness: string;
  textColor?: string;
}

const ActivityList = memo(({ steps, cycling, mindfulness, textColor = Colours.neutral.n900 }: IProps) => {
  const counterStyle = useMemo(
    () => ({
      ...textTemplateStyle.b2,
      color: textColor,
    }),
    [textColor]
  );

  return (
    <View style={styles.wrapper}>
      {!steps ? null : (
        <View style={styles.container}>
          <StepsIcon color={textColor} />
          <View style={styles.textWrapper}>
            <TextTemplate type="b2" color={textColor} testID={STEPS_COUNT(steps)}>
              <Counter duration={1200} value={steps} textStyle={counterStyle} />
            </TextTemplate>
          </View>
        </View>
      )}
      {!cycling ? null : (
        <View style={styles.container}>
          <CyclingIcon color={textColor} />
          <View style={styles.textWrapper}>
            <TextTemplate type="b2" color={textColor}>
              <Counter duration={1200} value={cycling} textStyle={counterStyle} /> km
            </TextTemplate>
          </View>
        </View>
      )}
      {!mindfulness ? null : (
        <View style={styles.container}>
          <MindfulnessIcon color={textColor} />
          <View style={styles.textWrapper}>
            <TextTemplate type="b2" color={textColor}>
              {mindfulness}
            </TextTemplate>
          </View>
        </View>
      )}
    </View>
  );
});

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
