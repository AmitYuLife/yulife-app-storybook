import React, { memo, useCallback, useMemo } from "react";
import { ListRenderItemInfo, StyleSheet, View, ViewStyle } from "react-native";
import { FlatList, TextTemplate } from "@atoms";
import PressableWithDelay from "../pressable-delay/pressable-delay";
import { Colours, Style } from "@styles";

interface IChipStyle {
  selected?: {
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
  };
  default?: {
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
  };
}

export type ChipProps = {
  value: string;
  isSelected: boolean;
  chipStyle?: IChipStyle;
  onPress: (value: string) => void;
};

type ChipListProps = {
  chips: ChipProps[];
  style?: ViewStyle;
  chipStyle?: IChipStyle;
};

const _ChipList = ({ chips, style, chipStyle }: ChipListProps) => {
  const flatlistStyle = useMemo(() => [styles.flatList, style], [style]);
  const chipStyles = useMemo(() => {
    return {
      selected: chipStyle?.selected || { ...styles.selected, textColor: Colours.neutral.white },
      default: chipStyle?.default || { ...styles.default, textColor: Colours.neutral.n800 },
    };
  }, [chipStyle]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ChipProps>) => <Chip {...item} chipStyle={chipStyles} />,
    [chipStyles]
  );

  return (
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
        contentContainerStyle={flatlistStyle}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

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

const keyExtractor = (item: ChipProps) => item.value;

const Chip = memo(
  ({ isSelected, value, onPress, chipStyle }: ChipProps) => {
    const handlePress = React.useCallback(() => onPress(value), [value]);

    return (
      <View style={styles.chipWrapper}>
        <PressableWithDelay
          style={[styles.chip, isSelected ? chipStyle.selected : chipStyle.default]}
          onPress={handlePress}
          key={value}
          hitSlop={HIT_SLOP}
        >
          <TextTemplate type="b2b" color={isSelected ? chipStyle.selected.textColor : chipStyle.default.textColor}>
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
    height: Style.adjust(50),
  },
  flatList: {
    paddingHorizontal: Style.adjust(16),
    justifyContent: "space-between",
    paddingTop: Style.adjust(10),
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
    height: Style.adjust(32),
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
