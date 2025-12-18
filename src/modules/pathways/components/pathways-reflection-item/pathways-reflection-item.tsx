import { memo } from "react";
import { Box, RawImage, TextTemplate } from "@atoms";
import PathwaysReflectionCard from "../pathways-reflection-card/pathways-reflection-card";
import { PathwaysReflectionMarkdown } from "./pathways-reflection-markdown";
import { IBoxProps } from "@atoms/box/box.types";
import PathwaysReflectionStatusIndicator from "./pathways-reflection-status-indicator";
import { Colours } from "@styles";
import { t } from "@locale";

interface IPathwaysReflectionItemProps extends IBoxProps {
  onPress: () => void;
  yucoinAmount: number;
  status: "completed" | "active" | "locked" | "next";
  timeToNextQuestionnaire: {
    hours: number;
    minutes: number;
    seconds: number;
    hasTimeRemaining: boolean;
  };
}

const YUCOIN_IMAGE_WIDTH = 140;
const YUCOIN_IMAGE_HEIGHT = 80;

const PathwaysReflectionItem = ({
  onPress,
  yucoinAmount,
  status,
  timeToNextQuestionnaire,
  ...props
}: IPathwaysReflectionItemProps) => {
  return (
    <PathwaysReflectionCard onPress={onPress} isDisabled={status !== "active"} {...props}>
      {status === "next" ? (
        <Box position="absolute" top={8} left={10}>
          <PathwaysReflectionStatusIndicator status={status} timeToNextQuestionnaire={timeToNextQuestionnaire} />
        </Box>
      ) : (
        <>
          <Box position="absolute" top={8} right={10}>
            <PathwaysReflectionStatusIndicator status={status} timeToNextQuestionnaire={timeToNextQuestionnaire} />
          </Box>
          <Box position="absolute" top={10} left={10}>
            <TextTemplate type="b2b" color={Colours.neutral.white}>
              {status === "active"
                ? t("screens.pathways.reflection_active_label")
                : t("screens.pathways.reflection_inactive_label")}
            </TextTemplate>
          </Box>
        </>
      )}
      <Box position="absolute" right={0} bottom={0} w={YUCOIN_IMAGE_WIDTH} h={YUCOIN_IMAGE_HEIGHT}>
        <RawImage
          source={require("./reflection-yucoin.png")}
          w={YUCOIN_IMAGE_WIDTH}
          h={YUCOIN_IMAGE_HEIGHT}
          contentFit="contain"
        />
      </Box>
      <Box position="absolute" bottom={10} left={10}>
        <PathwaysReflectionMarkdown
          text={t("screens.pathways.reflection_yucoin_amount", {
            amount: yucoinAmount,
            yucoinUrl: require("@assets/icons/yucoin.png"),
          })}
        />
      </Box>
    </PathwaysReflectionCard>
  );
};

export default memo(PathwaysReflectionItem);
