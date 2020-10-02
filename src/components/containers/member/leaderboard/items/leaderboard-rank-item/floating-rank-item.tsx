import React, { memo, useEffect, useRef, useState } from "react";
import { Animated, Platform, View, StyleSheet } from "react-native";
import { baseStyles, floatingItemStyles } from "./subcomponents/styles";
import { Rank } from "./subcomponents/rank";
import { Image } from "./subcomponents/image";
import { Name } from "./subcomponents/name";
import { Score } from "./subcomponents/score";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { GetLeaderboard_getLeaderboard } from "@graphql/_core/schema";
import { PAGE_SIZE } from "../../active-leaderboard/active-leaderboard.container";

interface Props {
  onPress?: () => void;
  item: GetLeaderboard_getLeaderboard | undefined;
  scrollValue: Animated.Value;
  offset: number;
}

const ADJUST = Platform.select({ ios: -20, android: 0 });

const FloatingRankItem = ({
  onPress = (): void => null,
  item,
  scrollValue = new Animated.Value(0),
  offset = 0,
}: Props) => {
  const [disableTouch, setDisableTouch] = useState(false);
  const [hasInitialised, setHasInitialised] = useState(false);
  const initialisationTimeout = useRef(null);
  const listener = useRef(null);

  useEffect(() => {
    initialisationTimeout.current = setTimeout(() => {
      setHasInitialised(true);
    }, 50);
    return () => clearTimeout(initialisationTimeout.current);
  }, []);

  useEffect(() => {
    scrollValue.removeListener(listener.current);
    listener.current = scrollValue.addListener(({ value }) => {
      setDisableTouch(value > offset);
    });

    return () => scrollValue.removeListener(listener.current);
  }, [offset, item, scrollValue]);

  if (!item) {
    return null;
  }

  const inputRange = [-Number.MAX_SAFE_INTEGER, offset + ADJUST - 1, offset + ADJUST];

  const opacity =
    item?.position && item.position >= PAGE_SIZE
      ? 1
      : scrollValue.interpolate({
          inputRange,
          outputRange: [1, 1, 0],
          extrapolate: "clamp",
        });

  const { name, steps, position, avatarRemoteFiles } = item;

  if (!hasInitialised) {
    return null;
  }

  return (
    <Animated.View
      pointerEvents={disableTouch ? "none" : "auto"}
      style={[baseStyles.wrapper, floatingItemStyles.wrapper, { opacity }]}
    >
      <TouchableOpacityWithDelay style={floatingItemStyles.button} activeOpacity={0.7} onPress={onPress}>
        <View style={floatingItemStyles.background} />
        <View
          style={StyleSheet.flatten([
            baseStyles.borderWrapper,
            floatingItemStyles.borderWrapper,
            avatarRemoteFiles?.pngMini
              ? floatingItemStyles.avatarFilledPaddingBottom
              : floatingItemStyles.avatarEmptyPaddingBottom,
          ])}
        >
          <Rank rank={position} style={floatingItemStyles.text} />
          <Image uri={avatarRemoteFiles?.pngMini} />
          <Name name={name} bold={true} style={floatingItemStyles.text} />
          <Score score={steps} bold={true} style={floatingItemStyles.text} />
        </View>
      </TouchableOpacityWithDelay>
    </Animated.View>
  );
};

export default memo(FloatingRankItem);
