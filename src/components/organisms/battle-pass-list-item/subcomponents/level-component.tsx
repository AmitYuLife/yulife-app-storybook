import { Box, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Colours } from "@styles";
import { memo } from "react";

type Props = {
  isClaimed: boolean;
  rewardLevelComponent: React.ReactNode;
  id: string;
  position: number;
};
export const LevelComponent = memo((props: Props) => {
  if (props.isClaimed) {
    return null;
  }

  if (props.rewardLevelComponent) {
    return props.rewardLevelComponent;
  }

  return (
    <Box
      position="absolute"
      top={9}
      right={8}
      br={100}
      width={24}
      height={24}
      alignItems="center"
      justifyContent="center"
      bg="rgba(0,0,0,0.1)"
    >
      <TextTemplate
        type="l1b"
        color={Colours.neutral.white}
        accessibilityLabel={t("screens.battle_pass.accessibility.reward_level", { level: props.position })}
      >
        {props.position}
      </TextTemplate>
    </Box>
  );
});
