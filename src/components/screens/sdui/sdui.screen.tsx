import { SduiProvider } from "@components/sdui/_context/SduiProvider";
import { AbsoluteContentItem, ContentItem } from "@graphql/_core/schema";
import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Absolute, Body } from "./sections";

interface Props {
  body?: ContentItem[];
  absolute?: AbsoluteContentItem[];
  isLoading?: boolean;
}

export const SduiScreen = memo(({ body, absolute, isLoading }: Props) => {
  const { background, foreground } = useSeparateZedAxis(absolute || []);

  return (
    <SduiProvider isLoading={isLoading}>
      <View style={styles.wrapper}>
        <Absolute items={background} />
        <Body items={body} />
        <Absolute items={foreground} />
      </View>
    </SduiProvider>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

const useSeparateZedAxis = (absolute: AbsoluteContentItem[]) => {
  const { background, foreground } = useMemo(
    () =>
      absolute.reduce(
        (acc, curr) => {
          const newObj = { background: acc.background, foreground: acc.foreground };
          const key = curr.isBackground ? "background" : "foreground";
          newObj[key].push(curr);

          return newObj;
        },
        { background: [], foreground: [] }
      ),
    [absolute]
  );

  return { background, foreground };
};
