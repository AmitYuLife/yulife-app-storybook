import { mapServerStyles } from "@components/sdui";
import { SduiDispatchContext } from "@components/sdui/_context/SduiProvider";
import { SduiLocalActionTypes } from "@components/sdui/_types/sdui.types";
import {
  AbsoluteContentItem,
  ContentItem,
  GetSduiJourney_getSduiJourney_containerStyles as ContainerStyle,
} from "@graphql/_core/schema";
import { buildInitialSduiStepDynamicDataState } from "@utils/sduiData";
import React, { memo, useContext, useEffect, useMemo } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View, ViewStyle } from "react-native";
import { Absolute, Body } from "./sections";
import { SDUI_SCREEN_SCROLL_VIEW } from "@ids";

interface Props {
  body?: ContentItem[];
  absolute?: AbsoluteContentItem[];
  containerStyles?: ContainerStyle[];
  stepData?: string;
  stepId?: string;
  isSafeAreaView?: boolean;
}

export const SduiScreen = memo(({ body, absolute, containerStyles, stepData, stepId, isSafeAreaView }: Props) => {
  const sduiDispatch = useContext(SduiDispatchContext);
  const { background, foreground } = useSeparateZedAxis(absolute || []);

  const wrapperStyles = useMemo(() => mapServerStyles(containerStyles), [containerStyles]);

  useEffect(() => {
    sduiDispatch({
      type: SduiLocalActionTypes.SET_DYNAMIC_DATA,
      payload: buildInitialSduiStepDynamicDataState(stepData),
    });
  }, [stepId]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.wrapper}>
      <View style={[styles.wrapper, wrapperStyles]} testID={SDUI_SCREEN_SCROLL_VIEW}>
        <Absolute items={background} />
        <Body items={body} isSafeAreaView={isSafeAreaView} />
        <Absolute items={foreground} />
      </View>
    </KeyboardAvoidingView>
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
