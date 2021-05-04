import React from "react";
import { View, TouchableOpacity, StyleSheet, ViewStyle, Platform } from "react-native";
import { TextTemplate } from "@atoms";
import { Picker } from "./subcomponents/picker";
import { Buttons } from "./subcomponents/buttons";
import { Colours, Style } from "@styles";

interface IPicker {
  items: string[];
  onIndexChange: (index: number) => void;
  defaultIndex: number;
}

interface Props {
  pickers: IPicker[];
  toggle: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  toggleLabel: string;
}

const ScrollPickerModal = (props: Props) => {
  const { pickers, toggle, toggleLabel, onConfirm, onCancel } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <TouchableOpacity onPress={toggle}>
          <TextTemplate type="b2b" color={Colours.primary.p600}>
            {toggleLabel}
          </TextTemplate>
        </TouchableOpacity>
        <View style={styles.pickerWrapper}>
          {pickers.map(({ onIndexChange, items, defaultIndex }, i) => (
            <Picker key={i} defaultIndex={defaultIndex} onIndexChange={onIndexChange} items={items} />
          ))}
        </View>
        <Buttons onConfirm={onConfirm} onCancel={onCancel} />
      </View>
    </View>
  );
};

export default ScrollPickerModal;

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
    backgroundColor: "rgba(0,0,0,0.7)",
  } as ViewStyle,
  innerWrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: 16,
    paddingTop: Style.adjust(40),
    paddingHorizontal: Style.adjust(20),
    paddingBottom: Platform.select({
      ios: Style.hasNotch ? Style.adjust(20) : Style.adjust(8),
      android: Style.adjust(8),
    }),
    width: Style.DEVICE_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  } as ViewStyle,
  switchStyle: {
    marginTop: Style.adjust(28),
  } as ViewStyle,
  pickerWrapper: {
    flexDirection: "row",
    width: Style.DEVICE_WIDTH,
    alignSelf: "center",
    paddingHorizontal: Style.adjust(16),
    marginTop: Style.adjust(20),
  } as ViewStyle,
});
