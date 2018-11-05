// This is a custom version of react-native-counter
// The npm module was out of date and broken
// Changes:
// - Converted to TypeScript
// - Fixed broken proptypes
// - Removed easing library
// - Reanimate on props change

import React, { Component } from "react";
import { TextStyle } from "react-native";
import { Text } from "../../atoms";

interface IProps {
    digits?: number; // Number of digits after the comma
    onComplete?: () => void; // Callback when the counter is completed
    style?: TextStyle;
    text?: string; // Text to write after value
    time?: number; // Duration (in ms) of the counter
    value: number;
}

interface IState {
    end: number; // end value of the counter
    value: number; // current value of the counter
}

export default class Counter extends Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        digits: 0,
        time: 1000,
        value: 0
    };

    public state: IState = {
        end: this.props.value, // no initial count
        value: this.props.value // no initial count
    };

    private startTime: number;
    private stop: boolean;

    public componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({ end: nextProps.value }, () => {
                this.startAnimation();
            });
        }
    }

    public render() {
        const { digits, style, text } = this.props;
        const { value } = this.state;

        return <Text style={style}>{`${value.toFixed(digits)}${text ? ` ${text}` : ""}`}</Text>;
    }

    private startAnimation() {
        this.stop = false;
        this.startTime = Date.now();
        requestAnimationFrame(this.animate.bind(this));
    }

    private animate() {
        const { onComplete } = this.props;

        if (this.stop) {
            if (onComplete) {
                onComplete();
            }

            return;
        }

        requestAnimationFrame(this.animate.bind(this));
        this.draw();
    }

    private draw() {
        const { time } = this.props;
        const now = Date.now();

        if (now - this.startTime >= time) {
            this.stop = true;
        }

        const percentage = Math.min((now - this.startTime) / time, 1);

        this.setState((state) => ({ value: state.value + (state.end - state.value) * percentage }));
    }
}
