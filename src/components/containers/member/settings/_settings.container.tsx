/* eslint-disable react-compiler/react-compiler -- has other React ESLint rules disabled */
import moment from "moment";
import React, { useCallback, useMemo, useState } from "react";
import { Navigation } from "@navigation/main";
import { useSelector, useDispatch } from "react-redux";
import { MODALS, ROUTES } from "@navigation/constants";
import { updateConnectionStart, updateUserProfileDataSaverMode } from "@redux/user/user.actions";
import { getBlackListedNavBarTabs, getUserConnections, getUserDataSaverModeEnabled } from "@redux/user/user.selectors";
import { SettingsScreen } from "@screens/index";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";
import { gql, NotificationSettingsProps } from "@graphql/__generated";
import Logger from "@services/logging/logger";
import { ScrollPickerModal } from "@components/modals";
import { showYuModal } from "@navigation/root";
import { getDailyCyclingMeasurement } from "@redux/daily-cycling/daily-cycling.selectors";
import { t, getCurrentLocale } from "@locale";
import { useUserFeatures } from "@hooks";
import { getActiveProvider } from "@redux/yu-health/yu-health.selectors";
import { UserConnection } from "@redux/user/user.types";
import { getPushNotifications } from "@redux/device/device.selectors";
import { PushPermissionsStatus } from "@redux/device/device.types";
import { isNumber } from "lodash";

interface IOwnProps {
  componentId: string;
}

const graphqlFetchPolicy = { fetchPolicy: "cache-and-network" as "cache-and-network" };

