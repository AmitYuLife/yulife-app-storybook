import { TextTemplate } from "@atoms";
import { Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  cost: string;
  color: string;
}

export const CoverCost = memo(({ cost, color }: Props) => {
  return (
    <View style={styles.activeCoverCost}>
      <TextTemplate textAlign="right" type="b2b" color={color}>
        {cost}
      </TextTemplate>
    </View>
  );
});

const styles = StyleSheet.create({
  activeCoverCost: {
    width: Style.adjust(80),
    marginLeft: Style.adjust(16),
  } as ViewStyle,
});
