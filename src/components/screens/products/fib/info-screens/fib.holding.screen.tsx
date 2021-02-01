import React, { memo, useCallback } from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Colours, Style } from "@styles";
import { useBackHandler } from "@services/hooks/useBackHandler";
import YugiProcessing from "@components/screens/products/fib/info-screens/yugi-assets/yugi-processing";
import YugiResults from "@components/screens/products/fib/info-screens/yugi-assets/yugi-results";
import YugiWaiting from "@components/screens/products/fib/info-screens/yugi-assets/yugi-waiting";
import StepNumber, { ValidStepNumber } from "@components/screens/products/fib/info-screens/step-number";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

export type HoldingYugiType = "waiting" | "processing" | "results";
type HoldingSteps = {
  title: string;
  completed: boolean;
  active: boolean;
};

export interface FibHoldingScreenProps {
  onBackHandler: () => void;
  icon: HoldingYugiType;
  title: string;
  message: string;
  allCompleted: boolean;
  steps: HoldingSteps[];
}

export const FibHoldingScreen = memo(function (props: FibHoldingScreenProps) {
  const { onBackHandler, steps, icon, title, message, allCompleted } = props;

  const backHandler = useCallback(() => {
    onBackHandler();
    return true;
  }, [onBackHandler]);

  useBackHandler(backHandler);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.yugiWrapper}>{getYugiIcon(icon)}</View>
      <View style={styles.textWrapper}>
        <Text bold={true} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View style={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <View key={step.title + index} style={styles.iconTextWrapper}>
            <View style={styles.iconWrapper}>
              <StepNumber completed={step.completed} number={(index + 1) as ValidStepNumber} active={step.active} />
            </View>
            <Text bold={true} style={[styles.text, step.active && styles.activeText]}>
              {step.title}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonWrapper}>
        {allCompleted && <Button label="Continue" type="Primary" onPress={onBackHandler} />}
      </View>
      <GenericHeadingAbsolute
        onLeftIconPress={allCompleted && onBackHandler}
        onRightIconPress={!allCompleted && onBackHandler}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  yugiWrapper: {
    margin: Style.adjust(32),
    alignItems: "center",
  } as ViewStyle,
  textWrapper: {
    marginHorizontal: Style.adjust(32),
    alignItems: "center",
  } as ViewStyle,
  message: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    color: Colours.neutral.n700,
    textAlign: "center",
  } as TextStyle,
  title: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: Style.adjust(1),
    color: Colours.neutral.n800,
    textAlign: "center",
    marginBottom: Style.adjust(16),
  } as TextStyle,
  stepsWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    margin: Style.adjust(32),
    alignItems: "center",
  } as ViewStyle,
  buttonWrapper: {
    marginBottom: Style.adjust(32),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    color: Colours.neutral.n400,
  } as TextStyle,
  activeText: {
    color: Colours.forest.fp306,
  } as TextStyle,
  iconTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  iconWrapper: {
    position: "relative",
    marginLeft: Style.adjust(Style.DEVICE_WIDTH / 4),
    marginRight: Style.adjust(16),
  } as ViewStyle,
});

function getYugiIcon(icon: HoldingYugiType) {
  switch (icon) {
    case "processing":
      return <YugiProcessing />;
    case "results":
      return <YugiResults />;
    case "waiting":
    default:
      return <YugiWaiting />;
  }
}
