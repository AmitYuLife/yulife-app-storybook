import React, { useCallback, useMemo } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { SkeletonLoading, TextTemplate } from "@atoms";
import { SecondaryButton } from "@components/molecules";
import { BUTTON_SIZES } from "@components/molecules/button/button.types";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { YuScreenProductCard } from "./yu-screen-product-card";
import {
  ProductCardCarouselSection as IProductCardCarouselSection,
  ProductCardCarouselSectionItem,
} from "@redux/yu-screen/yu-screen.types";
import { ProductCardCarouselSkeleton } from "./product-card-skeleton";
import { WideCardSkeleton } from "./product-card-skeleton/wide-card-skeleton";
import { TallCardSkeleton } from "./product-card-skeleton/tall-card-skeleton";
import { SquareCardSkeleton } from "./product-card-skeleton/square-card-skeleton";

export const ProductCardCarouselSection = ({ id, ready, content }: IProductCardCarouselSection) => {
  const { title, items, cta, onPress } = content || {};
  const showCta = !!cta && !!onPress;

  const itemGroups = useMemo(() => {
    if (!items?.length) {
      return [];
    }

    return items.reduce((acc, item, index) => {
      const first = index === 0;
      const last = index === items.length - 1;
      const odd = index % 2 === 1;

      if (first) {
        acc.push([item]);
        return acc;
      }

      if (last && odd) {
        acc.push([item]);
        return acc;
      }

      if (odd) {
        acc.push([item, items[index + 1]]);
      }

      return acc;
    }, [] as ProductCardCarouselSectionItem[][]);
  }, [items]);

  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onPress);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ProductCardCarouselSectionItem[]>) => {
      if (items.length === 1) {
        return (
          <View style={styles.cardWrapper}>
            {ready ? <YuScreenProductCard item={item[0]} type={"wide"} /> : <WideCardSkeleton />}
          </View>
        );
      }

      if (item.length === 1) {
        return (
          <View style={styles.cardWrapper}>
            {ready ? <YuScreenProductCard item={item[0]} type={"tall"} /> : <TallCardSkeleton />}
          </View>
        );
      }

      if (item.length === 2) {
        return (
          <View style={styles.cardWrapper}>
            {ready ? (
              <>
                <YuScreenProductCard item={item[0]} type={"square"} />
                <YuScreenProductCard item={item[1]} type={"square"} />
              </>
            ) : (
              <>
                <SquareCardSkeleton />
                <SquareCardSkeleton />
              </>
            )}
          </View>
        );
      }
    },
    [items, ready]
  );

  if (!ready && !content) {
    return <ProductCardCarouselSkeleton key={id} />;
  }

  if (!content) {
    return null;
  }

  return (
    <View key={id} style={styles.wrapper}>
      {ready ? (
        <View style={styles.heading} testID="yu-product-card-carousel-title">
          <TextTemplate type="b1b" textAlign="left">
            {title}
          </TextTemplate>
        </View>
      ) : (
        <SkeletonLoading style={styles.skeletonHeading} />
      )}
      <FlatList
        data={itemGroups}
        horizontal={true}
        pagingEnabled={false}
        decelerationRate={0.9}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapToInterval}
        contentContainerStyle={styles.flatList}
        scrollEnabled={itemGroups.length > 2}
      />
      {!showCta || ready ? null : <SkeletonLoading style={styles.skeletonButton} />}
      {!showCta || !ready ? null : (
        <View style={styles.button}>
          <SecondaryButton
            testID="yu-product-card-carousel-cta-button"
            onPress={handleSduiAction}
            translatedLabel={cta}
            size={BUTTON_SIZES.NARROW}
          />
        </View>
      )}
    </View>
  );
};

const snapToInterval = Style.DEVICE_WIDTH / 2 - Style.adjust(16);

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Style.adjust(20),
    display: "flex",
  },
  heading: {
    paddingLeft: Style.adjust(36),
  },
  skeletonHeading: {
    marginLeft: Style.adjust(36),
    width: Style.adjust(170),
    height: Style.adjust(24),
    borderRadius: Style.adjust(4),
  },
  flatList: {
    paddingVertical: Style.adjust(12),
    paddingHorizontal: Style.adjust(16),
  },
  cardWrapper: {
    display: "flex",
    gap: Style.adjust(16),
    padding: Style.adjust(8),
  },
  button: {
    paddingHorizontal: Style.adjust(24),
    paddingBottom: Style.adjust(12),
  },
  skeletonButton: {
    marginHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(20),
    height: Style.adjust(32),
    borderRadius: Style.adjust(16),
  },
});
