import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { GetPersonalProductStep_getPersonalProductStep_footer as GPPS_Footer } from "@graphql/_core/schema";
import { ContentItemOverlay } from "@components/sdui";
import { ProductStepContentItemButton } from "../../subcomponents/product-step.contentItemButton";

interface Props {
  footer: GPPS_Footer[];
}

export const Footer = (props: Props) => {
  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      {props.footer.map(renderItemContent)}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  } as ViewStyle,
});

const renderItemContent = (item: GPPS_Footer, index: number): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemButton":
      return <ProductStepContentItemButton key={item.id} {...item} />;
    case "ContentItemOverlay":
      return <ContentItemOverlay key={item.id} {...item} Button={ProductStepContentItemButton} />;
    default:
      return <View key={index} />;
  }
};
