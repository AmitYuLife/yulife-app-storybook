import React, { memo } from "react";
import Svg, { Rect } from "react-native-svg";
import { Pressable } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { PlayIcon } from "@atoms/icon/play-icon";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

interface IProps {
  onPress: () => void;
  isPaused: boolean;
  disabled?: boolean;
  testID?: string;
}

export const VidePlayerButton = memo(({ onPress, isPaused, disabled, testID }: IProps) => {
  const { theme } = useTheme();
  return (
    <Pressable
      delay={1000}
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: theme.colors.primary.p600 }]}
      disabled={disabled}
      testID={testID}
    >
      {!isPaused ? (
        <Svg width={Style.adjust(40)} height={Style.adjust(40)} fill="none" viewBox="0 0 40 40">
          <Rect x={8.334} y={6.667} width={7.727} height={28.333} rx={3.864} fill={Colours.neutral.white} />
          <Rect x={23.789} y={6.667} width={7.727} height={28.333} rx={3.864} fill={Colours.neutral.white} />
        </Svg>
      ) : (
        <PlayIcon width={40} height={40} />
      )}
    </Pressable>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(80),
    height: Style.adjust(80),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
