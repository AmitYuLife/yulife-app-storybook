import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";

export interface IProps extends TouchableOpacityProps {
  onPress: () => void;
  children: React.ReactNode;
}

export default function TouchableOpacityWithDelay({ onPress, ...otherProps }: IProps) {
  const { handlePressOut } = usePressedInWithDelay({ onPress });

  return <TouchableOpacity {...otherProps} onPress={handlePressOut} />;
}
