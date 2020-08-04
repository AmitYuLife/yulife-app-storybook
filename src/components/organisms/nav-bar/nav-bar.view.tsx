import React, { useState, useCallback } from "react";
import { labels as defaultLabels } from "@navigation/root";
import { StyleSheet, View, Platform } from "react-native";
import { Giraffe, Scroll, Treasure, Yu } from "./assets";
import Trophy from "./assets/trophy";
import styles, { getPositionBottom } from "./nav-bar.styles";
import useInterval from "@use-it/interval";
import { NavBarProps } from "./nav-bar.helpers";

const NavBarView = (props: NavBarProps) => {
  const { activeIndex, hasNotification, labels = defaultLabels, highlightedLabel, additionalBottom = 0 } = props;

  const [pressed, setPressed] = useState(0);
  const [hasLaidOut, setHasLaidOut] = useState(false);
  const [displayElevation, setDisplayElevation] = useState(false);

  useInterval(
    () => {
      setDisplayElevation(true);
    },
    displayElevation || !hasLaidOut || Platform.OS === "ios" ? null : 1000
  );

  const handleLayout = useCallback(() => {
    setHasLaidOut(true);
  }, []);

  function handlePressOut(onPress: () => void) {
    return () => {
      setPressed(null);
      onPress();
    };
  }

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
          hasNotification={hasNotification && activeIndex !== 1}
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
};

export default NavBarView;
