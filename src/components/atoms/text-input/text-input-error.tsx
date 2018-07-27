import * as React from "react";
import { SFC } from "react";
import { Text, View } from "react-native";
import styles from "./text-input.styles";

const TextInputError: SFC<{}> = ({ children }) => (
    <View style={styles.textWrapper}>
        <Text style={styles.text}>
            {children}
        </Text>
    </View>
);

export default TextInputError;
