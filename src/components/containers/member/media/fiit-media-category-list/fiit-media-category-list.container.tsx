import React, { useCallback, memo, useMemo, useState } from "react";
import { Platform } from "react-native";
import { Navigation } from "@navigation/main";
import { FiitMediaCategoryListScreen } from "@components/screens";
import {
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent as IInternalContent,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons as IButton,
} from "@graphql/_core/schema";
import { MODALS, ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { useBackHandler } from "@hooks";
import RNFitKit from "@yu-life/react-native-fitkit";
import { showYuModal } from "@navigation/root";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { handleLinkPress } from "@services/app-link";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { updateChallengeAppButton } from "@redux/levels/levels.actions";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

interface IProps {
  componentId: string;
  createChallenge: (hideExternalLinks?: boolean) => void;
  levelSlotId: string;
  fitKitTypes: FitKitType[];
  tutorialUrl: string;
  content: IInternalContent[];
  reward: number;
}

const FiitMediaCategoryListContainer = ({
  createChallenge,
  levelSlotId,
  fitKitTypes,
  content,
  reward,
  tutorialUrl,
}: IProps) => {
  const [otherAppLoading, setOtherAppLoading] = useState("");
  const { authoriseFitKitTypes } = useFitKit();
  const dispatch = useDispatch();
  const onLeftIconPress = useCallback(() => Navigation.popTo(ROUTES.questsChallengesList), []);
  const onRightIconPress = useCallback(() => Navigation.popTo(ROUTES.quests), []);

  const headerContent = content[0];

  useBackHandler(() => {
    onLeftIconPress();
    return false;
  });

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

      dispatch(updateChallengeAppButton(button));
      await createChallengeUsingFiitApp();
    },
    [createChallengeUsingFiitApp]
  );

  const onItemPress = useCallback((item: IInternalContent) => {
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
          logo: headerContent.logo,
          reward,
          levelSlotId,
        },
      },
    });
  }, []);

  const moreInformationPress = useCallback(() => {
    // this needs to change newSduiRewards when the old rewardsDetails is purged
    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
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
