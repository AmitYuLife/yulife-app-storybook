import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";

type Props = {
  title: string;
};

export const Title = memo(({ title }: Props) => {
  if (!title) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <TextTemplate color="#FFFFFF" type="h2" textAlign="center">
        {title}
      </TextTemplate>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: Style.adjust(24) } as ViewStyle,
});
