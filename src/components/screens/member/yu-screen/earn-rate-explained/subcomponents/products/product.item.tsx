import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "@atoms/index";
import { Style, Colours } from "@styles";
import { GetYulifer_getYulifer_products_employer, GetYulifer_getYulifer_products_charms } from "@graphql/_core/schema";
import mainStyles from "../main.styles";
import Charm from "../../../svg/charms";
import EmployerProductIcon from "../../../svg/employer-products";

type Product = GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_charms;

interface IProps {
  product: Product;
  productType: string;
  onPressAction: (product: Product, productType: string) => () => void;
}

function ProductItem(props: IProps) {
  const { product, productType, onPressAction } = props;
  const [marginSeeDetails, setMarginSeeDetails] = useState(DEFAULT_SEE_DETAILS_MARGIN);
  const isCharm = productType === "charm";
  const isTwoDigits = product.earnRate.toString().length === 2;
  const extraStyle =
    isTwoDigits && product.earnRate > 10
      ? styles.earnRateTextBiggerThanTen
      : isTwoDigits
      ? styles.earnRateTextIsTen
      : {};

  return (
    <>
      <View style={styles.wrapper} key={product.icon}>
        {isCharm ? (
          <View style={{ flex: 1, marginBottom: 8, marginLeft: -8, marginRight: 8 }}>
            <Charm
              active={true}
              icon={product.icon}
              rateViewStyle={StyleSheet.flatten([styles.earnRateView, styles.charmsRateView])}
              rateTextStyle={StyleSheet.flatten([styles.earnRateText, styles.charmsRateText, extraStyle])}
              earnRate={product.earnRate}
              height="77"
              width="77"
            />
          </View>
        ) : (
          <View style={{ height: 77, width: 64 }}>
            <EmployerProductIcon
              active={product.active}
              icon={product.icon}
              rateViewStyle={StyleSheet.flatten([styles.earnRateView, styles.productsRateView])}
              rateTextStyle={StyleSheet.flatten([styles.earnRateText, styles.productsRateText, extraStyle])}
              earnRate={product.earnRate}
            />
          </View>
        )}
        <View
          style={styles.productsTextWrapper}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            if (height > DEFAULT_HEIGHT_PRODUCT_NAME) {
              setMarginSeeDetails(0);
            }
          }}
        >
          <Text
            style={StyleSheet.flatten([mainStyles.text, styles.boldText, styles.productsText, { overflow: "visible" }])}
          >
            {isCharm ? "Alpha Charm" : product.name}
          </Text>
          <Text
            style={StyleSheet.flatten([mainStyles.text, { marginHorizontal: 0, marginLeft: 16 }])}
          >{`${product.earnRate}x YuCoin earn rate`}</Text>
        </View>
        <TouchableOpacity style={{ justifyContent: "center" }} onPress={onPressAction(product, productType)}>
          {isCharm ? (
            <Text
              style={StyleSheet.flatten([
                mainStyles.text,
                styles.boldText,
                styles.productsText,
                { overflow: "visible" },
              ])}
            >
              {" "}
            </Text>
          ) : (
            <View style={{ height: marginSeeDetails }}></View>
          )}
          <Text
            style={StyleSheet.flatten([
              mainStyles.text,
              styles.boldText,
              styles.productsText,
              styles.productsDetailsText,
            ])}
          >
            see details
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSeparator}></View>
    </>
  );
}

export default ProductItem;

const DEFAULT_SEE_DETAILS_MARGIN = 24;
const DEFAULT_HEIGHT_PRODUCT_NAME = 77;
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 4,
    marginHorizontal: 16,
    minHeight: 77,
  },
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
    color: Colours.yuscreen.white,
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
    marginLeft: 16,
    marginHorizontal: 0,
  },
  productsTextWrapper: {
    justifyContent: "center",
    flex: 3,
  },
  productsDetailsText: {
    fontSize: 12,
  },
});
