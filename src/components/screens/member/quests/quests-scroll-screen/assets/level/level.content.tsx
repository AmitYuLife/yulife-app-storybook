import * as React from "react";
import { StyleSheet, View } from "react-native";
import { getCurrentWorld, getNormalizedLevel, getQuestScreenTimer } from "@utils";
import { Chest, DoubleLock, Lock, Text } from "@atoms";
import LevelStar from "./level.star";
import styles from "./level.styles";
import { QuestsMapLevel } from "../../quests.context";
import { LEVEL_STAR_COUNT } from "@ids";
import { t } from "@locale";

export const getWorldColor = (level: number) => {
  const worldsByLevel = getCurrentWorld(level);
  switch (worldsByLevel) {
    case 1:
      return {
        color: "#042872",
        unCompleteStarColor: "#1AB1F1",
      };
    case 2:
      return {
        color: "#51002D",
        unCompleteStarColor: "#E16565",
      };
    case 3:
      return {
        color: "#3B0472",
        unCompleteStarColor: "#C858DA",
      };
    default:
      return {
        color: "#195139",
        unCompleteStarColor: "#22D49F",
      };
  }
};

const getLevelLockIcon = (currentLevel: number, normalizedLevel: number) => {
  const normalizedCurrentLevel = getNormalizedLevel(currentLevel);
  const { color } = getWorldColor(normalizedLevel);
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
      return <DoubleLock colour={color} />;
    default:
      return <Lock colour={color} />;
  }
};

export default function getLevelButton(
  nextAvailable: number,
  currentLevel: number,
  level: QuestsMapLevel,
  normalizedLevel: number
) {
  const { color, unCompleteStarColor } = getWorldColor(normalizedLevel);

  // step right up, we have more horrible logic, come and see the horrible logic!
  if (level.level % 50 === 0) {
    if (level.level > currentLevel) {
      return <Lock colour={color} />;
    }
  }

  if (level.level === currentLevel) {
    if (nextAvailable < 0) {
      const style = StyleSheet.flatten([styles.textPending, { color: !level.isActive ? color : "white" }]);
      const nextAvailableFormatted = getQuestScreenTimer(Math.abs(nextAvailable));

      return (
        <View style={styles.column}>
          <Text style={style} bold={true}>
            {t("screens.quests.level.pending")}
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
        <View style={styles.stars} testID={LEVEL_STAR_COUNT(level.rating)}>
          {Array.from({ length: 3 }).map((_, i) => (
            <LevelStar key={`${level.id}_${i}`} colour={level.rating > i ? color : unCompleteStarColor} />
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
