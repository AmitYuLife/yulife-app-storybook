import { mapServerStyles } from "@components/sdui";
import { SduiProvider } from "@components/sdui/_context/SduiProvider";
import {
  AbsoluteContentItem,
  ContentItem,
  GetSduiJourney_getSduiJourney_containerStyles as ContainerStyle,
} from "@graphql/_core/schema";
import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Absolute, Body } from "./sections";

interface Props {
  body?: ContentItem[];
  absolute?: AbsoluteContentItem[];
  isLoading?: boolean;
  containerStyles?: ContainerStyle[];
}

export const SduiScreen = memo(({ body, absolute, isLoading, containerStyles }: Props) => {
  const { background, foreground } = useSeparateZedAxis(absolute || []);

  const wrapperStyles = useMemo(() => mapServerStyles(containerStyles), [containerStyles]);

  return (
    <SduiProvider isLoading={isLoading}>
      <View style={[styles.wrapper, wrapperStyles]}>
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
