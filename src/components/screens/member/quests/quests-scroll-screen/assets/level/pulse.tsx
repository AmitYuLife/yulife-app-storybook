import React from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";
import { CIRCLE_SIZE } from "./level.styles";

interface IProps {
    interval?: number;
    size: number;
    pulseMaxSize: number;
    backgroundColor: string;
    style?: any;
}

interface IState {
    value: number;
}

export default class Pulse extends React.PureComponent<IProps, IState> {
    public state: IState = {
        value: 0
    };
    private pulseInterval: NodeJS.Timer = null;
    private anim = new Animated.Value(0);
    private interpolations = {
        backwards: {
            inputRange: [0, 0.5, 1],
            outputRange: [this.props.size - 2, this.props.size - 2, this.props.pulseMaxSize]
        },
        forwards: {
            inputRange: [0, 1],
            outputRange: [this.props.size, this.props.pulseMaxSize]
        }
    };

    public componentDidMount() {
        this.pulseInterval = global.setInterval(() => {
            this.setState(
                ({ value }) => ({ value: value ? 0 : 1 }),
                () => {
                    Animated.timing(this.anim, {
                        duration: this.props.interval,
                        easing: Easing.in((n: number) => n),
                        toValue: this.state.value
                    }).start();
                }
            );
        }, 1000);
    }

    public componentWillUnmount() {
        if (this.pulseInterval) {
            global.clearInterval(this.pulseInterval);
        }
    }

    public render() {
        const { pulseMaxSize, backgroundColor, style } = this.props;
        const { value } = this.state;

        return (
            <View
                style={[
                    styles.circleWrapper,
                    {
                        height: pulseMaxSize,
                        marginLeft: -pulseMaxSize / 2,
                        width: pulseMaxSize
                    },
                    typeof style.bottom === "undefined"
                        ? { top: (CIRCLE_SIZE - pulseMaxSize) / 2 }
                        : { bottom: (CIRCLE_SIZE - pulseMaxSize) / 2 }
                ]}
            >
                <Animated.View
                    style={[
                        {
                            backgroundColor,
                            borderRadius: pulseMaxSize / 2,
                            height: this.anim.interpolate(
                                value ? this.interpolations.forwards : this.interpolations.backwards
                            ),
                            opacity: 0.2,
                            width: this.anim.interpolate(
                                value ? this.interpolations.forwards : this.interpolations.backwards
                            )
                        },
                        style
                    ]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleWrapper: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute"
    }
});
