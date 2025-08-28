import { Box, TextTemplate } from "@atoms";
import { AchievementSlot, Pressable } from "@molecules";
import { MODALS, ROUTES } from "@navigation/constants";
import { pushToScreen, showYuModal } from "@navigation/root";
import { memo, useCallback } from "react";
import { AchievementStatus } from "../achievement-card/achievement-card";
import { useTrack } from "@hooks";
import { ACHIEVEMENT_SLOT, ACHIEVEMENTS_SHOWCASE } from "@ids";
import { ArrowIcon } from "@atoms/icon/arrow";
import { t } from "@locale";

export interface IAchievement {
  id: string;
  name: string;
  description: string;
  points?: number;
  slot?: number | null;
  type: string;
  backgroundColor: string;
  textColor: string;
  backgroundImage: {
    uri?: string;
    id: string;
  };
  icon: {
    uri?: string;
    id: string;
  };
  topBarType: string;
}

interface ISlot {
  icon: {
    uri?: string;
    id: string;
  };
  onPress: () => void;
}

interface IProps {
  componentId: string;
  achievement?: IAchievement;
  isInspectingUser?: boolean;
  currentViewedUserId?: string;
}

const AchievementsShowcase = ({ achievement, componentId, isInspectingUser, currentViewedUserId }: IProps) => {
  const track = useTrack();

  const onPress = useCallback(async () => {
    track("achievement_click", {
      achievement_id: achievement.id,
      achievement_name: achievement.name,
      click_source: componentId,
    });
    await showYuModal({
      component: {
        id: MODALS.viewAchievementModal,
        name: MODALS.viewAchievementModal,
        passProps: {
          ...achievement,
          status: AchievementStatus.equipped,
          isInspectingUser,
        },
      },
    });
  }, [isInspectingUser, componentId, track, achievement]);

  const goToAchievements = useCallback(
    (selectedSlot?: number) => {
      track("achievement_view", {
        view_source: componentId,
      });

      pushToScreen(componentId, {
        component: {
          id: ROUTES.achievements,
          name: ROUTES.achievements,
          passProps: {
            selectedSlot,
            currentViewedUserId,
            isInspectingUser,
          },
        },
      });
    },
    [componentId, track, isInspectingUser, currentViewedUserId]
  );

  const getSlot = useCallback(
    (slot: number): ISlot => {
      if (achievement) {
        return {
          icon: achievement.icon,
          onPress: () => onPress(),
        };
      }

      return {
        icon: undefined,
        onPress: () => (isInspectingUser ? null : goToAchievements(slot)),
      };
    },
    [achievement, onPress, goToAchievements, isInspectingUser]
  );

  return (
    <Box testID={ACHIEVEMENTS_SHOWCASE}>
      <AchievementSlot {...getSlot(1)} showStarIcon={isInspectingUser} testID={ACHIEVEMENT_SLOT(1)} />

      <Pressable onPress={() => goToAchievements()}>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={4}
          borderWidth={1}
          borderColor="#E3E3E1"
          bg="white"
          maxWidth={149}
          br={48}
          pv={3}
          pr={12}
          pl={16}
          mt={16}
        >
          <TextTemplate type="l1">{t("all_achievements")}</TextTemplate>
          <ArrowIcon size={14} />
        </Box>
      </Pressable>
    </Box>
  );
};

export default memo(AchievementsShowcase);
