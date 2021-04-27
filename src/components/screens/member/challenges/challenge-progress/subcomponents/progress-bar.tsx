import * as React from "react";
import { View } from "react-native";
import { renderProgressLabel } from "./progress-bar.helpers";
import styles from "./progress-bar.styles";
import Progress from "./progress";

const GOAL_LIMIT = 3;

export type ProgressBarTypes =
  | "black"
  | "ocean-white"
  | "ocean-black"
  | "desert-brown"
  | "ocean-light-blue"
  | "desert-pink"
  | "mountain-pink"
  | "mountain-black"
  | "forest-brisk-walk"
  | "forest-yellow"
  | "forest-white";

export interface IProps {
  amount: number;
  goals: number[];
  styleType?: ProgressBarTypes;
  type: "steps" | "minutes" | "distance" | string;
}

export default function ProgressBar({ amount, goals, styleType, type }: IProps) {
  return (
    <View style={styles.container}>
      {goals.map((goal, i) => {
        if (i >= GOAL_LIMIT) {
          return null;
        }

        const previousGoal = i >= 1 ? goals[i - 1] : undefined;
        const width = i >= 1 ? 50 : undefined;

        return (
          <Progress
            key={i}
            type={type}
            amount={amount}
            goal={goal}
            styleType={styleType}
            previousGoal={previousGoal}
            width={width}
          />
        );
      })}
      <View style={styles.counterPosition}>{renderProgressLabel({ amount, type, styleType })}</View>
    </View>
  );
}
