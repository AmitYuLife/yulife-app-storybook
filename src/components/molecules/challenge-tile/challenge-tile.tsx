import React, { memo, useCallback, useMemo, useState } from "react";
import { Pressable, Image as RNImage, StyleSheet, View } from "react-native";
import styles from "./challenge-tile.styles";
import { CHALLENGE_TILE } from "@ids";
import { Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { t } from "@locale";
import colours from "@styles/colours";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

export interface IChallengeTileProps {
  heading?: string;
  duration?: string;
  isLocked?: boolean;
  availableAtLevel?: number;
  onPress?: () => void;
  reward?: string;
  imageUri: string;
  pictureAlign?: "left" | "right";
  isCompleted?: boolean;
}

type Props = IChallengeTileProps;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ChallengeTile = ({
  heading,
  duration,
  isLocked,
  availableAtLevel,
  onPress,
  reward,
  imageUri,
  pictureAlign,
  isCompleted,
}: Props) => {
  const [isPressedIn, setIsPressedIn] = useState<boolean>(false);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isPressedIn ? 0.9 : 1, { duration: 120 }),
    transform: [
      {
        scale: withTiming(isPressedIn ? 0.985 : 1, { duration: 120 }),
      },
      {
        translateY: withTiming(isPressedIn ? 5 : 0, {
          duration: 100,
        }),
      },
    ],
  }));

  const onPressIn = useCallback(() => {
    setIsPressedIn(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPressedIn(false);
  }, []);

  const imageStyle = useMemo(() => {
    return [styles.remoteImage, pictureAlign === "left" ? { left: 0 } : { right: 0 }];
  }, [pictureAlign]);

  const wrapperStyle = useMemo(() => [styles.wrapper, animatedStyle], [animatedStyle]);

  if (!heading) {
    return null;
  }

  return (
    <AnimatedPressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      style={wrapperStyle}
      disabled={isLocked}
    >
      <>
        <View style={isLocked ? styles.imageWrapperLocked : styles.imageWrapper}>
          <View style={StyleSheet.flatten([styles.imageBackground, isLocked ? styles.imageBackgroundLocked : null])} />
          <Image
            source={{ uri: imageUri }}
            width={Style.adjust(165)}
            height={Style.adjust(165)}
            theme="light"
            style={imageStyle}
          />
        </View>
        {!isLocked && duration ? (
          <View style={styles.duration}>
            <TextTemplate type="l2b">{duration}</TextTemplate>
          </View>
        ) : null}
        {isLocked ? (
          <View style={styles.lockedOverlay}>
            <RNImage resizeMode="contain" style={styles.lockedImage} source={require("@assets/icons/lock.png")} />
            <TextTemplate type={"b2b"}>{t("screens.challenge_list.level_locked", { availableAtLevel })}</TextTemplate>
          </View>
        ) : (
          <View style={styles.sectionBottomWrapper} testID={CHALLENGE_TILE(heading)}>
            <View style={styles.contentWrapper}>
              <View>
                <TextTemplate type="b2b">{heading}</TextTemplate>
              </View>
              <View style={styles.contentBottom}>
                <View style={styles.contentRewardWrapper}>
                  <TextTemplate type="b2b">{reward}</TextTemplate>
                  <Image
                    width={Style.adjust(15)}
                    height={Style.adjust(15)}
                    suppressLoadingUi={true}
                    source={require("@assets/icons/yucoin.png")}
                    style={styles.yucoin}
                  />
                </View>
                {!isCompleted ? (
                  <RNImage source={require("@assets/icons/next.png")} resizeMode="contain" style={styles.imageNext} />
                ) : (
                  <View style={styles.completedContainer}>
                    <TextTemplate type="l2b" color={colours.secondary.s200S1}>
                      {t("screens.challenge_list.level_completed")}
                    </TextTemplate>
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
      </>
    </AnimatedPressable>
  );
};

export default memo(ChallengeTile);
