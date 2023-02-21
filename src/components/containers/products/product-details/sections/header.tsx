import React from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { GetYuScreenProductDetails_getYuScreenProductDetails_header as PropsHeader } from "@graphql/_core/schema";
import { ProductDetailsHeaderBar } from "../subcomponents/product-details.header-bar/product-details.header-bar";
import { ContentItemLinearGradient } from "@components/sdui";

interface Props {
  header: PropsHeader[];
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
    left: 0,
    right: 0,
    top: 0,
  } as ViewStyle,
});

const renderItemContent = (item: PropsHeader): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemHeaderBar":
      return <ProductDetailsHeaderBar key={item.__typename} {...item} />;
    case "ContentItemLinearGradient":
      return <ContentItemLinearGradient key={item.id} {...item} />;
    default:
      return null;
  }
};
