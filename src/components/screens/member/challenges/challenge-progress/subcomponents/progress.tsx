import React, { Component } from "react";
import {
    LayoutChangeEvent,
    StyleSheet,
    View
} from "react-native";
import Svg, { Circle, Polygon } from "react-native-svg";
import { padNum } from "../../../../../../services/utils";
import { Text } from "../../../../../atoms";
import styles from "./progress.styles";

interface IProps {
    amount: number;
    goal: number;
    previousGoal?: number;
    type: "steps" | "minute" | string;
    width?: number;
}

interface IState {
    progressWidth: number;
    widthDefined: boolean;
}

class Progress extends Component<IProps, IState> {

    public state: IState = {
        progressWidth: 0,
        widthDefined: false
    };

    public componentWillMount() {
        this.setState({
            progressWidth: !!this.props.width
                ? this.props.width
                : 0,
            widthDefined: !!this.props.width
        });
    }

    public onLayout = (event: LayoutChangeEvent) => {
        const { width } = event.nativeEvent.layout;

        if (!this.state.widthDefined) {
            this.setState({ progressWidth: width });
        }
    }

    public render() {
        const { progressWidth } = this.state;
        const {
            type,
            goal,
            amount,
            width,
            previousGoal = 0
        } = this.props;
        const progressGoal = calculateProgress(previousGoal, goal, amount);

        return (
            <View
                style={{
                    flex: !!width ? 0 : 1,
                    height: 100,
                    width: !!width ? width : null
                }}
                onLayout={this.onLayout}
            >
                <View style={styles.bar}>
                    <View
                        style={StyleSheet.flatten([
                            styles.progress,
                            {
                                width:
                                    progressWidth *
                                    progressGoal
                            }
                        ])}
                    />
                </View>
                <View style={styles.stepsGoals}>
                    <View style={styles.stepsRow}>
                        <View style={styles.goal}>
                            <Svg style={styles.starBackground} width="10" height="10" viewBox="0 0 26 26">
                                <Circle
                                    cx="13"
                                    cy="13"
                                    fill={progressGoal === 1 ? "#000" : "rgb(233, 233, 233)"}
                                    r="13"
                                />
                            </Svg>
                            <Svg style={styles.star} width="8" height="8" viewBox="0 0 26 26">
                                <Polygon
                                    fill={progressGoal === 1 ? "#F1AF00" : "#FFF"}
                                    /* tslint:disable-next-line */
                                    points="16.1,8.9 25.5,8.9 18.1,14.7 21,23.7 13.2,18.5 5.5,24 8.1,14.9 0.5,9.3 9.9,9 12.8,0 " />
                            </Svg>
                            <Text
                                style={styles.goalText}
                                bold={true}
                            >
                                {adjustGoalValue(type, goal)}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Progress;

const convertToMinutesAndSeconds = (num: number) => {
    const minutes = padNum(Math.floor(num / 60));
    const seconds = padNum(num % 60);
    return `${minutes}:${seconds}`;
};

const calculateProgress = (previousGoal: number, goal: number, amount: number) => {
    if (goal <= amount) {
        return 1;
    } else if (previousGoal <= amount) {
        return (
            (amount - previousGoal) / (goal - previousGoal)
        );
    } else {
        return 0;
    }
};

const adjustGoalValue = (type: "steps" | "minutes" | string, goal: number): string | number => {
    switch (type) {
        case "minutes":
            return convertToMinutesAndSeconds(goal);

        default:
            return goal;
    }
};
