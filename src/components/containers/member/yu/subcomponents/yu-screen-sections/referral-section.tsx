import React from "react";
import { View } from "react-native";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";

interface IReferralSection {
  id: string;
}

export const ReferralSection = ({ id }: IReferralSection) => {
  return (
    <View key={id} style={style}>
      <TextTemplate type="h2" textAlign="center">
        Referrals
      </TextTemplate>
    </View>
  );
};

const style = {
  padding: Style.adjust(24),
};
