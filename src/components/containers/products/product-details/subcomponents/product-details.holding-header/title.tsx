import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { PRODUCT_DETAILS_HOLDING_TITLE } from "@ids";

type Props = {
  title: string;
};

export const Title = memo(({ title }: Props) => {
  if (!title) {
    return null;
  }

  return (
    <View style={styles.wrapper} testID={PRODUCT_DETAILS_HOLDING_TITLE}>
      <TextTemplate color="#FFFFFF" type="h2" textAlign="center">
        {title}
      </TextTemplate>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { paddingHorizontal: Style.adjust(24) } as ViewStyle,
});
