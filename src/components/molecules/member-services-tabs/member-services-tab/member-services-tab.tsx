import * as React from "react";
import { SFC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../../../atoms";
import styles from "./member-services-tab.styles";

interface IProps {
  label: "YuMatter" | "SmartHealth";
  isFlipped?: boolean;
  isActive?: boolean;
  onPress: () => void;
}

const MemberServiceTab: SFC<IProps> = ({ isFlipped, isActive, label, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={StyleSheet.flatten([styles.wrapper, isFlipped ? styles.flipped : null, isActive ? styles.active : null])}
  >
    <Text style={isActive ? styles.textActive : styles.text}>{label || ""}</Text>
  </TouchableOpacity>
);

export default MemberServiceTab;
