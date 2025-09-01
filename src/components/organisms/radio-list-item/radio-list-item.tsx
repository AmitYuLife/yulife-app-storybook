import React, { memo } from "react";
import { Box, Radio, TextTemplate } from "@atoms";
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
    <Box>
      <TextTemplate type="b2b" testID={TEXT_TEMPLATE(title)} writingDirection="ltr">
        {title}
      </TextTemplate>
      <TextTemplate type="l2" testID={TEXT_TEMPLATE(description)}>
        {description}
      </TextTemplate>
    </Box>
    <Radio selected={isSelected} />
  </TouchableOpacityWithDelay>
);

export const RadioListItem = memo(_RadioListItem);

export default RadioListItem;

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    marginVertical: Style.adjust(6),
    justifyContent: "space-between",
    paddingHorizontal: Style.adjust(24),
  },
});
