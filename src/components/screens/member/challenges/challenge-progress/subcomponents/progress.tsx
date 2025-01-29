import * as React from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Svg, { Circle, Polygon } from "react-native-svg";
import { padNum } from "@utils";
import { TextTemplate } from "@atoms";
import styles from "./progress.styles";
import { GetQuestMapLevelChallengeDetailsQuery } from "@graphql/__generated";

interface IProps {
  amount: number;
  goal: number;
  previousGoal?: number;
  styleType: GetQuestMapLevelChallengeDetailsQuery["getQuestMapLevelChallengeDetails"]["progressBar"];
  type: "steps" | "minute" | "meters" | string;
  width?: number;
}

interface IState {
  progressWidth: number;
  widthDefined: boolean;
}

class Progress extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const { width } = props;

    this.state = {
      progressWidth: width ? width : 0,
      widthDefined: !!width,
    };
  }

  public onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;

    if (!this.state.widthDefined) {
      this.setState({ progressWidth: width });
    }
  };

  public render() {
    const { progressWidth } = this.state;
    const { type, goal, amount, styleType, width, previousGoal = 0 } = this.props;
    const progressGoal = calculateProgress(previousGoal, goal, amount);

    return (
      <View
        style={{
          flex: width ? 0 : 1,
          height: 100,
          width: width ? width : null,
        }}
        onLayout={this.onLayout}
      >
        <View style={StyleSheet.flatten([styles.bar, { backgroundColor: styleType.barColor }])}>
          <View
            style={StyleSheet.flatten([
              styles.progress,
              {
                width: progressWidth * progressGoal,
              },
              { backgroundColor: styleType.progressColor },
            ])}
          />
        </View>
        <View style={styles.stepsGoals}>
          <View style={styles.stepsRow}>
            <View style={styles.goal}>
              <Svg style={styles.starBackground} width="12" height="12" viewBox="0 0 26 26">
                <Circle
                  cx="13"
                  cy="13"
                  fill={progressGoal === 1 ? styleType.progressGoalFilled : styleType.progressGoalEmpty}
                  r="13"
                />
              </Svg>
              <Svg style={styles.star} width="8" height="8" viewBox="0 0 26 26">
                <Polygon
                  fill={progressGoal === 1 ? styleType.progressStarFilled : styleType.progressStarEmpty}
                  /* tslint:disable-next-line */
                  points="16.1,8.9 25.5,8.9 18.1,14.7 21,23.7 13.2,18.5 5.5,24 8.1,14.9 0.5,9.3 9.9,9 12.8,0 "
                />
              </Svg>
              <View style={styles.goalContainer}>
                <TextTemplate type={"l1b"} color={styleType.goalTextColor}>
                  {adjustGoalValue(type, goal)}
                </TextTemplate>
              </View>
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
  }

  if (previousGoal <= amount) {
    return (amount - previousGoal) / (goal - previousGoal);
  }

  return 0;
};

const adjustGoalValue = (type: IProps["type"], goal: number): string | number => {
  switch (type) {
    case "minutes":
      return convertToMinutesAndSeconds(goal);
    case "meters":
      return (goal / 1000).toFixed(1);

    default:
      return goal;
  }
};
