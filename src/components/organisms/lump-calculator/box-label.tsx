import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Text, PackageType } from "@atoms";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";

interface Props {
  cost: string;
  coverTheme: string;
  label: string;
  coverType: CoverType;
}

export const BoxLabel = memo(({ cost, coverTheme, label, coverType }: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={StyleSheet.flatten([styles.percentageText, { color: coverTheme }])}>
        {cost}
      </Text>
      <Text style={StyleSheet.flatten([styles.boxDescriptionText, { color: coverTheme }])}>{label}</Text>
      <View style={styles.packageTypeWrapper}>
        <PackageType type={coverType} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  percentageText: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  } as ViewStyle,
  boxDescriptionText: {
    letterSpacing: 0.6,
    lineHeight: Style.adjust(12),
    fontSize: Style.adjust(12),
  } as ViewStyle,
  packageTypeWrapper: {
    marginTop: Style.adjust(12),
    borderRadius: 8,
    overflow: "hidden",
  } as ViewStyle,
});
