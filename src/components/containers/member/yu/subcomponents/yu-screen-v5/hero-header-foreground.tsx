import React, { FC, memo, useContext, useMemo } from "react";
import { Animated, Image, ImageSourcePropType, View, ViewStyle } from "react-native";
import { YuScreenContext } from "../../context/yu-screen.context";
import { YumojiAvatar } from "./yumoji-avatar";
import { styles } from "./hero-header.styles";
import { PLATFORM_SIZE } from "./yu-screen.styles";
import { Style } from "@styles";
import AchievementsShowcase, { IAchievement } from "@organisms/achievements-showcase/achievements-showcase";
import { ROUTES } from "@navigation/constants";

interface Props {
  platformImage: ImageSourcePropType;
  yumojiOpacity: Animated.Value;
  yumojiScale: Animated.Value;
  translateY: Animated.Value;
  headerHeight: Animated.Value;
  // Making this prop optional until we have the graphql query ready
  achievements?: {
    points?: number;
    list?: IAchievement[];
  };
  showAchievements: boolean;
}

export const HeroHeaderForeground: FC<Props> = memo(
  ({ platformImage, yumojiOpacity, yumojiScale, translateY, headerHeight, achievements, showAchievements }) => {
    const { yumojiRemoteUrl } = useContext(YuScreenContext);

    const memoizedStyles = useMemo(
      () => ({
        container: { height: headerHeight },
        wrapper: { ...styles.foregroundWrapper, transform: [{ translateY }] },
        yumojiWrapper: {
          ...styles.yumojiWrapper,
          opacity: yumojiOpacity,
          transform: [{ scale: yumojiScale }],
          bottom: Style.adjust(showAchievements ? -10 : 10),
        },
        achievements: {
          ...styles.yumojiWrapper,
          left: Style.adjust(20),
          right: "auto",
          bottom: Style.adjust(-30),
          opacity: yumojiOpacity,
          transform: [{ scale: yumojiScale }],
        } as ViewStyle,
      }),
      [showAchievements]
    );

    return (
      <Animated.View style={memoizedStyles.container}>
        <View style={styles.bottomHider}>
          <Animated.View style={memoizedStyles.wrapper}>
            <Image style={styles.platformImage} source={platformImage} {...PLATFORM_SIZE} />
            <View style={styles.platformFill} />
            <View style={styles.offsetFill} />
          </Animated.View>
        </View>
        {!yumojiRemoteUrl ? null : (
          <Animated.View style={memoizedStyles.yumojiWrapper}>
            <YumojiAvatar uri={yumojiRemoteUrl} />
          </Animated.View>
        )}
        {!showAchievements ? null : (
          <Animated.View style={memoizedStyles.achievements}>
            <AchievementsShowcase
              componentId={ROUTES.yuScreen}
              points={achievements?.points || 0}
              achievements={achievements?.list}
            />
          </Animated.View>
        )}
      </Animated.View>
    );
  }
);
