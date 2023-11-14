import React, { memo, useCallback, useEffect, useMemo } from "react";
import { MODALS, ROUTES } from "@navigation/constants";
import { LeaderboardScreen } from "@components/screens";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { Navigation } from "@navigation/main";
import { t } from "@locale";
import { JoinLeaderboardOverlay, LeaderboardCommunityOverlay, showFloatingModal } from "@modals";
import { Style } from "@styles";
import { useLazyQuery } from "@apollo/client";
import { SocialLeaderboardConstent } from "@graphql/_core/schema/globalTypes";
import { IList } from "@organisms/tabs/tabs";
import updateSocialLeaderboardConsents from "@graphql/socialGroupLeaderboard/updateMobileSocialLeaderboardConsents";
import {
  GetMobileSocialGroupLeaderboardItems,
  GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards as IGqlGroups,
} from "@graphql/_core/schema";
import { showYuModal } from "@navigation/root";
import { useUserFeatures } from "@hooks";
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
import { GQL_QUERY_SOCIAL_GROUP_LEADERBOARD_ITEMS } from "@graphql/socialGroupLeaderboard/getMobileSocialGroupLeaderboardItems";

export const PAGE_SIZE = 501;

export interface IGroups extends IGqlGroups, IList {}

interface IProps {
  componentId: string;
  onLeftMenuPress: () => void;
}

export const LeaderboardContainer = ({ componentId, onLeftMenuPress }: IProps) => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(getCurrentUserId);
  const activeLeaderboard = useSelector(getActiveSocialGroupLeaderboard);
  const socialGroups = useSelector(getSocialGroups);
  const activeSocialGroup = useSelector(getActiveSocialGroup);
  const { showDuels, showLeaderboardSearch, showNotificationCentre } = useUserFeatures();

  const [getSocialGroupLeaderboardItems, { data, loading, refetch }] =
    useLazyQuery<GetMobileSocialGroupLeaderboardItems>(GQL_QUERY_SOCIAL_GROUP_LEADERBOARD_ITEMS, {
      fetchPolicy: "network-only",
    });

  const socialGroupsWithConsent = useMemo(
    () =>
      socialGroups.filter(
        (socialGroup) => socialGroup.leaderboards.filter((leaderboard) => leaderboard.consent).length > 0
      ),
    [socialGroups]
  );

  const { leaderboardItems, top3 } = useMemo(() => {
    const items = (activeLeaderboard?.consent && data?.getMobileSocialGroupLeaderboardItems) || [];
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
      getSocialGroupLeaderboardItems({
        variables: {
          leaderboardId: activeLeaderboard?.leaderboardId,
        },
      });
    }
  }, [activeLeaderboard, getSocialGroupLeaderboardItems]);

  const selectSocialGroupLeaderboard = useCallback(
    (leaderboardId: string) => {
      dispatch(updateActiveSocialGroupLeaderboardId(leaderboardId));
    },
    [dispatch]
  );

  const onLeftNavigationPress = useCallback(async () => {
    let socialGroupId = "";
    const children = (
      <LeaderboardCommunityOverlay onSelect={(id: string) => (socialGroupId = id)} socialGroups={socialGroups} />
    );
    await showFloatingModal({
      children,
      modalId: MODALS.leaderboardCommunityOverlay,
      title: t("communities"),
      buttonLabel: t("overlays.leaderboard_community.button_label"),
      paddingTop: Style.adjust(80),
      buttonOnPress: () => {
        dispatch(updateActiveSocialGroupId(socialGroupId || activeSocialGroup?.socialGroupId));
      },
    });
  }, [activeSocialGroup, dispatch, socialGroups]);

  const onJoinLeaderboardPress = useCallback(async () => {
    let consents: SocialLeaderboardConstent[] = [];
    const children = (
      <JoinLeaderboardOverlay
        activeSocialGroup={activeSocialGroup}
        onSwitch={(consent) => {
          consents = Object.keys(consent).map((key) => ({
            id: key,
            consent: consent[key],
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
      height: getJoinLeaderboardOverlayHeight(),
      buttonOnPress: async () => {
        if (consents.length) {
          await updateSocialLeaderboardConsents({ consents });
          dispatch(
            updateSocialGroupLeaderboardConsents({
              socialGroupId: activeSocialGroup?.socialGroupId,
              leaderboards: consents.map((consent) => ({
                leaderboardId: consent.id,
                consent: consent.consent,
              })),
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
        },
      },
    });
  }, [activeLeaderboard?.leaderboardId, activeLeaderboard?.name, activeSocialGroup?.socialGroupId, onListItemPress]);

  const currentUserInfo = useMemo(
    () => leaderboardItems?.find((item) => item.userId === currentUserId),
    [currentUserId, leaderboardItems]
  );

  return (
    <LeaderboardScreen
      currentUserInfo={currentUserInfo}
      activeSocialGroup={activeSocialGroup}
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

const getJoinLeaderboardOverlayHeight = () => {
  return Style.adjust((Style.DEVICE_HEIGHT / 100) * getHeightPercentage());
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
