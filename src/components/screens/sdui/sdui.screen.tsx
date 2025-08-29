import { mapServerStyles } from "@components/sdui";
import { SduiDispatchContext } from "@components/sdui/_context/SduiProvider";
import { SduiLocalActionTypes } from "@components/sdui/_types/sdui.types";
import { SduiStyle, GetSduiJourneyQuery } from "@graphql/__generated";
import { buildInitialSduiStepDynamicDataState } from "@utils/sduiData";
import React, { memo, useContext, useEffect, useMemo } from "react";
import { KeyboardAvoidingView, Platform, View, ViewStyle } from "react-native";
import { Absolute, Body } from "../../sdui/_renderer/sections";
import { SDUI_SCREEN_SCROLL_VIEW } from "@ids";

import { StyleSheet } from "@styles";
interface Props {
  body?: GetSduiJourneyQuery["getSduiJourney"]["body"];
  absolute?: GetSduiJourneyQuery["getSduiJourney"]["absolute"];
  containerStyles?: Array<SduiStyle>;
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
    sduiDispatch({
      type: SduiLocalActionTypes.SET_ID,
      payload: stepId,
    });
  }, [stepId]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.wrapper}>
      <View style={[styles.wrapper, wrapperStyles]} testID={SDUI_SCREEN_SCROLL_VIEW}>
        <Absolute items={background} />
        <Body items={body} isSafeAreaView={isSafeAreaView ?? true} />
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

const useSeparateZedAxis = (absolute: GetSduiJourneyQuery["getSduiJourney"]["absolute"]) => {
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
