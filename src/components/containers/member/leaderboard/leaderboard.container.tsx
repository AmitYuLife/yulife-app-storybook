import React, { memo, useCallback, useEffect, useMemo } from "react";
import { MODALS, ROUTES } from "@navigation/constants";
import { LeaderboardScreen } from "@components/screens";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { Navigation } from "@navigation/main";
import { t } from "@locale";
import { JoinLeaderboardOverlay, LeaderboardCommunityOverlay, showFloatingModal } from "@modals";
import { Style } from "@styles";
import { useLazyQuery, useMutation } from "@apollo/client";
import { showYuModal } from "@navigation/root";
import { useNavigationComponentDidAppear, useUserFeatures } from "@hooks";
import {
  getActiveSocialGroup,
  getActiveSocialGroupLeaderboard,
  getSocialGroups,
} from "@redux/leaderboards/leaderboards.selectors";
import {
  updateActiveSocialGroupId,
  updateActiveSocialGroupLeaderboardId,
  updateSocialGroupLeaderboardConsents,
} from "@redux/leaderboards/leaderboards.actions";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { IConsents } from "@components/modals/join-leaderboard-overlay/join-leaderboard-overlay";
import { SocialLeaderboardConstent, gql } from "@graphql/__generated";
import { isEmpty } from "lodash";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import AvatarFrameSelectModal from "@components/modals/avatar-frame-select/avatar-frame-select.modal";
import { useNavigation } from "@navigation/navigation.context";

export const PAGE_SIZE = 501;

