import { Box, TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import Pressable from "@components/molecules/pressable/pressable";
import { t } from "@locale";
import { AchievementPoints, AchievementSlot } from "@molecules";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { addCommasToNumber } from "@utils";
import { memo, useCallback, useMemo } from "react";

export interface IAchievement {
  id: string;
  name: string;
  description: string;
  points: number;
  type: string;
  icon: {
    uri?: string;
    id: string;
  };
}

interface IProps {
  // Making this props optional until we have the graphql query ready
  points?: number;
  achievements?: IAchievement[];
}

const goToAchievements = () => console.log("go to achievements");

const AchievementsShowcase = ({ points, achievements = [] }: IProps) => {
  const onPress = useCallback(async (achievement: IAchievement) => {
    await showYuModal({
      component: {
        id: MODALS.viewAchievementModal,
        name: MODALS.viewAchievementModal,
        passProps: {
          ...achievement,
          isEquipped: true,
        },
      },
    });
  }, []);

  const slots = useMemo(
    () =>
      Array.from({ length: 3 }, (_, index) => ({
        id: achievements[index]?.id || `slot-${index}`,
        icon: achievements[index]?.icon,
        onAchievementPress: () => (achievements[index]?.name ? onPress(achievements[index]) : goToAchievements),
      })),
    [achievements, onPress]
  );

  return (
    <>
      <Box w={132} bg="white" p={16} br={8} alignItems="center" borderWidth={1} borderColor="#E3E3E1">
        <Box position="absolute" top={-12} left={0} right={0} alignItems="center">
          <Box position="absolute" top={-1} borderWidth={1} borderColor="#E3E3E1" width={105} height={23} br={20} />
          <AchievementPoints label={addCommasToNumber(points)} />
        </Box>
        <Pressable flexDirection="row" alignItems="center" mb={8} mt={8} onPress={goToAchievements}>
          <TextTemplate type="l1b">{t("achievements")}</TextTemplate>
          <ArrowIcon width={14} />
        </Pressable>
        <Box gap={14}>
          {slots.map(({ icon, id, onAchievementPress }) => (
            <Box key={id} gap={14}>
              <AchievementSlot icon={icon} onPress={onAchievementPress} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default memo(AchievementsShowcase);
