import React from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { ProductDetailsHeaderBar } from "../subcomponents/product-details.header-bar/product-details.header-bar";
import { ContentItemLinearGradient } from "@components/sdui";
import { GetYuScreenProductDetailsQuery } from "@graphql/__generated";

import { StyleSheet } from "@styles";
type IPropsHeader = GetYuScreenProductDetailsQuery["getYuScreenProductDetails"]["header"];
interface Props {
  header: IPropsHeader;
  onLayout?: (e: LayoutChangeEvent) => void;
}

export const Header = (props: Props) => {
  return (
    <View onLayout={props.onLayout} style={styles.wrapper}>
      {props.header?.map(renderItemContent)}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    start: 0,
    end: 0,
    top: 0,
  } as ViewStyle,
});

const renderItemContent = (item: IPropsHeader[0]): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemHeaderBar":
      return <ProductDetailsHeaderBar key={item.__typename} {...item} />;
    case "ContentItemLinearGradient":
      return <ContentItemLinearGradient key={item.id} {...item} />;
    default:
      return null;
  }
};
