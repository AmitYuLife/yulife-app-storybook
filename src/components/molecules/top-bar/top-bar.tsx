import moment from "moment";
import * as React from "react";
import { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colours } from "../../../styles";
import { Clock, Dim, Text } from "../../atoms";
import Counter from "../counter/counter";
import { Back, Coins, Logo, Menu } from "./assets";
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

interface IState {
    endsIn: string;
}

class TopBar extends Component<IProps, IState> {
    public static LeftIcon = LEFT_ICON_TYPES;
    public state: IState = {
        endsIn: null
    };
    private interval: number = null;

    public shouldComponentUpdate(nextProps: IProps) {
        if (nextProps.timer && !this.interval) {
            this.interval = setInterval(() => {
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

    public renderCenter = () => {
        const { timer, name } = this.props;
        const { endsIn } = this.state;

        if (timer) {
            return (
                <View style={styles.timerWrapper}>
                    <Clock />
                    <Text style={styles.timer}>{endsIn}</Text>
                </View>
            );
        }

        if (name) {
            return (
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{name}</Text>
                </View>
            );
        }

        return <Logo />;
    }

    public render() {
        const { onPressLeftIcon, coins, leftIcon = "Menu", menuLabel, isDemo } = this.props;
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
                                <Counter style={styles.coinsText} value={coins || 0} time={2000} />
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
