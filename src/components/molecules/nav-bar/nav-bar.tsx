import React, { useState, useCallback, FC } from "react";
import { labels as defaultLabels } from "@navigation/root";
import { StyleSheet, View, Platform } from "react-native";
import { Giraffe, Scroll, Treasure, Yu } from "./assets";
import Trophy from "./assets/trophy";
import styles, { getPositionBottom } from "./nav-bar.styles";
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

interface StaticProps {
  positionBottom: number;
}

const NavBar: FC<IProps> & StaticProps = (props: IProps) => {
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
  const handleLayout = useCallback(() => {
    setHasLaidOut(true);
  }, []);
  return (
    <View
      onLayout={handleLayout}
      style={StyleSheet.flatten([styles.outerWrapper, { bottom: getPositionBottom({ additionalBottom }) }])}
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
};

NavBar.positionBottom = getPositionBottom(); // disregard additionalBottom, work on removing the need for that option

export default NavBar;