const SettingsContainer = ({ componentId }: IOwnProps) => {
  "use no memo";
  const dispatch = useDispatch();

  const connections = useSelector(getUserConnections);
  const features = useUserFeatures();
  const cyclingMeasurement = useSelector(getDailyCyclingMeasurement);
  const activeProvider = useSelector(getActiveProvider);
  const dataSaverModeEnabled = useSelector(getUserDataSaverModeEnabled);

  const [isTimeModalVisible, setIsTimeModalVisible] = useState<boolean>(false);
  const [selectedMinutesFromMidnight, setSelectedMinutesFromMidnight] = useState<number | null>(null);
  const [selectedNotification, setNotification] = useState<NotificationSettingsProps>(null);
  const blackListedNavBarTabs = useSelector(getBlackListedNavBarTabs);

  const [updateNotification, { loading: notificationLoading }] = useMutation(
    gql(`UpdateUserNotificationsSettingsDocument`)
  );

  const notificationPermissions = useSelector(getPushNotifications);

  const notificationSettings = useQuery(gql(`GetUserNotificationsSettingsDocument`), graphqlFetchPolicy);

  const pushNotifications = useMemo(
    () => notificationSettings?.data?.pushNotifications || { id: "", notifications: [], visible: false },
    [notificationSettings]
  );

  const emailNotifications = useMemo(
    () => notificationSettings?.data?.emailNotifications || [],
    [notificationSettings]
  );

  // helper functions
  const handleClose = React.useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const handleTimeModalCancel = React.useCallback(() => setIsTimeModalVisible(false), []);
  const client = useApolloClient();

  const updateQueryCache = useCallback(
    ({
      type,
      isActive,
      minutesFromStartOfDay,
      alertTimestamp,
    }: {
      type: string;
      isActive: boolean;
      minutesFromStartOfDay?: number;
      alertTimestamp?: string;
    }) => {
      const updatedPushNotifications = pushNotifications?.notifications?.map((i) => ({
        ...i,
        isActive: i.type === type ? isActive : i.isActive,
        alertTimestamp: i.type === type && alertTimestamp ? alertTimestamp : i.alertTimestamp,
        minutesFromStartOfDay:
          i.type === type && isNumber(minutesFromStartOfDay) ? minutesFromStartOfDay : i.minutesFromStartOfDay,
      }));
      const updatedEmailNotifications = emailNotifications.map((i) => ({
        ...i,
        isActive: i.type === type ? isActive : i.isActive,
      }));
      client.writeQuery({
        query: gql("GetUserNotificationsSettingsDocument"),
        data: {
          pushNotifications: {
            notifications: updatedPushNotifications,
            visible: pushNotifications.visible,
            id: pushNotifications.id,
          },
          emailNotifications: updatedEmailNotifications,
        },
      });
    },
    [client, pushNotifications, emailNotifications]
  );

  const handleTimeModalConfirm = React.useCallback(
    async () => {
      try {
        if (!selectedNotification) {
          return;
        }

        updateQueryCache({
          type: selectedNotification.type,
          isActive: true,
          minutesFromStartOfDay: selectedMinutesFromMidnight,
        });
        setIsTimeModalVisible(false);
        await updateNotification({
          variables: {
            type: selectedNotification.type,
            isActive: true,
            minutesFromStartOfDay: selectedMinutesFromMidnight,
          },
        });
      } catch (e) {
        Logger.error(e, { file: "settings-container-time" });
      } finally {
        setNotification(null);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedNotification, selectedMinutesFromMidnight]
  );

  const handleConnectionItemPress = React.useCallback(
    (c: UserConnection) => () => {
      dispatch(updateConnectionStart(c));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleConnectionInfoPress = React.useCallback(
    (c: UserConnection) => () => {
      const connectionName = c.name.charAt(0).toUpperCase() + c.name.slice(1);
      // TODO: we probably need to add a `type` so we know if it's a device or an app
      let heading = t("screens.settings.info.heading", { connection: connectionName });
      const ctaLabel = t("labels.cta.got_it");
      if (c.name.toLowerCase() === "strava") {
        heading = t("screens.settings.tracker_info.heading", { connection: connectionName });
      }

      showYuModal({
        component: {
          id: MODALS.info,
          name: MODALS.info,
          passProps: {
            onPress: () => Navigation.dismissModal(MODALS.info),
            type: c.name,
            heading,
            ctaLabel,
          },
        },
      });
    },
    []
  );

  const gameSettings = useMemo(
    () => ({
      name: "gameSettings",
      title: t("screens.settings.game_settings"),
      isVisible: true,
      items: [
        {
          type: "screen",
          isVisible: !blackListedNavBarTabs.includes(ROUTES.leaderboard),
          title: t("screens.leaderboard_settings.title"),
          description: t("screens.leaderboard_settings.description"),
          onPress: () => {
            Navigation.push(ROUTES.settings, {
              component: {
                id: ROUTES.leaderboardSettings,
                name: ROUTES.leaderboardSettings,
              },
            });
          },
        },
        {
          type: "screen",
          isVisible: true,
          title: t("screens.permissions.title"),
          description: t("screens.permissions.description"),
          value: "",
          onPress: () => {
            if (features.tempGameEnableReleaseYuHealthV4 && !activeProvider) {
              Navigation.push(ROUTES.dailySteps, {
                component: {
                  id: ROUTES.yuHealthConnect,
                  name: ROUTES.yuHealthConnect,
                },
              });

              return;
            }

            Navigation.push(ROUTES.settings, {
              component: {
                id: ROUTES.permissions,
                name: ROUTES.permissions,
              },
            });
          },
        },
        {
          type: "screen",
          isVisible: true,
          title: t("screens.measurement_cycling_settings.title"),
          description: t("screens.measurement_cycling_settings.description"),
          value: cyclingMeasurement,
          onPress: () => {
            Navigation.push(ROUTES.settings, {
              component: {
                id: ROUTES.cyclingMeasurement,
                name: ROUTES.cyclingMeasurement,
              },
            });
          },
        },
        {
          type: "screen",
          isVisible: true,
          title: t("screens.language_selector_settings.title"),
          description: t("screens.language_selector_settings.description"),
          value: getCurrentLocale(),
          onPress: () => {
            Navigation.push(ROUTES.settings, {
              component: {
                id: ROUTES.languageSelector,
                name: ROUTES.languageSelector,
              },
            });
          },
        },
        {
          type: "screen",
          isVisible: true,
          title: t("screens.settings.content_location.label"),
          description: t("screens.settings.content_location.description"),
          onPress: () => {
            Navigation.push(ROUTES.settings, {
              component: {
                id: ROUTES.selectContentLocation,
                name: ROUTES.selectContentLocation,
              },
            });
          },
        },
        {
          isVisible: true,
          title: t("screens.settings.data_saver.label"),
          type: "toggle",
          isActive: dataSaverModeEnabled,
          description: t("screens.settings.data_saver.description"),
          onPress: () => {
            dispatch(updateUserProfileDataSaverMode(!dataSaverModeEnabled));
          },
        },
      ],
    }),
    [
      activeProvider,
      blackListedNavBarTabs,
      cyclingMeasurement,
      features.tempGameEnableReleaseYuHealthV4,
      dataSaverModeEnabled,
      dispatch,
    ]
  );

  const connection = {
    title: t("screens.settings.fitness_trackers.label"),
    isVisible: features.showConnections,
    items: connections.map((c) => ({
      ...c,
      lastUpdated: c.lastUpdated,
      onPress: handleConnectionItemPress(c),
      onPressInfo: handleConnectionInfoPress(c),
    })),
    name: "connections",
  } as any;

  const email = useMemo(
    () => ({
      isVisible: true,
      items: emailNotifications.map((n) => ({
        ...n,
        onSwitchPress: async () => {
          try {
            updateQueryCache({ type: n.type, isActive: !n.isActive });
            await updateNotification({
              variables: {
                type: n.type,
                isActive: !n.isActive,
              },
            });
          } catch (e) {
            Logger.error(e, { file: "settings-container-consent" });
          } finally {
            setNotification(null);
            setIsTimeModalVisible(false);
          }
        },
      })),
      title: t("screens.settings.email_notification.label"),
      name: "email",
    }),
    [emailNotifications, updateNotification, updateQueryCache]
  );

  const notification = useMemo(
    () => ({
      isVisible: pushNotifications.visible,
      items: pushNotifications?.notifications?.map((n) => ({
        ...n,
        isActive: notificationPermissions.status === PushPermissionsStatus.enabled ? n.isActive : false,
        onSwitchPress: async () => {
          try {
            const newActiveState =
              notificationPermissions.status !== PushPermissionsStatus.enabled ? true : !n.isActive;

            // if user has push permission enabled already, no need to show modal.
            if (newActiveState && notificationPermissions.status !== PushPermissionsStatus.enabled) {
              showYuModal({
                component: {
                  id: MODALS.pushNotifications,
                  name: MODALS.pushNotifications,
                  passProps: {
                    permissions: notificationPermissions,
                  },
                },
              });
            }

            // Check for when permission is disabled, but notification data in query is still active
            if (n.isActive === newActiveState) {
              return;
            }

            updateQueryCache({
              type: n.type,
              isActive: newActiveState,
            });
            await updateNotification({
              variables: {
                type: n.type,
                isActive: newActiveState,
                minutesFromStartOfDay: n.minutesFromStartOfDay,
              },
            });
          } catch (e) {
            Logger.error(e, { file: "settings-container-consent" });
          } finally {
            setNotification(null);
            setIsTimeModalVisible(false);
          }
        },
        onTimePress: () => {
          if (notificationLoading) {
            return;
          }

          setIsTimeModalVisible(true);
          if (isNumber(n.minutesFromStartOfDay)) {
            setSelectedMinutesFromMidnight(n.minutesFromStartOfDay);
          } else {
            const alertMoment = moment.utc(n.alertTimestamp);
            setSelectedMinutesFromMidnight(alertMoment.hours() * 60 + alertMoment.minutes());
          }

          setNotification(n);
        },
      })),
      title: t("screens.settings.push_notifications.label"),
      name: "notifications",
    }),
    [notificationLoading, pushNotifications, updateNotification, updateQueryCache, notificationPermissions]
  );

  const pickers = useMemo(() => {
    if (selectedMinutesFromMidnight === null) {
      return [];
    }

    const times = generateTimes();

    return [
      {
        id: "settings-date-picker",
        items: times,
        onIndexChange: (index: number) => {
          setSelectedMinutesFromMidnight(times[index].value);
        },
        defaultIndex: selectedMinutesFromMidnight / 30,
      },
    ];
  }, [selectedMinutesFromMidnight]);

  return (
    <>
      <SettingsScreen onPressClose={handleClose} sections={[notification, email, gameSettings, connection]} />
      {!isTimeModalVisible || pickers.length === 0 ? null : (
        <ScrollPickerModal pickers={pickers} onConfirm={handleTimeModalConfirm} onCancel={handleTimeModalCancel} />
      )}
    </>
  );
};

const generateTimes = () => {
  const times = [];

  for (let hour = 0; hour < 24; hour++) {
    const hourMoment = moment({ hour, minute: 0 });

    times.push({
      label: hourMoment.format(t("format.time_short")),
      value: hour * 60,
    });

    hourMoment.minute(30);
    times.push({
      label: hourMoment.format(t("format.time_short")),
      value: hour * 60 + 30,
    });
  }

  return times;
};

export default SettingsContainer;
