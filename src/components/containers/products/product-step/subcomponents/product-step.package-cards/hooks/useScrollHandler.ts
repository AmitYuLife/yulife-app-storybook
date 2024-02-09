import { ContentItemPackageCardsFragment } from "@graphql/__generated";
import { useRef, useState, useMemo, useEffect } from "react";
import { Animated, NativeSyntheticEvent, NativeScrollEvent, FlatList as RNFlatList } from "react-native";
import { useDispatch } from "react-redux";
import { IProductStepContext } from "../../../product-step.context";
import { LOCAL_ANSWER_KEY } from "../../../utils";
import { sduiEventActionCreator } from "../../../utils/sduiEventActionCreator";
import { PACKAGE_CARD_WIDTH } from "../styles";

type UseScrollHandler = Pick<IProductStepContext, "setDynamicData"> & {
  packageCards: ContentItemPackageCardsFragment["packageCards"];
  answerKey: ContentItemPackageCardsFragment["answerKey"];
  answerKeyValue: ContentItemPackageCardsFragment["answerKeyDefaultValue"];
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

  const activePackageCardIndex = useMemo(
    () => packageCards.findIndex((item) => answerKeyValue >= item.value && answerKeyValue <= item.packageMaxValue),
    [packageCards, answerKeyValue]
  );

  useEffect(() => {
    const offset = PACKAGE_CARD_WIDTH * activePackageCardIndex;

    listRef.current.scrollToOffset({ offset });
  }, [activePackageCardIndex]);

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
        sduiEventActionCreator("package_inspected", {
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
