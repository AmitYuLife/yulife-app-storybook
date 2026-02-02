import { memo } from "react";
import { FlashList, FlashListProps } from "@shopify/flash-list";
import Animated, { SharedValue, useAnimatedScrollHandler } from "react-native-reanimated";
import { Box } from "@atoms";
import { MoodMonth, IMonth } from "./mood-month";
import { Style } from "@styles";

const AnimatedFlashList = Animated.createAnimatedComponent<FlashListProps<IMonth>>(FlashList);

interface IMoodCalendarProps {
  data: IMonth[];
  loading?: boolean;
  scrollValue?: SharedValue<number>;
}

export const MoodCalendar = ({ data, loading, scrollValue }: IMoodCalendarProps) => {
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (scrollValue) {
        scrollValue.value = event.contentOffset.y;
      }
    },
  });

  return (
    <Box flex={1}>
      <AnimatedFlashList
        inverted={true}
        data={data}
        refreshing={loading}
        renderItem={render}
        keyExtractor={keyExtractor}
        estimatedItemSize={Style.adjust(500)}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      />
    </Box>
  );
};

const keyExtractor = (item: IMonth) => item.monthDate;

const render = ({ item }: { item: IMonth }) => <MoodMonth monthSection={item} />;

export default memo(MoodCalendar);
