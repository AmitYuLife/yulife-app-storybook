import React, { memo } from "react";
import { TextTemplate } from "@atoms";
import { TEXT_TEMPLATE } from "@ids";
import { Style } from "@styles";
import { StyleSheet, View, ViewStyle } from "react-native";

interface IProps {
  title?: string;
  description?: string;
  icon: React.ReactNode;
}

const YugiHeader = ({ title, description, icon }: IProps) => (
  <View style={styles.container}>
    <View style={styles.infoWrapper}>
      <TextTemplate type="h3" testID={TEXT_TEMPLATE(title)}>
        {title}
      </TextTemplate>
      <View style={styles.description}>
        <TextTemplate type="b2">{description}</TextTemplate>
      </View>
    </View>
    <View style={styles.yugiWellBeing}>{icon}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  infoWrapper: {
    flex: 0.6,
    paddingLeft: Style.adjust(24),
  } as ViewStyle,
  description: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  yugiWellBeing: {
    flex: 0.4,
    alignItems: "flex-end",
  } as ViewStyle,
});

export default memo(YugiHeader);
