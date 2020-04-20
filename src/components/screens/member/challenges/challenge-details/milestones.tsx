import * as React from "react";
import { SFC } from "react";
import { Image, View } from "react-native";
import { Text } from "../../../../atoms";
import styles from "./challenge-details.styles";
import { Unit } from "../models";

export interface IMilestone {
  target: number;
  reward: number;
}

export interface IMilestoneProps {
  milestones: IMilestone[];
  unit: Unit;
}

const formatTarget = (target: number, unit: Unit) => {
  switch (unit) {
    case "minutes":
      return Math.floor(target / 60);

    default:
      return target;
  }
};

const SINGULAR_UNITS = {
  minutes: "minute",
  steps: "step"
};

function getUnitCopy(unit: Unit, amount: number) {
  if (amount === 1) {
    return SINGULAR_UNITS[unit];
  }

  return unit;
}

const Milestones: SFC<IMilestoneProps> = ({ milestones, unit }) => (
  <>
    {milestones.map(({ target, reward }, index) => {
      const formattedTarget = formatTarget(target, unit);
      const unitCopy = getUnitCopy(unit, formattedTarget);

      return (
        <View key={index} style={styles.row}>
          <View style={styles.targetWrapper}>
            <Text>{`${formattedTarget} ${unitCopy}`}</Text>
          </View>
          {Array.from({ length: milestones.length === 1 ? 3 : index + 1 }).map((_, i) => (
            <Image key={i} source={require("../../../../../../assets/icons/star.png")} style={styles.starImage} />
          ))}
          <View style={styles.rewardWrapper}>
            <Text>{`${reward} x`}</Text>
          </View>
          <Image style={styles.yucoinImage} source={require("../../../../../../assets/icons/yucoin.png")} />
        </View>
      );
    })}
  </>
);

export default Milestones;
