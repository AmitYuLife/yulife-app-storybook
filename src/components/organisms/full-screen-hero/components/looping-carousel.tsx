import { Colours, Style, TOP_BAR } from "@styles";
import { delay } from "@utils/misc";
import { FlashList, FlashListRef } from "@shopify/flash-list";
import { FullScreenHeroSlide } from "../types";
import { getTopOffset } from "../helpers";
import { Box, Logo, TextTemplate } from "@atoms";
import { memo, useCallback, useMemo, useRef } from "react";
import { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, SafeAreaView } from "react-native";
import useInterval from "@use-it/interval";
import { useLoginHeroContext } from "@components/screens/login/login-hero/login-hero.context";
import { DETOX_ENABLED } from "@services/socket";

const SCROLL_DELAY_MS = 250;

const LoopingCarousel = ({
  data,
  setCurrentSlide,
}: {
  data: FullScreenHeroSlide[];

  /**
   * Useful for tracking the current slide from the parent component.
   */
  setCurrentSlide: (index: number) => void;
}) => {
  const { setTitleSectionHeight } = useLoginHeroContext();

  /**
   * Triple the data to create an infinite loop effect in both directions.
   * When the the user scrolls into the first or last group of data, we reset the scroll position to the middle group.
   */
  const tripledData = useMemo(() => [...data, ...data, ...data], [data]);

  /**
   * Set the initial index to the middle of the tripled data array.
   */
  const startIndex = useMemo(() => data.length, [data.length]);

  const listRef = useRef<FlashListRef<FullScreenHeroSlide> | null>(null);
  const currentIndexRef = useRef(startIndex);
  const hasUserScrolled = useRef(false);

  const resetIndexToMiddleGroup = useCallback(
    async (currentIndex: number) => {
      await delay(SCROLL_DELAY_MS);

      const isFirstGroup = currentIndex <= data.length - 1;
      const isLastGroup = currentIndex >= data.length * 2;

      // If the user enters the first group of data, reset the scroll position to the middle group without animation.
      if (isFirstGroup) {
        listRef.current?.scrollToIndex({
          index: currentIndex + data.length,
          animated: false,
        });

        currentIndexRef.current = currentIndex + data.length;
        setCurrentSlide(currentIndexRef.current % data.length);
        return;
      }

      // If the user enters the last group of data, reset the scroll position to the middle group without animation.
      if (isLastGroup) {
        listRef.current?.scrollToIndex({
          index: currentIndex - data.length,
          animated: false,
        });

        currentIndexRef.current = currentIndex - data.length;
        setCurrentSlide(currentIndexRef.current % data.length);
        return;
      }

      currentIndexRef.current = currentIndex;
      setCurrentSlide(currentIndexRef.current % data.length);
    },
    [data.length, setCurrentSlide]
  );

  const onMomentumScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(offsetX / Style.DEVICE_WIDTH);

      resetIndexToMiddleGroup(index);
    },
    [resetIndexToMiddleGroup]
  );

  const onScrollBeginDrag = useCallback(() => {
    hasUserScrolled.current = true;
  }, []);

  useInterval(
    () => {
      if (!hasUserScrolled?.current && data.length > 1) {
        const newIndex = currentIndexRef.current + 1;

        listRef.current?.scrollToIndex({
          index: newIndex,
          animated: !DETOX_ENABLED,
        });

        resetIndexToMiddleGroup(newIndex);
      }
    },
    DETOX_ENABLED ? null : 5000
  );

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      setTitleSectionHeight(e.nativeEvent.layout.height + TOP_BAR.HEIGHT);
    },
    [setTitleSectionHeight]
  );

  const renderItem = useCallback(
    ({ item }: { item: FullScreenHeroSlide }) => (
      <Box disableAutoAdjust={true} w={Style.DEVICE_WIDTH} h={Style.DEVICE_HEIGHT} alignItems="center">
        <Box position="absolute" top={getTopOffset().background} left={0} right={0}>
          {item.backgroundComponent}
        </Box>
        <Box onLayout={handleLayout}>
          <SafeAreaView>
            {/* The logo should not swipe with the rest of the item, so we use a hidden logo to reserve exactly the same space - and implement the actual logo in the parent component */}
            <Box opacity={0}>
              <Logo type="full" width={Style.adjust(76)} />
            </Box>
            <Box key={item.title} maxWidth={240} mt={getTopOffset().heading}>
              <TextTemplate type="h3" textAlign="center" color={Colours.neutral.white}>
                {item.title}
              </TextTemplate>
            </Box>
          </SafeAreaView>
        </Box>
      </Box>
    ),
    [handleLayout]
  );

  return (
    <FlashList
      ref={listRef}
      data={tripledData}
      decelerationRate="fast"
      horizontal={true}
      initialScrollIndex={startIndex}
      keyExtractor={keyExtractor}
      onScrollBeginDrag={onScrollBeginDrag}
      onMomentumScrollEnd={onMomentumScrollEnd}
      renderItem={renderItem}
      scrollEventThrottle={SCROLL_DELAY_MS}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      snapToAlignment="center"
      snapToInterval={Style.DEVICE_WIDTH}
      removeClippedSubviews={true}
      scrollEnabled={data.length > 1}
    />
  );
};

function keyExtractor(item: FullScreenHeroSlide, index: number) {
  return `${item.title}-${index}`;
}

export default memo(LoopingCarousel);
