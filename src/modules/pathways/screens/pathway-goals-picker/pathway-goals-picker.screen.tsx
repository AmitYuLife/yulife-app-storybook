import { memo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Image, SkeletonLoading } from "@atoms";
import { Button } from "@molecules";
import { Colours, Style } from "@styles";
import { MIN_SAFE_BOTTOM_PADDING } from "@styles/safeAreaViewOffset";
import { PATHWAY_GOALS_PICKER_CONTINUE, PATHWAY_GOALS_PICKER_SCREEN } from "@ids";
import PathwayGoalsPickerCard from "../../components/pathway-goals-picker/pathway-goals-picker-card";
import PathwayGoalsPickerHeader from "../../components/pathway-goals-picker/pathway-goals-picker-header";
import PathwayGoalsPickerRecap from "../../components/pathway-goals-picker/pathway-goals-picker-recap";
import { UsePathwayGoalsPickerReturn } from "../../hooks/usePathwayGoalsPicker";
import { PathwayGoalsPickerMode } from "../../types/pathway-goals-picker.types";

const WAVES_SOURCE = require("../../components/pathway-goals-picker/waves.png");
const WAVES_WIDTH = Style.DEVICE_WIDTH;
// Preserve the source image aspect ratio (752 × 495).
const WAVES_HEIGHT = Math.round((Style.DEVICE_WIDTH * 495) / 752);

const SKELETON_HEADER_TITLE_HEIGHT = 22;
const SKELETON_HEADER_SUBTITLE_HEIGHT = 18;
const SKELETON_CARD_HEIGHT = 220;
const SKELETON_BUTTON_HEIGHT = 56;

type IPathwayGoalsPickerScreenProps = Omit<UsePathwayGoalsPickerReturn, "handleHardwareBack">;

const PathwayGoalsPickerScreen = ({
  isLoading,
  isSubmitting,
  mode,
  currentGoal,
  currentIndex,
  totalGoals,
  selectedGoals,
  upcomingGoals,
  currentChoice,
  canAcceptMore,
  canContinue,
  onAccept,
  onSkip,
  onContinue,
  onConfirm,
  onBack,
}: IPathwayGoalsPickerScreenProps) => {
  const { top, bottom } = useSafeAreaInsets();

  const isPicking = mode === PathwayGoalsPickerMode.Picking;

  if (!isPicking && !isLoading) {
    return (
      <Box w="100%" h="100%" testID={PATHWAY_GOALS_PICKER_SCREEN}>
        <PathwayGoalsPickerRecap selectedGoals={selectedGoals} isSubmitting={isSubmitting} onConfirm={onConfirm} />
      </Box>
    );
  }

  const headerOnBack = currentIndex > 0 ? onBack : undefined;
  const safeBottom = Math.max(bottom, MIN_SAFE_BOTTOM_PADDING);

  return (
    <Box w="100%" h="100%" bg={Colours.neutral.white} pt={top} pb={safeBottom} testID={PATHWAY_GOALS_PICKER_SCREEN}>
      <Box position="absolute" left={0} bottom={0}>
        <Image
          source={WAVES_SOURCE}
          width={WAVES_WIDTH}
          height={WAVES_HEIGHT}
          contentFit="cover"
          suppressLoadingUi={true}
        />
      </Box>
      {isLoading || !currentGoal ? (
        <>
          <Box px={16} pt={8} pb={8} gap={8}>
            <Box flexDirection="row" alignItems="center" minHeight={44} justifyContent="center">
              <SkeletonLoading w="50%" h={SKELETON_HEADER_TITLE_HEIGHT} br={10} />
            </Box>
            <Box px={8}>
              <SkeletonLoading w="100%" h={SKELETON_HEADER_SUBTITLE_HEIGHT} br={8} />
            </Box>
          </Box>
          <Box px={24} pt={8} pb={24}>
            <SkeletonLoading w="100%" h={SKELETON_CARD_HEIGHT} br={16} />
          </Box>
          <Box flex={1} />
          <Box ph={24} pb={8}>
            <SkeletonLoading w="100%" h={SKELETON_BUTTON_HEIGHT} br={12} />
          </Box>
        </>
      ) : (
        <>
          <PathwayGoalsPickerHeader current={currentIndex + 1} total={totalGoals} onBack={headerOnBack} />
          <PathwayGoalsPickerCard
            goal={currentGoal}
            upcomingGoals={upcomingGoals}
            choice={currentChoice}
            canAccept={canAcceptMore}
            onAccept={onAccept}
            onSkip={onSkip}
          />
          <Box flex={1} />
          <Box ph={24} pb={8}>
            <Button
              testID={PATHWAY_GOALS_PICKER_CONTINUE}
              translationKey="screens.pathways.goals_picker.cta.continue"
              onPress={onContinue}
              disabled={!canContinue}
              isLoading={isSubmitting}
              size="Fill"
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default memo(PathwayGoalsPickerScreen);
