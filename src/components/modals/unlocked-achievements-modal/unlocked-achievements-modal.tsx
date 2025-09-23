import { Box, TextTemplate } from "@atoms";
import { memo } from "react";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { t } from "@locale";
import AchievementCard, { IAchievementCardProps } from "@organisms/achievement-card/achievement-card";
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { ScrollView } from "react-native";
import { Style, StyleSheet } from "@styles";
import { Button } from "@molecules";

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

  return (
    <Box flex={1}>
      <GenericHeadingPad />
      <ScrollView contentContainerStyle={styles.container}>
        <Box flex={1} mt={16}>
          <Box flexDirection="row" flexWrap="wrap" gap={8} alignItems="center" justifyContent="center">
            {achievements.map((item) => (
              <Box key={item.id} mb={16} alignItems="center" justifyContent="center" maxWidth={Style.adjust(164)}>
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

          <Box position="absolute" bottom={insets.bottom} left={0} right={0} alignItems="center">
            <Button
              testID="unlocked-achievements-got-it-button"
              translatedLabel={t("labels.cta.continue")}
              onPress={markMobileUserWrappedAsViewed}
              isLoading={loading}
            />
          </Box>
        </Box>
      </ScrollView>
      <GenericHeadingAbsolute heading={t("achievements_earned")} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(UnlockedAchievementsModal);
