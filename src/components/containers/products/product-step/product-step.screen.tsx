import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Keyboard, LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { Body, Header, Footer, Absolute, ProductStepScrollPicker } from "./sections";
import { IProductStepScrollPicker, ProductStepContext } from "./product-step.context";
import {
  GetPersonalProductStep_getPersonalProductStep_absolute,
  GetPersonalProductStep_getPersonalProductStep_body,
  GetPersonalProductStep_getPersonalProductStep_footer,
  GetPersonalProductStep_getPersonalProductStep_header,
} from "@graphql/_core/schema";

interface Props {
  productId: string;
  customerProductId: string;
  stepData: string;
  stepId: string;
  style: ViewStyle;
  body: GetPersonalProductStep_getPersonalProductStep_body[];
  header: GetPersonalProductStep_getPersonalProductStep_header[];
  footer: GetPersonalProductStep_getPersonalProductStep_footer[];
  absolute: GetPersonalProductStep_getPersonalProductStep_absolute[];
}

export const ProductStepScreen = memo((props: Props) => {
  const { productId, customerProductId, stepId, style, body, header, footer, absolute, stepData } = props;

  // Used for keeping track of the current step id body elements
  // Because on every `goBack` action we're resetting the dynamicData, all the body elements were
  // initiated with an undefined value which resulted in UI bugs
  const stepIdRef = useRef(stepId);
  const isMounted = useRef(false);

  const [scrollPicker, setScrollPicker] = useState(null as IProductStepScrollPicker);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [dynamicData, setDynamicData] = useState(buildInitialProductStepDynamicDataState(stepData));

  const handleHeaderLayout = useCallback((event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  }, []);

  // on component unmount dismiss the keyboard
  useEffect(() => {
    return () => Keyboard.dismiss();
  }, []);

  // wipe dynamic data when step changes
  useEffect(() => {
    if (isMounted.current) {
      Keyboard.dismiss();
      setDynamicData(buildInitialProductStepDynamicDataState(stepData));
      stepIdRef.current = stepId;
    }

    isMounted.current = true;
  }, [stepId]);

  return (
    <ProductStepContext.Provider
      value={{ scrollPicker, setScrollPicker, body, productId, customerProductId, stepId, dynamicData, setDynamicData }}
    >
      <View style={[styles.wrapper, style]}>
        {stepIdRef.current !== stepId ? null : <Body headerHeight={headerHeight} body={body} />}
        <Footer footer={footer} />
        <Header onLayout={handleHeaderLayout} header={header} />
        <Absolute headerHeight={headerHeight} absolute={absolute} />
        <ProductStepScrollPicker />
      </View>
    </ProductStepContext.Provider>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

const buildInitialProductStepDynamicDataState = (stepData: string) => {
  if (!stepData) {
    return {};
  }

  try {
    const data = JSON.parse(stepData);

    if (data && typeof data === "object") {
      return data;
    }

    return {};
  } catch (e) {
    return {};
  }
};
