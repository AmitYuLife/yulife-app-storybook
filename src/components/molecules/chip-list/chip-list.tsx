import * as React from "react";
import { ListRenderItemInfo, StyleSheet, View } from "react-native";
import { FlatList, TextTemplate } from "@atoms";
import PressableWithDelay from "../pressable-delay/pressable-delay";
import { memo } from "react";
import { Colours, Style } from "@styles";

type ChipProps = {
  value: string;
  isSelected: boolean;
  onPress: (value: string) => void;
};

type ChipListProps = {
  chips: ChipProps[];
};

const _ChipList = ({ chips }: ChipListProps) => (
  <View>
    <FlatList
      data={chips}
      horizontal={true}
      pagingEnabled={false}
      decelerationRate={0.9}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      contentContainerStyle={styles.flatList}
      ItemSeparatorComponent={Separator}
    />
  </View>
);

export const ChipList = memo(_ChipList);

const HIT_SLOP_SIZE = Style.adjust(8);
const HIT_SLOP = {
  left: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  bottom: HIT_SLOP_SIZE,
  top: HIT_SLOP_SIZE,
};

const Separator = memo(
  () => <View style={styles.separator} />,
  () => true
);

const renderItem = ({ item: { isSelected, value, onPress } }: ListRenderItemInfo<ChipProps>) => (
  <PressableWithDelay
    style={[styles.chip, isSelected ? styles.selected : styles.default]}
    onPress={() => onPress(value)}
    key={value}
    hitSlop={HIT_SLOP}
  >
    <TextTemplate type="b2b" color={isSelected ? Colours.neutral.white : Colours.neutral.n800}>
      {value}
    </TextTemplate>
  </PressableWithDelay>
);

const keyExtractor = (item: ChipProps) => item.value;

const styles = StyleSheet.create({
  flatList: {
    height: Style.adjust(28),
    paddingHorizontal: Style.adjust(16),
    justifyContent: "space-between",
  },
  chip: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Style.adjust(99),
    paddingHorizontal: Style.adjust(12),
    paddingVertical: Style.adjust(2),
  },
  selected: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colours.primary.p600,
    backgroundColor: Colours.primary.p600,
  },
  default: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colours.neutral.n100,
  },
  separator: {
    width: Style.adjust(8),
  },
});
