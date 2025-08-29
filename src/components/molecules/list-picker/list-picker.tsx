import React from "react";
import { View } from "react-native";
import { Text } from "@atoms";
import styles from "./list-picker.styles";
import { TEXT_TEMPLATE } from "@ids";
import { t } from "@locale";
import { TouchableOpacityWithDelay } from "@molecules";

import { StyleSheet } from "@styles";
interface IItem {
  label: string;
  onPress: () => void;
  testID?: string;
}

interface IProps {
  items: IItem[];
  instruction: string;
  onPressCancel?: () => void;
  closeOverlay?: () => void;
}

const ListPicker: React.FC<IProps> = ({ items, instruction, onPressCancel, closeOverlay }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.instructionWrapper}>
        <Text style={styles.instruction}>{instruction}</Text>
      </View>
      {items.map((item, index) => (
        <TouchableOpacityWithDelay
          key={index}
          style={StyleSheet.flatten([styles.itemWrapper, index + 1 === items.length ? styles.itemWrapperLast : {}])}
          onPress={item.onPress}
          testID={item?.testID}
        >
          <Text style={styles.item} testID={TEXT_TEMPLATE(item.label)}>
            {item.label}
          </Text>
        </TouchableOpacityWithDelay>
      ))}
      <TouchableOpacityWithDelay onPress={onPressCancel ? onPressCancel : closeOverlay} style={styles.cancelWrapper}>
        <Text style={styles.cancel}>{t("labels.cta.cancel")}</Text>
      </TouchableOpacityWithDelay>
    </View>
  );
};

export default ListPicker;
