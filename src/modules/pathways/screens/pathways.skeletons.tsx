import { Box, SkeletonLoading } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { Colours } from "@styles";
import { LayoutChangeEvent } from "react-native";

const HEADER_ITEM_SIZE = 134;
const HEADER_ITEM_GAP = 16;
const SKELETON_CARD_HEIGHT = 140;
const SKELETON_BG = Colours.overlay.white64;

// Text skeleton heights to match actual text sizes
const SKELETON_TEXT_B1B = 22;
const SKELETON_TEXT_B2 = 18;
const SKELETON_TEXT_L1 = 16;

const PathwaysSkeleton = (props: IBoxProps) => <SkeletonLoading bg={SKELETON_BG} {...props} />;

export const PathwaysHeaderSkeleton = ({ pt }: { pt: number }) => (
  <Box flex={1} width="100%" mt={7} pt={pt}>
    <Box mt={0} gap={20} alignItems="center">
      <Box gap={5} alignItems="center" width="100%">
        <PathwaysSkeleton w="40%" h={SKELETON_TEXT_B1B} br={10} mb={2} />
        <PathwaysSkeleton w="75%" h={SKELETON_TEXT_L1} br={7} />
      </Box>
      <Box
        flexWrap="wrap"
        flexDirection="row"
        gap={HEADER_ITEM_GAP}
        justifyContent="center"
        maxWidth={(HEADER_ITEM_GAP + HEADER_ITEM_SIZE) * 2}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <PathwaysSkeleton key={`pathways-header-item-${index}`} w={HEADER_ITEM_SIZE} h={HEADER_ITEM_SIZE} br={16} />
        ))}
        <PathwaysSkeleton w={HEADER_ITEM_SIZE * 2 + HEADER_ITEM_GAP} h={HEADER_ITEM_SIZE} br={16} />
      </Box>
    </Box>
  </Box>
);

const PathwaysInterventionSkeleton = () => (
  <Box gap={16}>
    <Box ph={8}>
      <PathwaysSkeleton w="55%" h={SKELETON_TEXT_B1B} br={10} />
    </Box>
    <PathwaysSkeleton w="100%" h={SKELETON_CARD_HEIGHT - 10} br={16} />
  </Box>
);

export const PathwaysContentSkeleton = () => (
  <Box minHeight={500} width={"100%"} gap={20} ph={16} pt={30}>
    <Box gap={16}>
      <PathwaysInterventionSkeleton />
    </Box>
  </Box>
);

export const PathwaysStreaksSkeleton = ({
  count,
  onLayout,
}: {
  count: number;
  onLayout?: (event: LayoutChangeEvent) => void;
}) => {
  const itemCount = count || 5;
  return (
    <Box w="100%" gap={24} flexDirection="row" justifyContent="center" alignItems="center" onLayout={onLayout} pb={12}>
      {Array.from({ length: itemCount }).map((_, index) => {
        const iconSize = 26;
        return (
          <Box key={`pathways-streak-skeleton-${index}`} alignItems="center" gap={8}>
            <PathwaysSkeleton w={32} h={SKELETON_TEXT_B2} br={8} />
            <Box size={32} alignItems="center" justifyContent="center">
              <PathwaysSkeleton w={iconSize} h={iconSize} br={iconSize / 2} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
