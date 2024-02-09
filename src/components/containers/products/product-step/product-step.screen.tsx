import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Animated, Keyboard, LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { Body, Header, Footer, Absolute, ProductStepScrollPicker } from "./sections";
import { IProductStepScrollPicker, IStepComponentsLayout, ProductStepContext } from "./product-step.context";
import { GetPersonalProductStepQuery } from "@graphql/__generated";
import { buildInitialSduiStepDynamicDataState } from "@utils/sduiData";

type IGetPersonalProductStep = GetPersonalProductStepQuery["getPersonalProductStep"];

interface Props {
  productId: string;
  customerProductId: string;
  stepData: string;
  stepId: string;
  style: ViewStyle;
  footerStyle: ViewStyle;
  body: IGetPersonalProductStep["body"];
  header: IGetPersonalProductStep["header"];
  footer: IGetPersonalProductStep["footer"];
  absolute: IGetPersonalProductStep["absolute"];
  isLoading: boolean;
}

export const ProductStepScreen = memo((props: Props) => {
  const {
    productId,
    customerProductId,
    stepId,
    style,
    body,
    header,
    footer,
    absolute,
    stepData,
    footerStyle,
    isLoading,
  } = props;

  // Used for keeping track of the current step id body elements
  // Because on every `goBack` action we're resetting the dynamicData, all the body elements were
  // initiated with an undefined value which resulted in UI bugs
  const stepIdRef = useRef(stepId);
  const isMounted = useRef(false);

  const [scrollPicker, setScrollPicker] = useState(null as IProductStepScrollPicker);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerBottom, setHeaderBottom] = useState(null);
  const [dynamicData, setDynamicData] = useState(buildInitialSduiStepDynamicDataState(stepData));
  const { current: scrollValue } = useRef(new Animated.Value(0));
  const [componentsLayout, setComponentsLayout] = useState({} as IStepComponentsLayout);

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
      setDynamicData(buildInitialSduiStepDynamicDataState(stepData));
      stepIdRef.current = stepId;
    }

    setComponentsLayout({ [stepId]: componentsLayout[stepId] });

    isMounted.current = true;
  }, [stepId]);

  return (
    <ProductStepContext.Provider
      value={{
        scrollPicker,
        setScrollPicker,
        body,
        productId,
        customerProductId,
        stepId,
        dynamicData,
        setDynamicData,
        scrollValue,
        headerHeight,
        headerBottom,
        setHeaderBottom,
        isLoading,
        componentsLayout,
        setComponentsLayout,
      }}
    >
      <View style={[styles.wrapper, style]}>
        {stepIdRef.current !== stepId ? null : <Body headerHeight={headerHeight} body={body} />}
        <Footer footerStyle={footerStyle} footer={footer} />
        <Absolute headerHeight={headerHeight} absolute={absolute} />
        <Header onLayout={handleHeaderLayout} header={header} />
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
