import React, { memo, useMemo } from "react";
import { ContentItemWrapper as Props } from "@graphql/_core/schema";
import { View } from "react-native";
import { parseJSON } from "@utils";
import { renderItemContent } from "@components/sdui/_renderer/renderer";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { mapPointerEvents } from "../_utils/mapPointerEvents";
import { Absolute } from "@components/sdui/_renderer/sections/absolute";
import { groupBy } from "lodash";

export const ContentItemWrapper = memo(({ children, styles, pointerEvents, absolute }: Props) => {
  const { data, isValid } = parseJSON(children);
  const { data: absoluteData, isValid: absoluteValidity } = parseJSON(absolute);

  const { background, foreground } = useMemo(() => {
    if (!absoluteValidity) {
      return { background: [], foreground: [] };
    }

    return groupBy(absoluteData, (item) => (item.isBackground ? "background" : "foreground"));
  }, [absolute]);

  if (!isValid) {
    return null;
  }

  return (
    <View pointerEvents={mapPointerEvents(pointerEvents)} style={mapServerStyles(styles)}>
      {!background?.length ? null : <Absolute items={background} />}
      {!data?.length ? null : data.map(renderItemContent)}
      {!foreground?.length ? null : <Absolute items={foreground} />}
    </View>
  );
});
