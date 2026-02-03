import { memo, useMemo } from "react";
import { TextTemplate } from "@components/atoms/text/text-template";
import { Box, RawImage } from "@atoms";
import { Colours, StyleSheet } from "@styles";
import PathwaysReflectionCard from "../pathways-reflection-card/pathways-reflection-card";
import PathwayReflectionStatusIndicator from "../pathways-reflection-item/pathways-reflection-status-indicator";
import { PathwaysReflectionStatus } from "../../pathways.types";
import { t } from "@locale";
import { Button } from "@components/molecules";
import { BUTTON_SIZES } from "@components/molecules/button/button.types";
import { PathwaysReflectionMarkdown } from "../pathways-reflection-item/pathways-reflection-markdown";
import LottieView from "lottie-react-native";
import rewardShine from "./pathways-reward-shine.json";

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
  isChallengeCompleted?: boolean;
  isStreakComplete?: boolean;
}

const CHEST_IMAGE_SIZE = 90;

const PathwayReflectChest = ({
  timeToNextQuestionnaire,
  onPress,
  yucoinAmount,
  status,
  isChallengeCompleted,
  isStreakComplete,
}: IPathwayReflectChestProps) => {
  const isHealthChallengeReady = status === "completed" && !!onPress;

  const extraChallengeText = useMemo(() => {
    if (status === "completed") {
      return t("screens.pathways.reflection_chest_health_challenge_completed_markdown", {
        amount: yucoinAmount,
        extraChallengeUrl: require("./extra-challenge.png"),
        checkboxUrl: require("./check.png"),
      });
    }

    return t("screens.pathways.reflection_chest_health_challenge_to_earn_markdown", {
      amount: yucoinAmount,
      extraChallengeUrl: require("./extra-challenge.png"),
    });
  }, [status, yucoinAmount]);

  const rewardText = useMemo(() => {
    if (status === "completed") {
      return t("screens.pathways.reflection_chest_reward_to_earn_completed_markdown", {
        amount: yucoinAmount,
        yucoinUrl: require("@assets/icons/yucoin.png"),
        checkboxUrl: require("./check.png"),
      });
    }

    return t("screens.pathways.reflection_chest_reward_to_earn_markdown", {
      amount: yucoinAmount,
      yucoinUrl: require("@assets/icons/yucoin.png"),
    });
  }, [status, yucoinAmount]);

  const isDisabled = (isStreakComplete && isChallengeCompleted) || !["active", "completed"].includes(status);

  return (
    <PathwaysReflectionCard onPress={onPress} isDisabled={isDisabled}>
      {isHealthChallengeReady ? (
        <LottieView source={rewardShine} loop={true} autoPlay={true} style={styles.lottie} resizeMode="cover" />
      ) : null}
      <Box position="absolute" top={8} right={8}>
        <PathwayReflectionStatusIndicator status={status} timeToNextQuestionnaire={timeToNextQuestionnaire} />
      </Box>
      <Box p={16} gap={10} flexDirection="column" alignItems="flex-start" position="relative" pr={CHEST_IMAGE_SIZE}>
        <TextTemplate type="b2b" color={Colours.neutral.white}>
          {status === "active"
            ? t("screens.pathways.reflection_active_label")
            : t("screens.pathways.reflection_inactive_label")}
        </TextTemplate>
        <PathwaysReflectionMarkdown text={extraChallengeText} />
        <PathwaysReflectionMarkdown text={rewardText} />
        <Box position="absolute" bottom={0} right={12}>
          <RawImage
            source={require("../../assets/pathways-chest.png")}
            w={CHEST_IMAGE_SIZE}
            h={CHEST_IMAGE_SIZE}
            contentFit="contain"
          />
        </Box>
      </Box>
      {status === "completed" && onPress ? (
        <Box mx={16} mb={12}>
          <Button
            animate={true}
            size={BUTTON_SIZES.NARROW}
            translationKey="screens.pathways.reflection_chest_button_label"
            onPress={onPress}
          />
        </Box>
      ) : null}
    </PathwaysReflectionCard>
  );
};

const styles = StyleSheet.create({
  lottie: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export default memo(PathwayReflectChest);
