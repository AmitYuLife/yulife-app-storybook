import * as React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { getCurrentWorld, getNormalizedLevel, getTimeUntil } from "@utils";
import { Chest, DoubleLock, Lock, Text } from "@atoms";
import styles from "./level.styles";
import { QuestsMapLevel } from "../../quests.context";
import { t } from "@locale";
import { PastLevelLegacy } from "./pastLevel.legacy";
import { Colours } from "@styles";
import { PastLevel } from "./pastLevel";

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
  normalizedLevel: number,
  tempQuestMapLevelBubbleRedesign: boolean,
  textScale: Animated.Value
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
      const style = StyleSheet.flatten([
        styles.textPending,
        {
          color: getPendingTextColor({ color, useLegacy: !tempQuestMapLevelBubbleRedesign, isActive: level.isActive }),
        },
      ]);
      const nextAvailableFormatted = getTimeUntil(Math.abs(nextAvailable));

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
      <Animated.View style={{ transform: [{ scale: textScale }] }}>
        <Text style={styles.text} bold={true}>
          {level.level}
        </Text>
      </Animated.View>
    );
  }

  if (level.isActive) {
    return (
      <Animated.View style={{ transform: [{ scale: textScale }] }}>
        <Text style={styles.text} bold={true}>
          {level.level}
        </Text>
      </Animated.View>
    );
  }

  if (level.level < currentLevel) {
    if (tempQuestMapLevelBubbleRedesign) {
      return <PastLevel level={level} color={color} unCompleteStarColor={unCompleteStarColor} />;
    }

    return <PastLevelLegacy level={level} color={color} unCompleteStarColor={unCompleteStarColor} />;
  }

  if (level.isChestLevel) {
    return <Chest isLegacy={!tempQuestMapLevelBubbleRedesign} colour={color} />;
  }

  return tempQuestMapLevelBubbleRedesign ? (
    <Text style={[styles.text, { color: Colours.inkSubtle }]}>{level.level}</Text>
  ) : (
    getLevelLockIcon(currentLevel, normalizedLevel)
  );
}

function getPendingTextColor({ isActive, color, useLegacy }: { isActive: boolean; color: string; useLegacy: boolean }) {
  if (useLegacy) {
    return !isActive ? color : Colours.neutral.white;
  }

  return !isActive ? color : Colours.neutral.n800;
}
