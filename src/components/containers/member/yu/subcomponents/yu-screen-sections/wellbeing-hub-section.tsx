import React from "react";
import { View } from "react-native";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";

interface IWellbeingHubSection {
  id: string;
}

export const WellbeingHubSection = ({ id }: IWellbeingHubSection) => {
  return (
    <View key={id} style={style}>
      <TextTemplate type="h2" textAlign="center">
        Wellbeing Hub
      </TextTemplate>
    </View>
  );
};

const style = {
  paddingVertical: Style.adjust(20),
  paddingHorizontal: Style.adjust(24),
};
