import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";

export const PowerUpCopy = memo(() => {
  return (
    <View style={styles.copyWrapper}>
      <TextTemplate textAlign="center" type="b2">
        Your exclusive dental YuCoin power up has been unlocked!
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
