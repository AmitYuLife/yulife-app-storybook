import { Box } from "@atoms";
import { AchievementPoints } from "@components/molecules";
import { t } from "@locale";
import { MODALS, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { showYuModal } from "@navigation/root";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import AchievementCard, { IAchievementCardProps } from "@organisms/achievement-card/achievement-card";
import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";
import { memo } from "react";
import { StyleSheet } from "react-native";

const onLeftIconPress = () => Navigation.pop(ROUTES.achievements);

interface IAchievement extends IAchievementCardProps {
  shortDescription: string;
}

interface IProps {
  achievementPoints: number;
  achievements: IAchievement[];
}

const AchievementsScreen = ({ achievementPoints, achievements }: IProps) => {
  return (
    <Box flex={1}>
      <GenericHeadingPad />
      <Box flex={1}>
        <Box alignSelf="center" justifyContent="center" mt={15} mb={10}>
          <AchievementPoints
            label={t("screens.achievements.achievements_points", { achievementPoints })}
            autoWidth={true}
          />
        </Box>
        <FlashList
          renderItem={renderItem}
          estimatedItemSize={Style.adjust(164)}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          data={achievements}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
        />
      </Box>
      <GenericHeadingAbsolute onLeftIconPress={onLeftIconPress} heading={t("achievements")} />
    </Box>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: Style.adjust(24),
  },
});

const keyExtractor = (item: IAchievement) => item.id;

const renderItem = ({ item }: { item: IAchievement }) => {
  return (
    <Box pl={18} mb={16}>
      <AchievementCard
        {...item}
        description={item.shortDescription}
        onPress={async () =>
          await showYuModal({
            component: {
              id: MODALS.viewAchievementModal,
              name: MODALS.viewAchievementModal,
              passProps: {
                ...item,
              },
            },
          })
        }
      />
    </Box>
  );
};

export default memo(AchievementsScreen);
