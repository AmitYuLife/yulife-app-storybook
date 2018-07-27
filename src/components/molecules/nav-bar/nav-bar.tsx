import * as React from "react";
import { PureComponent } from "react";
import {
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import Svg from "react-native-svg";
import { Text } from "../../atoms";
import {
    Giraffe,
    Lines,
    Notification,
    Scroll,
    Treasure,
} from "./assets";
import styles, {
    getLabelAdjustment,
} from "./nav-bar.styles";

interface ILabel {
    name: string;
    onPress: () => void;
}

interface IProps {
    scale?: number;
    activeIndex: number;
    hasNotification: boolean;
    labels?: ILabel[];
}

interface IState {
    pressed: number;
}

class NavBar extends PureComponent<IProps, IState> {

    public static defaultProps = {
        labels: [
            {
                name: "yucoin",
                onPress: (): null => null,
            },
            {
                name: "quest",
                onPress: (): null => null,
            },
            {
                name: "rewards",
                onPress: (): null => null,
            },
        ],
    };

    public state: IState = {
        pressed: null,
    };

    public render() {
        const {
            scale = 1,
            activeIndex,
            hasNotification,
            labels,
        } = this.props;
        const { pressed } = this.state;
        const icons = [Giraffe, Scroll, Treasure];

        return (
            <View
                style={{
                    alignItems: "center",
                    height: 170 * scale,
                    justifyContent: "flex-start",
                    width: 560 * scale,
                }}
            >
                <Svg
                    width={457 * scale}
                    height={124 * scale}
                    viewBox="0 0 457 124"
                >
                    <Lines isExtended={!hasNotification} />
                    {icons.map((Icon, index) => (
                        <Icon
                            key={index}
                            isPressed={pressed === index}
                            isActive={activeIndex === index}
                        />
                    ))}
                    <Notification
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
                                disabled={
                                    activeIndex === index
                                }
                                onPressIn={this.handlePressIn(
                                    index
                                )}
                                onPressOut={this.handlePressOut(
                                    onPress
                                )}
                            >
                                <View
                                    style={
                                        styles.textWrapper
                                    }
                                >
                                    <View
                                        style={getLabelAdjustment(
                                            index
                                        )}
                                    >
                                        <Text
                                            style={StyleSheet.flatten(
                                                [
                                                    styles.text,
                                                    activeIndex ===
                                                    index
                                                        ? styles.activeText
                                                        : styles.inactiveText,
                                                    pressed ===
                                                    index
                                                        ? styles.pressed
                                                        : null,
                                                ]
                                            )}
                                        >
                                            {name}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    )}
                </View>
            </View>
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
