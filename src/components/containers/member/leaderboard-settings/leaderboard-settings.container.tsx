import { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import LeaderboardSettingsScreen from "@screens/member/leaderboard-settings/leaderboard-settings.screen";
import { useDispatch } from "react-redux";
import { t } from "@locale";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { showYuModal } from "@navigation/root";
import { useMutation, useQuery } from "@apollo/client";
import {
  clearSocialGroupLeaderboardRecentSearchHistory,
  updateSocialGroupLeaderboardConsents,
} from "@redux/leaderboards/leaderboards.actions";
import { IChangeConsentProps } from "@organisms/leaderboard-toggle/leaderboard-toggle";
import {
  GetInboxNotificationsSettingsDocument,
  GetUserLeaderboardEnrollmentsDocument,
  gql,
} from "@graphql/__generated";
import { queryYuScreenLayout } from "@redux/yu-screen/yu-screen.actions";
import sortBy from "lodash/sortBy";
import Loading from "../../../atoms/loading/loading";
import { Alert } from "react-native";
import Logger from "@services/logger/logger";

interface IProps {
  componentId: string;
}

const LeaderboardSettingsContainer = ({ componentId }: IProps) => {
  const [updateNotification] = useMutation(gql(`UpdateUserNotificationsSettingsDocument`), {
    refetchQueries: [{ query: GetInboxNotificationsSettingsDocument }],
    awaitRefetchQueries: true,
    onError: (err) => {
      Logger.notify(err, { message: "Failed to update notification settings" });
      Alert.alert(t("screens.leaderboard_settings.error"));
    },
  });

  const { data, loading } = useQuery(gql("GetLeaderboardSettingsDocument"), {
    fetchPolicy: "cache-and-network",
  });

  const [updateConsentMutation] = useMutation(gql("UpdateMobileSocialLeaderboardConsentsDocument"), {
    refetchQueries: [{ query: GetUserLeaderboardEnrollmentsDocument }],
    awaitRefetchQueries: true,
    onError: () => {
      Alert.alert(t("screens.leaderboard_settings.error"));
    },
  });

  const inboxNotificationsSettings = useMemo(() => {
    return data?.inboxNotifications ?? [];
  }, [data?.inboxNotifications]);

  const inboxNotificationItems = useMemo(
    () =>
      inboxNotificationsSettings.map((n) => ({
        ...n,
        title: "",
        description: n.description ?? "",
        onSwitchPress: async () => {
          try {
            await updateNotification({
              variables: {
                type: n.type,
                isActive: !n.isActive,
              },
            });
          } catch (e) {
            Logger.notify(e, { message: "Failed to update inbox notification settings" });
          }
        },
      })),
    [inboxNotificationsSettings, updateNotification]
  );

  const dispatch = useDispatch();

  const leaderboards = useMemo(
    () =>
      sortBy(
        data?.userLeaderboardEnrollments?.flatMap((socialGroup) =>
          socialGroup.leaderboards?.map((leaderboard) => ({
            ...leaderboard,
            socialGroupId: socialGroup.socialGroupId,
            socialGroupName: socialGroup.name,
          }))
        ) || [],
        "leaderboardId"
      ),
    [data?.userLeaderboardEnrollments]
  );

  const dismissModal = useCallback(() => {
    Navigation.dismissModal(MODALS.generic);
  }, []);

  const updateConsent = useCallback(
    async ({ name, socialGroupId, leaderboardId, consent }: IChangeConsentProps) => {
      logMixpanelEventActionCreator("leaderboard_toggle", {
        name,
        isActive: consent,
      });

      await updateConsentMutation({ variables: { consents: [{ id: leaderboardId, consent }] } });

      dispatch(updateSocialGroupLeaderboardConsents({ socialGroupId, leaderboards: [{ leaderboardId, consent }] }));
      dispatch(queryYuScreenLayout());
      if (!consent) {
        dispatch(clearSocialGroupLeaderboardRecentSearchHistory());
      }

      dismissModal();
    },
    [dismissModal, dispatch, updateConsentMutation]
  );

  const onChangeConsent = useCallback(
    ({ name, socialGroupId, leaderboardId, consent }: IChangeConsentProps) => {
      const passProps = !consent
        ? {
            ctaLabel: t("screens.leaderboard.turn_board_off.ctaLabel"),
            ctaLabelSecondary: t("screens.leaderboard.turn_board_off.ctaLabelSecondary"),
            heading: t("screens.leaderboard.turn_board_off.heading"),
            onPress: () => Navigation.dismissModal(MODALS.generic),
            onPressSecondary: () => {
              updateConsent({ name, socialGroupId, leaderboardId, consent });
            },
            subheading: t("screens.leaderboard.turn_board_off.subheading"),
          }
        : {
            ctaLabel: t("screens.leaderboard.turn_board_on.ctaLabel"),
            ctaLabelSecondary: t("screens.leaderboard.turn_board_on.ctaLabelSecondary"),
            heading: t("screens.leaderboard.turn_board_on.heading"),
            onPress: () => {
              updateConsent({ name, socialGroupId, leaderboardId, consent });
            },
            onPressSecondary: dismissModal,
            subheading: t("screens.leaderboard.turn_board_on.subheading"),
          };

      showYuModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps,
        },
      });
    },
    [dismissModal, updateConsent]
  );

  const onRightIconPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.settings), []);

  if (loading) {
    return <Loading />;
  }

  return (
    <LeaderboardSettingsScreen
      leaderboards={leaderboards}
      onLeftIconPress={onLeftIconPress}
      onChangeConsent={onChangeConsent}
      onRightIconPress={onRightIconPress}
      inboxNotificationsSettings={inboxNotificationItems}
    />
  );
};

export default memo(LeaderboardSettingsContainer);
