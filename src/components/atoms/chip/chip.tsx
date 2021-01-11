import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Label } from "./label";
import { Icon } from "./icon";
import { ChipIconType } from "./chip.types";
import { ActiveIndicator } from "./active-indicator";

export interface ChipProps {
  id: string;
  relatedId?: string[];
  active: boolean;
  label: string;
  icon: ChipIconType;
  onPress?: () => void;
}

function Chip(props: ChipProps) {
  const { active, label, icon, onPress } = props;

  return (
    <TouchableOpacityWithDelay
      activeOpacity={1}
      style={StyleSheet.flatten([styles.wrapper, active && styles.activeWrapper])}
      onPress={onPress}
      delay={50}
    >
      <View style={styles.viewWrapper}>
        <ActiveIndicator isActive={active} />
        <Icon icon={icon} />
        <Label label={label} isActive={active} />
      </View>
    </TouchableOpacityWithDelay>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(168),
    height: Style.adjust(80),
    borderRadius: 16,
    marginHorizontal: Style.adjust(4),
    borderColor: Colours.neutral.n100,
    borderWidth: 1,
  } as ViewStyle,
  activeWrapper: {
    borderColor: Colours.ocean.up306,
  } as ViewStyle,
  viewWrapper: {
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 16,
  } as ViewStyle,
});

export default Chip;
