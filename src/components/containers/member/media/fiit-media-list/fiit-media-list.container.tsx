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

  const onLeftIconPress = useCallback(() => Navigation.popTo(ROUTES.fiitMediaCategoryList), []);
  const onRightIconPress = useCallback(() => Navigation.popTo(ROUTES.quests), []);

  useBackHandler(() => {
    onLeftIconPress();
    return false;
  });

  const formattedVideos = useMemo(
    () =>
      medias?.getMedia?.map((item) => {
        const formattedDuration = moment.utc(item.duration * 1000).format("m");
        return {
          ...item,
          reward,
          stars: 3,
          formattedDuration: `${formattedDuration} mins`,
        };
      }),
    [medias?.getMedia, reward]
  );

  const handleOnItemPress = useCallback((video: any) => {
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
        },
      },
    });
  }, []);

  return (
    <FiitMediaListScreen
      title={title}
      description="Free classes powered by"
      items={formattedVideos}
      logo={logo}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      loading={loading || formattedVideos?.length === 0}
      onItemPress={handleOnItemPress}
    />
  );
};

export default memo(FiitMediaListContainer);
