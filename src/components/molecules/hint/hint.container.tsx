import React from "react";
import Hint from "./hint";
import { HintScreenType } from "@redux/hints/hints.reducer";
import { View, ViewStyle } from "react-native";
import { useHint } from "@hooks";

interface IHintContainerProps {
  screen: HintScreenType;
  style?: ViewStyle;
  hide?: boolean;
}

const HintContainer = ({ screen, hide, style }: IHintContainerProps) => {
  const hint = useHint({ screen, hide });

  if (!hint) {
    return null;
  }

  return (
    <View style={style}>
      <Hint label={hint.title} description={hint.description} image={hint.image} />
    </View>
  );
};

export default HintContainer;
