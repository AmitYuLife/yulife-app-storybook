import React, { memo, useMemo, useCallback } from "react";
import { ContentItemWrapper as Props } from "@graphql/_core/schema";
import { parseJSON } from "@utils";
import { renderItemContent } from "@components/sdui/_renderer/renderer";
import { Absolute } from "@components/sdui/_renderer/sections/absolute";
import { groupBy } from "lodash";
import { useDispatch } from "react-redux";
import { getWrappingComponent } from "./getWrappingComponent";

export const ContentItemWrapper = memo(
  ({ children, styles, pointerEvents, absolute, onPress, scrollViewProps }: Props) => {
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

    const { Component, componentProps } = getWrappingComponent({
      isPressable: !!onPress,
      onPress: handlePress,
      scrollViewProps,
      styles,
      pointerEvents,
    });

    return (
      <Component {...componentProps}>
        {!background?.length ? null : <Absolute items={background} />}
        {!data?.length ? null : data.map(renderItemContent)}
        {!foreground?.length ? null : <Absolute items={foreground} />}
      </Component>
    );
  }
);
