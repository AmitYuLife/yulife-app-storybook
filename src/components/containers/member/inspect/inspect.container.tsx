import { useLazyQuery, useQuery } from "@apollo/client";
import React, { memo, useCallback, useEffect, useMemo } from "react";
import { Navigation } from "@navigation/main";
import * as Haptics from "expo-haptics";
import { useSelector } from "react-redux";
import InspectScreen from "@components/screens/member/inspect/inspect.screen";
import { ROUTES } from "@navigation/constants";
import { getCurrentUserId } from "@redux/user/user.selectors";
import { useBackHandler, useTrack, useUserFeatures } from "@hooks";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { gql } from "@graphql/__generated";
import { onDuelPress } from "@utils/duels";
import { useDispatch } from "react-redux";

interface IProps {
  componentId: string;
  userId: string;
  leaderboardPlacement: number;
}

const InspectContainer = ({ componentId: _componentId, userId, leaderboardPlacement }: IProps) => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    Navigation.pop(ROUTES.inspect);
    return true;
  }, []);

  const currentUserId = useSelector(getCurrentUserId);
  const isOtherUser = userId !== currentUserId;
  const { tempGameShowAchievements } = useUserFeatures();
  const track = useTrack();

  useBackHandler(onClose);

  const [getDuels, { loading: duelsLoading, data: duelsData }] = useLazyQuery(gql("GetDuelsDocument"), {
    fetchPolicy: "network-only",
  });

  const { data: achievements } = useQuery(gql("GetMobileGameUserAchievementsDocument"), {
    variables: { userId },
    skip: !tempGameShowAchievements,
  });

  const achievementsList = useMemo(
    () => ({
      points: achievements?.getMobileGameUserAchievements?.achievementPoints,
      list: achievements?.getMobileGameUserAchievements?.equippedAchievements,
      numberOfSlots: achievements?.getMobileGameUserAchievements?.numberOfSlots,
    }),
    [achievements?.getMobileGameUserAchievements]
  );

  useEffect(() => {
    if (isOtherUser) {
      getDuels();
    }
  }, [isOtherUser]);

  const duels = duelsData?.getDuels || [];

  const onPressChallengeDuel = useCallback(() => {
    isOtherUser ? onDuelPress(duels, currentUserId, userId, leaderboardPlacement, "inspect") : openDuelHub();
  }, [isOtherUser, onClose, onDuelPress, duelsData]);

  const { loading, data } = useQuery(gql("GetStatisticsDocument"), {
    variables: { userId },
    fetchPolicy: "network-only",
  });

  const isGiftingEnabled = data?.gifting?.enabled;
  const disabledReasonAction = data?.validateGiftSendToRecipient?.errorAction;
  const { current, opponent } = data?.getStatistics || {};
  const activityItems = useMemo(
    () =>
      current?.sections?.activity?.stats.map((item) => {
        if (!opponent) {
          return {
            id: item.id,
            icon: item.icon.uri,
            value: item.value,
            name: item.name,
            label: item.label,
          };
        }

        const opponentValue = opponent.sections.activity.stats.find(
          (opponentItem) => opponentItem.type === item.type
        ).value;
        return {
          id: item.id,
          icon: item.icon.uri,
          value: item.value,
          opponentValue: opponentValue,
          opponentIsWinner: opponentValue > item.value,
          name: item.name,
          label: item.label,
        };
      }),
    [current, opponent]
  );

  const averageActivity = useMemo(
    () => ({
      title: current?.sections?.activity?.title,
      subTitle: current?.sections?.activity?.subtitle,
      avatarUri: current?.avatar.uri,
      opponentAvatarUri: opponent?.avatar?.uri,
      name: current?.fullName,
      averageItems: activityItems,
    }),
    [current, opponent, activityItems]
  );

  const duel = useMemo(
    () => ({
      title: current?.sections?.duels?.title,
      items: current?.sections?.duels?.stats || [],
    }),
    [current]
  );

  const general = useMemo(
    () => ({
      title: current?.sections?.general?.title,
      items: current?.sections?.general?.stats || [],
    }),
    [current]
  );

  const handleGiftNavigation = useCallback(() => {
    if (isGiftingEnabled && isOtherUser && current) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

      if (disabledReasonAction) {
        return dispatch(disabledReasonAction);
      }

      Navigation.push(ROUTES.inspect, {
        component: {
          id: ROUTES.gifting,
          name: ROUTES.gifting,
          passProps: {
            preselectedUserIds: [userId],
          },
        },
      });
    }
  }, [isGiftingEnabled, isOtherUser, current, disabledReasonAction, userId, dispatch]);

  const handleLongPressYumoji = useCallback(() => {
    track("button_pressed", {
      button_id: "p2p_gifting_start_long_press",
      journey_id: "p2p_gifting",
      location: "inspect",
    });

    if (isOtherUser) {
      handleGiftNavigation();
    }
  }, [track, isOtherUser, handleGiftNavigation]);

  const handlePressGiftPrompt = useCallback(() => {
    track("button_pressed", {
      button_id: "p2p_gifting_start_pill",
      journey_id: "p2p_gifting",
      location: "inspect",
    });

    handleGiftNavigation();
  }, [isGiftingEnabled, currentUserId, userId, current?.avatar?.uri, current?.fullName, current?.shortName]);

  if (duelsLoading || loading || !data?.getStatistics?.current) {
    return <LoadingScreen onClose={onClose} />;
  }

  return (
    <InspectScreen
      userName={current.fullName}
      level={current.level}
      yuniversalMap={current.yuniversalMap}
      general={general}
      duel={duel}
      activity={averageActivity}
      yumoji={current.avatar.uri}
      onClose={onClose}
      challengeDuel={onPressChallengeDuel}
      onYumojiPress={handleLongPressYumoji}
      onGiftPress={isGiftingEnabled && isOtherUser ? handlePressGiftPrompt : undefined}
      shortName={current.shortName}
      inspectOtherUser={isOtherUser}
      componentId={_componentId}
      achievements={achievementsList}
      showAchievements={tempGameShowAchievements}
    />
  );
};

const openDuelHub = () =>
  Navigation.push(ROUTES.inspect, {
    component: {
      id: ROUTES.duelsHub,
      name: ROUTES.duelsHub,
    },
  });

export default memo(InspectContainer);
