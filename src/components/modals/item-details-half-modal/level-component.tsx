import { ReactNode, memo } from "react";
import { Box, TextTemplate } from "@atoms";
import { t } from "@locale";

interface ILevelComponentProps {
  rewardLevelComponent?: ReactNode;
  textColor: string;
  rewardLevel: string;
  color: string;
}

export const LevelComponent = memo(({ rewardLevelComponent, color, textColor, rewardLevel }: ILevelComponentProps) => {
  if (rewardLevelComponent) {
    return rewardLevelComponent;
  }

  return (
    <Box
      width={30}
      height={30}
      br={100}
      left={0}
      justifyContent="center"
      alignItems="center"
      bg={color}
      accessibilityLabel={t("screens.battle_pass.accessibility.reward_level", { level: rewardLevel })}
    >
      <TextTemplate color={textColor} type="b2b">
        {rewardLevel}
      </TextTemplate>
    </Box>
  );
});
