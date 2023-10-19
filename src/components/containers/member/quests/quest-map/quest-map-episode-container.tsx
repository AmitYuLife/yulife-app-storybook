import React, { memo, useMemo } from "react";
import { IQuestMapItem } from "./quest-map.interface";
import QuestMapEpisode, { IQuestMapDayProps } from "./quest-map-episode";
import { View } from "react-native";

interface IQuestMapDayPropsEpisode extends IQuestMapDayProps {
  episode: IQuestMapItem;
  isActive: boolean;
  shouldRender: boolean;
  height: number;
}

const QuestMapEpisodeContainer = ({ height, episode, shouldRender, ...props }: IQuestMapDayPropsEpisode) => {
  const style = useMemo(
    () => ({
      height,
      transform: [{ scaleY: -1 }],
    }),
    [height]
  );

  return (
    <View style={style}>{shouldRender ? <QuestMapEpisode height={height} episode={episode} {...props} /> : null}</View>
  );
};

export default memo(QuestMapEpisodeContainer);
