import { StarIcon } from "@atoms/icon/star-icon";
import { Colours, Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";

interface Props {
  index: number;
  target: number;
}

export const ProgressMilestoneIncomplete = memo(({ index, target }: Props) => (
  <>
    <View style={styles.iconWrapper}>
      <StarIcon size={Style.adjust(12)} color={Colours.primary.p60} />
    </View>
    {index + 1 === target ? null : <View style={styles.shimRight} />}
    <View style={styles.shimLeft} />
  </>
));

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
    borderColor: Colours.primary.p600,
    paddingBottom: 1,
  },
  shimRight: {
    height: SHIM_HEIGHT,
    width: SHIM_WIDTH,
    top: SHIM_TOP,
    backgroundColor: Colours.neutral.white,
    position: "absolute",
    right: 0,
  },
  shimLeft: {
    height: SHIM_HEIGHT,
    width: SHIM_WIDTH,
    top: SHIM_TOP,
    backgroundColor: Colours.neutral.white,
    position: "absolute",
    left: 0,
  },
});
