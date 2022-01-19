import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";

export const PowerUpCopy = memo(() => {
  return (
    <View style={styles.copyWrapper}>
      <TextTemplate textAlign="center" type="b2">
        Your exclusive perks including your YuCoin Power is now active and have unlocked your new gloves!
      </TextTemplate>
    </View>
  );
});

const styles = StyleSheet.create({
  copyWrapper: {
    marginTop: Style.adjust(20),
    paddingHorizontal: Style.adjust(20),
  } as ViewStyle,
});
