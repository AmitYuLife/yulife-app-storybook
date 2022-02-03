import React, { memo, useMemo, useRef } from "react";
import { Animated, StyleSheet, View, ViewStyle } from "react-native";
import { mapServerStyles } from "@components/sdui";
import { Absolute, Body } from "./sections";
import {
  GetYuScreenProductDetails_getYuScreenProductDetails_body as PropsBody,
  GetYuScreenProductDetails_getYuScreenProductDetails_absolute as PropsAbsolute,
  SduiStyle,
} from "@graphql/_core/schema";
import { UiContext } from "./product-details.context";

interface Props {
  body: PropsBody[];
  absolute: PropsAbsolute[];
  containerStyles: SduiStyle[];
}

export const ProductDetailsScreen = memo((props: Props) => {
  const { body, absolute, containerStyles } = props;
  const { current: scrollValue } = useRef(new Animated.Value(0));

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
        <Body body={body} />
        <Absolute absolute={foreground} />
      </View>
    </UiContext.Provider>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});
