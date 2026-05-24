import { createElement, memo, useMemo } from "react";
import { ImageBackground, ImageSourcePropType, View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { IQuestMapItem } from "./quest-map.interface";
import EpisodeLevels from "./episode-levels";
import { RawImage } from "@atoms";
import { getBundledImageUri, normalizeImageSource } from "@utils/normalize-image-source";
import { isWeb } from "@utils/device";

export interface IQuestMapDayProps {
  episode: IQuestMapItem;
  height: number;
}

const QuestMapEpisode = ({ episode, height }: IQuestMapDayProps) => {
  const backgroundStyle = useMemo(
    () => ({
      ...styles.background,
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

  const backgroundSource = normalizeImageSource(episode.episodeConfig.background) as ImageSourcePropType;
  const backgroundUri = isWeb() ? getBundledImageUri(episode.episodeConfig.background) : null;

  const episodeLevels = !episode.levels?.length ? null : (
    <EpisodeLevels
      formattedLevels={episode.levels}
      levels={episode.episodeConfig.levels}
      episodeWidth={episode.episodeConfig.episodeWidth}
      offsetY={episode.episodeConfig?.bubbleOffsetY ?? 0}
      drawLines={episode.episodeConfig.drawLines}
    />
  );

  return (
    <View pointerEvents="box-none">
      {episode?.seperator ? (
        <RawImage
          source={normalizeImageSource(episode.seperator.background) as ImageSourcePropType}
          style={{ ...styles.seperator, height: seperatorHeight }}
        />
      ) : null}

      {backgroundUri ? (
        <View style={backgroundContainerStyle} pointerEvents="box-none">
          {createElement("img", {
            src: backgroundUri,
            alt: "",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: `${Style.DEVICE_WIDTH}px`,
              height: `${backgroundContainerStyle.height}px`,
              objectFit: "contain",
              pointerEvents: "none",
            },
          })}
          {episodeLevels}
        </View>
      ) : (
        <ImageBackground
          source={backgroundSource}
          style={backgroundContainerStyle}
          imageStyle={backgroundStyle}
          resizeMode="contain"
        >
          {episodeLevels}
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    marginBottom: -2,
    width: Style.DEVICE_WIDTH,
    overflow: "hidden",
  },

  seperator: {
    top: 0,
    marginBottom: -2,
    width: Style.DEVICE_WIDTH,
  },
  background: {
    width: Style.DEVICE_WIDTH,
  },
});

export default memo(QuestMapEpisode);
