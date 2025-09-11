import { TouchableOpacityWithDelay } from "@components/molecules";
import { VoidFunction, parseJSON } from "@utils";
import { ScrollView, View } from "react-native";
import { mapPointerEvents } from "../_utils/mapPointerEvents";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { SharedValue } from "react-native-reanimated";
import { GestureWrapper } from "./gestureWrapper";
import { RnViewPointerEvents, SduiAction, SduiStyle } from "@graphql/__generated";

type Params = {
  isPressable: boolean;
  onPress: VoidFunction;
  id?: string;
  sharedValue?: SharedValue<number>;
  gestureViewProps: string;
  pointerEvents?: RnViewPointerEvents;
  scrollViewProps?: string;
  localDispatchActions?: Array<SduiAction>;
  dynamicStyles?: Array<SduiStyle>;
  styles?: Array<SduiStyle>;
  testID?: string;
};

type WrappingComponent = {
  /**
   * typeof View | typeof ScrollView | typeof TouchableOpacityWithDelay
   */
  Component: any;
  /**
   * incomplete, includes unpacked scrollViewProps
   */
  componentProps: {
    sduiStyle?: ReturnType<typeof mapServerStyles>;
    pointerEvents?: ReturnType<typeof mapPointerEvents>;
    onPress?: VoidFunction;
    testID?: string;
  };
};

export const getWrappingComponent = ({
  scrollViewProps,
  isPressable,
  onPress,
  styles,
  pointerEvents,
  dynamicStyles,
  gestureViewProps,
  sharedValue,
}: Params): WrappingComponent => {
  const baseProps = {
    pointerEvents: mapPointerEvents(pointerEvents),
    style: mapServerStyles([...styles, ...dynamicStyles]),
  };

  if (gestureViewProps) {
    return handleGestureView(baseProps, gestureViewProps, sharedValue);
  }

  if (scrollViewProps) {
    return handleScrollView(baseProps, scrollViewProps);
  }

  if (isPressable && onPress) {
    return { Component: TouchableOpacityWithDelay, componentProps: { ...baseProps, onPress } };
  }

  return { Component: View, componentProps: baseProps };
};

const handleGestureView = (
  baseProps: WrappingComponent["componentProps"],
  gestureViewProps: string,
  sharedValue: SharedValue<number>
) => {
  const { isValid, data: gestureViewPropsData } = parseJSON(gestureViewProps);

  if (!isValid) {
    return { Component: View, componentProps: baseProps };
  }

  return {
    Component: GestureWrapper,
    componentProps: {
      ...baseProps,
      ...gestureViewPropsData,
      sharedValue,
    },
  };
};

const handleScrollView = (baseProps: WrappingComponent["componentProps"], scrollViewProps: string) => {
  const { isValid, data: scrollViewPropsData } = parseJSON(scrollViewProps);

  if (!isValid) {
    return { Component: View, componentProps: baseProps };
  }

  return { Component: ScrollView, componentProps: { ...baseProps, ...scrollViewPropsData } };
};
