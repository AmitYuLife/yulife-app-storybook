import React, { memo } from "react";
import { StyleSheet, View, ViewStyle, TextStyle, Text } from "react-native";
import { Style } from "../../../../styles";
import { SvgFromXml } from "react-native-svg";

export interface IMedicalHistoryItemProps {
  icon: string;
  title: string;
  description: string;
  showDelimiter: boolean;
}

export const MedicalHistoryItem = memo(function (props: IMedicalHistoryItemProps) {
  const { icon, title, description, showDelimiter } = props;
  return (
    <View style={styles.wrapper}>
      <SvgFromXml xml={icon} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {showDelimiter ? <View style={styles.delimiter} /> : null}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 24,
    flex: 1,
    flexDirection: "row",
  } as ViewStyle,
  textWrapper: {
    flexDirection: "column",
    marginLeft: 15,
    flex: 1,
  } as ViewStyle,
  title: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    color: "#5A5A5C",
  } as TextStyle,
  description: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    color: "#5A5A5C",
  } as TextStyle,
  delimiter: {
    width: Style.DEVICE_WIDTH,
    height: 1,
    backgroundColor: "#F3F3F3",
    position: "absolute",
    bottom: 0,
  } as ViewStyle,
});
