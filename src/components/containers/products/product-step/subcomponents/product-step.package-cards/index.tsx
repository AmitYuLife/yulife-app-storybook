import React, { ComponentProps, memo, useContext, useMemo, useCallback, useState } from "react";
import { ActivityIndicator, ListRenderItemInfo, StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemPackageCardsFragment as GqlPackageCards, CoverType } from "@graphql/__generated";
import { PackageCard } from "./package-card";
import { FlatList, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { ProductStepContext } from "../../product-step.context";
import { useSetDefaultAnswer } from "../../hooks/useSetDefaultAnswer";
import { LOCAL_ANSWER_KEY } from "../../utils/localAnswerKeys";
import { useInitialiseFromDynamicData } from "./hooks/useInitialiseFromDynamicData";
import { PACKAGE_CARD_WIDTH, PAD_WIDTH } from "./styles";
import { useScrollHandler } from "./hooks/useScrollHandler";
import { useAutoCleanTimeout } from "./hooks/useAutoCleanTimeout";

export const ProductStepPackageCards = memo((props: GqlPackageCards) => {
  const { answerKey, answerKeyDefaultValue, filterBasedOnAnswerKey } = props;
  const { dynamicData, setDynamicData, productId } = useContext(ProductStepContext);
  const [isLoading, setIsLoading] = useState(true);

  useSetDefaultAnswer({ answerKey, answerKeyDefaultValue, dynamicData, setDynamicData });
  useSetDefaultAnswer({
    answerKey: LOCAL_ANSWER_KEY.CoverType,
    answerKeyDefaultValue: CoverType.Common,
    dynamicData,
    setDynamicData,
  });
  const maxPackageCardValue = dynamicData[filterBasedOnAnswerKey] as number;
  const filteredPackageCards = useMemo(
    () => props.packageCards.filter((item) => (!maxPackageCardValue ? true : item.value <= maxPackageCardValue)),
    [props.packageCards, maxPackageCardValue]
  );
  const flatListData = useMemo(
    () => createFlatListData(filteredPackageCards),
    [filteredPackageCards, maxPackageCardValue]
  );
  const snapToOffsets = Array.from({
    length: flatListData.length - 2 /** to account for the pad items before and after packageCards */,
  }).map((_, i) => i * PACKAGE_CARD_WIDTH);

  const { listRef, handleScroll, handleScrollBeginDrag, handleMomentumScrollEnd, activePackageCardIndex } =
    useScrollHandler({
      packageCards: filteredPackageCards,
      answerKey,
      answerKeyValue: dynamicData[answerKey] as number,
      setDynamicData,
      productId,
    });

  const { timeout: showLoadingTimeout } = useAutoCleanTimeout();
  const sync = useCallback(() => {
    clearTimeout(showLoadingTimeout.current);

    listRef.current.scrollToOffset({ offset: PACKAGE_CARD_WIDTH * activePackageCardIndex });

    showLoadingTimeout.current = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [props, dynamicData]);
  useInitialiseFromDynamicData({ sync, syncDependencies: [activePackageCardIndex], syncTimeoutMs: 1000 });

  return (
    <View>
      <View style={styles.flexCenter}>
        {filteredPackageCards.length <= 1 ? null : (
          <TextTemplate color={Colours.neutral.n400} type="l2b">
            Swipe to discover more
          </TextTemplate>
        )}
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
      {filteredPackageCards.length <= 1 ? null : (
        <ActiveItemIndicator length={filteredPackageCards.length} activeIndex={activePackageCardIndex} />
      )}
      {!isLoading ? null : (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      )}
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
  loading: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colours.neutral.white,
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
            { backgroundColor: i === activeIndex ? Colours.neutral.n300 : Colours.neutral.n100 },
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
