import * as React from "react";
import { Pressable, PressableProps } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";

export interface IProps extends PressableProps {
  onPress: () => void;
  children: React.ReactNode;
  delay?: number;
}

export default function PressableWithDelay({ onPress, delay, ...otherProps }: IProps) {
  const { handlePress } = usePressedInWithDelay({ onPress, delay });

  return <Pressable {...otherProps} onPress={handlePress} />;
}
