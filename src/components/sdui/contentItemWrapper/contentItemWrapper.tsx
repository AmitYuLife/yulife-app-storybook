import React, { memo, useMemo, useCallback, useContext, useEffect } from "react";
import { GetSduiJourneyQuery, ContentItemWrapperFragment as Props } from "@graphql/__generated";
import { parseJSON } from "@utils";
import { Absolute } from "@components/sdui/_renderer/sections/absolute";
import { groupBy, isNil } from "lodash";
import { useDispatch } from "react-redux";
import { getWrappingComponent } from "./getWrappingComponent";
import { SduiDispatchContext, SduiStateContext } from "../_context/SduiProvider";
import { Renderer } from "../_renderer/renderer";
import { useSharedValue } from "react-native-reanimated";
import { useSduiActionUpdateBus } from "../_hooks";

export const ContentItemWrapper = memo(
  ({
    children,
    styles,
    pointerEvents,
    absolute,
    onPress,
    scrollViewProps,
    gestureViewProps,
    dynamicStyleKey,
    localDispatchActions,
    localDispatchActionsOnMount,
    sharedValue,
  }: Props) => {
    const { data, isValid } = parseJSON<GetSduiJourneyQuery["getSduiJourney"]["body"]>(children);
    const { data: absoluteData, isValid: absoluteValidity } = parseJSON(absolute);
    const dispatch = useDispatch();
    const localContextDispatch = useContext(SduiDispatchContext);
    const { dynamicStyles } = useContext(SduiStateContext);
    const validatedSharedValue = useValidatedSharedValue(sharedValue);

    const dynamicStyle = dynamicStyles[dynamicStyleKey];

    useEffect(() => {
      if (!localDispatchActionsOnMount?.length) {
        return;
      }

      localDispatchActionsOnMount.forEach((action) => {
        localContextDispatch(action);
      });
    }, []);

    const handlePress = useCallback(() => {
      if (!onPress && !localDispatchActions?.length) {
        return;
      }

      if (onPress) {
        dispatch({
          type: onPress.type,
          payload: { serverPayload: onPress.payload },
        });
      }

      (localDispatchActions || []).forEach((action) => {
        localContextDispatch(action);
      });
    }, [onPress, localDispatchActions, localContextDispatch]);

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
      isPressable: !!onPress || !!localDispatchActions?.length,
      onPress: handlePress,
      scrollViewProps,
      gestureViewProps,
      styles: styles || [],
      pointerEvents,
      dynamicStyles: dynamicStyle || [],
      sharedValue: validatedSharedValue,
      // testID: id, using testID breaks the ContentItemScrollPicker on android devices, so lets not use it until we fix it
    });

    return (
      <Component {...componentProps}>
        <>
          {!background?.length ? null : <Absolute items={background} />}
          {!data?.length
            ? null
            : data
                .filter(Boolean)
                .map((dataItem) => <Renderer key={(dataItem as { id: string }).id} item={dataItem} />)}
          {!foreground?.length ? null : <Absolute items={foreground} />}
        </>
      </Component>
    );
  }
);

function useValidatedSharedValue(stringifiedSharedValue: string) {
  const { updateBus } = useSduiActionUpdateBus();

  let parsed: Record<string, any> = {};

  if (stringifiedSharedValue) {
    try {
      parsed = JSON.parse(stringifiedSharedValue) || {};
    } catch {}
  }

  const sharedValue = useSharedValue(parsed.payload ?? {});

  useEffect(() => {
    if (parsed.key && !isNil(sharedValue)) {
      updateBus(parsed.key, sharedValue);
    }
  }, [stringifiedSharedValue]);

  return sharedValue;
}
