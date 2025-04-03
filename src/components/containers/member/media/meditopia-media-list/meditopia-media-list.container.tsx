import React, { useCallback, memo, useMemo, useState } from "react";
import { Platform } from "react-native";
import { useQuery } from "@apollo/client";
import { Navigation } from "@navigation/main";
import { MeditopiaMediaListScreen } from "@components/screens";
import { MODALS, ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { useDispatch, useSelector } from "react-redux";
import { updateChallengeAppButton } from "@redux/levels/levels.actions";
import { t } from "@locale";
import { useBackHandler, usePopToQuestsRootOnNewDate, useUserFeatures, useVerifyAndAuthorizeCapability } from "@hooks";
import RNFitKit from "@yu-life/react-native-fitkit";
import { showYuModal } from "@navigation/root";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { YuHealthOptions, FitKitType, gql, GetQuestMapLevelQuery } from "@graphql/__generated";
import { gqlCapabilityToCapability } from "@utils";
import { getYuniversalProgress } from "@redux/levels/levels.selectors";

type IInternalContent = GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][0]["details"]["internalContent"][0];
type IButton = IInternalContent["buttons"][0];

interface IProps extends IInternalContent {
  componentId: string;
  createChallenge: (hideExternalLinks?: boolean) => void;
  yuHealth: YuHealthOptions;
  levelSlotId: string;
  fitKitTypes: FitKitType[];
  tutorialUrl: string;
  level: number;
  levelSlotTemplateId: string;
}

const MeditopiaMediaListContainer = ({
  createChallenge,
  levelSlotId,
  fitKitTypes,
  componentId,
  yuHealth,
  contentMediaTags,
  title,
  description,
  logo,
  buttons,
  tutorialUrl,
  promotionReward,
  level,
  levelSlotTemplateId,
}: IProps) => {
  const [otherAppLoading, setOtherAppLoading] = useState("");
  const dispatch = useDispatch();
  const { tempGameEnableReleaseYuHealthV3 } = useUserFeatures();
  const { authoriseFitKitTypes } = useFitKit();
  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability({ componentId });
  const { yuniversalMap } = useSelector(getYuniversalProgress);

  const { data: contentData, loading: isLoadingContent } = useQuery(
    gql("GetMobileQuestLevelChallengeContentDocument"),
    {
      fetchPolicy: "network-only",
      variables: {
        contentTags: contentMediaTags,
        level,
        levelSlotTemplateId,
        yuniversalMap,
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
        dispatch(updateChallengeAppButton({ appButton: appName === "otherApp" ? otherApp : button }));
      } catch (err) {
        Logger.error(err, { location: "media-list.container.handleOpenApp" });
      } finally {
        setOtherAppLoading("");
      }
    },
    [createChallenge, dispatch, tutorialUrl]
  );

  const handleOtherMeditationApp = useCallback(
    async (appName: string, button?: IButton) => {
      if (!tempGameEnableReleaseYuHealthV3) {
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
        return;
      }

      const shouldStart = await verifyAndAuthorizeCapability(gqlCapabilityToCapability(yuHealth.capabilities));
      if (!shouldStart) {
        return;
      }

      dispatch(logMixpanelEventActionCreator("mindfulness_app_open", { type: appName }));
      await createChallengeOnOtherAppSelected(appName, button);
    },
    [
      tempGameEnableReleaseYuHealthV3,
      verifyAndAuthorizeCapability,
      yuHealth,
      dispatch,
      createChallengeOnOtherAppSelected,
      authoriseFitKitTypes,
      fitKitTypes,
    ]
  );

  const moreInformationPress = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
        button_id: "promotion_reward_meditopia",
        location: "meditopia_media_list",
      })
    );

    if (promotionReward?.sduiAction) {
      dispatch(promotionReward.sduiAction);
    }
  }, []);

  const formattedVideos = useMemo(() => {
    const videos = contentData?.getMobileQuestLevelChallengeContent || [];
    return videos.map(({ media, reward, stars, formattedDuration }) => ({
      ...media,
      reward,
      stars,
      formattedDuration,
    }));
  }, [contentData?.getMobileQuestLevelChallengeContent]);

  const isLoading = isLoadingContent || formattedVideos.length === 0;

  return (
    <MeditopiaMediaListScreen
      videos={formattedVideos}
      title={title}
      logo={logo}
      buttons={buttons}
      description={description}
      levelSlotId={levelSlotId}
      loading={isLoading}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      handleOtherMeditationApp={handleOtherMeditationApp}
      otherAppLoading={otherAppLoading}
      promotionReward={promotionReward}
      moreInformationPress={moreInformationPress}
      level={level}
      levelSlotTemplateId={levelSlotTemplateId}
    />
  );
};

export default memo(MeditopiaMediaListContainer);
