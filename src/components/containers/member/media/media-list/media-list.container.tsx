import React, { useCallback, memo, useMemo, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Navigation } from "react-native-navigation";
import { MediaListScreen } from "@components/screens";
import { GQL_QUERY_GET_QUEST_MAP_CHALLENGE_CONTENT } from "@graphql/challenges/getQuestMapChallengeContent.gql";
import {
  GetQuestMapLevelChallengeContent,
  GetQuestMapLevelChallengeContentVariables,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent as IInternalContent,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons as IButton,
} from "@graphql/_core/schema";
import { ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { useDispatch } from "react-redux";
import { updateChallengeAppButton } from "@redux/levels/levels.actions";
import { t } from "@locale";
import { useBackHandler } from "@hooks";
interface IProps extends IInternalContent {
  componentId: string;
  createChallenge: (hideExternalLinks?: boolean) => void;
  levelSlotId: string;
  tutorialUrl: string;
}

const MediaListContainer = ({
  createChallenge,
  levelSlotId,
  contentMediaTags,
  title,
  description,
  logo,
  buttons,
  tutorialUrl,
}: IProps) => {
  const [otherAppLoading, setOtherAppLoading] = useState("");
  const dispatch = useDispatch();
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

  useBackHandler(() => {
    onLeftIconPress();
    return false;
  });

  const handleOtherMeditationApp = useCallback(async (appName: string, button?: IButton) => {
    if (!appName) {
      return;
    }

    const otherApp = {
      title: t("screens.challengeProgress.howMeditateWithOtherAppsLabel"),
      tutorialUrl,
    };

    setOtherAppLoading(appName);
    try {
      await createChallenge(false);
      dispatch(updateChallengeAppButton(appName === "otherApp" ? otherApp : button));
    } catch (err) {
      Logger.error(err, { location: "media-list.container.handleOpenApp" });
    } finally {
      setOtherAppLoading("");
    }
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
      handleOtherMeditationApp={handleOtherMeditationApp}
      logo={logo}
      buttons={buttons}
      otherAppLoading={otherAppLoading}
    />
  );
};

export default memo(MediaListContainer);
