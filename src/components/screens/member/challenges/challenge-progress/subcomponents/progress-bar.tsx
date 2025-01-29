import * as React from "react";
import { View } from "react-native";
import { renderProgressLabel } from "./progress-bar.helpers";
import styles from "./progress-bar.styles";
import Progress from "./progress";
import { TextTemplate } from "@atoms";
import { GetQuestMapLevelChallengeDetailsQuery } from "@graphql/__generated";

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
  type: "steps" | "minutes" | "distance" | string;
  styleType: GetQuestMapLevelChallengeDetailsQuery["getQuestMapLevelChallengeDetails"]["progressBar"];
  title: string;
}

export default function ProgressBar({ title, amount, goals, type, styleType }: IProps) {
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
      <View style={styles.titleWrapper}>
        <View style={styles.title}>
          <TextTemplate type="l1b" color={styleType.goalTextColor}>
            {title}
          </TextTemplate>
        </View>
      </View>
      <View style={styles.counterPosition}>{renderProgressLabel({ amount, type, styleType })}</View>
    </View>
  );
}
