import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Style, Colours } from "@styles";
import { PACKAGE_TYPES } from "@ids";

export type IType = "common" | "rare" | "epic";

export interface Props {
  type: IType;
}

const PackageTypes: React.FC<Props> = ({ type }) => {
  return (
    <View testID={PACKAGE_TYPES} style={[styles.wrapper, { backgroundColor: Colours.products.fib[type] }]}>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "flex-start",
    borderRadius: 4,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
  },
  text: {
    textTransform: "capitalize",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(12),
    color: Colours.neutral.white,
  },
});

export default PackageTypes;
