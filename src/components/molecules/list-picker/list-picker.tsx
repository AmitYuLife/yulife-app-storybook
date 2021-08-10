import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "@atoms";
import styles from "./list-picker.styles";

interface IItem {
  label: string;
  onPress: () => void;
}

interface IProps {
  items: IItem[];
  instruction: string;
  onPressCancel: () => void;
}

const ListPicker: React.FC<IProps> = ({ items, instruction, onPressCancel }) => (
  <View style={styles.wrapper}>
    <View style={styles.instructionWrapper}>
      <Text style={styles.instruction}>{instruction}</Text>
    </View>
    {items.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={StyleSheet.flatten([styles.itemWrapper, index + 1 === items.length ? styles.itemWrapperLast : {}])}
        onPress={item.onPress}
      >
        <Text style={styles.item}>{item.label}</Text>
      </TouchableOpacity>
    ))}
    <TouchableOpacity onPress={onPressCancel} style={styles.cancelWrapper}>
      <Text style={styles.cancel}>Cancel</Text>
    </TouchableOpacity>
  </View>
);

export default ListPicker;
