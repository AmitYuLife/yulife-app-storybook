import * as React from "react";
import { SFC } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../atoms";
import { Coins, Logo, Menu } from "./assets";
import styles from "./top-bar.styles";

interface IProps {
    onPress: () => void;
    coins: number;
}

const TopBar: SFC<IProps> = ({ onPress, coins }) => (
    <View style={styles.wrapper}>
        <TouchableOpacity
            style={styles.menuWrapper}
            onPress={onPress}
        >
            <Menu />
        </TouchableOpacity>
        <Logo scale={0.5} />
        <View style={styles.coinsWrapper}>
            <Text style={styles.coinsText}>
                {coins || 0}
            </Text>
            <Coins scale={0.5} />
        </View>
    </View>
);

export default TopBar;
