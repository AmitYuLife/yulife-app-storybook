import React from "react";
import { View, TouchableOpacity, StyleSheet, ViewStyle, Platform } from "react-native";
import { Icon, TextTemplate } from "@atoms";
import { Picker } from "./subcomponents/picker";
import { Buttons } from "./subcomponents/buttons";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Item } from "./flatlist-utils/types";

interface IPicker {
  id: string;
  items: Item[];
  onIndexChange: (index: number) => void;
  defaultIndex: number;
}

interface Props {
  pickers: IPicker[];
  onConfirm: () => void;
  onCancel: () => void;
  toggle?: () => void;
  toggleLabel?: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

const ScrollPickerModal = (props: Props) => {
  const { pickers, toggle, toggleLabel, onConfirm, onCancel, cancelLabel, confirmLabel } = props;
  const hasToggle = toggle && toggleLabel;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacityWithDelay activeOpacity={1} style={styles.pressableBackground} onPress={onCancel} />
      <View style={styles.innerWrapper}>
        {!hasToggle ? null : (
          <TouchableOpacity style={styles.toggleWrapper} onPress={toggle}>
            <View style={styles.iconWrapper}>
              <Icon.SwitchIcon />
            </View>
            <TextTemplate type="b2b" color={Colours.primary.p600}>
              {toggleLabel}
            </TextTemplate>
          </TouchableOpacity>
        )}
        <View style={styles.pickerWrapper}>
          {pickers.map(({ onIndexChange, items, defaultIndex, id }, i) => (
            <Picker id={id} key={i} defaultIndex={defaultIndex} onIndexChange={onIndexChange} items={items} />
          ))}
        </View>
        <Buttons onConfirm={onConfirm} onCancel={onCancel} cancelLabel={cancelLabel} confirmLabel={confirmLabel} />
      </View>
    </View>
  );
};

export default ScrollPickerModal;

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
    position: "absolute",
  } as ViewStyle,
  pressableBackground: {
    backgroundColor: "rgba(0,0,0,0.7)",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  toggleWrapper: {
    paddingTop: Style.adjust(40),
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  iconWrapper: {
    marginRight: Style.adjust(16),
  } as ViewStyle,
  innerWrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: 16,
    paddingHorizontal: Style.adjust(20),
    paddingBottom: Platform.select({
      ios: Style.hasNotch ? Style.adjust(20) : Style.adjust(8),
      android: Style.adjust(28),
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
