import { ContentItemPackageCards } from "@graphql/_core/schema";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useRef, useState, useMemo, useEffect } from "react";
import { Animated, NativeSyntheticEvent, NativeScrollEvent, FlatList as RNFlatList } from "react-native";
import { useDispatch } from "react-redux";
import { IProductStepContext } from "../../../product-step.context";
import { LOCAL_ANSWER_KEY } from "../../../utils";
import { PACKAGE_CARD_WIDTH } from "../styles";

type UseScrollHandler = Pick<IProductStepContext, "setDynamicData"> & {
  packageCards: ContentItemPackageCards["packageCards"];
  answerKey: ContentItemPackageCards["answerKey"];
  answerKeyValue: ContentItemPackageCards["answerKeyDefaultValue"];
  productId: string;
};

export function useScrollHandler({
  packageCards,
  setDynamicData,
  answerKey,
  answerKeyValue,
  productId,
}: UseScrollHandler) {
  const dispatch = useDispatch();

  const listRef = useRef(null as RNFlatList);
  const [canChangeDynamicData, setCanChangeDynamicData] = useState(false);
  const scrollX = useRef(new Animated.Value(0));
  const activePackageCardIndex = useMemo(() => packageCards.findIndex((item) => item.value === answerKeyValue), [
    packageCards,
    answerKeyValue,
  ]);

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
        [LOCAL_ANSWER_KEY.CoverType]: packageCard.coverType,
      }));

      dispatch(
        logMixpanelEventActionCreator("package_inspected", {
          type: packageCard.coverType,
          salary_covered: packageCard.value,
          cs_product: productId,
          location: "scroll-cards",
        })
      );
    }

    setCanChangeDynamicData(false);
  };

  return { listRef, activePackageCardIndex, handleScroll, handleScrollBeginDrag, handleMomentumScrollEnd };
}
