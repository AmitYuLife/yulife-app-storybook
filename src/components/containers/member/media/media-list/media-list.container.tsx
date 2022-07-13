import React, { useCallback, memo, useMemo } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Navigation } from "react-native-navigation";
import { MediaListScreen } from "@components/screens";
import { GQL_QUERY_GET_QUEST_MAP_CHALLENGE_CONTENT } from "@graphql/challenges/getQuestMapChallengeContent.gql";
import {
  GetQuestMapLevelChallengeContent,
  GetQuestMapLevelChallengeContentVariables,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent as IInternalContent,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons_options as IButtonOptions,
} from "@graphql/_core/schema";
import { ROUTES } from "@navigation/constants";
import { openApp } from "@services/app-link";
import { Platform } from "react-native";

interface IProps extends IInternalContent {
  componentId: string;
  createChallenge: (hideExternalLinks?: boolean) => void;
  levelSlotId: string;
}

const MediaListContainer = ({
  createChallenge,
  levelSlotId,
  contentMediaTags,
  title,
  description,
  logo,
  buttons,
}: IProps) => {
  const { data, loading } = useQuery<GetQuestMapLevelChallengeContent, GetQuestMapLevelChallengeContentVariables>(
    GQL_QUERY_GET_QUEST_MAP_CHALLENGE_CONTENT,
    {
      fetchPolicy: "network-only",
      variables: {
        contentTags: contentMediaTags,
        levelSlotId,
      },
    }
  );

  const onLeftIconPress = useCallback(() => Navigation.popTo(ROUTES.questsChallengesList), []);

  const onRightIconPress = useCallback(() => Navigation.popTo(ROUTES.quests), []);

  const handleOpenApp = useCallback(async (options: IButtonOptions) => {
    if (!options) {
      return;
    }

    const { iosUrl, androidUrl, appName, appStoreId, appStoreLocale, playStoreId } = options;
    const url = Platform.select({
      ios: iosUrl,
      android: androidUrl,
    });
    await createChallenge(true);
    openApp(url, { appName, appStoreId, appStoreLocale, playStoreId });
  }, []);

  const handleOtherApp = useCallback(async () => {
    await createChallenge(false);
  }, []);

  const formattedVideos = useMemo(
    () =>
      data?.getQuestMapLevelChallengeContent?.map(({ media, reward, stars, formattedDuration }) => ({
        ...media,
        reward,
        stars,
        formattedDuration,
      })),
    [data?.getQuestMapLevelChallengeContent]
  );

  return (
    <MediaListScreen
      videos={formattedVideos}
      title={title}
      description={description}
      levelSlotId={levelSlotId}
      loading={loading || formattedVideos?.length === 0}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      handleOpenApp={handleOpenApp}
      logo={logo}
      buttons={buttons}
      handleOtherApp={handleOtherApp}
    />
  );
};

export default memo(MediaListContainer);
