import React, { memo, useMemo } from "react";
import { Pressable, Image as RNImage, View } from "react-native";
import styles, { IMAGE_SIZE } from "./challenge-tile.styles";
import { CHALLENGE_REWARD, CHALLENGE_TILE, CHALLENGE_TILE_BOOST_TAG, CHALLENGE_TILE_SURGE_ICON } from "@ids";
import { Colours, Style, StyleSheet } from "@styles";
import { Image, Box, TextTemplate } from "@atoms";
import { t } from "@locale";
import colours from "@styles/colours";
import Animated from "react-native-reanimated";
import { usePressEffect } from "@hooks";
import ChallengeTileExtraIndicator from "./challenge-tile-extra-indicator";
import { ArrowIcon } from "@atoms/icon/arrow";
import { useTheme } from "@modules/themes/hooks/useTheme";

export interface IChallengeTileProps {
  heading?: string;
  duration?: string;
  isLocked?: boolean;
  availableAtLevel?: number;
  onPress?: () => void;
  reward?: string;
  imageUri?: string;
  tileColour?: string;
  durationColour?: string;
  durationTextColour?: string;
  pictureAlign?: "left" | "right";
  isCompleted?: boolean;
  hasSurge?: boolean;
  hasBonus?: boolean;
  extraChallenges?: {
    value: number;
    endDate: string;
  };
}

type Props = IChallengeTileProps;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const SurgeIcon = require("@assets/icons/surge.png");

const ChallengeTile = ({
  heading,
  duration,
  isLocked,
  onPress,
  reward,
  imageUri,
  tileColour = "rgba(255,255,255,0.5)",
  durationColour = "#FFFED6",
  durationTextColour = "#464647",
  isCompleted,
  hasSurge,
  hasBonus,
  extraChallenges,
}: Props) => {
  const { theme } = useTheme();
  const { animatedStyle, onPressIn, onPressOut } = usePressEffect();

  const wrapperStyle = useMemo(() => [styles.wrapper, animatedStyle], [animatedStyle]);

  const rewardTextColour = useMemo(() => {
    if (hasBonus) {
      return theme.colors.primary.p600;
    }

    if (hasSurge) {
      return Colours.secondary.s100S3;
    }

    return Colours.neutral.n850;
  }, [hasBonus, hasSurge, theme.colors.primary.p600]);

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
        <View style={styles.imageWrapper}>
          <View style={StyleSheet.flatten([styles.imageBackground, { backgroundColor: tileColour }])} />
          <Image
            source={{ uri: imageUri }}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
            theme="light"
            style={styles.remoteImage}
            suppressLoadingUi={true}
          />
        </View>
        {!hasSurge ? null : (
          <Image
            source={SurgeIcon}
            width={Style.adjust(24)}
            height={Style.adjust(24)}
            style={styles.surgeIcon}
            testID={CHALLENGE_TILE_SURGE_ICON}
            suppressLoadingUi={true}
          />
        )}
        <Box style={styles.rightStats} gap={5} flexDirection="row" flexWrap="wrap">
          <View style={styles.leftPaddingIcon} />
          {extraChallenges?.value ? (
            <ChallengeTileExtraIndicator value={extraChallenges?.value} time={extraChallenges?.endDate} />
          ) : null}
          {!isLocked && duration ? (
            <View style={[styles.duration, { backgroundColor: durationColour }]}>
              <TextTemplate type="l2b" color={durationTextColour}>
                {duration}
              </TextTemplate>
            </View>
          ) : null}
        </Box>
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
                {isCompleted ? (
                  <View style={styles.completedContainer}>
                    <TextTemplate type="l2b" color={colours.secondary.s200S1}>
                      {t("screens.challenge_list.level_completed")}
                    </TextTemplate>
                  </View>
                ) : null}
                {!isCompleted && !isLocked ? (
                  <>
                    {!hasBonus ? null : (
                      <Box
                        position="absolute"
                        right={0}
                        bottom={0}
                        flexDirection="row"
                        alignItems="center"
                        br={48}
                        pl={8}
                        pr={26}
                        height={26}
                        bg={theme.colors.primary.p40}
                      >
                        <TextTemplate type="l2b" color={theme.colors.primary.p600}>
                          {t("screens.challenge_list.level_boosted")}
                        </TextTemplate>
                      </Box>
                    )}
                    <Box bg={theme.colors.primary.p600} br={99} size={24} justifyContent="center" alignItems="center">
                      <ArrowIcon intent="primary" color="white" />
                    </Box>
                  </>
                ) : null}
                {!isCompleted && isLocked ? (
                  <View>
                    <View style={styles.lockedTextContainer}>
                      <TextTemplate type="l3b" color={colours.inkSubtle}>
                        {t("screens.challenge_list.level_locked")}
                      </TextTemplate>
                    </View>
                    <View style={styles.lockedBubble}>
                      <RNImage
                        resizeMode="contain"
                        tintColor={colours.inkSubtle}
                        style={styles.lockedImage}
                        source={require("@assets/icons/lock-light.webp")}
                      />
                    </View>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </>
    </AnimatedPressable>
  );
};

export default memo(ChallengeTile);
