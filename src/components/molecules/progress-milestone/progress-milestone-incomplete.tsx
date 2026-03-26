import { StarIcon } from "@atoms/icon/star-icon";
import { Colours, Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";

interface Props {
  index: number;
  target: number;
  borderColor?: string;
  starColor?: string;
}

export const ProgressMilestoneIncomplete = memo(
  ({ index, target, starColor = Colours.primary.p60, borderColor = Colours.primary.p600 }: Props) => (
    <>
      <View style={[styles.iconWrapper, { borderColor: borderColor }]}>
        <StarIcon size={Style.adjust(12)} color={starColor} />
      </View>
      {index + 1 === target ? null : <View style={styles.shimRight} />}
      <View style={styles.shimLeft} />
    </>
  )
);

const SHIM_TOP = Style.adjust(11);
const SHIM_HEIGHT = Style.adjust(6);
const SHIM_WIDTH = Style.adjust(7);

const styles = StyleSheet.create({
  iconWrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: 999,
    height: Style.adjust(22),
    width: Style.adjust(22),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    paddingBottom: 1,
  },
  shimRight: {
    height: SHIM_HEIGHT,
    width: SHIM_WIDTH,
    top: SHIM_TOP,
    backgroundColor: Colours.neutral.white,
    position: "absolute",
    end: 0,
  },
  shimLeft: {
    height: SHIM_HEIGHT,
    width: SHIM_WIDTH,
    top: SHIM_TOP,
    backgroundColor: Colours.neutral.white,
    position: "absolute",
    start: 0,
  },
});
