import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { Style, Colours } from "@styles";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { PACKAGE_TYPES } from "@ids";

export interface Props {
  type: CoverType;
}

const PackageType: React.FC<Props> = ({ type }) => {
  return (
    <View style={[styles.wrapper, { backgroundColor: Colours.products.fib[type] }]} testID={PACKAGE_TYPES}>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "flex-start",
    borderRadius: Platform.select({
      ios: 10,
      android: 8,
    }),
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: Platform.select({
      ios: 2,
      android: 0,
    }),
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
  },
  text: {
    textTransform: "capitalize",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: 0.4,
    color: Colours.neutral.white,
  },
});

export default PackageType;
