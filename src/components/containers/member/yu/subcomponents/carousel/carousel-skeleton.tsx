import { FlatList, SkeletonLoading } from "@atoms";
import { Style } from "@styles";
import React, { ComponentProps, memo } from "react";
import { ListRenderItemInfo, StyleSheet, View } from "react-native";
import { CarouselCardSkeleton } from "./carousel-card-skeleton";

const emptyItems: Array<null> = [null, null];

export const CarouselSkeleton = memo(() => {
  return (
    <View>
      <View style={styles.carouselTitleWrapper}>
        <SkeletonLoading style={styles.headingText} />
      </View>
      <FlatList data={emptyItems} renderItem={renderItem(emptyItems.length)} />
    </View>
  );
});

const renderItem = (itemsLength: number) => ({
  index,
}: ListRenderItemInfo<ComponentProps<typeof CarouselCardSkeleton>>): React.ReactElement | null => (
  <CarouselCardSkeleton marginRight={index === itemsLength - 1 ? Style.adjust(16) : 0} />
);

const styles = StyleSheet.create({
  carouselTitleWrapper: {
    paddingHorizontal: Style.adjust(32),
    paddingVertical: Style.adjust(16),
  },
  headingText: {
    height: Style.adjust(24),
    width: Style.adjust(175),
  },
});
