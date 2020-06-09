import { labels as defaultLabels } from "@navigation/root";
import { Style } from "@styles/index";
import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Giraffe, Scroll, Treasure, Yu } from "./assets";
import Trophy from "./assets/trophy";
import styles from "./nav-bar.styles";
import useInterval from "@use-it/interval";

export interface ILabel {
  name: string;
  onPress: () => void;
  colour?: IColours;
}

export type IColours = "blue" | "dark" | "darker" | "desert" | "light" | "pink" | "mountain" | "forest";

interface IProps {
  activeIndex: number;
  hasNotification?: boolean;
  labels?: ILabel[];
  highlightedLabel?: HighlightedLabel;
  additionalBottom?: number;
}

type HighlightedLabel = "yucoin" | "quests" | "yu" | "leaderboard" | "rewards";

export default function NavBar(props: IProps) {
  const [pressed, setPressed] = useState(0);
  const [hasLaidOut, setHasLaidOut] = useState(false);
  const [displayElevation, setDisplayElevation] = useState(false);
  useInterval(
    () => {
      setDisplayElevation(true);
    },
    displayElevation || !hasLaidOut || Platform.OS === "ios" ? null : 1000
  );
  const { activeIndex, hasNotification, labels = defaultLabels, highlightedLabel, additionalBottom = 0 } = props;
  return (
    <View
      onLayout={() => setHasLaidOut(true)}
      style={StyleSheet.flatten([
        styles.outerWrapper,
        { bottom: Style.SCALE_UP_AND_DOWN((isIphoneX() ? 30 : 20) + additionalBottom) },
      ])}
    >
      <View style={[styles.wrapper, displayElevation && styles.elevation]}>
        <Giraffe
          isPressed={pressed === 0}
          isActive={activeIndex === 0}
          isHighlighted={highlightedLabel === "yucoin"}
          onPressIn={labels[0].onPress}
          onPressOut={handlePressOut(labels[0].onPress)}
        />
        <Scroll
          isPressed={pressed === 1}
          isActive={activeIndex === 1}
          isHighlighted={highlightedLabel === "quests"}
          onPressIn={labels[1].onPress}
          onPressOut={handlePressOut(labels[1].onPress)}
          hasNotification={hasNotification}
        />
        <Yu
          isPressed={pressed === 2}
          isActive={activeIndex === 2}
          isHighlighted={highlightedLabel === "yu"}
          onPressIn={labels[2].onPress}
          onPressOut={handlePressOut(labels[2].onPress)}
        />
        <Trophy
          isPressed={pressed === 3}
          isActive={activeIndex === 3}
          isHighlighted={highlightedLabel === "leaderboard"}
          onPressIn={labels[3].onPress}
          onPressOut={handlePressOut(labels[3].onPress)}
        />
        <Treasure
          isPressed={pressed === 4}
          isActive={activeIndex === 4}
          isHighlighted={highlightedLabel === "rewards"}
          onPressIn={labels[4].onPress}
          onPressOut={handlePressOut(labels[4].onPress)}
        />
      </View>
    </View>
  );

  function handlePressOut(onPress: () => void) {
    return () => {
      setPressed(null);
      onPress();
    };
  }
}
