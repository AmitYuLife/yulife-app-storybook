import React, { memo, useMemo } from "react";
import { ListRenderItemInfo, StyleSheet, View, ViewStyle } from "react-native";
import { Box, FlatList, SkeletonLoading, TextTemplate } from "@atoms";
import Pressable from "../pressable/pressable";
import { Colours, Style } from "@styles";
import { CHIP_LIST_ITEM } from "@ids";

export type ChipProps = {
  value: string;
  isSelected: boolean;
  onPress: (value: string) => void;
};

type ChipListProps = {
  chips: ChipProps[];
  style?: ViewStyle;
  isLoading?: boolean;
};

const _ChipList = ({ chips, style, isLoading }: ChipListProps) => {
  const flatlistStyle = useMemo(() => [styles.flatList, style], [style]);

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
        ListEmptyComponent={isLoading ? LoadingChipList : null}
        scrollEnabled={!isLoading}
      />
    </View>
  );
};

const LoadingChipList = () => (
  <Box flexDirection="row" gap={8} justifyContent="space-between">
    {Array.from({ length: 6 }).map((_, index) => (
      <SkeletonLoading w={100} h={30} key={index} />
    ))}
  </Box>
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
        <Pressable
          delay={1000}
          style={[styles.chip, isSelected ? styles.selected : styles.default]}
          onPress={handlePress}
          key={value}
          hitSlop={HIT_SLOP}
          testID={CHIP_LIST_ITEM(value)}
        >
          <TextTemplate type="b2b" color={"#464647"}>
            {value}
          </TextTemplate>
        </Pressable>
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
    borderWidth: 1,
    borderColor: "#E30D76",
    backgroundColor: "#FCE7F1",
  },
  default: {
    borderWidth: 1,
    borderColor: "#E7E7EB",
    backgroundColor: Colours.neutral.white,
  },
  separator: {
    width: Style.adjust(8),
  },
});
