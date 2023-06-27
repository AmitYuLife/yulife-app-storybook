import { TouchableOpacityWithDelay } from "@components/molecules";
import { ContentItemWrapper } from "@graphql/_core/schema";
import { VoidFunction, parseJSON } from "@utils";
import { ScrollView, View } from "react-native";
import { mapPointerEvents } from "../_utils/mapPointerEvents";
import { mapServerStyles } from "../_utils/mapServerStyles";

type Params = Pick<ContentItemWrapper, "styles" | "scrollViewProps" | "pointerEvents"> & {
  isPressable: boolean;
  onPress: VoidFunction;
  id?: string;
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
  };
};

export const getWrappingComponent = ({
  scrollViewProps,
  isPressable,
  onPress,
  styles,
  pointerEvents,
}: Params): WrappingComponent => {
  const baseProps = {
    pointerEvents: mapPointerEvents(pointerEvents),
    style: mapServerStyles(styles),
  };

  if (scrollViewProps) {
    return handleScrollView(baseProps, scrollViewProps);
  }

  if (isPressable && onPress) {
    return { Component: TouchableOpacityWithDelay, componentProps: { ...baseProps, onPress } };
  }

  return { Component: View, componentProps: baseProps };
};

const handleScrollView = (baseProps: WrappingComponent["componentProps"], scrollViewProps: string) => {
  const { isValid, data: scrollViewPropsData } = parseJSON(scrollViewProps);

  if (!isValid) {
    return { Component: View, componentProps: baseProps };
  }

  return { Component: ScrollView, componentProps: { ...baseProps, ...scrollViewPropsData } };
};
