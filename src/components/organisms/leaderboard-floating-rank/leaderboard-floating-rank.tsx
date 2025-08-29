import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { Animated } from "react-native";
import { ListItem } from "@organisms";
import { NAV_BAR, Style, StyleSheet } from "@styles";
import { IAvatarFrame } from "@redux/leaderboards/leaderboards.types";

interface IProps {
  name: string;
  position: number;
  score: string;
  avatar: string;
  frame: IAvatarFrame;
  scrollValue: Animated.Value;
  onPress: () => void;
  offset: number;
}

const LeaderboardFloatingRank = ({
  name,
  position,
  score,
  avatar,
  onPress,
  frame,
  scrollValue = new Animated.Value(0),
  offset = 0,
}: IProps) => {
  const [disableTouch, setDisableTouch] = useState(false);
  const listener = useRef(null);
  const inputRange = (position + 1 || 0) * Style.adjust(53);
  const finalOffset = inputRange + offset;

  useEffect(() => {
    scrollValue.removeListener(listener.current);
    listener.current = scrollValue.addListener(({ value }) => {
      if (disableTouch) {
        if (value <= finalOffset) {
          setDisableTouch(false);
        }
      } else if (value > finalOffset) {
        setDisableTouch(value > finalOffset);
      }
    });

    return () => scrollValue.removeListener(listener.current);
  }, [disableTouch, finalOffset, offset, scrollValue]);

  const wrapperStyle = useMemo(() => {
    return {
      ...styles.wrapper,
      opacity: scrollValue.interpolate({
        inputRange: [-Number.MAX_SAFE_INTEGER, finalOffset, finalOffset],
        outputRange: [1, 1, 0],
        extrapolate: "clamp",
      }),
    };
  }, [scrollValue, finalOffset]);

  return (
    <Animated.View style={wrapperStyle} pointerEvents={disableTouch ? "none" : "auto"}>
      <ListItem
        onPress={onPress}
        name={name}
        type="leaderboard"
        position={position}
        score={score}
        theme="active"
        uri={avatar}
        frame={frame}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    bottom: NAV_BAR.DEFAULT_FULL_HEIGHT - Style.adjust(45),
  },
});

export default memo(LeaderboardFloatingRank);
