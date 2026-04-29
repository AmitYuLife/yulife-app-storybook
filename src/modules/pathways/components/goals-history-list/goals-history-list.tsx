import { memo } from "react";
import { FlashList, FlashListProps } from "@shopify/flash-list";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";
import { Box } from "@atoms";
import { Style, StyleSheet } from "@styles";
import GoalsHistorySection, { IGoalHistorySection } from "./subcomponents/goals-history-section";

const AnimatedFlashList = Animated.createAnimatedComponent<FlashListProps<IGoalHistorySection>>(FlashList);

interface IGoalsHistoryListProps {
  sections: IGoalHistorySection[];
  loading?: boolean;
  onScroll?: ReturnType<typeof useAnimatedScrollHandler>;
}

const GoalsHistoryList = ({ sections, loading, onScroll }: IGoalsHistoryListProps) => {
  return (
    <Box flex={1}>
      <AnimatedFlashList
        data={sections}
        refreshing={loading}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

const keyExtractor = (item: IGoalHistorySection) => item.id;

const renderItem = ({ item }: { item: IGoalHistorySection }) => <GoalsHistorySection section={item} mb={24} />;

const styles = StyleSheet.create({
  content: {
    paddingBottom: Style.adjust(24),
  },
});

export default memo(GoalsHistoryList);
