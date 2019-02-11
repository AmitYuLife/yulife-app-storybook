import moment from "moment";
import * as React from "react";
import { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colours } from "../../../styles";
import { Dim, Text } from "../../atoms";
import { Back, Clock, Coins, Logo, Menu } from "./assets";
import { formatSeconds } from "./top-bar.helpers";
import styles from "./top-bar.styles";

interface IProps {
    onPressLeftIcon?: () => void;
    coins?: number;
    timer?: string;
    name?: string;
    menuLabel?: string;
    leftIcon?: LeftIconTypes;
    isDemo?: boolean;
    isLight?: boolean;
    middleLabel?: string;
}

export enum LEFT_ICON_TYPES {
    MENU = "Menu",
    BACK = "Back"
}

export type LeftIconTypes = "Menu" | "Back";

const renderLeftIcon = (leftIcon: LeftIconTypes, isLight = false) => {
    switch (leftIcon) {
        case "Menu":
            return <Menu color={isLight ? "#FFFFFF" : "#333333"} />;
        case "Back":
            return <Back color={isLight ? "#FFFFFF" : "#333333"} />;
        default:
            return null;
    }
};

interface IState {
    endsIn: string;
}

class TopBar extends Component<IProps, IState> {
    public static LeftIcon = LEFT_ICON_TYPES;
    public state: IState = {
        endsIn: null
    };
    private interval: NodeJS.Timer = null;

    public shouldComponentUpdate(nextProps: IProps) {
        if (nextProps.timer && !this.interval) {
            this.interval = global.setInterval(() => {
                const duration = moment(nextProps.timer).diff(moment(), "seconds");

                if (duration > 0) {
                    const endsIn = formatSeconds(duration);
                    this.setState({ endsIn });
                } else {
                    clearInterval(this.interval);
                }
            }, 1000);
        }

        return true;
    }

    public componentWillUnmount() {
        if (this.interval) {
            global.clearInterval(this.interval);
        }
    }

    public renderCenter = () => {
        const { isLight = false, name, timer } = this.props;
        const { endsIn } = this.state;

        if (timer) {
            return (
                <View style={styles.timerWrapper}>
                    <Clock color={isLight ? "#FFFFFF" : "#333333"} />
                    <Text style={StyleSheet.flatten([styles.timer, isLight ? styles.textWhite : {}])}>{endsIn}</Text>
                </View>
            );
        }

        if (name) {
            return (
                <View style={styles.textWrapper}>
                    <Text style={StyleSheet.flatten([styles.name, isLight ? styles.textWhite : {}])}>{name}</Text>
                </View>
            );
        }

        return <Logo color={isLight ? "#FFFFFF" : "#E20177"} />;
    };

    public render() {
        const { coins, isDemo, isLight = false, leftIcon = "Menu", menuLabel, onPressLeftIcon } = this.props;

        if (isDemo) {
            this.renderDemo();
        }

        return (
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.menuWrapper} onPress={onPressLeftIcon}>
                    {renderLeftIcon(leftIcon, isLight)}
                    {!menuLabel ? null : (
                        <View style={styles.menuLabelWrapper}>
                            <Text style={StyleSheet.flatten([styles.menuLabel, isLight ? styles.textWhite : {}])}>
                                {menuLabel}
                            </Text>
                        </View>
                    )}
                </TouchableOpacity>
                {this.renderCenter()}
                <View style={styles.coinsWrapper}>
                    <View style={styles.coinsTextWrapper}>
                        <Text style={StyleSheet.flatten([styles.coinsText, isLight ? styles.textWhite : {}])}>
                            {coins || 0}
                        </Text>
                    </View>
                    <View style={styles.coinsLogoWrapper}>
                        <Coins color={isLight ? "#FFFFFF" : "#333333"} />
                    </View>
                </View>
            </View>
        );
    }

    private renderDemo = () => {
        return (
            <View style={styles.wrapper}>
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
            </View>
        );
    };
}

export default TopBar;
