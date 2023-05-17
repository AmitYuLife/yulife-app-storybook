import React, { useCallback, memo, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { Navigation } from "@navigation/main";
import { FiitMediaListScreen } from "@components/screens";
import {
  GetMedia,
  GetMediaVariables,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent as IInternalContent,
} from "@graphql/_core/schema";
import { ROUTES } from "@navigation/constants";
import { useBackHandler } from "@hooks";
import { GQL_QUERY_GET_VIDEOS_LIST } from "@graphql/media/getMedia.gql";
import moment from "moment";
import { t } from "@locale";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { IITem } from "@organisms/media-list-items/media-list-items";

interface IProps extends IInternalContent {
  componentId: string;
  levelSlotId: string;
  reward: number;
}

const FiitMediaListContainer = ({ levelSlotId, contentMediaTags, title, logo, reward }: IProps) => {
  const { data: medias, loading } = useQuery<GetMedia, GetMediaVariables>(GQL_QUERY_GET_VIDEOS_LIST, {
    fetchPolicy: "network-only",
    variables: {
      tags: contentMediaTags,
    },
  });

  const dispatch = useDispatch();
  const onLeftIconPress = useCallback(() => Navigation.popTo(ROUTES.fiitMediaCategoryList), []);
  const onRightIconPress = useCallback(() => Navigation.popTo(ROUTES.quests), []);

  useBackHandler(() => {
    onLeftIconPress();
    return false;
  });

  const formattedVideos = useMemo(() => {
    const videos = medias?.getMedia || [];
    return videos.map((item) => {
      const formattedDuration = moment.utc(item.duration * 1000).format("m");
      return {
        ...item,
        reward,
        stars: 3,
        formattedDuration: `${formattedDuration} mins`,
      };
    });
  }, [medias?.getMedia, reward]);

  const handleOnItemPress = useCallback((video: IITem) => {
    dispatch(
      logMixpanelEventActionCreator("challenge_subcollection_viewed", {
        type: "move",
        subtype: "fiit",
        collection_name: title,
        subcollection_name: video.title,
      })
    );

    Navigation.push(ROUTES.fiitMediaList, {
      component: {
        id: ROUTES.mediaPlayer,
        name: ROUTES.mediaPlayer,
        passProps: {
          video,
          levelSlotId,
          onLeftIconPress: () => Navigation.popTo(ROUTES.fiitMediaList),
          eventType: "workout",
          orientation: "landscape",
          startChallengeButtonLabel: t("screens.fiit_media_list.startChallengeButtonLabel"),
          trackingInfo: {
            collection_name: title,
            subcollection_name: video.title,
            type: "move",
            subtype: "fiit",
          },
        },
      },
    });
  }, []);

  return (
    <FiitMediaListScreen
      title={t("screens.fiit_media_list.title", { title })}
      description={t("screens.fiit_media_list.description")}
      items={formattedVideos}
      logo={logo}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      loading={loading || formattedVideos.length === 0}
      onItemPress={handleOnItemPress}
    />
  );
};

export default memo(FiitMediaListContainer);
