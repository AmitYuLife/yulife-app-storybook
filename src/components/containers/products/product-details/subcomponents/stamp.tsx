import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Icon, TextTemplate } from "@atoms";
import { Style } from "@styles";

interface Props {
  value: string;
}

export const Stamp = ({ value }: Props) => (
  <View style={styles.wrapper}>
    <Icon.Clock height={ICON_HEIGHT} width={ICON_HEIGHT} />
    <View style={styles.textWrapper}>
      <TextTemplate type="l1">{value}</TextTemplate>
    </View>
  </View>
);

const ICON_HEIGHT = Style.adjust(16);
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(36),
    alignItems: "center",
  } as ViewStyle,
  textWrapper: {
    marginLeft: Style.adjust(8),
    marginTop: 2,
  } as ViewStyle,
});
