import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { IQuestMapItem } from "./quest-map.interface";
import EpisodeLevels from "./episode-levels";
import FastImage from "react-native-fast-image";

export interface IQuestMapDayProps {
  episode: IQuestMapItem;
  height: number;
}

const QuestMapEpisode = ({ episode, height }: IQuestMapDayProps) => {
  const lottieStyles = useMemo(
    () => ({
      ...styles.lottie,
      width: Style.DEVICE_WIDTH,
      height,
    }),
    [height]
  );

  const seperatorHeight = episode?.seperator
    ? Style.DEVICE_WIDTH * (episode?.seperator?.height / episode?.seperator?.width)
    : 0;

  const backgroundContainerStyle = useMemo(
    () => ({ ...styles.backgroundContainer, height: height - seperatorHeight }),
    [height, seperatorHeight]
  );

  return (
    <View>
      {episode?.seperator ? (
        <FastImage source={episode.seperator.background} style={{ ...styles.seperator, height: seperatorHeight }} />
      ) : null}

      <View style={backgroundContainerStyle}>
        <FastImage source={episode.episodeConfig.background} style={lottieStyles} resizeMode="contain" />
        {!episode.levels?.length ? null : (
          <EpisodeLevels
            width={Style.DEVICE_WIDTH}
            formattedLevels={episode.levels}
            levels={episode.episodeConfig.levels}
            episodeWidth={episode.episodeConfig.episodeWidth}
            offsetY={episode.episodeConfig?.bubbleOffsetY ?? 0}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    marginBottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  seperator: {
    top: 0,
    width: Style.DEVICE_WIDTH,
  },
  lottie: {
    position: "absolute",
    marginLeft: 0,
  },
});

export default memo(QuestMapEpisode);
