import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { PackageType, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { CoverType } from "@graphql/_core/schema/globalTypes";

interface Props {
  SlotIcon: JSX.Element;
  color: string;
  coverType: CoverType;
  salaryPercent: string;
  monthlyCost: string;
}

export const Content = memo(({ SlotIcon, color, coverType, monthlyCost, salaryPercent }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View>{SlotIcon}</View>
      <View style={styles.justifyCenter}>
        <TextTemplate color={color} type="b2b">
          {monthlyCost}
        </TextTemplate>
        <View style={styles.row}>
          <PackageType type={coverType} />
          <View style={styles.marginLeft}>
            <TextTemplate color={color} type="l2b">
              {salaryPercent}
            </TextTemplate>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(16),
    flexDirection: "row",
  } as ViewStyle,
  row: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  marginLeft: {
    marginLeft: Style.adjust(8),
  } as ViewStyle,
  justifyCenter: {
    justifyContent: "center",
    marginLeft: Style.adjust(16),
  } as ViewStyle,
});
