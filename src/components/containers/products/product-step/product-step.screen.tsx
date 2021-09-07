import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { Body, Header, Footer, Absolute } from "./sections";
import { ProductStepContext } from "./product-step.context";
import {
  ContentItemTextInput,
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

  const isMounted = useRef(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [dynamicData, setDynamicData] = useState(buildInitialProductStepDynamicDataState(body));

  const handleHeaderLayout = useCallback((event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  }, []);

  // wipe dynamic data when step changes
  useEffect(() => {
    if (isMounted.current) {
      setDynamicData(buildInitialProductStepDynamicDataState(body));
    }

    isMounted.current = true;
  }, [stepId]);

  return (
    <ProductStepContext.Provider value={{ body, productId, customerProductId, stepId, dynamicData, setDynamicData }}>
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

const buildInitialProductStepDynamicDataState = (body: Props["body"]) =>
  body
    .filter((a) => (a as ContentItemTextInput).answerKey)
    .reduce((acc, item) => {
      acc[(item as ContentItemTextInput).answerKey] = (item as ContentItemTextInput).value;
      return acc;
    }, {} as Record<string, string | number | boolean>);
