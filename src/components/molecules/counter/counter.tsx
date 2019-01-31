import * as React from "react";
import { Animated } from "react-native";

interface IProps {
    initialValue?: number;
    value: number;
    renderValue: (value: number) => React.ReactNode;
}

interface IState {
    value: number;
}

class Counter extends React.PureComponent<IProps, IState> {
    private animatedValue: Animated.Value;
    constructor(props: IProps) {
        super(props);

        const { initialValue } = props;
        const firstValue = initialValue !== null ? initialValue : props.value;

        this.animatedValue = new Animated.Value(firstValue);
        this.animatedValue.addListener(this.onValueChanged);

        this.state = {
            value: firstValue
        };
    }

    public componentWillReceiveProps(nextProps: IProps) {
        const { value } = this.props;

        if (value !== nextProps.value) {
            this.move(nextProps);
        }
    }

    public render() {
        const { renderValue } = this.props;
        const { value } = this.state;

        return renderValue(value);
    }

    private onValueChanged = (e: Partial<IProps>) => {
        this.setState({
            value: e.value
        });
    }

    private move = (props: Partial<IProps>) => {
        const { value } = props;

        Animated.timing(this.animatedValue, {
            duration: 150,
            toValue: value,
            useNativeDriver: true
        }).start();
    }
}

export default Counter;
