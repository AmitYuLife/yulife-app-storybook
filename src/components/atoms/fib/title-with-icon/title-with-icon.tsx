import React from "react";
import { StyleSheet, View, ViewStyle, TextStyle, Text } from "react-native";
import { Style } from "../../../../styles";
import { SvgFromXml } from "react-native-svg";

interface ITitleProps {
  icon: string;
  title: string;
}

export default function TitleWithIcon(props: ITitleProps) {
  const { icon, title } = props;
  return (
    <View style={styles.wrapper}>
      <SvgFromXml xml={icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 24,
    paddingLeft: 32,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  title: {
    fontSize: 12,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: 16,
    letterSpacing: 1,
    color: "#838385",
    marginLeft: 8,
  } as TextStyle,
});
