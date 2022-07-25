import { FlatList, TextTemplate } from "@atoms";
import { YuScreenCarousel } from "@graphql/_core/schema";
import { Style } from "@styles";
import React, { ComponentProps, FC, memo, useRef } from "react";
import { Animated, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { CarouselCard } from "./carousel-card";

export const Carousel: FC<YuScreenCarousel> = memo(({ heading, items }) => {
  const scrollX = useRef(new Animated.Value(0));

  if (!items?.length) {
    return null;
  }

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX.current } } }], {
    useNativeDriver: true,
  });

  return (
    <View>
      <View style={styles.carouselTitleWrapper}>
        <TextTemplate type="b1b">{heading}</TextTemplate>
      </View>
      <FlatList onScroll={handleScroll} data={items} renderItem={renderItem(items.length)} />
    </View>
  );
});

const renderItem = (itemsLength: number) => ({
  item,
  index,
}: ListRenderItemInfo<ComponentProps<typeof CarouselCard>>): React.ReactElement | null => (
  <CarouselCard {...item} marginRight={index === itemsLength - 1 ? Style.adjust(16) : 0} />
);

const styles = StyleSheet.create({
  carouselTitleWrapper: {
    paddingHorizontal: Style.adjust(32),
    paddingVertical: Style.adjust(16),
  },
});
