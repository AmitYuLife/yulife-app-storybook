import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "../../../../../../../styles";

interface ContactDetailsTitleProps {
  title: string;
}

export default function ContactDetailsTitle({ title }: ContactDetailsTitleProps) {
  return (
    <View style={styles.wrapper}>
      <Text bold={true} style={StyleSheet.flatten([styles.text])}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(16),
    marginTop: Style.adjust(24),
    marginHorizontal: Style.adjust(32),
  },
  text: {
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    color: Colours.neutral.n800,
  },
});
