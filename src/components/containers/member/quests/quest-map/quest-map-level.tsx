import { GHI_REWARD_ICON, LEVEL_CHALLENGE_BUTTON } from "@ids";
import moment from "moment";
import React, { memo, useMemo, useState } from "react";
import { Animated, View } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import useInterval from "@use-it/interval";
import { DETOX_ENABLED } from "@services/socket";
import { getCurrentWorld, getNormalizedLevel } from "@utils";
import { QuestsMapLevel } from "@components/screens";
import getLevelButton from "@components/screens/member/quests/quests-scroll-screen/assets/level/level.content";
import {
  getButtonColours,
  getPulseColor,
  isActiveLevelWithNotification,
  isHistoricalLevel,
} from "@components/screens/member/quests/quests-scroll-screen/assets/level/level.helpers";
import {
  CIRCLE_SIZE,
  LEVEL_SIZE,
} from "@components/screens/member/quests/quests-scroll-screen/assets/level/level.styles";
import Pulse from "@components/screens/member/quests/quests-scroll-screen/assets/level/pulse";
import { TouchableOpacityWithDelay } from "@molecules";
import { Box, Image } from "@atoms";
import { LevelSvg } from "@components/screens/member/quests/quests-scroll-screen/assets/level/levelSvg";
import { usePulseAnimation } from "./animation/use-pulse-animation";
import { DropShadow } from "./drop-shadow";
import { usePressEffect } from "@hooks";
import ReAnimated from "react-native-reanimated";
import { useTheme } from "@modules/themes/hooks/useTheme";

interface IQuestMapLevelProps {
  currentLevel: number;
  level: QuestsMapLevel;
}

const PULSE_MAX_SIZE = Style.adjust(66);

const BUTTON_HITSLOP = {
  top: Style.adjust(10),
  left: Style.adjust(10),
  right: Style.adjust(10),
  bottom: Style.adjust(10),
};

const QuestMapLevel = ({ level, currentLevel }: IQuestMapLevelProps) => {
  const { theme } = useTheme();
  const [nextAvailableTimer, setNextAvailableTimer] = useState(null);

  useInterval(
    () => {
      const diff = moment().diff(moment(level.nextAvailableAt), "seconds");
      setNextAvailableTimer(diff);
    },
    level.nextAvailableAt && !DETOX_ENABLED ? 1000 : null
  );

  const pulseAnimation = usePulseAnimation({
    levelIsActive: level.isActive,
    nextAvailableTimer,
    pulseMaxSize: PULSE_MAX_SIZE,
    pulseSize: CIRCLE_SIZE + 6,
  });

  const currentWorld = getCurrentWorld(level.level);
  const normalizedLevel = getNormalizedLevel(level.level);
  const { backgroundColour } = getButtonColours(nextAvailableTimer, level, currentWorld, theme.colors.primary.p600);
  const bubblePulseColor = getPulseColor(normalizedLevel, theme.colors.primary.p600);
  const bubbleBorderWidth = isHistoricalLevel(level) ? 2 : 0;
  const notificationBorderWidth = isActiveLevelWithNotification(level) ? 2 : 0;

  const levelText = useMemo(() => {
    return getLevelButton(nextAvailableTimer, currentLevel, level, normalizedLevel, pulseAnimation.levelTextScale);
  }, [currentLevel, level, nextAvailableTimer, normalizedLevel]);

  const { animatedStyle, onPressIn, onPressOut } = usePressEffect({
    pressedOpacity: 0.8,
    pressedScale: 0.98,
    pressedTranslation: 1,
  });

  return (
    <ReAnimated.View style={animatedStyle}>
      <View style={styles.container}>
        {!level.isActive || DETOX_ENABLED ? null : (
          <View style={styles.levelPulse}>
            <Pulse
              size={CIRCLE_SIZE}
              pulseMaxSize={PULSE_MAX_SIZE}
              backgroundColor={bubblePulseColor}
              opacity={pulseAnimation.pulseOpacity}
              scale={pulseAnimation.pulseScale}
            />
          </View>
        )}
        {level.isActive ? null : <DropShadow />}
        <TouchableOpacityWithDelay
          activeOpacity={1}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={level.onPress}
          style={[styles.bubble, { transform: [{ scale: pulseAnimation.levelBubbleScale }] }]}
          hitSlop={BUTTON_HITSLOP}
          testID={LEVEL_CHALLENGE_BUTTON(level.level)}
        >
          <Animated.View style={styles.border} />
          <LevelSvg
            backgroundColour={backgroundColour}
            borderWidth={bubbleBorderWidth}
            notificationBorderWidth={notificationBorderWidth}
            isPastLevel={level.level < currentLevel}
            isPending={nextAvailableTimer < 0}
            isActive={level.isActive}
            level={level.level}
          />
          <Animated.View style={[styles.border, styles.staticBorder]} />
          <Animated.View
            style={[styles.border, styles.animatedBorder, { opacity: pulseAnimation.levelBubbleBorderOpacity }]}
          />
          <View style={styles.bubbleText}>{levelText}</View>
          {!level.notificationIcon ? null : (
            <Box br={99} bg={Colours.neutral.white} position="absolute" top={0} right={0} size={24}>
              <Image
                testID={GHI_REWARD_ICON(level.level)}
                style={styles.notificationImage}
                width={16}
                height={16}
                source={level.notificationIcon}
                suppressLoadingUi={true}
              />
            </Box>
          )}
        </TouchableOpacityWithDelay>
      </View>
    </ReAnimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: LEVEL_SIZE,
    height: LEVEL_SIZE,
  },
  bubble: {
    width: "100%",
    height: "100%",
  },
  bubbleText: {
    position: "absolute",
    width: LEVEL_SIZE,
    height: LEVEL_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationImage: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  levelPulse: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  border: {
    borderColor: Colours.neutral.white,
    position: "absolute",
    borderRadius: Style.adjust(32),
    top: Style.adjust(5),
    start: Style.adjust(5),
    end: Style.adjust(5),
    bottom: Style.adjust(5),
  },
  staticBorder: {
    borderWidth: 2,
  },
  animatedBorder: {
    borderWidth: 4,
  },
});

export default memo(QuestMapLevel);
