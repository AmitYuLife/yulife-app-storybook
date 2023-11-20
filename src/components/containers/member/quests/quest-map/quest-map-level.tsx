import { LEVEL_CHALLENGE_BUTTON } from "@ids";
import moment from "moment";
import React, { memo, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Style, Colours } from "@styles";
import useInterval from "@use-it/interval";
import { getCurrentWorld, getNormalizedLevel } from "@utils";
import { QuestsMapLevel } from "@components/screens";
import getLevelButton from "@components/screens/member/quests/quests-scroll-screen/assets/level/level.content";
import {
  getBackgroundColor,
  getPulseColor,
} from "@components/screens/member/quests/quests-scroll-screen/assets/level/level.helpers";
import { CIRCLE_SIZE } from "@components/screens/member/quests/quests-scroll-screen/assets/level/level.styles";
import Pulse from "@components/screens/member/quests/quests-scroll-screen/assets/level/pulse";
import { TouchableOpacityWithDelay } from "@molecules";

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
  const bubbleBackgroundColor = getBackgroundColor(nextAvailableTimer, level, currentWorld);
  const bubblePulseColor = getPulseColor(normalizedLevel);
  const bubbleBorder = useMemo(
    () =>
      level.isDone && !level.isActive
        ? {
            borderWidth: 2,
            borderColor: Colours.neutral.white,
          }
        : {},
    [level.isDone, level.isActive]
  );

  const touchableStyles = useMemo(() => {
    return {
      ...styles.bubbleButton,
      ...bubbleBorder,
      backgroundColor: bubbleBackgroundColor,
    };
  }, [bubbleBackgroundColor, bubbleBorder]);

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
      <View style={styles.bubble}>
        <TouchableOpacityWithDelay
          activeOpacity={0.8}
          onPress={level.onPress}
          style={touchableStyles}
          hitSlop={BUTTON_HITSLOP}
          testID={LEVEL_CHALLENGE_BUTTON(level.level)}
        >
          {levelText}
        </TouchableOpacityWithDelay>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
  bubble: {
    alignItems: "center",
    borderRadius: CIRCLE_SIZE,
    aspectRatio: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  bubbleButton: {
    borderRadius: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    width: CIRCLE_SIZE,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  levelPulse: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    color: "#ffffff",
    fontSize: Style.SCALE_UP_AND_DOWN(19),
    lineHeight: Style.SCALE_UP_AND_DOWN(19),
  },
  textPending: {
    color: "#ffffff",
    fontSize: Style.SCALE_UP_AND_DOWN(11),
    lineHeight: Style.SCALE_UP_AND_DOWN(11),
    textAlign: "center",
  },
  column: {
    flexDirection: "column",
  },
  stars: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
});

export default memo(QuestMapLevel);
