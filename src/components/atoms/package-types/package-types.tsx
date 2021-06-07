import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Colours } from "@styles";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { PACKAGE_TYPES } from "@ids";
import { TextTemplate } from "@atoms";
import { toCapitalLetter } from "@services/utils";

export interface Props {
  type: CoverType;
}

const PackageType: React.FC<Props> = ({ type }) => {
  const isNotEquipped = !Object.values(CoverType).includes(type);
  return (
    <View
      style={[styles.wrapper, { backgroundColor: isNotEquipped ? Colours.metallic.m400 : Colours.products.fib[type] }]}
      testID={PACKAGE_TYPES}
    >
      <TextTemplate color={Colours.neutral.white} type="l2b">
        {isNotEquipped ? "Not equipped" : toCapitalLetter(type)}
      </TextTemplate>
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
    borderColor: Colours.neutral.white,
  },
});

export default PackageType;
