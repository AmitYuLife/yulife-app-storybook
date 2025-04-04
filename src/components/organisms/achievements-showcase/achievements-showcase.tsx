import { Box, TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import Pressable from "@components/molecules/pressable/pressable";
import { t } from "@locale";
import { AchievementPoints, AchievementSlot } from "@molecules";
import { memo, useMemo } from "react";

interface IAchievement {
  name: string;
  achievementId: string;
  achievementType: string;
  icon: {
    uri?: string;
    id: string;
  };
}

interface IProps {
  points: number;
  achievements: IAchievement[];
  onPress: (id?: string) => void;
}

const goToAchievements = () => console.log("go to achievements");

const AchievementsShowcase = ({ points, achievements = [], onPress }: IProps) => {
  const slots = useMemo(
    () =>
      Array.from({ length: 3 }, (_, index) => ({
        id: achievements[index]?.achievementId,
        icon: achievements[index]?.icon,
        onAchievementPress: () => onPress(achievements[index]?.achievementId),
      })),
    [achievements, onPress]
  );

  return (
    <>
      <Box w={132} bg="white" p={16} br={8} alignItems="center" borderWidth={1} borderColor="#E3E3E1">
        <Box position="absolute" top={-12} left={0} right={0} alignItems="center">
          <Box position="absolute" top={-1} borderWidth={1} borderColor="#E3E3E1" width={105} height={23} br={20} />
          <AchievementPoints points={points} />
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
