import React, { memo, useMemo } from "react";
import { Image, View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { IQuestMapItem } from "./quest-map.interface";
import EpisodeLevels from "./episode-levels";
import { RawImage } from "@atoms";

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
    <View pointerEvents="box-none">
      {episode?.seperator ? (
        <RawImage source={episode.seperator.background} style={{ ...styles.seperator, height: seperatorHeight }} />
      ) : null}

      <View style={backgroundContainerStyle} pointerEvents="box-none">
        <View style={lottieStyles} pointerEvents="none">
          <Image
            source={episode.episodeConfig.background}
            style={lottieStyles}
            resizeMode="contain"
            resizeMethod="scale"
          />
        </View>
        {!episode.levels?.length ? null : (
          <EpisodeLevels
            formattedLevels={episode.levels}
            levels={episode.episodeConfig.levels}
            episodeWidth={episode.episodeConfig.episodeWidth}
            offsetY={episode.episodeConfig?.bubbleOffsetY ?? 0}
            drawLines={episode.episodeConfig.drawLines}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    marginBottom: -1,
    alignItems: "center",
    justifyContent: "center",
  },

  seperator: {
    top: 0,
    marginBottom: -1,
    width: Style.DEVICE_WIDTH,
  },
  lottie: {
    position: "absolute",
    marginStart: 0,
  },
});

export default memo(QuestMapEpisode);
