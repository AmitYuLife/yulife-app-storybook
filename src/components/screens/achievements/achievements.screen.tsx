import { Box, SkeletonLoading } from "@atoms";
import { AchievementPoints } from "@components/molecules";
import { t } from "@locale";
import { MODALS, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { showYuModal } from "@navigation/root";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import AchievementCard, { IAchievementCardProps } from "@organisms/achievement-card/achievement-card";
import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";
import { memo, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import { ChipList } from "@molecules";

const onLeftIconPress = () => Navigation.pop(ROUTES.achievements);

interface IAchievement extends Omit<IAchievementCardProps, "onPress"> {
  shortDescription?: string;
}

interface IProps {
  achievementPoints: number;
  achievements: IAchievement[];
  slotsTaken: number;
  selectedSlot?: number;
  onRefresh: () => void;
  isLoading: boolean;
  categories: {
    value: string;
    isSelected: boolean;
    onPress: () => void;
  }[];
}

const AchievementsScreen = ({
  achievementPoints,
  achievements,
  slotsTaken,
  selectedSlot,
  categories,
  onRefresh,
  isLoading,
}: IProps) => {
  const renderItem = useCallback(
    ({ item }: { item: IAchievement }) => {
      return (
        <Box mb={16} flex={1} alignItems="center">
          <AchievementCard
            {...item}
            description={item.shortDescription}
            onPress={async () =>
              await showYuModal({
                component: {
                  id: MODALS.viewAchievementModal,
                  name: MODALS.viewAchievementModal,
                  passProps: {
                    slotsTaken,
                    selectedSlot,
                    ...item,
                  },
                },
              })
            }
          />
        </Box>
      );
    },
    [slotsTaken, selectedSlot]
  );

  const showAchievementPoints = useMemo(() => typeof achievementPoints === "number", [achievementPoints]);

  return (
    <Box flex={1}>
      <GenericHeadingPad />
      <Box flex={1}>
        <Box pt={8} pr={8} pb={8} mb={4} style={styles.shadowBox}>
          <ChipList chips={categories} isLoading={isLoading} />
        </Box>
        {!showAchievementPoints ? null : (
          <Box alignSelf="center" justifyContent="center" mt={24} mb={10}>
            <AchievementPoints
              label={t("screens.achievements.achievements_points", { achievementPoints })}
              autoWidth={true}
              alignTextInCenter={true}
            />
          </Box>
        )}
        <Box flex={1} width={"100%"}>
          <FlashList
            renderItem={renderItem}
            estimatedItemSize={Style.adjust(164)}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            data={isLoading ? [] : achievements}
            numColumns={2}
            contentContainerStyle={styles.contentContainer}
            ListEmptyComponent={<LoadingAchievementsScreen />}
            scrollEnabled={!isLoading}
            refreshing={false}
            onRefresh={onRefresh}
          />
        </Box>
      </Box>
      <GenericHeadingAbsolute onLeftIconPress={onLeftIconPress} heading={t("achievements")} />
    </Box>
  );
};

const LoadingAchievementsScreen = () => (
  <Box flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" gap={8} mt={16}>
    {Array.from({ length: 8 }).map((_, index) => (
      <SkeletonLoading key={index} w={164} h={196} />
    ))}
  </Box>
);

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: Style.adjust(12),
    paddingHorizontal: Style.adjust(8),
  },
  shadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    backgroundColor: "white",
  },
});

const keyExtractor = (item: IAchievement) => item.id;

export default memo(AchievementsScreen);
