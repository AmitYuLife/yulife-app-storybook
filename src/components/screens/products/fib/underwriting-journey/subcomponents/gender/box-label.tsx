import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Text, GenderIcon } from "@atoms";
import { GenderIconType } from "@atoms/gender/gender";
import { Style } from "@styles";

interface Props {
  icon: GenderIconType;
  color: string;
  title: string;
}

const SIZE = Style.adjust(32);

export const BoxLabel = memo(({ icon, color, title }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <GenderIcon gender={icon} svgProps={{ color, height: SIZE, width: SIZE }} />
      </View>
      <View style={styles.textWrapper}>
        <Text bold={true} style={{ color }}>
          {title}
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "auto",
    height: "100%",
  } as ViewStyle,
  iconWrapper: {
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  textWrapper: {
    height: Style.adjust(32),
    justifyContent: "flex-end",
    paddingBottom: Style.adjust(8),
  } as ViewStyle,
});
