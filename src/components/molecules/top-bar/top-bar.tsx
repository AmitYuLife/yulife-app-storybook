import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "../../atoms";
import { Back, Coins, Logo, Menu } from "./assets";
import styles from "./top-bar.styles";

interface IProps {
    coins: number;
    leftIcon?: LeftIconTypes;
    menuLabel?: string;
    onPressLeftIcon: () => void;
    timer?: string;
}

export enum LEFT_ICON_TYPES {
    MENU = "Menu",
    BACK = "Back"
}

type LeftIconTypes = "Menu" | "Back";

const renderLeftIcon = (leftIcon: LeftIconTypes) => {
    switch (leftIcon) {
        case "Back":
            return <Back />;
        default:
            return <Menu />;
    }
};

class TopBar extends React.PureComponent<IProps> {

    public static LeftIcon = LEFT_ICON_TYPES;

    public render() {
        const { onPressLeftIcon, coins, leftIcon, timer, menuLabel } = this.props;

        return (
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.menuWrapper} onPress={onPressLeftIcon}>
                    {renderLeftIcon(leftIcon)}
                    {!menuLabel ? null : (
                        <View style={styles.menuLabelWrapper}>
                            <Text style={styles.menuLabel}>{menuLabel}</Text>
                        </View>
                    )}
                </TouchableOpacity>
                {!timer ? (
                    <Logo />
                ) : (
                    <View style={styles.timerWrapper}>
                        <Image
                            resizeMethod="resize"
                            resizeMode="contain"
                            style={styles.time}
                            source={require("./assets/clockIcon.png")}
                        />
                        <Text style={styles.timer}>{timer}</Text>
                    </View>
                )}
                <View style={styles.coinsWrapper}>
                    <Text style={styles.coinsText}>{coins}</Text>
                    <Coins scale={0.5} />
                </View>
            </View>
        );
    }
}

export default TopBar;
