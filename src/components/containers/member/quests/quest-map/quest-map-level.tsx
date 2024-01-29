import { LEVEL_CHALLENGE_BUTTON } from "@ids";
import moment from "moment";
import React, { memo, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import useInterval from "@use-it/interval";
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
import { Image } from "@atoms";
import { LevelSvg } from "@components/screens/member/quests/quests-scroll-screen/assets/level/levelSvg";

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
  const [nextAvailableTimer, setNextAvailableTimer] = useState(null);

  useInterval(
    () => {
      const diff = moment().diff(moment(level.nextAvailableAt), "seconds");
      setNextAvailableTimer(diff);
    },
    level.nextAvailableAt ? 1000 : null
  );

  const currentWorld = getCurrentWorld(level.level);
  const normalizedLevel = getNormalizedLevel(level.level);
  const { backgroundColour, notificationColour } = getButtonColours(nextAvailableTimer, level, currentWorld);
  const bubblePulseColor = getPulseColor(normalizedLevel);
  const bubbleBorderWidth = isHistoricalLevel(level) ? 2 : 0;
  const notificationBorderWidth = isActiveLevelWithNotification(level) ? 2 : 0;

  const levelText = useMemo(() => {
    return getLevelButton(nextAvailableTimer, currentLevel, level, normalizedLevel);
  }, [currentLevel, level, nextAvailableTimer, normalizedLevel]);

  return (
    <View style={styles.container}>
      {!level.isActive ? null : (
        <View style={styles.levelPulse}>
          <Pulse
            size={CIRCLE_SIZE + 6}
            adjustYPosition={false}
            pulseMaxSize={PULSE_MAX_SIZE}
            interval={nextAvailableTimer < 0 ? 1500 : 1000}
            backgroundColor={bubblePulseColor}
          />
        </View>
      )}
      <TouchableOpacityWithDelay
        activeOpacity={0.8}
        onPress={level.onPress}
        style={styles.bubble}
        hitSlop={BUTTON_HITSLOP}
        testID={LEVEL_CHALLENGE_BUTTON(level.level)}
      >
        <LevelSvg
          backgroundColour={backgroundColour}
          borderWidth={bubbleBorderWidth}
          notificationBorderWidth={notificationBorderWidth}
          hasNotification={!!level.notificationIcon}
        />
        <View style={styles.bubbleText}>{levelText}</View>
        {!level.notificationIcon ? null : (
          <Image
            style={styles.notificationImage}
            tintColor={notificationColour}
            width={16}
            height={16}
            source={level.notificationIcon}
          />
        )}
      </TouchableOpacityWithDelay>
    </View>
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
    position: "absolute",
    top: Style.adjust(4),
    right: Style.adjust(4),
  },
  levelPulse: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});

export default memo(QuestMapLevel);
