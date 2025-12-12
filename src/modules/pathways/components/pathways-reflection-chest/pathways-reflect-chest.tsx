import { memo } from "react";
import { TextTemplate } from "@components/atoms/text/text-template";
import { Box, RawImage } from "@atoms";
import { Colours } from "@styles";
import PathwaysReflectionCard from "../pathways-reflection-card/pathways-reflection-card";
import PathwaysReflectionHeader from "../pathways-reflection-item/pathways-reflection-header";
import { PathwaysReflectionReward } from "../pathways-reflection-item/pathways-reflection-reward";
import { PathwaysReflectionStatus } from "../../pathways.types";

interface IPathwayReflectChestProps {
  label: string;
  description: string;
  onPress: () => void;
  yucoinAmount?: number;
  status: PathwaysReflectionStatus;
}

const PathwayReflectChest = ({ label, description, onPress, yucoinAmount, status }: IPathwayReflectChestProps) => {
  return (
    <PathwaysReflectionCard onPress={onPress} status={status}>
      <Box p={8} flex={1} gap={5} minHeight={120}>
        <Box gap={5} h="100%">
          <PathwaysReflectionHeader label={label} status={status} />
          <TextTemplate type="b2" color={Colours.neutral.white}>
            {description}
          </TextTemplate>
        </Box>
        <PathwaysReflectionReward position="absolute" left={8} bottom={8} yucoinAmount={yucoinAmount} />
      </Box>
      <Box position="absolute" bottom={5} right={12}>
        <RawImage source={require("./chest.png")} w={100} h={100} contentFit="contain" />
      </Box>
    </PathwaysReflectionCard>
  );
};

export default memo(PathwayReflectChest);
