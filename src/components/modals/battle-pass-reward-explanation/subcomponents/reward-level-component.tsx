import { Box, TextTemplate } from "@atoms";
import { memo } from "react";

type Props = {
  rewardLevelComponent?: React.ReactNode;
  textColor: string;
  rewardLevel: string;
  color: string;
};
export const RewardLevelComponent = memo((props: Props) => {
  if (props.rewardLevelComponent) {
    return props.rewardLevelComponent;
  }

  return (
    <Box width={30} height={30} br={100} left={0} justifyContent="center" alignItems="center" bg={props.color}>
      <TextTemplate color={props.textColor} type="b2b">
        {props.rewardLevel}
      </TextTemplate>
    </Box>
  );
});
