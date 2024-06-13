import { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import QuestMapLevel from "./quest-map-level";
import { QuestsMapLevel } from "@components/screens/member/quests/quests-scroll-screen/quests.context";
import { IEpisodeLevelConfig } from "./quest-map.interface";
import LevelBubbleContainer from "./level-bubble-container";
import { useSelector } from "react-redux";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { ConnectingLines } from "./connecting-lines";
import { createLines } from "./create-lines";

interface IEpisodeLinesProps {
  levels: Record<number, IEpisodeLevelConfig>;
  offsetY?: number;
  formattedLevels?: QuestsMapLevel[];
  episodeWidth: number;
  drawLines?: boolean;
}

function EpisodeLevels({ levels, formattedLevels, offsetY, episodeWidth, drawLines }: IEpisodeLinesProps) {
  const currentLevel = useSelector(getCurrentLevel);
  const lines = useMemo(
    () => createLines({ formattedLevels, levels, episodeWidth, offsetY }),
    [formattedLevels, levels, episodeWidth, offsetY]
  );

  return (
    <View style={styles.container} pointerEvents="box-none">
      {!drawLines ? null : <ConnectingLines lines={lines} />}
      <View style={styles.wrapper} pointerEvents="box-none">
        {formattedLevels.map((bubble) => {
          const configLevel = levels[bubble.level];
          if (!configLevel) {
            return null;
          }

          return (
            <LevelBubbleContainer
              x={configLevel.x}
              y={configLevel.y}
              key={bubble.level}
              offsetY={offsetY}
              episodeWidth={episodeWidth}
            >
              <QuestMapLevel currentLevel={currentLevel} level={bubble} />
            </LevelBubbleContainer>
          );
        })}
      </View>
    </View>
  );
}

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
});

export default memo(EpisodeLevels);
