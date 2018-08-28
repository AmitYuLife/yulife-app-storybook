import * as React from "react";
import { StatelessComponent } from "react";
import { PureComponent } from "react";
import {
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from "react-native";
import Svg from "react-native-svg";
import { Text } from "../../atoms";
import {
    Giraffe,
    Lines,
    Notification,
    Scroll,
    Treasure
} from "./assets";
import { IconProps } from "./assets/icon.model";
import { getTextStyle } from "./nav-bar.helpers";
import styles, {
    getLabelAdjustment
} from "./nav-bar.styles";

export interface ILabel {
    name: string;
    onPress: () => void;
    colour?: Colours;
}

export enum COLOURS {
    DARK = "dark",
    DARKER = "darker",
    LIGHT = "light"
}

export type Colours = "dark" | "darker" | "light";

interface IProps {
    activeIndex: number;
    hasNotification?: boolean;
    hasDismiss?: boolean;
    labels?: ILabel[];
    colour?: Colours;
    areIconsHidden?: boolean;
    onCancelPress?: () => void;
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
                name: "challenges",
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
            hasDismiss,
            activeIndex,
            hasNotification,
            labels
        } = this.props;
        const { pressed } = this.state;
        const icons: Array<StatelessComponent<IconProps>> = [Giraffe, Scroll, Treasure];

        return (
            <View
                style={{
                    alignItems: "center",
                    height: (85 * (!areIconsHidden ? 1 : 0.55)),
                    justifyContent: "flex-start",
                    width: 280
                }}
            >
                <Svg
                    width={228}
                    height={62}
                    viewBox="0 0 457 124"
                >
                    <Lines
                        colour={colour}
                        isExtended={!hasDismiss && !hasNotification}
                    />
                    {icons.map((Icon, index) => (
                        <Icon
                            key={index}
                            isPressed={pressed === index}
                            isActive={activeIndex === index}
                            colour={colour}
                            hasDismiss={hasDismiss && index === 1}
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
                <View style={styles.labelsWrapper}>
                    {labels.map(
                        ({ name, onPress }, index) => (
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
                        )
                    )}
                </View>
            </View >
        );
    }

    private handlePressIn = (pressed: number) => {
        return () => this.setState({ pressed });
    }

    private handlePressOut = (onPress: () => void) => {
        return () =>
            this.setState({ pressed: null }, onPress);
    }
}

export default NavBar;
