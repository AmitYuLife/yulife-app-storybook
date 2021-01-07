import * as React from "react";
import { StyleSheet, View } from "react-native";
import { getCurrentWorld, getNormalizedLevel } from "../../../../../../../services/utils";
import { Chest, DoubleLock, Lock, Text } from "../../../../../../atoms";
import { IChallenge } from "../../quests-screen";
import { getTime } from "./level.helpers";
import LevelStar from "./level.star";
import styles from "./level.styles";

const getTextColor = (level: number) => {
  switch (true) {
    case level > 14 && level < 22:
      return "rgb(225, 210, 88)";
    case level > 64 && level < 72:
      return "rgb(233, 210, 10)";
    default:
      return "#fff";
  }
};

const getStarColor = (level: number, isCompleted: boolean) => {
  switch (true) {
    case level > 71 && level < 100:
    case level > 50 && level < 65:
      return isCompleted ? "rgb(142, 227, 255)" : "rgba(142, 227, 255, 0.4)";
    case level > 64 && level < 72:
      return isCompleted ? "rgb(233, 210, 10)" : "rgba(233, 210, 10, 0.3)";
    case level > 14 && level < 22:
      return isCompleted ? "rgb(225, 210, 88)" : "rgba(225, 210, 88, 0.3)";
    default:
      return isCompleted ? "white" : "rgba(255,255,255, 0.4)";
  }
};

const getLevelLockIcon = (currentLevel: number, normalizedLevel: number) => {
  const normalizedCurrentLevel = getNormalizedLevel(currentLevel);
  switch (true) {
    case normalizedLevel === 20 && normalizedCurrentLevel < 19:
    case normalizedLevel === 41 && normalizedCurrentLevel < 40:
    case normalizedLevel === 45 && normalizedCurrentLevel < 44:
    case normalizedLevel === 48 && normalizedCurrentLevel < 47:
    case normalizedLevel === 70 && normalizedCurrentLevel < 69:
    case normalizedLevel === 91 && normalizedCurrentLevel < 89:
    case normalizedLevel === 95 && normalizedCurrentLevel < 94:
    case normalizedLevel === 98 && normalizedCurrentLevel < 97:
    case normalizedLevel === 120 && normalizedCurrentLevel < 118:
    case normalizedLevel === 145 && normalizedCurrentLevel < 144:
    case normalizedLevel === 148 && normalizedCurrentLevel < 147:
    case normalizedLevel === 170 && normalizedCurrentLevel < 169:
    case normalizedLevel === 191 && normalizedCurrentLevel < 190:
    case normalizedLevel === 195 && normalizedCurrentLevel < 194:
    case normalizedLevel === 198 && normalizedCurrentLevel < 197:
      return <DoubleLock colour={getLockColor(normalizedLevel)} />;
    default:
      return <Lock colour={getLockColor(normalizedLevel)} />;
  }
};

export default function getLevelButton(
  nextAvailable: number,
  currentLevel: number,
  level: IChallenge,
  normalizedLevel: number
) {
  // step right up, we have more horrible logic, come and see the horrible logic!
  if (level.level % 50 === 0) {
    if (level.level > currentLevel) {
      return <Lock colour={getLockColor(normalizedLevel)} />;
    }

    return (
      <Text style={styles.text} bold={true}>
        {level.level}
      </Text>
    );
  }

  if (level.level === currentLevel) {
    if (nextAvailable < 0) {
      const style = StyleSheet.flatten([styles.textPending, { color: !level.isActive ? "rgb(79, 151,139)" : "white" }]);
      const nextAvailableFormatted = getTime(Math.abs(nextAvailable));

      return (
        <View style={styles.column}>
          <Text style={style} bold={true}>
            in
          </Text>
          <Text style={style} bold={true}>
            {nextAvailableFormatted}
          </Text>
        </View>
      );
    }

    return (
      <Text style={styles.text} bold={true}>
        {level.level}
      </Text>
    );
  }

  if (level.isActive) {
    return (
      <Text style={styles.text} bold={true}>
        {level.level}
      </Text>
    );
  }

  if (level.level < currentLevel) {
    const color = getTextColor(normalizedLevel);
    return (
      <View style={styles.column}>
        <Text style={StyleSheet.flatten([styles.text, { textAlign: "center", color }])}>{level.level}</Text>
        <View style={styles.stars}>
          {Array.from({ length: 3 }).map((_, i) => (
            <LevelStar key={`${level.id}_${i}`} colour={getStarColor(normalizedLevel, level.rating > i)} />
          ))}
        </View>
      </View>
    );
  }

  if (level.isChestLevel) {
    return <Chest colour={getLockColor(normalizedLevel)} />;
  }

  return getLevelLockIcon(currentLevel, normalizedLevel);
}

function getLockColor(level: number) {
  if (level > 64 && level < 72) {
    return "rgb(118, 82, 48)";
  }

  const world = getCurrentWorld(level);

  switch (world) {
    case 3:
      return "rgb(87, 133, 188)";
    case 2:
      return "rgb(183, 136, 67)";
    case 1:
      return "rgb(4, 40, 114)";
    case 0:
    default:
      return "rgb(73, 133, 193)";
  }
}
