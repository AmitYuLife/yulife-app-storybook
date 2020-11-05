import * as React from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Svg, { Circle, Polygon } from "react-native-svg";
import { padNum } from "../../../../../../services/utils";
import { Text } from "../../../../../atoms";
import { ProgressBarTypes } from "./progress-bar";
import styles from "./progress.styles";

interface IProps {
  amount: number;
  goal: number;
  previousGoal?: number;
  styleType?: ProgressBarTypes;
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
    const worldStyle = getStyle(styleType);

    return (
      <View
        style={{
          flex: width ? 0 : 1,
          height: 100,
          width: width ? width : null,
        }}
        onLayout={this.onLayout}
      >
        <View style={StyleSheet.flatten([styles.bar, worldStyle.barColor])}>
          <View
            style={StyleSheet.flatten([
              styles.progress,
              {
                width: progressWidth * progressGoal,
              },
              worldStyle.progressColor,
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
                  fill={progressGoal === 1 ? worldStyle.progressGoalFilled : worldStyle.progressGoalEmpty}
                  r="13"
                />
              </Svg>
              <Svg style={styles.star} width="8" height="8" viewBox="0 0 26 26">
                <Polygon
                  fill={progressGoal === 1 ? worldStyle.progressStarFilled : worldStyle.progressStarEmpty}
                  /* tslint:disable-next-line */
                  points="16.1,8.9 25.5,8.9 18.1,14.7 21,23.7 13.2,18.5 5.5,24 8.1,14.9 0.5,9.3 9.9,9 12.8,0 "
                />
              </Svg>
              <Text bold={true} style={StyleSheet.flatten([styles.goalText, worldStyle.goalTextColor])}>
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

const getStyle = (styleType: ProgressBarTypes) => {
  switch (styleType) {
    case "mountain-pink":
      return {
        barColor: styles.barColorMountainPink,
        goalTextColor: styles.goalTextColorDesertPink,
        progressColor: styles.progressColorBlack,
        progressGoalEmpty: "rgb(231, 116, 121)",
        progressGoalFilled: "#000",
        progressStarEmpty: "#FFF",
        progressStarFilled: "#F1AF00",
      };
    case "mountain-black":
      return {
        barColor: styles.barColorOceanBlack,
        goalTextColor: styles.goalTextColorOceanBlack,
        progressColor: styles.progressColorOceanBlack,
        progressGoalEmpty: "rgb(80, 142, 205)",
        progressGoalFilled: "#000",
        progressStarEmpty: "#FFF",
        progressStarFilled: "#F1AF00",
      };
    case "desert-brown":
      return {
        barColor: styles.barColorDesertBrown,
        goalTextColor: styles.goalTextColorDesertBrown,
        progressColor: styles.progressColorBlack,
        progressGoalEmpty: "rgb(252,194,116)",
        progressGoalFilled: "#000",
        progressStarEmpty: "#FFF",
        progressStarFilled: "#F1AF00",
      };
    case "desert-pink":
      return {
        barColor: styles.barColorDesertCycling,
        goalTextColor: styles.goalTextColorDesertPink,
        progressColor: styles.progressColorBlack,
        progressGoalEmpty: "rgb(248,111,99)",
        progressGoalFilled: "#000",
        progressStarEmpty: "#FFF",
        progressStarFilled: "#F1AF00",
      };
    case "ocean-black":
      return {
        barColor: styles.barColorOceanBlack,
        goalTextColor: styles.goalTextColorOceanBlack,
        progressColor: styles.progressColorOceanBlack,
        progressGoalEmpty: "rgb(80, 142, 205)",
        progressGoalFilled: "#000",
        progressStarEmpty: "rgb(174, 219, 244)",
        progressStarFilled: "#F1AF00",
      };
    case "ocean-white":
      return {
        barColor: styles.barColorOceanWhite,
        goalTextColor: styles.goalTextColorOceanWhite,
        progressColor: styles.progressColorOceanWhite,
        progressGoalEmpty: "rgb(80, 142, 205)",
        progressGoalFilled: "#FFF",
        progressStarEmpty: "rgb(174, 219, 244)",
        progressStarFilled: "#F1AF00",
      };
    case "ocean-light-blue":
      return {
        barColor: styles.barColorOceanLightBlue,
        goalTextColor: styles.goalTextColorLightBlue,
        progressColor: styles.progressColorBlack,
        progressGoalEmpty: "rgb(216, 240, 255)",
        progressGoalFilled: "#000",
        progressStarEmpty: "#FFF",
        progressStarFilled: "#F1AF00",
      };
    case "forest-brisk-walk":
      return {
        barColor: styles.barColorForestWhite,
        goalTextColor: styles.goalTextPink,
        progressColor: styles.progressColorBlack,
        progressGoalEmpty: "rgb(253, 251, 251)",
        progressGoalFilled: "#000",
        progressStarEmpty: "#F1AF00",
        progressStarFilled: "#F1AF00",
      };
    case "forest-yellow":
      return {
        barColor: styles.barColorForestWhite,
        goalTextColor: styles.goalTextYellow,
        progressColor: styles.progressColorBlack,
        progressGoalEmpty: "rgb(253, 251, 251)",
        progressGoalFilled: "#000",
        progressStarEmpty: "#F1AF00",
        progressStarFilled: "#F1AF00",
      };
    case "forest-white":
      return {
        barColor: styles.barColorForestGreen,
        goalTextColor: styles.goalTextGreen,
        progressColor: styles.progressColorOceanWhite,
        progressGoalEmpty: "rgb(64, 135, 95)",
        progressGoalFilled: "white",
        progressStarEmpty: "white",
        progressStarFilled: "#F1AF00",
      };
    case "black":
    default:
      return {
        barColor: styles.barColorBlack,
        goalTextColor: styles.goalTextColorBlack,
        progressColor: styles.progressColorBlack,
        progressGoalEmpty: "rgb(233, 233, 233)",
        progressGoalFilled: "#000",
        progressStarEmpty: "#FFF",
        progressStarFilled: "#F1AF00",
      };
  }
};
