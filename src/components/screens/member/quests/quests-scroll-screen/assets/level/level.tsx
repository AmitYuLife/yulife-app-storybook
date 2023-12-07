import { LEVEL_CHALLENGE_BUTTON } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules/index";
import moment from "moment";
import React, { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { IMapSlice } from "../index";
import getLevelButton from "./level.content";
import {
  getButtonColours,
  getButtonPosition,
  getPulseColor,
  isActiveLevelWithNotification,
  isHistoricalLevel,
} from "./level.helpers";
import styles, { CIRCLE_SIZE } from "./level.styles";
import Pulse from "./pulse";
import useInterval from "@use-it/interval";
import { getCurrentWorld, getNormalizedLevel } from "@utils";
import { QuestsMapLevel } from "../../quests.context";
import { Image } from "@atoms";
import { LevelSvg } from "./levelSvg";

interface IProps {
  currentLevel: number;
  index: number;
  level: QuestsMapLevel;
  slots: IMapSlice["slots"];
}

const PULSE_MAX_SIZE = Style.SCALE_UP_AND_DOWN(66);

const BUTTON_HITSLOP = {
  top: Style.adjust(10),
  left: Style.adjust(10),
  right: Style.adjust(10),
  bottom: Style.adjust(10),
};

function LevelBubble(props: IProps) {
  const { slots, index, level, currentLevel } = props;
  const [nextAvailableTimer, setNextAvailableTimer] = useState(null);
  const style = getButtonPosition(slots, index, false);
  const pulseStyle = getButtonPosition(slots, index, true);
  const ONE_SECOND = 1000;

  useInterval(
    () => {
      const diff = moment().diff(moment(level.nextAvailableAt), "seconds");
      setNextAvailableTimer(diff);
    },
    level.nextAvailableAt ? ONE_SECOND : null
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
    <>
      {!level.isActive ? null : (
        <Pulse
          size={CIRCLE_SIZE + 6}
          pulseMaxSize={PULSE_MAX_SIZE}
          interval={nextAvailableTimer < 0 ? 1500 : 1000}
          backgroundColor={bubblePulseColor}
          style={pulseStyle}
        />
      )}
      <TouchableOpacityWithDelay
        onPress={level.onPress}
        hitSlop={BUTTON_HITSLOP}
        testID={LEVEL_CHALLENGE_BUTTON(level.level)}
        style={StyleSheet.flatten([styles.bubble, style])}
      >
        <LevelSvg
          backgroundColour={backgroundColour}
          borderWidth={bubbleBorderWidth}
          notificationBorderWidth={notificationBorderWidth}
          hasNotification={!!level.notificationIcon}
        />
        {!level.notificationIcon ? null : (
          <Image
            style={styles.notificationImage}
            tintColor={notificationColour}
            width={16}
            height={16}
            source={level.notificationIcon}
          />
        )}
        <View style={styles.bubbleText}>{levelText}</View>
      </TouchableOpacityWithDelay>
    </>
  );
}

export default LevelBubble;
