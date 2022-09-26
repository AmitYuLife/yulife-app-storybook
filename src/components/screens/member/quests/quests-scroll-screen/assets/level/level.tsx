import { LEVEL_CHALLENGE_BUTTON } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules/index";
import moment from "moment";
import React, { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Style, Colours } from "@styles";
import { IMapSlice } from "../index";
import getLevelButton from "./level.content";
import { getBackgroundColor, getButtonPosition, getPulseColor } from "./level.helpers";
import styles, { CIRCLE_SIZE } from "./level.styles";
import Pulse from "./pulse";
import useInterval from "@use-it/interval";
import { getCurrentWorld, getNormalizedLevel } from "@utils";
import { QuestsMapLevel } from "../../quests.context";

interface IProps {
  currentLevel: number;
  index: number;
  level: QuestsMapLevel;
  slots: IMapSlice["slots"];
}

const PULSE_MAX_SIZE = Style.SCALE_UP_AND_DOWN(66);

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
      <View style={StyleSheet.flatten([styles.bubble, style])}>
        <TouchableOpacityWithDelay
          onPress={level.onPress}
          style={StyleSheet.flatten([
            styles.bubbleButton,
            bubbleBorder,
            {
              backgroundColor: bubbleBackgroundColor,
            },
          ])}
          hitSlop={{
            top: Style.adjust(10),
            left: Style.adjust(10),
            right: Style.adjust(10),
            bottom: Style.adjust(10),
          }}
          testID={LEVEL_CHALLENGE_BUTTON(level.level)}
        >
          {getLevelButton(nextAvailableTimer, currentLevel, level, normalizedLevel)}
        </TouchableOpacityWithDelay>
      </View>
    </>
  );
}

export default LevelBubble;
