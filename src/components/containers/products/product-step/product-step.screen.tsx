import React, { memo, useCallback, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { Body, Header, Footer, Absolute } from "./sections";
import { ProductStepContext } from "./product-step.context";
import {
  GetPersonalProductStep_getPersonalProductStep_absolute,
  GetPersonalProductStep_getPersonalProductStep_body,
  GetPersonalProductStep_getPersonalProductStep_footer,
  GetPersonalProductStep_getPersonalProductStep_header,
} from "@graphql/_core/schema";

interface Props {
  productId: string;
  customerProductId: string;
  stepId: string;
  style: ViewStyle;
  body: GetPersonalProductStep_getPersonalProductStep_body[];
  header: GetPersonalProductStep_getPersonalProductStep_header[];
  footer: GetPersonalProductStep_getPersonalProductStep_footer[];
  absolute: GetPersonalProductStep_getPersonalProductStep_absolute[];
}

export const ProductStepScreen = memo((props: Props) => {
  const { productId, customerProductId, stepId, style, body, header, footer, absolute } = props;
  const [headerHeight, setHeaderHeight] = useState(0);
  const [dynamicData, setDynamicData] = useState({});

  const handleHeaderLayout = useCallback((event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  }, []);

  return (
    <ProductStepContext.Provider value={{ productId, customerProductId, stepId, dynamicData, setDynamicData }}>
      <View style={[styles.wrapper, style]}>
        <Body headerHeight={headerHeight} body={body} />
        <Header onLayout={handleHeaderLayout} header={header} />
        <Footer footer={footer} />
        <Absolute headerHeight={headerHeight} absolute={absolute} />
      </View>
    </ProductStepContext.Provider>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});
