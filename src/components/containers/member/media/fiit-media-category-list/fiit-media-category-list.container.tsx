import React, { useCallback, memo, useMemo, useState } from "react";
import { Platform } from "react-native";
import { Navigation } from "@navigation/main";
import { FiitMediaCategoryListScreen } from "@components/screens";
import { MODALS, ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { useBackHandler, usePopToQuestsRootOnNewDate, useUserFeatures, useVerifyAndAuthorizeCapability } from "@hooks";
import RNFitKit from "@yu-life/react-native-fitkit";
import { showYuModal } from "@navigation/root";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { handleLinkPress } from "@services/app-link";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { updateChallengeAppButton } from "@redux/levels/levels.actions";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { gqlCapabilityToCapability } from "@utils";
import { YuHealthOptions, FitKitType, GetQuestMapLevelQuery } from "@graphql/__generated";

type IInternalContent =
  GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][number]["details"]["internalContent"][number];
type IButton = IInternalContent["buttons"][number];

interface IProps {
  componentId: string;
  createChallenge: (hideExternalLinks?: boolean) => void;
  levelSlotId: string;
  fitKitTypes: FitKitType[];
  tutorialUrl: string;
  yuHealth: YuHealthOptions;
  content: IInternalContent[];
  reward: number;
  level: number;
  levelSlotTemplateId: string;
}

const FiitMediaCategoryListContainer = ({
  createChallenge,
  levelSlotId,
  fitKitTypes,
  content,
  reward,
  yuHealth,
  tutorialUrl,
  level,
  componentId,
  levelSlotTemplateId,
}: IProps) => {
  const dispatch = useDispatch();
  const features = useUserFeatures();
  const { authoriseFitKitTypes } = useFitKit();
  const verifyAndAuthorizeCapability = useVerifyAndAuthorizeCapability({ componentId });
  const [otherAppLoading, setOtherAppLoading] = useState("");
  const onLeftIconPress = useCallback(() => Navigation.popTo(ROUTES.questsChallengesList), []);
  const onRightIconPress = useCallback(() => Navigation.popTo(ROUTES.quests), []);

  const headerContent = content[0];

  useBackHandler(() => {
    onLeftIconPress();
    return false;
  });

  usePopToQuestsRootOnNewDate(level);

  const createChallengeUsingFiitApp = useCallback(async () => {
    setOtherAppLoading("fiit-workouts-fitness-plans");
    try {
      await createChallenge(false);
    } catch (err) {
      Logger.error(err, { location: "fiit-media-category-list.container.handleOpenApp" });
    } finally {
      setOtherAppLoading("fiit-workouts-fitness-plans");
    }
  }, []);

  const handleFiitApp = useCallback(
    async (_: string, button?: IButton) => {
      if (!features.tempGameEnableReleaseYuHealthV4) {
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
                  await createChallengeUsingFiitApp();
                },
              },
            },
          });
        }

        dispatch(updateChallengeAppButton({ appButton: button }));
        await createChallengeUsingFiitApp();
        return;
      }

      const shouldStart = await verifyAndAuthorizeCapability(gqlCapabilityToCapability(yuHealth.capabilities));
      if (!shouldStart) {
        return;
      }

      dispatch(updateChallengeAppButton({ appButton: button }));
      await createChallengeUsingFiitApp();
    },
    [
      features.tempGameEnableReleaseYuHealthV4,
      verifyAndAuthorizeCapability,
      yuHealth,
      dispatch,
      createChallengeUsingFiitApp,
      authoriseFitKitTypes,
      fitKitTypes,
    ]
  );

  const onItemPress = useCallback(
    (item: IInternalContent) => {
      dispatch(
        logMixpanelEventActionCreator("challenge_collection_viewed", {
          type: "move",
          subtype: "fiit",
          collection_name: item.title,
        })
      );

      Navigation.push(ROUTES.fiitMediaCategoryList, {
        component: {
          id: ROUTES.fiitMediaList,
          name: ROUTES.fiitMediaList,
          passProps: {
            title: item.title,
            contentMediaTags: item.contentMediaTags,
            // TODO: Purge when fiit is swapped for workouts
            logo: headerContent.logo,
            providerLogo: item.providerLogo,
            reward,
            levelSlotId,
            level,
            levelSlotTemplateId,
          },
        },
      });
    },
    [dispatch, headerContent, level, levelSlotId, levelSlotTemplateId, reward]
  );

  const moreInformationPress = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
        button_id: "promotion_reward_fiit",
        location: "fiit_media_category_list",
      })
    );

    if (headerContent?.promotionReward?.sduiAction) {
      dispatch(headerContent?.promotionReward.sduiAction);
    }
  }, []);

  const items: IITem[] = useMemo(
    () =>
      content
        .filter((i) => i.contentMediaTags.length)
        .map((item) => ({
          ...item,
          thumbnail: item.logo,
        })),
    [content.length]
  );

  return (
    <FiitMediaCategoryListScreen
      title={headerContent.title}
      description={headerContent.description}
      items={items}
      logo={headerContent.logo}
      buttons={headerContent.buttons}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      onItemPress={onItemPress}
      handleFiitApp={handleFiitApp}
      handleTutorialLink={!tutorialUrl ? null : handleLinkPress(tutorialUrl)}
      otherAppLoading={otherAppLoading}
      promotionReward={headerContent?.promotionReward}
      moreInformationPress={moreInformationPress}
    />
  );
};

export default memo(FiitMediaCategoryListContainer);
