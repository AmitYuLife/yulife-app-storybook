import * as React from "react";
import { PureComponent } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colours } from "../../../styles";
import { Clock, Dim, Text } from "../../atoms";
import { Back, Coins, Logo, Menu } from "./assets";
import styles from "./top-bar.styles";

interface IProps {
    onPressLeftIcon?: () => void;
    coins?: number;
    timer?: string;
    name?: string;
    menuLabel?: string;
    leftIcon?: LeftIconTypes;
    isDemo?: boolean;
    middleLabel?: string;
}

export enum LEFT_ICON_TYPES {
    MENU = "Menu",
    BACK = "Back"
}

export type LeftIconTypes = "Menu" | "Back";

const renderLeftIcon = (leftIcon: LeftIconTypes) => {
    switch (leftIcon) {
        case "Menu":
            return <Menu />;
        case "Back":
            return <Back />;
        default:
            return null;
    }
};

class TopBar extends PureComponent<IProps> {
    public static LeftIcon = LEFT_ICON_TYPES;

    public renderCenter = () => {
        const { timer, name } = this.props;

        if (timer) {
            return (
                <View style={styles.timerWrapper}>
                    <Clock />
                    <Text style={styles.timer}>{timer}</Text>
                </View>
            );
        }

        if (name) {
            return (
                <View style={styles.timerWrapper}>
                    <Text style={styles.name}>{name}</Text>
                </View>
            );
        }

        return <Logo />;
    }

    public render() {
        const {
            onPressLeftIcon,
            coins,
            leftIcon = "Menu",
            menuLabel,
            isDemo
        } = this.props;
        return (
            <View style={styles.wrapper}>
                {isDemo ? (
                    <>
                        <View style={styles.menuWrapper}>
                            <Menu />
                            <Dim />
                        </View>
                        <View>
                            <Logo />
                            <Dim />
                        </View>
                        <View style={styles.coinsWrapper}>
                            <Text
                                style={StyleSheet.flatten([
                                    styles.coinsText,
                                    {
                                        color: Colours.darkHotPink
                                    }
                                ])}
                            >
                                {`200`}
                            </Text>
                            <Coins color={Colours.darkHotPink} />
                        </View>
                    </>
                ) : (
                    <>
                        <TouchableOpacity style={styles.menuWrapper} onPress={onPressLeftIcon}>
                            {renderLeftIcon(leftIcon)}
                            {!menuLabel ? null : (
                                <View style={styles.menuLabelWrapper}>
                                    <Text style={styles.menuLabel}>{menuLabel}</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                        {this.renderCenter()}
                        <View style={styles.coinsWrapper}>
                            <View style={styles.coinsTextWrapper}>
                                <Text style={styles.coinsText}>{coins || 0}</Text>
                            </View>
                            <View style={styles.coinsLogoWrapper}>
                                <Coins scale={0.5} />
                            </View>
                        </View>
                    </>
                )}
            </View>
        );
    }
}

export default TopBar;
