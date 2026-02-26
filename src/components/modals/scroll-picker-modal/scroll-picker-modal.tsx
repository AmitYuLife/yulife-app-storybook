import { View, ViewStyle } from "react-native";
import { Box } from "@atoms";
import { Picker } from "./subcomponents/picker";
import { Buttons } from "./subcomponents/buttons";
import { Colours, Style, StyleSheet } from "@styles";
import { ChipList, TouchableOpacityWithDelay } from "@components/molecules";
import { Item } from "./flatlist-utils/types";
import { initialWindowMetrics, useSafeAreaFrame } from "react-native-safe-area-context";

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
  confirmLabel?: string;
  cancelLabel?: string;
  chips?: Array<{ value: string; isSelected: boolean; onPress: () => void }>;
  chipsScrollToIndex?: number;

  /**
   * @deprecated Use chips
   */
  toggle?: () => void;

  /**
   * @deprecated Use chips
   */
  toggleLabel?: string;
}

const ScrollPickerModal = (props: Props) => {
  const { pickers, chips, chipsScrollToIndex, onConfirm, onCancel, cancelLabel, confirmLabel } = props;

  const { height, width } = useSafeAreaFrame();

  return (
    <Box disableAutoAdjust={true} h={height} w={width} position="absolute">
      <TouchableOpacityWithDelay activeOpacity={1} style={styles.pressableBackground} onPress={onCancel} />
      <View style={styles.innerWrapper}>
        {chips?.length ? (
          <Box pt={16}>
            <ChipList chips={chips} scrollToIndex={chipsScrollToIndex} style={styles.chipListPadding} />
          </Box>
        ) : null}
        <View style={styles.pickerWrapper}>
          {pickers.map(({ onIndexChange, items, defaultIndex, id }, i) => (
            <Picker id={id} key={i} defaultIndex={defaultIndex} onIndexChange={onIndexChange} items={items} />
          ))}
        </View>
        <Buttons onConfirm={onConfirm} onCancel={onCancel} cancelLabel={cancelLabel} confirmLabel={confirmLabel} />
      </View>
    </Box>
  );
};

export default ScrollPickerModal;

const styles = StyleSheet.create({
  chipListPadding: {
    paddingHorizontal: Style.adjust(24),
  },
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
    marginEnd: Style.adjust(16),
  } as ViewStyle,
  innerWrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: 16,
    paddingHorizontal: Style.adjust(20),
    paddingBottom: Style.adjust(18) + (initialWindowMetrics?.insets?.bottom ?? 0),
    width: Style.DEVICE_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    start: 0,
    end: 0,
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
