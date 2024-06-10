import { memo } from "react";
import styles from "./level.styles";
import { StyleSheet, Text, View } from "react-native";
import LevelStar from "./level.star";
import { LEVEL_STAR_COUNT } from "@ids";

type Props = {
  level: {
    rating?: number;
    level: number;
    id: string;
  };
  color: string;
  unCompleteStarColor: string;
};

export const PastLevelLegacy = memo(({ level, color, unCompleteStarColor }: Props) => (
  <View style={styles.column}>
    <Text style={StyleSheet.flatten([styles.text, { textAlign: "center", color }])}>{level.level}</Text>
    <View style={styles.stars} testID={LEVEL_STAR_COUNT(level.rating)}>
      {Array.from({ length: 3 }).map((_, i) => (
        <LevelStar key={`${level.id}_${i}`} colour={level.rating > i ? color : unCompleteStarColor} />
      ))}
    </View>
  </View>
));
