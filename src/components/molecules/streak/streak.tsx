import * as React from "react";
import { PureComponent } from "react";
import {
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Pad, Text } from "../../atoms";
import { Calendar } from "./assets";
import styles, { getColour } from "./streak.styles";

export interface IProps {
    currentStreak: number;
    isFinished: boolean;
    maxStreak: number;
    onPress: () => void;
    type: "forest" | "ocean";
}

interface IState {
    isPressed: boolean;
}

class Streak extends PureComponent<IProps, IState> {

    public state: IState = {
        isPressed: false
    };

    public render() {
        const {
            isFinished,
            currentStreak,
            maxStreak,
            type
        } = this.props;
        const { isPressed } = this.state;
        const backgroundColor = getColour(
            type,
            isFinished,
            isPressed
        );
        return (
            <TouchableWithoutFeedback
                onPressIn={this.handlePressIn}
                onPressOut={this.handlePressOut}
            >
                <View
                    style={StyleSheet.flatten([
                        styles.wrapper,
                        { backgroundColor }
                    ])}
                >
                    <Pad width={20} />
                    <Text
                        style={styles.text}
                    >
                        {`${currentStreak || 0}/${maxStreak || 1}`}
                    </Text>
                    <Calendar
                        backgroundColor={backgroundColor}
                        progress={
                            (currentStreak / maxStreak) *
                            100
                        }
                        scale={0.5}
                    />
                    <Pad width={isIphoneX() ? 30 : 15} />
                </View>
            </TouchableWithoutFeedback>
        );
    }

    private handlePressIn = () => {
        this.setState({ isPressed: true });
    }

    private handlePressOut = () => {
        this.setState(
            { isPressed: false },
            this.props.onPress
        );
    }
}

export default Streak;
