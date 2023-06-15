import React, { memo, useMemo, useCallback } from "react";
import { ContentItemWrapper as Props } from "@graphql/_core/schema";
import { View } from "react-native";
import { parseJSON } from "@utils";
import { renderItemContent } from "@components/sdui/_renderer/renderer";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { mapPointerEvents } from "../_utils/mapPointerEvents";
import { Absolute } from "@components/sdui/_renderer/sections/absolute";
import { groupBy } from "lodash";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { useDispatch } from "react-redux";

export const ContentItemWrapper = memo(({ children, styles, pointerEvents, absolute, onPress }: Props) => {
  const { data, isValid } = parseJSON(children);
  const { data: absoluteData, isValid: absoluteValidity } = parseJSON(absolute);
  const dispatch = useDispatch();

  const handlePress = useCallback(() => {
    if (!onPress) {
      return;
    }

    dispatch({
      type: onPress.type,
      payload: { serverPayload: onPress.payload },
    });
  }, [onPress]);

  const { background, foreground } = useMemo(() => {
    if (!absoluteValidity) {
      return { background: [], foreground: [] };
    }

    return groupBy(absoluteData, (item) => (item.isBackground ? "background" : "foreground"));
  }, [absolute]);

  if (!isValid) {
    return null;
  }

  const Wrapper = onPress ? TouchableOpacityWithDelay : View;

  return (
    <Wrapper onPress={handlePress} pointerEvents={mapPointerEvents(pointerEvents)} style={mapServerStyles(styles)}>
      {!background?.length ? null : <Absolute items={background} />}
      {!data?.length ? null : data.map(renderItemContent)}
      {!foreground?.length ? null : <Absolute items={foreground} />}
    </Wrapper>
  );
});
