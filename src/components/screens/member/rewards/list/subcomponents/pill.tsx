import * as React from "react";
import { View } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { TextTemplate } from "@atoms";

type Props = {
  backgroundColor: string;
  text: string;
};

const _RewardPill = ({ text, backgroundColor }: Props) => (
  <View style={[styles.pill, { backgroundColor }]}>
    <TextTemplate color={Colours.neutral.white} type="l2b">
      {text}
    </TextTemplate>
  </View>
);

const RewardPill = React.memo(_RewardPill);
export default RewardPill;

const styles = StyleSheet.create({
  pill: {
    borderRadius: Style.adjust(12),
    paddingHorizontal: Style.adjust(8),
    paddingVertical: Style.adjust(2),
  },
});
