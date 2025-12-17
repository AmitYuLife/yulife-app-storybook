import { memo } from "react";
import { TextTemplate } from "@components/atoms/text/text-template";
import { Box, RawImage } from "@atoms";
import { Colours } from "@styles";
import PathwaysReflectionCard from "../pathways-reflection-card/pathways-reflection-card";
import PathwaysReflectionHeader from "../pathways-reflection-item/pathways-reflection-header";
import { PathwaysReflectionReward } from "../pathways-reflection-item/pathways-reflection-reward";
import { PathwaysReflectionStatus } from "../../pathways.types";
import { t } from "@locale";

interface IPathwayReflectChestProps {
  timeToNextQuestionnaire: {
    hours: number;
    minutes: number;
    seconds: number;
    hasTimeRemaining: boolean;
  };
  onPress: () => void;
  yucoinAmount?: number;
  status: PathwaysReflectionStatus;
}

const CHEST_IMAGE_SIZE = 100;

const PathwayReflectChest = ({ timeToNextQuestionnaire, onPress, yucoinAmount, status }: IPathwayReflectChestProps) => {
  return (
    <PathwaysReflectionCard onPress={onPress} status={status}>
      <Box p={16} gap={8} mr={CHEST_IMAGE_SIZE} flexDirection="column" alignItems="flex-start">
        <PathwaysReflectionHeader
          label={
            status === "active"
              ? t("screens.pathways.reflection_active_label")
              : t("screens.pathways.reflection_inactive_label")
          }
          status={status}
          timeToNextQuestionnaire={timeToNextQuestionnaire}
        />
        <Box flexDirection="row" gap={4}>
          <RawImage source={require("./extra-challenge.png")} w={15} h={15} contentFit="contain" />
          <TextTemplate type="l1" color={Colours.neutral.white}>
            {t("screens.pathways.reflection_chest_health_challenge")}
          </TextTemplate>
        </Box>
        <PathwaysReflectionReward
          yucoinAmount={t("screens.pathways.reflection_chest_reward", { amount: yucoinAmount })}
        />
      </Box>
      <Box position="absolute" bottom={0} right={12}>
        <RawImage source={require("./chest.png")} w={CHEST_IMAGE_SIZE} h={CHEST_IMAGE_SIZE} contentFit="contain" />
      </Box>
    </PathwaysReflectionCard>
  );
};

export default memo(PathwayReflectChest);
