import React, { ComponentProps, memo, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
  ViewStyle,
  FlatList as RNFlatList,
} from "react-native";
import {
  ContentItemPackageCards,
  GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards as GqlPackageCards,
} from "@graphql/_core/schema";
import { PackageCard } from "./package-card";
import { FlatList, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { IProductStepContext, ProductStepContext } from "../../product-step.context";
import { useSetDefaultAnswer } from "../../hooks/useSetDefaultAnswer";

/**
 * Don't scale
 */
const PACKAGE_CARD_WIDTH = Style.DEVICE_WIDTH - 48;
const PAD_WIDTH = 20;

/**
 * the number of items before the viewable items
 * In this case, it's the single FLAT_LIST_ITEM.PAD
 * before the PackageCards
 */
const OFFSET = 1;

export const ProductStepPackageCards = memo((props: GqlPackageCards) => {
  const { answerKey, answerKeyDefaultValue } = props;
  const { dynamicData, setDynamicData } = useContext(ProductStepContext);
  const flatListData = useMemo(() => createFlatListData(props.packageCards), [props.packageCards]);
  const snapToOffsets = Array.from({ length: props.packageCards.length }).map((_, i) => i * PACKAGE_CARD_WIDTH);

  useSetDefaultAnswer({ answerKey, answerKeyDefaultValue, dynamicData, setDynamicData });

  const {
    listRef,
    handleScroll,
    handleScrollBeginDrag,
    handleMomentumScrollEnd,
    activePackageCardIndex,
  } = useScrollHandler({
    packageCards: props.packageCards,
    answerKey,
    answerKeyValue: dynamicData[answerKey] as number,
    setDynamicData,
  });

  return (
    <View>
      <View style={styles.flexCenter}>
        <TextTemplate color={Colours.neutral.n400} type="l2b">
          Swipe to discover more
        </TextTemplate>
      </View>
      <FlatList
        onScroll={handleScroll}
        onScrollBeginDrag={handleScrollBeginDrag}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        forwardRef={listRef}
        snapToOffsets={snapToOffsets}
        style={styles.scrollView}
        data={flatListData}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
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

export function getItemLayout(
  data: Array<IRenderItem> | null | undefined,
  index: number
): { length: number; offset: number; index: number } {
  let length = 0;
  const offset = 0;

  if (!data) {
    return { length, offset, index };
  }

  const item: IRenderItem = data[index];

  length = getLength(item);

  return { length, offset, index };
}

function getLength(item: IRenderItem) {
  switch (item.type) {
    case FLAT_LIST_ITEM.PAD:
      return PAD_WIDTH;
    case FLAT_LIST_ITEM.PACKAGE_CARD:
      return PACKAGE_CARD_WIDTH;
    default:
      return 0;
  }
}

function PackageCardListItem(props: { packageCard: Partial<ComponentProps<typeof PackageCard>> }) {
  const { packageCard } = props;

  return (
    <View>
      <PackageCard {...packageCard} width={PACKAGE_CARD_WIDTH} />
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

type UseScrollHandler = Pick<IProductStepContext, "setDynamicData"> & {
  packageCards: ContentItemPackageCards["packageCards"];
  answerKey: ContentItemPackageCards["answerKey"];
  answerKeyValue: ContentItemPackageCards["answerKeyDefaultValue"];
};

function useScrollHandler({ packageCards, setDynamicData, answerKey, answerKeyValue }: UseScrollHandler) {
  const listRef = useRef(null as RNFlatList);
  const [canChangeDynamicData, setCanChangeDynamicData] = useState(false);
  const scrollX = useRef(new Animated.Value(0));
  const activePackageCardIndex = useMemo(() => {
    const activeIndex = packageCards.findIndex((item) => item.value === answerKeyValue);

    return activeIndex + OFFSET;
  }, [answerKeyValue]);

  useEffect(() => {
    const activeIndex = packageCards.findIndex(
      (item) => answerKeyValue >= item.value && answerKeyValue <= item.packageMaxValue
    );

    const offset = PACKAGE_CARD_WIDTH * activeIndex;

    listRef.current.scrollToOffset({ offset });
  }, [answerKeyValue]);

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX.current } } }], {
    useNativeDriver: true,
  });

  const handleScrollBeginDrag = () => {
    setCanChangeDynamicData(true);
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (canChangeDynamicData) {
      const activeIndex = Math.round(event.nativeEvent.contentOffset.x / PACKAGE_CARD_WIDTH);
      const packageCard = packageCards[activeIndex];
      setDynamicData((oldState) => ({
        ...oldState,
        [answerKey]: packageCard.value,
      }));
    }

    setCanChangeDynamicData(false);
  };

  return { listRef, activePackageCardIndex, handleScroll, handleScrollBeginDrag, handleMomentumScrollEnd };
}
