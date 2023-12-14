import React, { useCallback, memo, useMemo, useState } from "react";
import { Platform } from "react-native";
import { useQuery } from "@apollo/client";
import { Navigation } from "@navigation/main";
import { MeditopiaMediaListScreen } from "@components/screens";
import { GQL_QUERY_GET_QUEST_MAP_CHALLENGE_CONTENT } from "@graphql/challenges/getQuestMapChallengeContent.gql";
import {
  GetQuestMapLevelChallengeContent,
  GetQuestMapLevelChallengeContentVariables,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent as IInternalContent,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons as IButton,
} from "@graphql/_core/schema";
import { MODALS, ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { useDispatch } from "react-redux";
import { updateChallengeAppButton } from "@redux/levels/levels.actions";
import { t } from "@locale";
import { useBackHandler, usePopToQuestsRootOnNewDate } from "@hooks";
import RNFitKit from "@yu-life/react-native-fitkit";
import { showYuModal } from "@navigation/root";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
interface IProps extends IInternalContent {
  componentId: string;
  createChallenge: (hideExternalLinks?: boolean) => void;
  levelSlotId: string;
  fitKitTypes: FitKitType[];
  tutorialUrl: string;
  level: number;
}

const MeditopiaMediaListContainer = ({
  createChallenge,
  levelSlotId,
  fitKitTypes,
  contentMediaTags,
  title,
  description,
  logo,
  buttons,
  tutorialUrl,
  promotionReward,
  level,
}: IProps) => {
  const [otherAppLoading, setOtherAppLoading] = useState("");
  const { authoriseFitKitTypes } = useFitKit();
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

  usePopToQuestsRootOnNewDate(level);

  const onLeftIconPress = useCallback(() => Navigation.popTo(ROUTES.questsChallengesList), []);
  const onRightIconPress = useCallback(() => Navigation.popTo(ROUTES.quests), []);

  useBackHandler(() => {
    onLeftIconPress();
    return false;
  });

  const createChallengeOnOtherAppSelected = useCallback(
    async (appName: string, button?: IButton) => {
      if (!appName) {
        return;
      }

      const otherApp = {
        title: t("screens.challenge_progress.how_meditate_with_other_apps_label"),
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
    },
    [dispatch]
  );

  const handleOtherMeditationApp = useCallback(
    async (appName: string, button?: IButton) => {
      const activityFromGoogleFitAuthorised = await RNFitKit.isAuthorised({
        read: [],
        platform: "GoogleFit",
      });

      if (!activityFromGoogleFitAuthorised && Platform.OS === "android") {
        return await showYuModal({
          component: {
            id: MODALS.switchToGoogleFit,
            name: MODALS.switchToGoogleFit,
            passProps: {
              onConnect: async () => {
                await authoriseFitKitTypes(fitKitTypes);
              },
              onConnected: async () => {
                await createChallengeOnOtherAppSelected(appName, button);
              },
            },
          },
        });
      }

      dispatch(logMixpanelEventActionCreator("mindfulness_app_open", { type: appName }));
      await createChallengeOnOtherAppSelected(appName, button);
    },
    [createChallengeOnOtherAppSelected]
  );

  const moreInformationPress = useCallback(() => {
    // this needs to change newSduiRewards when the old rewardsDetails is purged
    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
        location: "meditopia_media_list",
      })
    );

    if (promotionReward?.sduiAction) {
      dispatch(promotionReward.sduiAction);
    }
  }, []);

  const formattedVideos = useMemo(() => {
    const videos = data?.getQuestMapLevelChallengeContent || [];
    return videos.map(({ media, reward, stars, formattedDuration }) => ({
      ...media,
      reward,
      stars,
      formattedDuration,
    }));
  }, [data?.getQuestMapLevelChallengeContent]);

  return (
    <MeditopiaMediaListScreen
      videos={formattedVideos}
      title={title}
      logo={logo}
      buttons={buttons}
      description={description}
      levelSlotId={levelSlotId}
      loading={loading || formattedVideos.length === 0}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      handleOtherMeditationApp={handleOtherMeditationApp}
      otherAppLoading={otherAppLoading}
      promotionReward={promotionReward}
      moreInformationPress={moreInformationPress}
      level={level}
    />
  );
};

export default memo(MeditopiaMediaListContainer);
