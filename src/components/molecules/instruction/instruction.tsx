import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { Text } from "../../atoms";
import styles from "./instruction.styles";

interface IProps {
    bullet: number;
    instruction: string;
}

const Instruction: SFC<IProps> = ({ bullet, instruction }) => (
    <View style={styles.wrapper}>
        <View style={styles.textWrapper}>
            <Text>{`${bullet}.`}</Text>
        </View>
        <View>
            <Text>{instruction}</Text>
        </View>
    </View>
);

export default Instruction;
