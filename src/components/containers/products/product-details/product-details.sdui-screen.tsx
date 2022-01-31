import React, { memo, useRef } from "react";
import { Animated, StyleSheet, View, ViewStyle } from "react-native";
import { Body } from "./sections";
import { GetYuScreenProductDetails_getYuScreenProductDetails_body } from "@graphql/_core/schema";
import { UiContext } from "./product-details.context";

interface Props {
  body: GetYuScreenProductDetails_getYuScreenProductDetails_body[];
}

export const ProductDetailsScreen = memo((props: Props) => {
  const { body } = props;
  const { current: scrollValue } = useRef(new Animated.Value(0));

  return (
    <UiContext.Provider
      value={{
        scrollValue,
      }}
    >
      <View style={styles.wrapper}>
        <Body body={body} />
      </View>
    </UiContext.Provider>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});
