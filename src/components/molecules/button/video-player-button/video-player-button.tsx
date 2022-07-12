import React, { memo } from "react";
import { StyleSheet } from "react-native";
import Svg, { Rect } from "react-native-svg";
import { PressableWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import { PlayIcon } from "@atoms/icon/play-icon";

interface IProps {
  onPress: () => void;
  isPaused: boolean;
}

export const VidePlayerButton = memo(({ onPress, isPaused }: IProps) => {
  return (
    <PressableWithDelay onPress={onPress} style={styles.wrapper}>
      <Svg width={Style.adjust(40)} height={Style.adjust(40)} fill="none" viewBox="0 0 40 40">
        {!isPaused ? (
          <>
            <Rect x={8.334} y={6.667} width={7.727} height={28.333} rx={3.864} fill={Colours.neutral.white} />
            <Rect x={23.789} y={6.667} width={7.727} height={28.333} rx={3.864} fill={Colours.neutral.white} />
          </>
        ) : (
          <PlayIcon width={40} height={40} />
        )}
      </Svg>
    </PressableWithDelay>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(80),
    height: Style.adjust(80),
    borderRadius: 100,
    backgroundColor: Colours.primary.p600,
    alignItems: "center",
    justifyContent: "center",
  },
});
