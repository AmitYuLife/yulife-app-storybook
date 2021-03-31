import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";

interface Props {
  title: string;
  description: string;
  marginBottom?: number;
}

const HeadingAndCopy = ({ title, description, marginBottom = Style.adjust(40) }: Props) => {
  return (
    <View style={{ marginBottom }}>
      <TextTemplate type="b1b">{title}</TextTemplate>
      <View style={styles.description}>
        <TextTemplate type="b2">{description}</TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
});

export default memo(HeadingAndCopy);
