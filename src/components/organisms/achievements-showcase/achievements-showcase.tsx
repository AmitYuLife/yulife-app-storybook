import { Box, TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import Pressable from "@components/molecules/pressable/pressable";
import { t } from "@locale";
import { AchievementPoints, AchievementSlot } from "@molecules";
import { MODALS, ROUTES } from "@navigation/constants";
import { pushToScreen, showYuModal } from "@navigation/root";
import { addCommasToNumber } from "@utils";
import { memo, useCallback, useMemo } from "react";
import { AchievementStatus } from "../achievement-card/achievement-card";

export interface IAchievement {
  id: string;
  name: string;
  description: string;
  points?: number;
  slot?: number | null;
  type: string;
  icon: {
    uri?: string;
    id: string;
  };
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
  points?: number;
  achievements?: IAchievement[];
  numberOfSlots?: number;
  isInspectingUser?: boolean;
}

const AchievementsShowcase = ({ points, achievements = [], componentId, isInspectingUser, numberOfSlots }: IProps) => {
  const onPress = useCallback(
    async (achievement: IAchievement) => {
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
    },
    [isInspectingUser]
  );

  const goToAchievements = useCallback(
    (selectedSlot?: number) =>
      pushToScreen(componentId, {
        component: {
          id: ROUTES.achievements,
          name: ROUTES.achievements,
          passProps: {
            selectedSlot,
          },
        },
      }),
    [componentId]
  );

  const getSlot = useCallback(
    (slot: number): ISlot => {
      const achievement = achievements.find((a) => a.slot === slot);

      if (achievement) {
        return {
          icon: achievement.icon,
          onPress: () => onPress(achievement),
        };
      }

      return {
        icon: undefined,
        onPress: () => (isInspectingUser ? null : goToAchievements(slot)),
      };
    },
    [achievements, onPress, goToAchievements, isInspectingUser]
  );

  const showAchievementPoints = useMemo(() => typeof points === "number", [points]);

  return (
    <>
      <Box w={132} bg="white" p={16} br={8} alignItems="center" borderWidth={1} borderColor="#E3E3E1">
        {!showAchievementPoints ? null : (
          <Box position="absolute" top={-12} left={0} right={0} alignItems="center">
            <Box position="absolute" top={-1} borderWidth={1} borderColor="#E3E3E1" width={105} height={23} br={20} />
            <AchievementPoints label={addCommasToNumber(points)} />
          </Box>
        )}

        <Pressable
          flexDirection="row"
          alignItems="center"
          mb={8}
          mt={showAchievementPoints ? 8 : 0}
          onPress={() => goToAchievements()}
        >
          <TextTemplate type="l1b">{t("achievements")}</TextTemplate>
          <ArrowIcon width={14} />
        </Pressable>
        <Box gap={14}>
          {Array.from({ length: numberOfSlots }).map((_, index) => (
            <AchievementSlot key={index} {...getSlot(index + 1)} showStarIcon={isInspectingUser} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default memo(AchievementsShowcase);
