import { memo } from "react";
import { TextTemplate, Radio } from "@atoms";
import { StyleSheet } from "react-native";
import { Style } from "@styles";
import { Pressable } from "@components/molecules";

interface IGenericSelectorItemProps {
  label: string;
  onPress: () => void;
  isActive: boolean;
}

const GenericSelectorItem = ({ label, onPress, isActive }: IGenericSelectorItemProps) => {
  return (
    <Pressable delay={0} style={styles.button} onPress={onPress}>
      <TextTemplate type="b2" textAlign="center" testID={`GENERIC_SELECTOR_ITEM_${label}`}>
        {label}
      </TextTemplate>
      <Radio selected={isActive} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Style.adjust(16),
  },
});

export default memo(GenericSelectorItem);
