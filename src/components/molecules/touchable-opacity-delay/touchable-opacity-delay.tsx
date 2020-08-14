import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";

export interface IProps extends TouchableOpacityProps {
  onPress: () => void;
  children: React.ReactNode;
  delay?: number;
}

export default function TouchableOpacityWithDelay({ onPress, delay, ...otherProps }: IProps) {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  return <TouchableOpacity {...otherProps} onPress={handlePress} />;
}
