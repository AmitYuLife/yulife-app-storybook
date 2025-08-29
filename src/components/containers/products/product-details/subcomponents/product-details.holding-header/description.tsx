import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";

type Props = {
  description?: string;
};

export const Description = memo(({ description }: Props) => {
  if (!description) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <TextTemplate color="#FFFFFF" type="b2b" textAlign="center">
        {description}
      </TextTemplate>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: Style.adjust(24), paddingTop: Style.adjust(16) } as ViewStyle,
});
