import * as React from "react";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import QuestMapLevel from "./quest-map-level";
import { QuestsMapLevel } from "@components/screens/member/quests/quests-scroll-screen/quests.context";
import { IEpisodeLevelConfig } from "./quest-map.interface";
import LevelBubbleContainer from "./level-bubble-container";
import { useSelector } from "react-redux";
import { getCurrentLevel } from "@redux/levels/levels.selectors";

interface IEpisodeLinesProps {
  levels: Record<number, IEpisodeLevelConfig>;
  offsetY?: number;
  width: number;
  formattedLevels?: QuestsMapLevel[];
  episodeWidth: number;
}

function EpisodeLevels({ levels, formattedLevels, offsetY, width, episodeWidth }: IEpisodeLinesProps) {
  const currentLevel = useSelector(getCurrentLevel);

  return (
    <View style={styles.container} pointerEvents="box-none">
      <View style={styles.wrapper} pointerEvents="box-none">
        {formattedLevels.map((foundLevel) => {
          const configLevel = levels[foundLevel.level];
          if (!configLevel) {
            return null;
          }

          return (
            <LevelBubbleContainer
              x={configLevel.x}
              y={configLevel.y}
              width={width}
              key={foundLevel.level}
              offsetY={offsetY}
              episodeWidth={episodeWidth}
            >
              <QuestMapLevel currentLevel={currentLevel} level={foundLevel} />
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
  bubbles: {
    position: "absolute",
  },
});

export default memo(EpisodeLevels);
