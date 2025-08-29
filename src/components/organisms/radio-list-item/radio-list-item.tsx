import React, { memo } from "react";
import { View } from "react-native";
import { Radio, TextTemplate } from "@atoms";
import { SETTINGS_NAME, TEXT_TEMPLATE } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules";
import { Style, StyleSheet } from "@styles";

export type RadioListItemProps = {
  id: string;
  title: string;
  description: string;
  isSelected: boolean;
  onPress: () => void;
};

const _RadioListItem = ({ title, description, id, onPress, isSelected }: RadioListItemProps) => (
  <TouchableOpacityWithDelay testID={SETTINGS_NAME(id)} key={title} onPress={onPress} style={styles.option}>
    <View>
      <TextTemplate type="b2b" testID={TEXT_TEMPLATE(title)}>
        {title}
      </TextTemplate>
      <TextTemplate type="l2" testID={TEXT_TEMPLATE(description)}>
        {description}
      </TextTemplate>
    </View>
    <View style={styles.radioWrapper}>
      <Radio selected={isSelected} />
    </View>
  </TouchableOpacityWithDelay>
);

export const RadioListItem = memo(_RadioListItem);

export default RadioListItem;

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    marginBottom: Style.adjust(24),
  },
  radioWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
