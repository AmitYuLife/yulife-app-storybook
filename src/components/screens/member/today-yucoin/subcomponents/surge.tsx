import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "@atoms/index";
import { Style } from "@styles/index";

interface IProps {
  surge: number;
  hide: boolean;
}

export default function Surge({ hide, surge }: IProps) {
  return hide ? null : (
    <View style={styles.surgeWrapper}>
      <Text style={styles.surge}>Surge x{surge}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  surgeWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(8),
    paddingVertical: Style.SCALE_UP_AND_DOWN(4),
    borderRadius: Style.SCALE_UP_AND_DOWN(20),
    borderColor: "rgb(216, 139, 37)",
    borderWidth: Style.SCALE_UP_AND_DOWN(1),
    marginLeft: Style.SCALE_UP_AND_DOWN(9),
  } as ViewStyle,
  surge: {
    fontSize: Style.SCALE_UP_AND_DOWN(13),
    color: "rgb(216, 139, 37)",
  },
});
