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
  <View style={styles.wrapper}>
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
  bottom: Style.adjust(16),
  top: HIT_SLOP_SIZE,
};

const Separator = memo(
  () => <View style={styles.separator} />,
  () => true
);

const renderItem = ({ item }: ListRenderItemInfo<ChipProps>) => <Chip {...item} />;

const keyExtractor = (item: ChipProps) => item.value;

const Chip = memo(
  ({ isSelected, value, onPress }: ChipProps) => {
    const handlePress = React.useCallback(() => onPress(value), [value]);

    return (
      <View style={styles.chipWrapper}>
        <PressableWithDelay
          style={[styles.chip, isSelected ? styles.selected : styles.default]}
          onPress={handlePress}
          key={value}
          hitSlop={HIT_SLOP}
        >
          <TextTemplate type="b2b" color={isSelected ? Colours.neutral.white : Colours.neutral.n800}>
            {value}
          </TextTemplate>
        </PressableWithDelay>
      </View>
    );
  },
  (prev, next) => prev.isSelected === next.isSelected && prev.value === next.value
);

const styles = StyleSheet.create({
  wrapper: {
    height: Style.adjust(40),
  },
  flatList: {
    paddingHorizontal: Style.adjust(16),
    justifyContent: "space-between",
  },
  chipWrapper: {
    flex: 1,
    height: Style.adjust(40),
    justifyContent: "flex-start",
    alignItems: "center",
  },
  chip: {
    justifyContent: "center",
    alignItems: "center",
    height: Style.adjust(28),
    borderRadius: Style.adjust(99),
    paddingHorizontal: Style.adjust(12),
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
