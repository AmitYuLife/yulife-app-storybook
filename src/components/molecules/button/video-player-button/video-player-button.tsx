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
            <Rect x={13.333} y={1.667} width={1.667} height={36.667} rx={0.833} fill={Colours.neutral.white} />
            <Rect x={25} y={1.667} width={1.667} height={36.667} rx={0.833} fill={Colours.neutral.white} />
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
