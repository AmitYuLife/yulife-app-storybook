import { memo } from "react";
import { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { t } from "@locale";
import { Box } from "@atoms";
import GoalsHistoryList from "../components/goals-history-list/goals-history-list";
import { IGoalHistorySection } from "../components/goals-history-list/subcomponents/goals-history-section";

export interface IGoalsHistoryScreenProps {
  onClose: () => void;
  sections: IGoalHistorySection[];
  loading: boolean;
}

const PathwaysGoalsHistoryScreen = ({ onClose, sections, loading }: IGoalsHistoryScreenProps) => {
  const scrollValue = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollValue.value = event.contentOffset.y;
    },
  });

  return (
    <Box flex={1}>
      <GenericHeadingPad hasShadow={true} />
      <GoalsHistoryList sections={sections} loading={loading} onScroll={scrollHandler} />
      <GenericHeadingAbsolute
        heading={t("screens.goals-history.title")}
        onRightIconPress={onClose}
        hasShadow={true}
        scrollValue={scrollValue}
      />
    </Box>
  );
};

export default memo(PathwaysGoalsHistoryScreen);
