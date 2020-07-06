import React, { memo } from "react";
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { GetYulifer_getYulifer_products_charms } from "@graphql/_core/schema";
import { Style } from "@styles";
import CharmsProducts from "../charms/charms.products";
import { SectionSeparator } from "./section-separator";
import { SectionTitle } from "./section-title";

interface Props {
  productsCharms: GetYulifer_getYulifer_products_charms[];
  textPosition: number;
}

export const CharmsSection = memo(function CharmsFC(props: Props) {
  const { productsCharms, textPosition } = props;
  if (!productsCharms?.length) {
    return null;
  }
  return (
    <>
      <SectionSeparator />
      <View style={styles.charmWrapper}>
        <View style={{ width: "100%", paddingLeft: textPosition }}>
          <SectionTitle title="Charms" />
        </View>
        <View style={styles.charmItems}>
          {productsCharms?.map((product, index) => (
            <CharmsProducts
              key={product.icon + index}
              description={product.description}
              icon={product.icon}
              textPosition={textPosition}
            />
          ))}
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  charmWrapper: {
    paddingTop: 26,
    paddingBottom: 26,
  } as ViewStyle,
  charmText: {
    color: "#838385",
    fontSize: 15,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: 1.2,
  } as TextStyle,
  charmItems: {
    flexDirection: "column",
    marginTop: 10,
    justifyContent: "center",
  } as ViewStyle,
  spaceBetween: {
    justifyContent: "space-between",
  } as ViewStyle,
  center: {
    justifyContent: "center",
  } as ViewStyle,
});
