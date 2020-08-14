import { LEVEL_CHALLENGE_BUTTON } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules/index";
import moment from "moment";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "../../../../../../../styles";
import { IChallenge } from "../../quests-screen";
import { IMapSlice } from "../index";
import getLevelButton from "./level.content";
import { getBackgroundColor, getButtonPosition, getShadowColor, getShadowPosition } from "./level.helpers";
import styles, { CIRCLE_SIZE } from "./level.styles";
import Pulse from "./pulse";
import useInterval from "@use-it/interval";

interface IProps {
  currentLevel: number;
  index: number;
  level: IChallenge;
  slice: IMapSlice;
}

function LevelBubble(props: IProps) {
  const { slice, index, level, currentLevel } = props;
  const [nextAvailableTimer, setNextAvailableTimer] = useState(null);
  const style = getButtonPosition(slice, index, false);
  const pulseStyle = getButtonPosition(slice, index, true);
  const ONE_SECOND = 1000;
  useInterval(
    () => {
      const diff = moment().diff(moment(level.nextAvailableAt), "seconds");
      setNextAvailableTimer(diff);
    },
    level.nextAvailableAt ? ONE_SECOND : null
  );
  const bubbleBackgroundColor = getBackgroundColor(nextAvailableTimer, level);
  const shadowStyle = getShadowPosition(style);
  const shadowColor = getShadowColor(level.level);
  return (
    <>
      {!level.isActive ? null : (
        <Pulse
          size={CIRCLE_SIZE + 6}
          pulseMaxSize={Style.SCALE_UP_AND_DOWN(66)}
          interval={nextAvailableTimer < 0 ? 1500 : 1000}
          backgroundColor="rgb(145,0,76)"
          style={pulseStyle}
        />
      )}
      {!shadowColor || level.isActive ? null : (
        <View style={StyleSheet.flatten([styles.bubble, shadowStyle])}>
          <View style={[styles.bubbleButton, shadowColor]} />
        </View>
      )}
      <View style={StyleSheet.flatten([styles.bubble, style])}>
        <TouchableOpacityWithDelay
          onPress={level.onPress}
          style={StyleSheet.flatten([
            styles.bubbleButton,
            {
              backgroundColor: bubbleBackgroundColor,
            },
          ])}
          hitSlop={{
            top: Style.SCALE_UP_AND_DOWN(10),
            left: Style.SCALE_UP_AND_DOWN(10),
            right: Style.SCALE_UP_AND_DOWN(10),
            bottom: Style.SCALE_UP_AND_DOWN(10),
          }}
          testID={LEVEL_CHALLENGE_BUTTON(level.level)}
        >
          {getLevelButton(nextAvailableTimer, currentLevel, level)}
        </TouchableOpacityWithDelay>
      </View>
    </>
  );
}

export default LevelBubble;
