import React, { memo } from "react";
import { StyleSheet, ViewStyle, View, Platform, TextStyle } from "react-native";
import deviceInfoModule from "react-native-device-info";
import { SvgXml } from "react-native-svg";
import { Style, Colours } from "@styles";
import { GenericHeading, MinimalButton } from "@atoms";
import { TextWithBoldText, HorizontalScroller } from "@molecules";
import { personPencilSvg } from "./assets/person-pencil-svg";
import { EstimatedCost } from "./subcomponents/estimated-cost";

export interface IFibCustomPercentage {
  onNavigateBack: () => void;
  onNavigateForward: () => void;
  onNavigateToEditSalary: () => void;
  onChangeSalary: (activeIndex: number) => void;
  salaryPercentageRange: number[];
  estimatedCost: string;
  loadingEstimatedCost: boolean;
}

const copy = {
  caption: `Get an estimated quote using a\n<bold>custom percentage</bold> of your salary`,
};

export const FibCustomPercentage = memo(function (props: IFibCustomPercentage) {
  const {
    onNavigateBack,
    onNavigateForward,
    onChangeSalary,
    estimatedCost,
    loadingEstimatedCost,
    salaryPercentageRange,
    onNavigateToEditSalary,
  } = props;
  return (
    <View style={styles.wrapper}>
      <GenericHeading
        style={styles.headingWrapper}
        leftIcon="BACK"
        onLeftIconPress={onNavigateBack}
        heading="Create custom cover"
      />
      <View style={styles.content}>
        <SvgXml xml={personPencilSvg} />
        <View>
          <TextWithBoldText style={styles.caption} value={copy.caption} />
        </View>
        <View style={styles.percentagePickerWrapper}>
          <HorizontalScroller
            items={salaryPercentageRange}
            highlightLabel="%"
            highlightStyle={horizontalScrollerStyles.highlightStyle}
            activeTextStyle={horizontalScrollerStyles.activeTextStyle}
            highlightLabelStyle={horizontalScrollerStyles.highlightLabelStyle}
            highlightLabelWrapperStyle={horizontalScrollerStyles.highlightLabelWrapperStyle}
            newActiveIndexCallback={onChangeSalary}
          />
        </View>
        <EstimatedCost estimatedCost={estimatedCost} loading={loadingEstimatedCost} />
      </View>
      <View style={styles.floatBottom}>
        <View style={styles.promptForward}>
          <MinimalButton
            onPress={onNavigateForward}
            title="Continue"
            height={56}
            backgroundColor={Colours.darkHotPink}
            shadowColor={Colours.darkHotPinkShadow}
            titleStyle={styles.promptForwardLabel}
          />
        </View>
        <MinimalButton
          onPress={onNavigateToEditSalary}
          title="edit salary"
          height={48}
          titleStyle={styles.promptBackLabel}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    width: Style.DEVICE_WIDTH,
    flex: 1,
    backgroundColor: "white",
  } as ViewStyle,
  content: {
    flex: 1,
    width: Style.DEVICE_WIDTH,
    height: "100%",
    alignItems: "center",
    paddingTop: 88, // auto layout?
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
    maxWidth: Style.adjust(260),
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
    bottom: Platform.OS === "ios" && deviceInfoModule.hasNotch() ? 44 : 20,
  } as ViewStyle,
  percentagePickerWrapper: {
    width: Style.DEVICE_WIDTH,
    marginTop: Platform.select({ ios: Style.adjust(38), android: Style.adjust(24) }),
    paddingLeft: Platform.select({ ios: Style.adjust(14), android: Style.adjust(14) }),
    overflow: "hidden",
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
