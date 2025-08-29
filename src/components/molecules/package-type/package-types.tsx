import React, { memo, useMemo } from "react";
import { Platform, View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { CoverType } from "@graphql/__generated";
import { PACKAGE_TYPES } from "@ids";
import { TextTemplate } from "@atoms";
import { toCapitalLetter } from "@utils";
import { t } from "@locale";

export interface Props {
  type: CoverType;
  minWidth?: number;
}

const PackageType = ({ type, minWidth = Style.adjust(55) }: Props) => {
  const isNotEquipped = useMemo(() => {
    return !Object.values(CoverType).includes(type);
  }, [type]);

  const wrapperStyle = useMemo(() => {
    return [
      styles.wrapper,
      {
        backgroundColor: isNotEquipped ? Colours.metallic.m400 : Colours.products.fib[type],
        minWidth,
      },
    ];
  }, [type, minWidth, isNotEquipped]);

  return (
    <View style={wrapperStyle} testID={PACKAGE_TYPES}>
      <TextTemplate color={Colours.neutral.white} type="l2b">
        {isNotEquipped ? t("molecules.package_type.not_equipped") : toCapitalLetter(type)}
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
    paddingStart: 4,
    paddingEnd: 4,
    paddingTop: Platform.select({
      ios: 2,
      android: 0,
    }),
    paddingBottom: 2,
    borderWidth: 1,
    borderColor: Colours.neutral.white,
    alignItems: "center",
  } as ViewStyle,
});

export default memo(PackageType);
