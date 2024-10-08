import { memo } from "react";
import { TextTemplate, Radio } from "@atoms";
import { PressableWithDelay } from "@components/molecules";
import { StyleSheet } from "react-native";
import { Style } from "@styles";

interface IGenericSelectorItemProps {
  label: string;
  onPress: () => void;
  isActive: boolean;
}

const GenericSelectorItem = ({ label, onPress, isActive }: IGenericSelectorItemProps) => {
  return (
    <PressableWithDelay delay={0} style={styles.button} onPress={onPress}>
      <TextTemplate type="b2" textAlign="center">
        {label}
      </TextTemplate>
      <Radio selected={isActive} />
    </PressableWithDelay>
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
