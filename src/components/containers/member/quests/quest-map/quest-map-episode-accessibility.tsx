import React, { memo } from "react";
import { Image, ImageStyle, View, ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";
import QuestMapLevelAccessibility from "./quest-map-level-accessibility";

export interface IQuestMapEpisodeAccessibilityItem {
  id?: string;
  level?: number | string;
  rating?: number | null;
  levelChest?: string | null;
  isNext?: boolean;
  isActive?: boolean;
  isDone?: boolean;
  isChestLevel?: boolean;
  nextAvailableAt?: string;
  onPress?: () => void;
}

interface IProps {
  items: IQuestMapEpisodeAccessibilityItem[];
}

const QuestMapEpisodeAccessibility = ({ items }: IProps) => (
  <View style={styles.wrapper}>
    <Image source={require("@assets/accessibility/forest.webp")} style={styles.image} resizeMode="cover" />
    <View accessibilityRole="list">
      {items?.map((level) => (
        <View key={level.level} accessible={true}>
          <QuestMapLevelAccessibility {...level} />
        </View>
      ))}
    </View>
  </View>
);

export default memo(QuestMapEpisodeAccessibility);

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  image: {
    width: Style.DEVICE_WIDTH,
    height: "100%",
    position: "absolute",
  } as ImageStyle,
});
