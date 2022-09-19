import * as React from "react";
import { StyleSheet, View } from "react-native";
import { getCurrentWorld, getNormalizedLevel, getQuestScreenTimer } from "@utils";
import { Chest, DoubleLock, Lock, Text } from "@atoms";
import LevelStar from "./level.star";
import styles from "./level.styles";
import { QuestsMapLevel } from "../../quests.context";

const getWorldColor = (currentWorld: number) => {
  switch (currentWorld) {
    case 1:
      return "#042872";
    case 2:
      return "#51002D";
    case 3:
      return "#3B0472";
    default:
      return "#195139";
  }
};

const getLevelLockIcon = (currentLevel: number, normalizedLevel: number) => {
  const normalizedCurrentLevel = getNormalizedLevel(currentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
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
      return <DoubleLock colour={getWorldColor(currentWorld)} />;
    default:
      return <Lock colour={getWorldColor(currentWorld)} />;
  }
};

export default function getLevelButton(
  nextAvailable: number,
  currentLevel: number,
  level: QuestsMapLevel,
  normalizedLevel: number
) {
  const currentWorld = getCurrentWorld(currentLevel);
  const color = getWorldColor(currentWorld);

  // step right up, we have more horrible logic, come and see the horrible logic!
  if (level.level % 50 === 0) {
    if (level.level > currentLevel) {
      return <Lock colour={color} />;
    }

    return (
      <Text style={styles.text} bold={true}>
        {level.level}
      </Text>
    );
  }

  if (level.level === currentLevel) {
    if (nextAvailable < 0) {
      const style = StyleSheet.flatten([styles.textPending, { color: !level.isActive ? color : "white" }]);
      const nextAvailableFormatted = getQuestScreenTimer(Math.abs(nextAvailable));

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
    return (
      <View style={styles.column}>
        <Text style={StyleSheet.flatten([styles.text, { textAlign: "center", color }])}>{level.level}</Text>
        <View style={styles.stars}>
          {Array.from({ length: 3 }).map((_, i) => (
            <LevelStar key={`${level.id}_${i}`} colour={color} />
          ))}
        </View>
      </View>
    );
  }

  if (level.isChestLevel) {
    return <Chest colour={color} />;
  }

  return getLevelLockIcon(currentLevel, normalizedLevel);
}
