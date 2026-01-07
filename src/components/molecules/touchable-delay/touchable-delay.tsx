import * as React from "react";
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps, ViewProps } from "react-native";
import { usePressedInWithDelay } from "@hooks";

export type IProps = Omit<TouchableWithoutFeedbackProps, "onPress"> &
  ViewProps & {
    onPress: () => void;
    debounce?: boolean;
    children?: React.ReactNode;
    delay?: number;
  };

export default function TouchableWithDelay({ onPress, delay, debounce = true, ...otherProps }: IProps) {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  return <TouchableWithoutFeedback {...otherProps} onPress={debounce ? handlePress : onPress} />;
}
