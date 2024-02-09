import { FlatList, TextTemplate } from "@atoms";
import { Style } from "@styles";
import React, { ComponentProps, FC, memo, useRef } from "react";
import { Animated, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { CarouselCard } from "./carousel-card";
import { YuScreenCarouselFragment } from "@graphql/__generated";

export const Carousel: FC<YuScreenCarouselFragment> = memo(({ heading, items }) => {
  const scrollX = useRef(new Animated.Value(0));

  if (!items?.length) {
    return null;
  }

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX.current } } }], {
    useNativeDriver: true,
  });

  return (
    <View style={styles.carouselWrapper}>
      {!heading ? null : (
        <View style={styles.carouselTitleWrapper}>
          <TextTemplate type="b1b">{heading}</TextTemplate>
        </View>
      )}

      <FlatList disableThrottle={true} onScroll={handleScroll} data={items} renderItem={renderItem(items.length)} />
    </View>
  );
});

const renderItem =
  (itemsLength: number) =>
  ({ item, index }: ListRenderItemInfo<ComponentProps<typeof CarouselCard>>): React.ReactElement | null =>
    (
      <CarouselCard
        {...item}
        variant={item.variant}
        style={{
          marginRight: index === itemsLength - 1 ? Style.adjust(16) : 0,
          marginLeft: itemsLength < 2 ? Style.adjust(24) : Style.adjust(16),
        }}
      />
    );

const styles = StyleSheet.create({
  carouselWrapper: {
    paddingTop: Style.adjust(32),
  },
  carouselTitleWrapper: {
    paddingHorizontal: Style.adjust(32),
    paddingBottom: Style.adjust(16),
  },
});
