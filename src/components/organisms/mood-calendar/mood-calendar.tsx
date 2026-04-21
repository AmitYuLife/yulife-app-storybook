/* eslint-disable react-compiler/react-compiler -- SharedValue.value mutation is the correct reanimated API */
import { memo } from "react";
import { FlashList, FlashListProps } from "@shopify/flash-list";
import Animated, { SharedValue, useAnimatedScrollHandler } from "react-native-reanimated";
import { Box } from "@atoms";
import { MoodMonth, IMonth } from "./mood-month";
import { Style, StyleSheet } from "@styles";

const AnimatedFlashList = Animated.createAnimatedComponent<FlashListProps<IMonth>>(FlashList);

interface IMoodCalendarProps {
  data: IMonth[];
  loading?: boolean;
  scrollValue?: SharedValue<number>;
}

export const MoodCalendar = ({ data, loading, scrollValue }: IMoodCalendarProps) => {
  "use no memo";
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
        data={data}
        refreshing={loading}
        renderItem={render}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        contentContainerStyle={styles.contentContainer}
        maintainVisibleContentPosition={{ startRenderingFromBottom: true }}
      />
    </Box>
  );
};

const keyExtractor = (item: IMonth) => item.monthDate;

const render = ({ item }: { item: IMonth }) => <MoodMonth monthSection={item} />;

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: Style.adjust(24),
  },
});

export default memo(MoodCalendar);
