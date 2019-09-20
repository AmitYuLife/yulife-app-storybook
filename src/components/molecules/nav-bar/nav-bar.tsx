import { TAB_BUTTON } from "@ids";
import { Colours, Style } from "@styles/index";
import * as React from "react";
import { PureComponent } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Svg from "react-native-svg";
import { Text } from "../../atoms";
import { Giraffe, Lines, Notification, Scroll, Treasure } from "./assets";
import Trophy from "./assets/trophy";
import { getIconColour, getNavBarColourScheme } from "./nav-bar.helpers";
import styles, { getLabelAdjustment } from "./nav-bar.styles";

export interface ILabel {
    name: string;
    onPress: () => void;
    colour?: IColours;
}

export enum COLOURS {
    BLUE = "blue",
    DARK = "dark",
    DARKER = "darker",
    DESERT = "desert",
    LIGHT = "light",
    PINK = "pink",
    MOUNTAIN = "mountain",
    FOREST = "forest"
}

export type IColours = "blue" | "dark" | "darker" | "desert" | "light" | "pink" | "mountain" | "forest";

interface IProps {
    activeIndex: number;
    hasNotification?: boolean;
    hasWhiteBackground?: boolean;
    labels?: ILabel[];
    colour?: IColours;
    onDismissPress?: () => void;
    highlightedLabel?: HighlightedLabel;
}

type HighlightedLabel = "yucoin" | "quests" | "leaderboard" | "rewards";

interface IState {
    pressed: number;
}

class NavBar extends PureComponent<IProps, IState> {
    public static Colours = COLOURS;

    public static defaultProps = {
        colour: COLOURS.DARKER,
        labels: [
            {
                name: "yucoin",
                onPress: (): null => null
            },
            {
                name: "quests",
                onPress: (): null => null
            },
            {
                name: "leaderboard",
                onPress: (): null => null
            },
            {
                name: "rewards",
                onPress: (): null => null
            }
        ]
    };

    public state: IState = {
        pressed: null
    };

    public render() {
        const {
            colour = COLOURS.LIGHT,
            activeIndex,
            hasNotification,
            hasWhiteBackground,
            labels,
            onDismissPress,
            highlightedLabel
        } = this.props;
        const { pressed } = this.state;
        const colourScheme = getNavBarColourScheme(colour);

        return (
            <>
                <View style={styles.outerWrapper}>
                    <View style={styles.wrapper}>
                        <Svg
                            width={String(Style.SCALE_UP_AND_DOWN(252))}
                            height={String(Style.SCALE_UP_AND_DOWN(62))}
                            viewBox="0 0 575 119"
                        >
                            <Lines activeIndex={activeIndex} colourScheme={colourScheme} />
                            <Giraffe
                                isPressed={pressed === 0}
                                isActive={activeIndex === 0}
                                colourScheme={highlightedLabel === "yucoin" ? Colours.navBar.highlight : colourScheme}
                                hasDismiss={!!onDismissPress}
                                hasWhiteBackground={hasWhiteBackground}
                            />
                            <Scroll
                                isPressed={pressed === 1}
                                isActive={activeIndex === 1}
                                colourScheme={highlightedLabel === "quests" ? Colours.navBar.highlight : colourScheme}
                                hasDismiss={!!onDismissPress}
                                hasWhiteBackground={hasWhiteBackground}
                            />
                            <Notification isVisible={hasNotification} />
                            <Trophy
                                isPressed={pressed === 2}
                                isActive={activeIndex === 2}
                                colourScheme={
                                    highlightedLabel === "leaderboard" ? Colours.navBar.highlight : colourScheme
                                }
                                hasDismiss={!!onDismissPress}
                                hasWhiteBackground={hasWhiteBackground}
                            />
                            <Treasure
                                isPressed={pressed === 3}
                                isActive={activeIndex === 3}
                                colourScheme={highlightedLabel === "rewards" ? Colours.navBar.highlight : colourScheme}
                                hasDismiss={!!onDismissPress}
                                hasWhiteBackground={hasWhiteBackground}
                            />
                        </Svg>
                        <View style={StyleSheet.flatten(styles.labelsWrapper)}>
                            {labels.map(({ name, onPress }, index) => (
                                <TouchableWithoutFeedback
                                    testID={TAB_BUTTON(name)}
                                    accessibilityLabel={activeIndex === index ? "active" : "inactive"}
                                    key={index}
                                    onPressIn={this.handlePressIn(index)}
                                    onPressOut={this.handlePressOut(
                                        activeIndex === 1 && index === 1 ? onDismissPress : onPress
                                    )}
                                >
                                    <View style={styles.textWrapper}>
                                        <View style={getLabelAdjustment(index)}>
                                            <Text
                                                style={StyleSheet.flatten([
                                                    styles.text,
                                                    {
                                                        color: getIconColour(
                                                            highlightedLabel === name
                                                                ? Colours.navBar.highlight
                                                                : colourScheme,
                                                            activeIndex === index,
                                                            pressed === index
                                                        )
                                                    }
                                                ])}
                                            >
                                                {name}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </View>
                    </View>
                </View>
            </>
        );
    }

    private handlePressIn = (pressed: number) => {
        return () => this.setState({ pressed });
    };

    private handlePressOut = (onPress: () => void) => {
        return () => this.setState({ pressed: null }, onPress);
    };
}

export default NavBar;
