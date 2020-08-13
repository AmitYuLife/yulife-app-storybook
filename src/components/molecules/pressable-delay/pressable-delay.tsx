import * as React from "react";
import { Pressable, PressableProps } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";

export interface IProps extends PressableProps {
  onPress: () => void;
  children: React.ReactNode;
}

export default function PressableWithDelay({ onPress, ...otherProps }: IProps) {
  const { handlePress } = usePressedInWithDelay({ onPress });

  return <Pressable {...otherProps} onPress={handlePress} />;
}
