import { memo } from "react";
import { Box, RawImage } from "@atoms";
import PathwaysReflectionCard from "../pathways-reflection-card/pathways-reflection-card";
import PathwaysReflectionHeader from "./pathways-reflection-header";
import { PathwaysReflectionReward } from "./pathways-reflection-reward";
import { IBoxProps } from "@atoms/box/box.types";

interface IPathwaysReflectionItemProps extends IBoxProps {
  label: string;
  onPress: () => void;
  yucoinAmount: number;
  status: "completed" | "active" | "locked";
}

const PathwaysReflectionItem = ({ label, onPress, yucoinAmount, status, ...props }: IPathwaysReflectionItemProps) => {
  return (
    <PathwaysReflectionCard onPress={onPress} status={status} {...props}>
      <Box mb={12} p={8}>
        <PathwaysReflectionHeader label={label} status={status} />
      </Box>
      <RawImage source={require("./reflection-yucoin.png")} w="100%" h={80} contentFit="contain" />
      <PathwaysReflectionReward left={10} bottom={10} position="absolute" yucoinAmount={yucoinAmount} />
    </PathwaysReflectionCard>
  );
};

export default memo(PathwaysReflectionItem);
