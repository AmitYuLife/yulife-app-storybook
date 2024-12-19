import * as React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { getCurrentWorld, getTimeUntil } from "@utils";
import { Chest, Lock, Text } from "@atoms";
import styles from "./level.styles";
import { QuestsMapLevel } from "../../quests.context";
import { t } from "@locale";
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

export default function getLevelButton(
  nextAvailable: number,
  currentLevel: number,
  level: QuestsMapLevel,
  normalizedLevel: number,
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
          color: getPendingTextColor({ color, isActive: level.isActive }),
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
    return <PastLevel level={level} color={color} unCompleteStarColor={unCompleteStarColor} />;
  }

  if (level.isChestLevel) {
    return <Chest />;
  }

  return <Text style={[styles.text, { color: Colours.inkSubtle }]}>{level.level}</Text>;
}

function getPendingTextColor({ isActive, color }: { isActive: boolean; color: string }) {
  return !isActive ? color : Colours.neutral.n800;
}
