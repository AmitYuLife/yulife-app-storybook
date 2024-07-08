import * as React from "react";
import { PropsWithChildren } from "react";
// eslint-disable-next-line no-restricted-imports
import { Text, View } from "react-native";
import styles from "./text-input.styles";

const TextInputError: React.FC<PropsWithChildren> = ({ children }) => (
  <View style={styles.textWrapper}>
    <Text style={styles.text}>{children}</Text>
  </View>
);

export default TextInputError;
