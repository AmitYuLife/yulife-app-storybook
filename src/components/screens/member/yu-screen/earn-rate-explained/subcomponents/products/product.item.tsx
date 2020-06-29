import React from "react";
import { View, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Text } from "@atoms/index";
import { Style, Colours } from "@styles";
import { GetYulifer_getYulifer_products_employer, GetYulifer_getYulifer_products_charms } from "@graphql/_core/schema";
import Charm from "../../../svg/charms";
import EmployerProductIcon from "../../../svg/employer-products";
import ArrowRight from "./arrow-details";

type Product = GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_charms;

interface IProps {
  product: Product;
  productType: string;
  onPressAction: (product: Product, productType: string) => () => void;
}

function ProductItem(props: IProps) {
  const { product, productType, onPressAction } = props;
  const isCharm = productType === "charm";

  return (
    <>
      <View style={styles.wrapper} key={product.icon}>
        {isCharm ? (
          <View style={styles.charmWrapper}>
            <Charm
              active={true}
              icon={product.icon}
              rateViewStyle={StyleSheet.flatten([styles.rateWrapper, styles.charmPosition])}
              rateTextStyle={styles.rateText}
              earnRate={product.earnRate}
              height={77}
              width={77}
            />
          </View>
        ) : (
          <View style={styles.employerProducts}>
            <EmployerProductIcon
              active={product.active}
              icon={product.icon}
              rateViewStyle={StyleSheet.flatten([styles.rateWrapper, styles.employerPosition])}
              rateTextStyle={styles.rateText}
              earnRate={product.earnRate}
            />
          </View>
        )}
        <View style={styles.productsTextWrapper}>
          <Text bold style={StyleSheet.flatten([styles.description, styles.boldText, styles.productsText])}>
            {isCharm ? "Alpha Charm" : product.name}
          </Text>
          <Text style={styles.description}>{`${product.earnRate}x YuCoin earn rate`}</Text>
        </View>
        <TouchableOpacity style={styles.arrowWrapper} onPress={onPressAction(product, productType)}>
          <ArrowRight />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSeparator}></View>
    </>
  );
}

export default ProductItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingBottom: 4,
    marginLeft: 16,
    minHeight: 77,
    paddingLeft: 8,
  },
  description: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.adjust(24),
    letterSpacing: 0.8,
    fontSize: Style.adjust(16, { shrinkMultiplier: 0.2 }),
    textAlign: "left",
    color: "#5A5A5C",
  } as TextStyle,
  rateWrapper: {
    position: "absolute",
    backgroundColor: "#FFF598",
    borderRadius: 200,
    height: Style.adjust(28),
    width: Style.adjust(28),
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: Platform.select({ ios: 2, android: 0 }),
    paddingTop: Platform.select({ ios: 1, android: 0 }),
    borderWidth: 2,
    borderColor: "white",
  } as ViewStyle,
  rateText: {
    fontSize: Style.adjust(10),
    letterSpacing: 0.8,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: "#EA9E2F",
  } as TextStyle,
  boldText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  bottomSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    width: "95%",
    alignSelf: "center",
    marginBottom: 8,
  },
  earnRateTextBiggerThanTen: {
    left: 4,
  },
  earnRateTextIsTen: {
    left: 5,
  },
  earnRateView: {
    height: 32,
    width: 32,
    backgroundColor: Colours.yuscreen.earnRateBackground,
    position: "absolute",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colours.yuscreen.white,
  },
  earnRateText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: 24,
    letterSpacing: 0.8,
    color: Colours.yuscreen.brown,
    position: "relative",
  },
  charmsRateView: {
    bottom: 8,
    right: -16,
  },
  charmsRateText: {
    fontSize: 13,
    left: 8,
    top: 2,
  },
  productsRateView: {
    bottom: 10,
    right: -8,
  },
  productsRateText: {
    fontSize: 12,
    left: 9,
    top: 2,
  },
  productsText: {
    color: "#5A5A5C",
  },
  productsTextWrapper: {
    justifyContent: "center",
    width: 184,
    marginLeft: 16,
    marginTop: Platform.select({ ios: 0, android: -16 }),
  },
  productsDetailsText: {
    fontSize: 12,
  },
  arrowWrapper: {
    justifyContent: "center",
    width: 48,
    marginLeft: "auto",
  },
  charmProducts: {
    marginBottom: 8,
    marginLeft: -8,
    marginRight: 8,
  } as ViewStyle,
  charmPosition: {
    bottom: 16,
    right: -20,
  } as ViewStyle,
  employerPosition: {
    bottom: 8,
    right: -8,
  } as ViewStyle,
  employerProducts: {
    height: 77,
    width: 64,
  } as ViewStyle,
  positionCharm: {
    bottom: 16,
    right: -20,
  } as ViewStyle,
  charmWrapper: {
    marginBottom: Style.adjust(8),
    marginLeft: Platform.select({ ios: Style.adjust(-12), android: Style.adjust(-8) }),
    marginRight: Platform.select({ ios: Style.adjust(12), android: Style.adjust(8) }),
  } as ViewStyle,
});
