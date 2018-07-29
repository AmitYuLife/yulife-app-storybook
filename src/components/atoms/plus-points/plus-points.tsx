import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import { Text } from "..";
import Plus from "./assets/plus";
import styles from "./plus-points.styles";

interface IProps {
    coins: number;
}

const PlusPoints: SFC<IProps> = ({ coins }) => (
    <View style={styles.textWrapper}>
        <View style={styles.plusWrapper}>
            <Plus scale={0.5} />
        </View>
        <Text
            style={styles.text}
        >
            {`${coins}`}
        </Text>
    </View>
);

export default PlusPoints;
