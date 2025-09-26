import { Box, TextTemplate } from "@atoms";
import { memo, useCallback } from "react";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { t } from "@locale";
import AchievementCard, { IAchievementCardProps } from "@organisms/achievement-card/achievement-card";
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { ScrollView } from "react-native";
import { Button } from "@molecules";
import { useBackHandler } from "@hooks";

interface IAchievement extends Omit<IAchievementCardProps, "onPress"> {
  shortDescription?: string;
}

interface IProps {
  achievements: IAchievement[];
}

const onClose = () => Navigation.dismissModal(MODALS.unlockedAchievementsModal);

const UnlockedAchievementsModal = ({ achievements }: IProps) => {
  const insets = useSafeAreaInsets();

  const [markMobileUserWrappedAsViewed, { loading }] = useMutation(
    gql("MarkMobileGameUserAchievementsViewedDocument"),
    {
      variables: {
        ids: achievements.map((achievement) => achievement.id),
      },
      onCompleted: () => {
        onClose();
      },
    }
  );

  const onPress = useCallback(() => {
    return true;
  }, []);

  useBackHandler(onPress);

  return (
    <Box flex={1}>
      <GenericHeadingPad />
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom * 2 }} showsVerticalScrollIndicator={false}>
        <Box mt={16} flex={1}>
          <Box flexDirection="row" flexWrap="wrap" gap={8} alignItems="center" justifyContent="center">
            {achievements.map((item) => (
              <Box key={item.id} mb={16} alignItems="center" justifyContent="center">
                <AchievementCard {...item} description={item.shortDescription} onPress={null} />
              </Box>
            ))}
            <Box ph={38} mt={24} justifyContent="center" alignItems="center">
              <TextTemplate type="h2" color="#5C5757" textAlign="center">
                {t("modals.unlocked_achievements.title", { smart_count: achievements.length })}
              </TextTemplate>
              <Box mt={16}>
                <TextTemplate type="b2" color="#5C5757" textAlign="center">
                  {t("modals.unlocked_achievements.description")}
                </TextTemplate>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <Box position="absolute" bottom={0} left={0} right={0} alignItems="center" bg="white" pb={insets.bottom / 2}>
        <Button
          testID="unlocked-achievements-got-it-button"
          translatedLabel={t("labels.cta.continue")}
          onPress={markMobileUserWrappedAsViewed}
          isLoading={loading}
        />
      </Box>
      <GenericHeadingAbsolute heading={t("achievements_earned")} />
    </Box>
  );
};

export default memo(UnlockedAchievementsModal);
