import React, { memo } from "react";
import { View } from "react-native";
import { BetaText } from "@components/molecules";

interface Props {
  show?: boolean;
}

const _Beta = ({ show }: Props) => {
  if (!show) {
    return null;
  }

  return (
    <View>
      <BetaText />
    </View>
  );
};

export const Beta = memo(_Beta);
