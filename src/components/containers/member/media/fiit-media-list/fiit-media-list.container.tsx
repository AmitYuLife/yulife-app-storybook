import React, { useCallback, memo, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { Navigation } from "@navigation/main";
import { FiitMediaListScreen } from "@components/screens";
import { ROUTES } from "@navigation/constants";
import { useBackHandler, usePopToQuestsRootOnNewDate } from "@hooks";
import { t } from "@locale";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { GetQuestMapLevelQuery, gql } from "@graphql/__generated";

type IInternalContent =
  GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][number]["details"]["internalContent"][number];

interface IProps extends IInternalContent {
  componentId: string;
  levelSlotTemplateId: string;
  level: number;
  yuniversalMap: number;
}

const FiitMediaListContainer = ({
  contentMediaTags,
  title,
  providerLogo,
  logo,
  level,
  levelSlotTemplateId,
  yuniversalMap,
}: IProps) => {
  const { data: medias, loading } = useQuery(gql("GetMobileQuestLevelChallengeContentDocument"), {
    fetchPolicy: "network-only",
    variables: {
      contentTags: contentMediaTags,
      levelSlotTemplateId,
      level,
      yuniversalMap,
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
    const videos = medias?.getMobileQuestLevelChallengeContent || [];

    return videos.map((item) => {
      return {
        ...item.media,
        stars: item.stars,
        reward: item.reward,
        formattedDuration: item.formattedDuration,
      };
    });
  }, [medias?.getMobileQuestLevelChallengeContent]);

  usePopToQuestsRootOnNewDate(level);

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
          onLeftIconPress: () => Navigation.popTo(ROUTES.fiitMediaList),
          eventType: "workout",
          orientation: "landscape",
          startChallengeButtonLabel: t("screens.fiit_media_list.startChallengeButtonLabel"),
          level,
          levelSlotTemplateId,
          trackingInfo: {
            collection_name: title,
            subcollection_name: video.title,
            type: "move",
            subtype: "fiit",
          },
        },
        options: {
          popGesture: false,
        },
      },
    });
  }, []);

  return (
    <FiitMediaListScreen
      title={t("screens.fiit_media_list.title", { title })}
      description={t("screens.fiit_media_list.description")}
      items={formattedVideos}
      // TODO: Purge when fiit is swapped for workouts
      logo={logo}
      providerLogo={providerLogo}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      loading={loading || formattedVideos.length === 0}
      onItemPress={handleOnItemPress}
    />
  );
};

export default memo(FiitMediaListContainer);
