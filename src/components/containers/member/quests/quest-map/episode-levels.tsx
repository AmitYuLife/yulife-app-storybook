import { memo, useMemo } from "react";
import { Animated, View } from "react-native";
import QuestMapLevel from "./quest-map-level";
import { QuestsMapLevel } from "@components/screens/member/quests/quests-scroll-screen/quests.context";
import { IEpisodeLevelConfig } from "./quest-map.interface";
import LevelBubbleContainer from "./level-bubble-container";
import { useSelector } from "react-redux";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { ConnectingLines } from "./connecting-lines";
import { createLines } from "./create-lines";
import { useOnboardingAnimation } from "./animation/use-onboarding-animation";
import { getShouldQuestMapAnimateOnboarding } from "@redux/quest-map/quest-map.selectors";
import { Colours, StyleSheet } from "@styles";

interface IEpisodeLinesProps {
  levels: Record<number, IEpisodeLevelConfig>;
  offsetY?: number;
  formattedLevels?: QuestsMapLevel[];
  episodeWidth: number;
  drawLines?: boolean;
}

const EpisodeLevels = ({ levels, formattedLevels, offsetY, episodeWidth, drawLines }: IEpisodeLinesProps) => {
  const currentLevel = useSelector(getCurrentLevel);
  const shouldQuestMapAnimateOnboarding = useSelector(getShouldQuestMapAnimateOnboarding);

  const lines = useMemo(
    () => createLines({ formattedLevels, levels, episodeWidth, offsetY }),
    [formattedLevels, levels, episodeWidth, offsetY]
  );

  const onboardingAnimation = useOnboardingAnimation(lines, formattedLevels);

  return (
    <View style={styles.container} pointerEvents="box-none">
      {!drawLines ? null : <ConnectingLines lines={onboardingAnimation.lines} />}
      <View style={styles.wrapper} pointerEvents="box-none">
        {onboardingAnimation.formattedLevels.map((bubble) => {
          const configLevel = levels[bubble.level];

          if (!configLevel) {
            return null;
          }

          return (
            <Animated.View
              key={bubble.level}
              style={
                !shouldQuestMapAnimateOnboarding
                  ? undefined
                  : { opacity: bubble.opacity, transform: [{ translateY: bubble.translateY }] }
              }
            >
              <LevelBubbleContainer
                x={configLevel.x}
                y={configLevel.y}
                key={bubble.level}
                offsetY={offsetY}
                episodeWidth={episodeWidth}
              >
                <QuestMapLevel currentLevel={currentLevel} level={bubble} />
              </LevelBubbleContainer>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  wrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  bubblePlaceholder: {
    height: 12,
    width: 12,
    backgroundColor: Colours.neutral.white,
    borderRadius: 6,
  },
});

export default memo(EpisodeLevels);
