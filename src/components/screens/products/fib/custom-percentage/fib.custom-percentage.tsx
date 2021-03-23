import React, { memo, useCallback } from "react";
import { StyleSheet, ViewStyle, View, Platform, TextStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import { Style, Colours } from "@styles";
import { Button, Text } from "@atoms";
import { HorizontalScroller } from "@molecules";
import { EstimatedCost } from "./subcomponents/estimated-cost";
import LinearGradient from "react-native-linear-gradient";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { CUSTOM_COVER_SCREEN } from "@ids";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { customCoverPromptSVG } from "../browse-packages/subcomponents/custom-cover-prompt/assets/icon";

export interface IFibCustomPercentage {
  onNavigateBack: () => void;
  onNavigateForward: () => void;
  onChangeSalary: (activeIndex: number) => void;
  salaryPercentageRange: number[];
  estimatedCost: string;
  loadingEstimatedCost: boolean;
}

const GRADIENT_COLOR = ["rgba(255, 255, 255, 0)", "rgba(217, 217, 217, 0.67)", "rgba(243, 243, 243, 0)"];

export const FibCustomPercentage = memo(function (props: IFibCustomPercentage) {
  const {
    onNavigateBack,
    onNavigateForward,
    onChangeSalary,
    estimatedCost,
    loadingEstimatedCost,
    salaryPercentageRange,
  } = props;

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  return (
    <View style={styles.wrapper} testID={CUSTOM_COVER_SCREEN}>
      <GenericHeadingPad />
      <View style={styles.content}>
        <SvgXml xml={customCoverPromptSVG} width={48} height={48} />
        <View>
          <Text style={styles.caption}>Select the percentage of your salary you want to cover</Text>
        </View>
        <LinearGradient
          pointerEvents="none"
          colors={GRADIENT_COLOR}
          style={styles.gradientTop}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
        <View style={styles.percentagePickerWrapper}>
          <HorizontalScroller
            items={salaryPercentageRange}
            highlightLabel="%"
            highlightStyle={horizontalScrollerStyles.highlightStyle}
            activeTextStyle={horizontalScrollerStyles.activeTextStyle}
            highlightLabelStyle={horizontalScrollerStyles.highlightLabelStyle}
            highlightLabelWrapperStyle={horizontalScrollerStyles.highlightLabelWrapperStyle}
            newActiveIndexCallback={onChangeSalary}
            gradientLeftStyle={styles.gradientLeftStyle}
          />
        </View>
        <EstimatedCost estimatedCost={estimatedCost} loading={loadingEstimatedCost} />
        <LinearGradient
          pointerEvents="none"
          colors={GRADIENT_COLOR}
          style={styles.gradientBottom}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </View>
      <View style={styles.floatBottom}>
        <View style={styles.promptForward}>
          <Button onPress={onNavigateForward} label="Continue" type="Primary" />
        </View>
      </View>
      <GenericHeadingAbsolute
        style={styles.headingWrapper}
        leftIcon="BACK"
        onLeftIconPress={onNavigateBack}
        logo="yulife"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH,
    flex: 1,
    backgroundColor: "white",
  } as ViewStyle,
  gradientLeftStyle: {
    width: Style.DEVICE_WIDTH / 8,
  } as ViewStyle,
  content: {
    flex: 1,
    width: Style.DEVICE_WIDTH,
    height: "100%",
    alignItems: "center",
    paddingTop: 96, // auto layout?
  } as ViewStyle,
  headingWrapper: {
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  markdownContainer: {
    maxWidth: Style.adjust(287),
    textAlign: "center",
  } as ViewStyle,
  caption: {
    letterSpacing: 1,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    textAlign: "center",
    marginTop: Style.adjust(8),
    maxWidth: Style.adjust(277),
  } as TextStyle,
  promptForward: {
    width: Style.DEVICE_WIDTH - 70,
    alignSelf: "center",
  } as ViewStyle,
  promptForwardLabel: {
    color: "white",
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  promptBackLabel: {
    color: Colours.darkHotPink,
    textDecorationLine: "underline",
  } as TextStyle,
  floatBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: Style.adjust(44),
  } as ViewStyle,
  percentagePickerWrapper: {
    width: Style.DEVICE_WIDTH,
    marginTop: Platform.select({ ios: Style.adjust(38), android: Style.adjust(24) }),
    paddingLeft: Platform.select({ ios: Style.adjust(14), android: Style.adjust(14) }),
    overflow: "hidden",
  } as ViewStyle,
  gradientBottom: {
    width: Style.DEVICE_WIDTH,
    height: 1,
    marginTop: Style.adjust(28),
  } as ViewStyle,
  gradientTop: {
    width: Style.DEVICE_WIDTH,
    height: 1,
    marginTop: Style.adjust(32),
    marginBottom: Style.adjust(-20),
  } as ViewStyle,
});

const horizontalScrollerStyles = StyleSheet.create({
  highlightStyle: {
    left: Style.DEVICE_WIDTH / 2 - HorizontalScroller.DEFAULT_HIGHLIGHT_RADIUS - 16,
    top: Platform.select({ ios: 0, android: 4 }),
    backgroundColor: "#FFF3F9",
    opacity: 1,
    borderWidth: 1,
    borderColor: "#F262A8",
    width: 78,
  } as ViewStyle,
  activeTextStyle: {
    color: "#F262A8",
  } as TextStyle,
  highlightLabelStyle: {
    color: "#F262A8",
  } as ViewStyle,
  highlightLabelWrapperStyle: {
    top: Platform.select({ ios: 4, android: 8 }),
    left: Style.DEVICE_WIDTH / 2 - HorizontalScroller.DEFAULT_HIGHLIGHT_RADIUS + 12,
  } as ViewStyle,
});
