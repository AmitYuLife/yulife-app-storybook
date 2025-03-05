import moment from "moment";
import React, { useCallback, useMemo, useState } from "react";
import { Navigation } from "@navigation/main";
import { useSelector, useDispatch } from "react-redux";
import { MODALS, ROUTES } from "@navigation/constants";
import { updateConnectionStart } from "@redux/user/user.actions";
import { getUserConnections } from "@redux/user/user.selectors";
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

interface IOwnProps {
  componentId: string;
}

const graphqlFetchPolicy = { fetchPolicy: "cache-and-network" as "cache-and-network" };

function SettingsContainer({ componentId }: IOwnProps) {
  const dispatch = useDispatch();

  const connections = useSelector(getUserConnections);
  const features = useUserFeatures();
  const cyclingMeasurement = useSelector(getDailyCyclingMeasurement);
  const activeProvider = useSelector(getActiveProvider);

  const [isTimeModalVisible, setIsTimeModalVisible] = useState<boolean>(false);
  const [modalDate, setModalDate] = useState<string>(null);
  const [selectedNotification, setNotification] = useState<NotificationSettingsProps>(null);

  const [updateNotification, { loading: notificationLoading }] = useMutation(
    gql(`UpdateUserNotificationsSettingsDocument`)
  );
  const notificationSettings = useQuery(gql(`GetUserNotificationsSettingsDocument`), graphqlFetchPolicy);
  const pushNotifications = useMemo(() => notificationSettings?.data?.pushNotifications || [], [notificationSettings]);
  const emailNotifications = useMemo(
    () => notificationSettings?.data?.emailNotifications || [],
    [notificationSettings]
  );

  // helper functions
  const handleClose = React.useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const handleTimeModalCancel = React.useCallback(() => setIsTimeModalVisible(false), []);
  const client = useApolloClient();

  const updateQueryCache = useCallback(
    (type: string, isActive: boolean, time?: string) => {
      const updatedPushNotifications = pushNotifications.map((i) => ({
        ...i,
        isActive: i.type === type ? isActive : i.isActive,
        alertTimestamp: i.type === type && time ? time : i.alertTimestamp,
      }));
      const updatedEmailNotifications = emailNotifications.map((i) => ({
        ...i,
        isActive: i.type === type ? isActive : i.isActive,
      }));
      client.writeQuery({
        query: gql("GetUserNotificationsSettingsDocument"),
        data: {
          pushNotifications: updatedPushNotifications,
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

        updateQueryCache(selectedNotification.type, true, modalDate);
        setIsTimeModalVisible(false);
        await updateNotification({
          variables: { type: selectedNotification.type, isActive: true, time: modalDate },
        });
      } catch (e) {
        Logger.error(e, { file: "settings-container-time" });
      } finally {
        setNotification(null);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedNotification, modalDate]
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
          isVisible: features.gameSettingsLeaderboardsVisible,
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
          isVisible: true,
          title: t("screens.permissions.title"),
          description: t("screens.permissions.description"),
          value: "",
          onPress: () => {
            if (features.tempGameEnableReleaseYuHealthV2 && !activeProvider) {
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
      ],
    }),
    [
      activeProvider,
      cyclingMeasurement,
      features.tempGameEnableReleaseYuHealthV2,
      features.gameSettingsLeaderboardsVisible,
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
            updateQueryCache(n.type, !n.isActive);
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
        onTimePress: () => {
          return;
        },
      })),
      title: t("screens.settings.email_notification.label"),
      name: "email",
    }),
    [emailNotifications, updateNotification, updateQueryCache]
  );

  const notification = useMemo(
    () => ({
      isVisible: features.showNotifications,
      items: pushNotifications.map((n) => ({
        ...n,
        onSwitchPress: async () => {
          try {
            updateQueryCache(n.type, !n.isActive);
            await updateNotification({
              variables: {
                type: n.type,
                isActive: !n.isActive,
                time: n.alertTimestamp,
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
          setModalDate(n.alertTimestamp);
          setNotification(n);
        },
      })),
      title: t("screens.settings.push_notifications.label"),
      name: "notifications",
    }),
    [features.showNotifications, notificationLoading, pushNotifications, updateNotification, updateQueryCache]
  );

  const pickers = useMemo(() => {
    /**
     * modalDate is initialized with null, if we don't return empty array
     * moment(modalDate).format(t("format.time_short")) will be not a valid date
     * and that will lead to defaultIndex = -1
     */
    if (modalDate === null) {
      return [];
    }

    const times = generateTimes();
    const format = moment(modalDate).format(t("format.time_short"));
    const currentTime = times.findIndex((time) => time.label === format);

    return [
      {
        id: "settings-date-picker",
        items: times,
        onIndexChange: (index: number) => setModalDate(times[index].value),
        defaultIndex: currentTime,
      },
    ];
  }, [modalDate]);

  return (
    <>
      <SettingsScreen onPressClose={handleClose} sections={[notification, email, gameSettings, connection]} />
      {!isTimeModalVisible || pickers.length === 0 ? null : (
        <ScrollPickerModal pickers={pickers} onConfirm={handleTimeModalConfirm} onCancel={handleTimeModalCancel} />
      )}
    </>
  );
}

const generateTimes = () => {
  const times = [];
  const date = moment();

  for (let hour = 0; hour < 24; hour++) {
    const hourMoment = date.clone().set({ year: 2000, month: 0, date: 1, hour, second: 0, millisecond: 0 });

    hourMoment.minute(0);
    times.push({
      label: hourMoment.format(t("format.time_short")),
      value: formatToDefaultDate(hourMoment.toISOString()),
    });

    hourMoment.minute(30);
    times.push({
      label: hourMoment.format(t("format.time_short")),
      value: formatToDefaultDate(hourMoment.toISOString()),
    });
  }

  return times;
};

const DATE_REG_EX = /^.{10}/g;
const DEFAULT_DATE = "2000-01-01";
const formatToDefaultDate = (date: string) => date.replace(DATE_REG_EX, DEFAULT_DATE);

export default SettingsContainer;
