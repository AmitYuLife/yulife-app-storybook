import { Logo, Text } from "@atoms/index";
import { BUTTON_TOP_LEFT_BAR } from "@ids";
import { Colours, Style } from "@styles/index";
import moment from "moment";
import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Counter from "../counter/counter";
import { Back, Clock, Coins, Menu } from "./assets";
import { formatSeconds, getStyle } from "./top-bar.helpers";
import styles from "./top-bar.styles";

export type TopBarTypes = "default" | "white" | "desert" | "demo" | "mountain" | "forest";
export enum TOP_BAR_TYPES {
    DEFAULT = "default",
    WHITE = "white",
    DESERT = "desert",
    DEMO = "demo",
    MOUNTAIN = "mountain",
    FOREST = "forest"
}

interface IProps {
    onPressLeftIcon?: () => void;
    coins?: number;
    timer?: string;
    name?: string;
    menuLabel?: string;
    leftIcon?: LeftIconTypes;
    middleLabel?: string;
    type?: TopBarTypes;
    shouldHighlightCoins?: boolean;
}

export enum LEFT_ICON_TYPES {
    MENU = "Menu",
    BACK = "Back"
}

export type LeftIconTypes = "Menu" | "Back";

const renderLeftIcon = (leftIcon: LeftIconTypes, colour = "#333333") => {
    switch (leftIcon) {
        case "Menu":
            return <Menu color={colour} />;
        case "Back":
            return <Back color={colour} />;
        default:
            return null;
    }
};

interface IState {
    endsIn: string;
}

class TopBar extends React.Component<IProps, IState> {
    public static LeftIcon = LEFT_ICON_TYPES;
    public state: IState = {
        endsIn: null
    };
    private interval: NodeJS.Timer = null;

    public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
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

        return (
            this.props.coins !== nextProps.coins ||
            this.props.leftIcon !== nextProps.leftIcon ||
            this.props.menuLabel !== nextProps.menuLabel ||
            this.props.middleLabel !== nextProps.middleLabel ||
            this.props.name !== nextProps.name ||
            this.props.timer !== nextProps.timer ||
            this.props.type !== nextProps.type ||
            this.state.endsIn !== nextState.endsIn
        );
    }

    public componentWillUnmount() {
        if (this.interval) {
            global.clearInterval(this.interval);
        }
    }

    public renderCenter = (colour = "#333333", logoColour = "#E20177", textStyle = { color: "#333333" }) => {
        const { name, timer } = this.props;
        const { endsIn } = this.state;

        if (timer) {
            return (
                <View style={styles.timerWrapper}>
                    <Clock color={colour} />
                    <Text style={StyleSheet.flatten([styles.timer, textStyle])}>{endsIn}</Text>
                </View>
            );
        }

        if (name) {
            return (
                <View style={styles.textWrapper}>
                    <Text style={StyleSheet.flatten([styles.name, textStyle])}>{name}</Text>
                </View>
            );
        }

        return <Logo scale={0.25} colour={logoColour} />;
    };

    public render() {
        const {
            coins,
            leftIcon = "Menu",
            menuLabel,
            onPressLeftIcon,
            type = "default",
            shouldHighlightCoins = false
        } = this.props;

        if (type === "demo") {
            return this.renderDemo();
        }

        const { colour, logoColour, textStyle } = getStyle(type);
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity
                    style={styles.menuWrapper}
                    onPress={onPressLeftIcon}
                    testID={BUTTON_TOP_LEFT_BAR}
                    accessibilityLabel={leftIcon}
                    hitSlop={
                        Style.PIXEL_RATIO >= 3
                            ? {
                                  top: Style.SCALE_UP_AND_DOWN(10),
                                  left: Style.SCALE_UP_AND_DOWN(10),
                                  right: Style.SCALE_UP_AND_DOWN(10),
                                  bottom: Style.SCALE_UP_AND_DOWN(10)
                              }
                            : {}
                    }
                >
                    {renderLeftIcon(leftIcon, colour)}
                    {!menuLabel ? null : (
                        <View style={styles.menuLabelWrapper}>
                            <Text style={StyleSheet.flatten([styles.menuLabel, textStyle])}>{menuLabel}</Text>
                        </View>
                    )}
                </TouchableOpacity>
                {this.renderCenter(colour, logoColour, textStyle)}
                <View style={styles.coinsWrapper}>
                    <View style={styles.coinsTextWrapper}>
                        <Counter
                            value={coins || 0}
                            textStyle={StyleSheet.flatten([
                                styles.coinsText,
                                textStyle,
                                shouldHighlightCoins ? { color: Colours.darkHotPink } : null
                            ])}
                        />
                    </View>
                    <View style={styles.coinsLogoWrapper}>
                        <Coins color={shouldHighlightCoins ? Colours.darkHotPink : colour} />
                    </View>
                </View>
            </View>
        );
    }

    private renderDemo = () => {
        return (
            <View style={styles.wrapper}>
                <View style={styles.menuWrapper}>
                    <Menu color="rgb(51, 88, 66)" />
                </View>
                <View>
                    <Logo scale={0.25} colour="rgb(51, 88, 66)" />
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
