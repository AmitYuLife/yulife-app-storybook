import * as React from "react";
import { StatelessComponent } from "react";
import { PureComponent } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Svg from "react-native-svg";
import { Text } from "../../atoms";
import { Giraffe, Lines, Notification, Scroll, Treasure } from "./assets";
import { IconProps } from "./assets/icon.model";
import { getTextStyle } from "./nav-bar.helpers";
import styles, { getLabelAdjustment } from "./nav-bar.styles";

export interface ILabel {
    name: string;
    onPress: () => void;
    colour?: IColours;
}

export enum COLOURS {
    DARK = "dark",
    DARKER = "darker",
    LIGHT = "light",
    PINK = "pink"
}

export type IColours = "dark" | "darker" | "light" | "pink";

interface IProps {
    activeIndex: number;
    hasNotification?: boolean;
    labels?: ILabel[];
    colour?: IColours;
    areIconsHidden?: boolean;
    onDismissPress?: () => void;
}

interface IState {
    pressed: number;
}

class NavBar extends PureComponent<IProps, IState> {
    public static Colours = COLOURS;

    public static defaultProps = {
        colour: COLOURS.LIGHT,
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
            areIconsHidden,
            activeIndex,
            hasNotification,
            labels,
            onDismissPress
        } = this.props;
        const { pressed } = this.state;
        const icons: Array<StatelessComponent<IconProps>> = [Giraffe, Scroll, Treasure];
        const height = 85 * (!areIconsHidden ? 1 : 0.55);

        return (
            <View
                style={{
                    alignItems: "center",
                    height,
                    justifyContent: "flex-start",
                    width: 280
                }}
            >
                <Svg width={228} height={62} viewBox="0 0 457 124">
                    <Lines colour={colour} isExtended={!onDismissPress && !hasNotification} />
                    {icons.map((Icon, index) => (
                        <Icon
                            key={index}
                            isPressed={pressed === index}
                            isActive={activeIndex === index}
                            colour={colour}
                            onDismissPress={onDismissPress}
                            isIconHidden={areIconsHidden}
                        />
                    ))}
                    <Notification
                        colour={colour}
                        isPressed={pressed === 1}
                        isVisible={hasNotification}
                        isActive={activeIndex === 1}
                    />
                </Svg>
                <View
                    style={StyleSheet.flatten([
                        styles.labelsWrapper,
                        {
                            height: height - 20,
                            marginTop: 20
                        }
                    ])}
                >
                    {labels.map(({ name, onPress }, index) => (
                        <TouchableWithoutFeedback
                            key={index}
                            onPressIn={this.handlePressIn(index)}
                            onPressOut={this.handlePressOut(onPress)}
                        >
                            <View style={styles.textWrapper}>
                                <View style={getLabelAdjustment(index)}>
                                    <Text
                                        style={StyleSheet.flatten([
                                            styles.text,
                                            getTextStyle({
                                                colour,
                                                isActive: activeIndex === index,
                                                isPressed: pressed === index
                                            })
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
        );
    }

    private handlePressIn = (pressed: number) => {
        return () => this.setState({ pressed });
    }

    private handlePressOut = (onPress: () => void) => {
        return () => this.setState({ pressed: null }, onPress);
    }
}

export default NavBar;
