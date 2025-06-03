import { Box, TextTemplate } from "@atoms";
import { memo, useCallback } from "react";
import { Button } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Style } from "@styles";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { t } from "@locale";
import AchievementCard, { IAchievementCardProps } from "@organisms/achievement-card/achievement-card";
import { FlashList } from "@shopify/flash-list";

interface IAchievement extends Omit<IAchievementCardProps, "onPress"> {
  shortDescription?: string;
}

interface IProps {
  achievements: IAchievement[];
}

const onClose = () => Navigation.dismissModal(MODALS.unlockedAchievementsModal);

const UnlockedAchievementsModal = ({ achievements }: IProps) => {
  const insets = useSafeAreaInsets();

  const ListFooterComponent = useCallback(
    () => (
      <Box ph={16} mt={24}>
        <TextTemplate type="h2" color="#5C5757" textAlign="center">
          {t("modals.unlocked_achievements.title", { smart_count: achievements.length })}
        </TextTemplate>
        <Box mt={16}>
          <TextTemplate type="b2" color="#5C5757" textAlign="center">
            {t("modals.unlocked_achievements.description")}
          </TextTemplate>
        </Box>
      </Box>
    ),
    [achievements.length]
  );

  return (
    <Box flex={1}>
      <GenericHeadingPad />
      <Box flex={1} mt={16} ph={8}>
        <FlashList
          renderItem={renderItem}
          estimatedItemSize={Style.adjust(164)}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          data={achievements}
          numColumns={achievements.length > 1 ? 2 : 1}
          ListFooterComponent={ListFooterComponent}
        />
        <Box position="absolute" bottom={insets.bottom} left={0} right={0} alignItems="center">
          <Button
            testID="unlocked-achievements-got-it-button"
            translatedLabel={t("labels.cta.got_it")}
            onPress={onClose}
            isLoading={false}
          />
        </Box>
      </Box>
      <GenericHeadingAbsolute heading={t("achievements")} onRightIconPress={onClose} />
    </Box>
  );
};

const renderItem = ({ item }: { item: IAchievement }) => {
  return (
    <Box mb={16} flex={1} alignItems="center">
      <AchievementCard {...item} description={item.shortDescription} onPress={null} />
    </Box>
  );
};

const keyExtractor = (item: IAchievement) => item.id;

export default memo(UnlockedAchievementsModal);
