import React, { memo, useCallback, useMemo, useState } from "react";
import { Pressable, Image as RNImage, StyleSheet, View } from "react-native";
import styles, { IMAGE_SIZE } from "./challenge-tile.styles";
import { CHALLENGE_REWARD, CHALLENGE_TILE, CHALLENGE_TILE_BOOST_TAG, CHALLENGE_TILE_SURGE_ICON } from "@ids";
import { Colours, Style } from "@styles";
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
  tileColour?: string;
  durationColour?: string;
  durationTextColour?: string;
  pictureAlign?: "left" | "right";
  isCompleted?: boolean;
  hasSurge?: boolean;
  hasBonus?: boolean;
}

type Props = IChallengeTileProps;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const SurgeIcon = require("@assets/icons/surge.png");

const ChallengeTile = ({
  heading,
  duration,
  isLocked,
  availableAtLevel,
  onPress,
  reward,
  imageUri,
  tileColour = "rgba(255,255,255,0.5)",
  durationColour = "#FFFED6",
  durationTextColour = "#464647",
  isCompleted,
  hasSurge,
  hasBonus,
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

  const wrapperStyle = useMemo(() => [styles.wrapper, animatedStyle], [animatedStyle]);

  const rewardTextColour = useMemo(() => {
    if (hasBonus) {
      return Colours.primary.p600;
    }

    if (hasSurge) {
      return Colours.secondary.s100S3;
    }

    return Colours.neutral.n850;
  }, [hasBonus, hasSurge]);

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
          <View
            style={StyleSheet.flatten([
              styles.imageBackground,
              { backgroundColor: tileColour },
              isLocked ? styles.imageBackgroundLocked : null,
            ])}
          />
          <Image
            source={{ uri: imageUri }}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            theme="light"
            style={styles.remoteImage}
          />
        </View>
        {!hasSurge ? null : (
          <Image
            source={SurgeIcon}
            width={Style.adjust(24)}
            height={Style.adjust(24)}
            style={styles.surgeIcon}
            testID={CHALLENGE_TILE_SURGE_ICON}
          />
        )}
        {!isLocked && duration ? (
          <View style={[styles.duration, { backgroundColor: durationColour }]}>
            <TextTemplate type="l2b" color={durationTextColour}>
              {duration}
            </TextTemplate>
          </View>
        ) : null}
        {isLocked ? (
          <View style={styles.lockedOverlay}>
            <RNImage resizeMode="contain" style={styles.lockedImage} source={require("@assets/icons/lock.png")} />
            <TextTemplate type={"b2b"}>{t("screens.challenge_list.level_locked", { availableAtLevel })}</TextTemplate>
          </View>
        ) : (
          <View style={styles.sectionBottomShadow} testID={CHALLENGE_TILE_BOOST_TAG(heading, reward, hasBonus)}>
            <View style={styles.sectionBottomWrapper} testID={CHALLENGE_TILE(heading)}>
              <View style={styles.contentWrapper}>
                <View>
                  <TextTemplate type="b2b">{heading}</TextTemplate>
                </View>
                <View style={styles.contentBottom}>
                  <View style={styles.contentRewardWrapper}>
                    <TextTemplate type="b2b" color={rewardTextColour} testID={CHALLENGE_REWARD(reward)}>
                      {reward}
                    </TextTemplate>
                    <Image
                      width={Style.adjust(16)}
                      height={Style.adjust(16)}
                      suppressLoadingUi={true}
                      source={require("@assets/icons/yucoin.png")}
                      style={styles.yucoin}
                    />
                  </View>
                  {!isCompleted ? (
                    <>
                      {!hasBonus ? null : (
                        <View style={styles.hasBonusContainer}>
                          <TextTemplate type="l2b" color={colours.primary.p600}>
                            {t("screens.challenge_list.level_boosted")}
                          </TextTemplate>
                        </View>
                      )}
                      <RNImage
                        source={require("@assets/icons/next.png")}
                        resizeMode="contain"
                        style={styles.imageNext}
                      />
                    </>
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
          </View>
        )}
      </>
    </AnimatedPressable>
  );
};

export default memo(ChallengeTile);