export const LeaderboardContainer = () => {
  const { componentId, onLeftMenuPress } = useNavigation();
  const dispatch = useDispatch();
  const currentUserId = useSelector(getCurrentUserId);
  const activeLeaderboard = useSelector(getActiveSocialGroupLeaderboard);
  const socialGroups = useSelector(getSocialGroups);
  const activeSocialGroup = useSelector(getActiveSocialGroup);
  const {
    showDuels,
    showLeaderboardSearch,
    tempGameEnableAvatarFrames,
    showNotificationCentre,
    tempShowReferralOnLeaderboardV2,
  } = useUserFeatures();
  const [updateConsentMutation] = useMutation(gql("UpdateMobileSocialLeaderboardConsentsDocument"));
  const [getLeaderboardFull, { data, loading, refetch }] = useLazyQuery(gql("GetLeaderboardFullDocument"), {
    fetchPolicy: "network-only",
  });

  useNavigationComponentDidAppear(() => {
    if (isEmpty(socialGroups)) {
      dispatch(getUserDataStart({ types: [AppDataType.socialGroups] }));
    }
  }, componentId);

  const socialGroupsWithConsent = useMemo(
    () =>
      socialGroups.filter(
        (socialGroup) => socialGroup.leaderboards.filter((leaderboard) => leaderboard.consent).length > 0
      ),
    [socialGroups]
  );

  const { leaderboardItems, top3 } = useMemo(() => {
    const items = (activeLeaderboard?.consent && data?.leaderboard) || [];
    const first3 = items.slice(0, 3).reduce((obj, item, index) => ({ ...obj, [`top${index + 1}`]: item.avatar.uri }), {
      top1: "",
      top2: "",
      top3: "",
    });

    return {
      leaderboardItems: items,
      top3: first3,
    };
  }, [data, activeLeaderboard]);

  useEffect(() => {
    if (!activeLeaderboard?.consent) {
      return;
    }

    if (activeLeaderboard?.leaderboardId) {
      getLeaderboardFull({
        variables: {
          leaderboardId: activeLeaderboard?.leaderboardId,
        },
      });
    }
  }, [activeLeaderboard, getLeaderboardFull]);

  const selectSocialGroupLeaderboard = useCallback(
    (leaderboard: { leaderboardId: string; name: string }) => {
      dispatch(updateActiveSocialGroupLeaderboardId(leaderboard.leaderboardId));
      dispatch(
        logMixpanelEventActionCreator("screen_view", {
          name: `leadeboard_${leaderboard.name.toLowerCase()}`,
        })
      );
    },
    [dispatch]
  );

  const onLeftNavigationPress = useCallback(async () => {
    let socialGroup = { id: "", name: "" };

    const children = (
      <LeaderboardCommunityOverlay onSelect={(group) => (socialGroup = group)} socialGroups={socialGroups} />
    );
    await showFloatingModal({
      children,
      modalId: MODALS.leaderboardCommunityOverlay,
      title: t("communities"),
      buttonLabel: t("overlays.leaderboard_community.button_label"),
      paddingTop: Style.adjust(80),
      buttonOnPress: () => {
        dispatch(updateActiveSocialGroupId(socialGroup.id || activeSocialGroup?.socialGroupId));
        dispatch(
          logMixpanelEventActionCreator("button_pressed", {
            button_id: "view_leaderboard_button",
            name: socialGroup.name,
          })
        );
      },
    });

    dispatch(
      logMixpanelEventActionCreator("modal_viewed", {
        name: "leaderboard_community",
      })
    );
  }, [activeSocialGroup, dispatch, socialGroups]);

  const onJoinLeaderboardPress = useCallback(async () => {
    if (!activeSocialGroup) {
      return;
    }

    const leaderboardConsent: { consents: SocialLeaderboardConstent[]; tracking: IConsents } = {
      consents: [],
      tracking: {},
    };

    const children = (
      <JoinLeaderboardOverlay
        activeSocialGroup={activeSocialGroup}
        onSwitch={(consent) => {
          leaderboardConsent.consents = Object.keys(consent).map((key) => ({
            id: key,
            consent: consent[key].consent,
          }));
        }}
      />
    );

    await showFloatingModal({
      children,
      modalId: MODALS.joinLeaderboardOverlay,
      buttonLabel: t("labels.cta.continue"),
      paddingTop: Style.adjust(80),
      showCloseIcon: false,
      height: getJoinLeaderboardOverlayHeight(activeSocialGroup?.leaderboards?.length),
      buttonOnPress: async () => {
        if (leaderboardConsent.consents.length) {
          await updateConsentMutation({ variables: { consents: leaderboardConsent.consents } });
          dispatch(
            updateSocialGroupLeaderboardConsents({
              socialGroupId: activeSocialGroup?.socialGroupId,
              leaderboards: leaderboardConsent.consents.map((consent) => ({
                leaderboardId: consent.id,
                consent: consent.consent,
              })),
            })
          );
          dispatch(
            logMixpanelEventActionCreator("leaderboard_toggle", {
              ...leaderboardConsent.tracking,
            })
          );
        }
      },
    });
  }, [activeSocialGroup, dispatch]);

  const onListItemPress = useCallback(
    (userId: string, leaderboardPlacement: number) => {
      Navigation.push(componentId, {
        component: {
          id: ROUTES.inspect,
          name: ROUTES.inspect,
          passProps: {
            userId,
            leaderboardPlacement,
          },
        },
      });
      return Navigation.dismissAllModals();
    },
    [componentId]
  );

  const onShowRankModal = useCallback(() => {
    showYuModal({
      component: {
        id: MODALS.leaderboardRank,
        name: MODALS.leaderboardRank,
        passProps: {
          leaderboardId: activeLeaderboard?.leaderboardId,
          limit: PAGE_SIZE,
          targetId: currentUserId,
          onListItemPress,
        },
      },
    });
  }, [activeLeaderboard?.leaderboardId, currentUserId, onListItemPress]);

  const onSearchPress = useCallback(() => {
    showYuModal({
      component: {
        id: MODALS.leaderboardSearch,
        name: MODALS.leaderboardSearch,
        passProps: {
          heading: activeLeaderboard?.name,
          subHeading: t("screens.leaderboard.search.sub_heading"),
          socialGroupId: activeSocialGroup?.socialGroupId,
          socialGroupLeaderboardId: activeLeaderboard?.leaderboardId,
          onItemPress: (userId: string) => onListItemPress(userId, 0),
          referralAmount: data?.referralRewardAmount?.yuCoinAmount || 0,
        },
      },
    });
  }, [
    activeLeaderboard?.leaderboardId,
    activeLeaderboard?.name,
    activeSocialGroup?.socialGroupId,
    onListItemPress,
    data?.referralRewardAmount,
  ]);

  const onOpenFrames = useCallback(() => {
    const frameModal = (
      <AvatarFrameSelectModal
        onChanged={refetch}
        onClose={() => {
          Navigation.dismissOverlayWithChild();
        }}
      />
    );

    Navigation.showOverlayWithChild(frameModal, false);
  }, [refetch]);

  const currentUserInfo = useMemo(
    () => leaderboardItems?.find((item) => item.userId === currentUserId),
    [currentUserId, leaderboardItems]
  );

  return (
    <LeaderboardScreen
      currentUserInfo={currentUserInfo}
      activeSocialGroup={activeSocialGroup}
      onOpenFrames={tempGameEnableAvatarFrames ? onOpenFrames : undefined}
      activeLeaderboard={activeLeaderboard}
      showDuels={showDuels}
      showSearch={showLeaderboardSearch && socialGroupsWithConsent.length > 0}
      onRefresh={refetch}
      isLoading={loading}
      itemsIsLoading={loading}
      onQuestionMarkPress={onQuestionMarkPress}
      onLeftNavigationPress={onLeftNavigationPress}
      onDuelPress={onDuelPress}
      onSearchPress={onSearchPress}
      onListItemPress={onListItemPress}
      onJoinLeaderboardPress={onJoinLeaderboardPress}
      items={leaderboardItems}
      ranks={top3}
      onLeftMenuPress={onLeftMenuPress}
      onNotificationPress={showNotificationCentre ? onNotificationPress : undefined}
      onShowRankModal={currentUserInfo?.position > PAGE_SIZE ? onShowRankModal : null}
      onUpdateActiveLeaderboard={selectSocialGroupLeaderboard}
      referralAmount={data?.referralRewardAmount?.yuCoinAmount || 0}
      showReferral={tempShowReferralOnLeaderboardV2}
    />
  );
};

const onNotificationPress = () => {
  Navigation.push(ROUTES.leaderboard, {
    component: {
      id: ROUTES.notifications,
      name: ROUTES.notifications,
    },
  });
};

const onQuestionMarkPress = () => {
  Navigation.push(ROUTES.leaderboard, {
    component: {
      id: ROUTES.leaderboardInfo,
      name: ROUTES.leaderboardInfo,
    },
  });
};

const onDuelPress = () =>
  Navigation.push(ROUTES.leaderboard, {
    component: {
      id: ROUTES.duelsHub,
      name: ROUTES.duelsHub,
    },
  });

const getJoinLeaderboardOverlayHeight = (listLength: number) => {
  const h = listLength * 10;
  return Style.adjust((Style.DEVICE_HEIGHT / 100) * getHeightPercentage() + h);
};

const getHeightPercentage = () => {
  if (Style.DEVICE_HEIGHT <= 700) {
    return 80;
  }

  if (Style.DEVICE_HEIGHT <= 812) {
    return 65;
  }

  return 60;
};

export default memo(LeaderboardContainer);
