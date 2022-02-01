import React, { useContext } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { GetYuScreenProductDetails_getYuScreenProductDetails_body as BodyItems } from "@graphql/_core/schema";
import { ProductDetailsHeader } from "../subcomponents/product-details.header";
import { UiContext } from "../product-details.context";
import { ContentItemBeneficiariesSection, ContentItemText } from "@components/sdui";
import { ProductDetailsButton } from "../subcomponents/product-details.button";

interface Props {
  body: BodyItems[];
}

export const Body = (props: Props) => {
  const uiContext = useContext(UiContext);

  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: uiContext.scrollValue } } }], {
        useNativeDriver: true,
      })}
      showsVerticalScrollIndicator={false}
      style={styles.wrapper}
      bounces={false}
    >
      {props.body.map(renderItemContent)}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

const renderItemContent = (item: BodyItems): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemProductDetailsHeader":
      return <ProductDetailsHeader key={item.id} {...item} />;
    case "ContentItemText":
      return <ContentItemText key={item.id} {...item} />;
    case "ContentItemButton":
      return <ProductDetailsButton key={item.id} {...item} />;
    case "ContentItemBeneficiariesSection":
      return <ContentItemBeneficiariesSection key={item.id} {...item} />;
    default:
      return null;
  }
};
