import * as React from "react";
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps, ViewProps } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";

export type IProps = Omit<TouchableWithoutFeedbackProps, "onPress"> &
  ViewProps & {
    onPress: () => void;
    children?: React.ReactChild | React.ReactChild[];
    delay?: number;
  };

export default function TouchableWithDelay({ onPress, delay, ...otherProps }: IProps) {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  return <TouchableWithoutFeedback {...otherProps} onPress={handlePress} />;
}
