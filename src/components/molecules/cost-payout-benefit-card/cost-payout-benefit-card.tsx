import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { PackageType } from "@molecules";
import { mapCoverTypeToColorTheme, Style } from "@styles";
import { Colours, StyleSheet } from "@styles";
import Markdown from "../markdown/markdown";
import { TEXT_TEMPLATE } from "@ids";
import { CoverType } from "@graphql/__generated";

interface Props {
  costValue: string;
  costDescription: string;
  coverType: CoverType;
  benefitDescription: string;
  benefitValue: string;
  benefitIntervalMarkdown: string;
}

const CostPayoutBenefitCard = (props: Props) => {
  const { costValue, costDescription, coverType, benefitDescription, benefitIntervalMarkdown, benefitValue } = props;

  const adaptiveCostValueTextType = getAdaptiveCostValueTextType(costValue.length);

  return (
    <View>
      <View style={[styles.innerWrapper, { backgroundColor: mapCoverTypeToColorTheme(coverType).primary }]}>
        <View style={styles.costWrapper}>
          <TextTemplate color={Colours.neutral.white} type={adaptiveCostValueTextType}>
            {costValue}
          </TextTemplate>
          <View style={styles.costDescriptionWrapper}>
            <TextTemplate color={Colours.neutral.white} type="l1b">
              {costDescription}
            </TextTemplate>
          </View>
          <View style={styles.packageTypeWrapper}>
            <PackageType type={coverType} minWidth={0} />
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.benefitWrapper}>
          <TextTemplate color={Colours.neutral.white} type="l1" testID={TEXT_TEMPLATE(benefitDescription)}>
            {benefitDescription}
          </TextTemplate>
          <View style={styles.benefitValueWrapper}>
            <TextTemplate color={Colours.neutral.white} type="b1b">
              {benefitValue}
            </TextTemplate>
          </View>
          <Markdown text={benefitIntervalMarkdown} markdownStyles={benefitIntervalMarkdownStyle} />
        </View>
      </View>
    </View>
  );
};

export default memo(CostPayoutBenefitCard);

function getAdaptiveCostValueTextType(length: number) {
  if (length > 8) {
    return "b1b";
  }

  if (length > 7) {
    return "h3";
  }

  return "h1";
}

const styles = StyleSheet.create({
  innerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: Style.adjust(20),
    borderRadius: Style.adjust(8),
  } as ViewStyle,
  costWrapper: {
    flex: 0.46,
    justifyContent: "center",
  } as ViewStyle,
  benefitWrapper: {
    flex: 0.54,
    justifyContent: "center",
    paddingVertical: Style.adjust(4),
  } as ViewStyle,
  separator: {
    width: 1,
    height: "100%",
    marginHorizontal: Style.adjust(16),
    backgroundColor: Colours.neutral.white,
    opacity: 0.16,
  } as ViewStyle,
  packageTypeWrapper: {
    marginTop: Style.adjust(12),
  } as ViewStyle,
  benefitValueWrapper: {
    marginTop: Style.adjust(12),
  } as ViewStyle,
  costDescriptionWrapper: {
    marginTop: Style.adjust(-8),
  } as ViewStyle,
});

const benefitIntervalMarkdownStyle = {
  text: {
    color: Colours.neutral.white,
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(16),
  },
};
