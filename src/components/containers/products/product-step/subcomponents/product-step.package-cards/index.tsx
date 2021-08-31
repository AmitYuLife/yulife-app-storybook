import React, { ComponentProps, memo, useMemo, useRef, useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, View, ViewabilityConfig, ViewStyle, ViewToken } from "react-native";
import {
  GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards as GqlPackageCards,
  GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards,
} from "@graphql/_core/schema";
import { PackageCard } from "./package-card";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";

/**
 * Don't scale
 */
const WIDTH = Style.DEVICE_WIDTH - 48;
const PAD_WIDTH = 20;

const viewabilityConfig = {
  viewAreaCoveragePercentThreshold: 80,
  waitForInteraction: true,
} as ViewabilityConfig;

/**
 * the number of items before the viewable items
 * In this case, it's the single FLAT_LIST_ITEM.PAD
 * before the PackageCards
 */
const OFFSET = 1;

export const ProductStepPackageCards = memo((props: GqlPackageCards) => {
  const flatListData = useMemo(() => createFlatListData(props.packageCards), [props.packageCards]);
  const selectedPackageCard = 0 + OFFSET; // can be driven by props
  const [activePackageCardIndex, setActivePackageCardIndex] = useState(selectedPackageCard); // selectedPackageCard can be driven by props

  const handleSwipe = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const visibleItem = viewableItems.find((viewableItem) => viewableItem?.item?.type === FLAT_LIST_ITEM.PACKAGE_CARD);

    if (visibleItem) {
      setActivePackageCardIndex(visibleItem.index);
    }
  });

  return (
    <View>
      <View style={styles.flexCenter}>
        <TextTemplate color={Colours.neutral.n400} type="l2b">
          Swipe to discover more
        </TextTemplate>
      </View>
      <FlatList
        decelerationRate={"fast"}
        snapToOffsets={Array.from({ length: props.packageCards.length }).map((_, i) => i * WIDTH)}
        directionalLockEnabled={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={(_, index) => `${index}`} // no reorder
        onViewableItemsChanged={handleSwipe.current}
        viewabilityConfig={viewabilityConfig}
      />
      <ActiveItemIndicator length={props.packageCards.length} activeIndex={activePackageCardIndex} />
    </View>
  );
});

const styles = StyleSheet.create({
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Style.adjust(40),
  } as ViewStyle,
  scrollView: {
    width: Style.DEVICE_WIDTH,
    marginTop: Style.adjust(16),
  } as ViewStyle,
});

const Pad = memo(() => <View style={{ width: PAD_WIDTH }} />);

function createFlatListData(packageCards: GqlPackageCards["packageCards"]) {
  return [
    { type: FLAT_LIST_ITEM.PAD },
    ...packageCards.map((data) => ({
      type: FLAT_LIST_ITEM.PACKAGE_CARD,
      data,
    })),
    { type: FLAT_LIST_ITEM.PAD },
  ];
}

enum FLAT_LIST_ITEM {
  PAD = "PAD",
  PACKAGE_CARD = "PACKAGE_CARD",
}

interface IPackageCardsItemPad {
  type: FLAT_LIST_ITEM.PAD;
  data: null;
}

interface IPackageCardsItemPackageCard {
  type: FLAT_LIST_ITEM.PACKAGE_CARD;
  data: ComponentProps<typeof PackageCard>;
}

type IRenderItem = IPackageCardsItemPad | IPackageCardsItemPackageCard;

function renderItem({ item }: ListRenderItemInfo<IRenderItem>): React.ReactElement | null {
  switch (item.type) {
    case FLAT_LIST_ITEM.PAD:
      return <Pad />;
    case FLAT_LIST_ITEM.PACKAGE_CARD:
      return <PackageCardListItem packageCard={item.data} />;
    default:
      return null;
  }
}

function PackageCardListItem(props: {
  packageCard: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards;
}) {
  const { packageCard } = props;

  return (
    <View>
      <PackageCard {...packageCard} width={WIDTH} />
    </View>
  );
}

function ActiveItemIndicator({ length, activeIndex }: { length: number; activeIndex: number }) {
  return (
    <View style={activeItemIndicatorStyles.wrapper}>
      {Array.from({ length }).map((_, i) => (
        <View
          key={i}
          style={[
            activeItemIndicatorStyles.item,
            { backgroundColor: i + OFFSET === activeIndex ? Colours.neutral.n300 : Colours.neutral.n100 },
          ]}
        />
      ))}
    </View>
  );
}

const activeItemIndicatorStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: Style.DEVICE_WIDTH,
    justifyContent: "center",
    marginTop: Style.adjust(32),
  } as ViewStyle,
  item: {
    borderRadius: 999,
    width: Style.adjust(8),
    height: Style.adjust(8),
    marginHorizontal: Style.adjust(8),
    borderWidth: 1,
    borderColor: Colours.neutral.n300,
  } as ViewStyle,
});
