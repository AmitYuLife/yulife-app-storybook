import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, View, ViewStyle } from "react-native";
import { mapServerStyles } from "@components/sdui";
import { Absolute, Body } from "./sections";
import { UiContext } from "./product-details.context";
import { Header } from "./sections/header";
import { GetYuScreenProductDetailsQuery, SduiStyle } from "@graphql/__generated";

import { StyleSheet } from "@styles";
type IGetYuScreenProductDetails = GetYuScreenProductDetailsQuery["getYuScreenProductDetails"];

interface Props {
  body?: IGetYuScreenProductDetails["body"];
  header?: IGetYuScreenProductDetails["header"];
  absolute?: IGetYuScreenProductDetails["absolute"];
  containerStyles?: SduiStyle[];
  contentInsetAdjustmentBehavior?: IGetYuScreenProductDetails["contentInsetAdjustmentBehavior"];
}

export const ProductDetailsScreen = memo((props: Props) => {
  const { body, header, absolute, containerStyles, contentInsetAdjustmentBehavior } = props;
  const { current: scrollValue } = useRef(new Animated.Value(0));
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleHeaderLayout = useCallback((event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  }, []);

  const { background, foreground } = useMemo(() => {
    return absolute.reduce(
      (acc, curr) => {
        const newObj = { background: acc.background, foreground: acc.foreground };
        const key = curr.isBackground ? "background" : "foreground";
        newObj[key].push(curr);

        return newObj;
      },
      { background: [], foreground: [] }
    );
  }, [absolute]);

  return (
    <UiContext.Provider
      value={{
        scrollValue,
      }}
    >
      <View style={[styles.wrapper, mapServerStyles(containerStyles)]}>
        <Absolute absolute={background} />
        <Body headerHeight={headerHeight} body={body} contentInsetAdjustmentBehavior={contentInsetAdjustmentBehavior} />
        <Absolute absolute={foreground} />
        <Header onLayout={handleHeaderLayout} header={header} />
      </View>
    </UiContext.Provider>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});
