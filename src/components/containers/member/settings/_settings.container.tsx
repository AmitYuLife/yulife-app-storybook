import moment from "moment";
import React, { useMemo } from "react";
import { Navigation } from "@navigation/main";
import { useSelector, useDispatch } from "react-redux";
import { MODALS, ROUTES } from "@navigation/constants";
import { updateConnectionStart } from "@redux/user/user.actions";
import { Connection, getUserConnections, getUserFeatures } from "@redux/user/user.selectors";
import { SettingsScreen } from "@screens/index";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";
import {
  GQL_QUERY_GET_USER_NOTIFICATIONS_SETTINGS,
  GQL_MUTATION_UPDATE_USER_NOTIFICATIONS_SETTINGS,
} from "@graphql/pushNotifications";
import {
  GetUserNotificationsSettings as NotificationData,
  GetUserNotificationsSettings_getUserNotificationsSettings as Notification,
  UpdateUserNotificationsSettingsVariables as Variables,
  UpdateUserNotificationsSettings as ReturnedData,
} from "@graphql/_core/schema";
import Logger from "@services/logging/logger";
import { ScrollPickerModal } from "@components/modals";
import { showYuModal } from "@navigation/root";
import { getDailyCyclingMeasurement } from "@redux/daily-cycling/daily-cycling.selectors";
import { t } from "@locale";

interface IOwnProps {
  componentId: string;
}

const graphqlFetchPolicy = { fetchPolicy: "cache-and-network" as "cache-and-network" };

function SettingsContainer({ componentId }: IOwnProps) {
  const dispatch = useDispatch();

  // redux selectors
  const connections = useSelector(getUserConnections);
  const features = useSelector(getUserFeatures);

  // local state
  const [isTimeModalVisible, setIsTimeModalVisible] = React.useState<boolean>(false);
  const [modalDate, setModalDate] = React.useState<string>(null);
  const [selectedNotification, setNotification] = React.useState<Notification>(null);

  // gql
  const [updateNotification] = useMutation<ReturnedData, Variables>(GQL_MUTATION_UPDATE_USER_NOTIFICATIONS_SETTINGS);
  const notificationSettings = useQuery<NotificationData>(
    GQL_QUERY_GET_USER_NOTIFICATIONS_SETTINGS,
    graphqlFetchPolicy
  );
  const notifications = notificationSettings?.data?.getUserNotificationsSettings || [];
  const cyclingMeasurement = useSelector(getDailyCyclingMeasurement);

  // helper functions
  const handleClose = React.useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const handleTimeModalCancel = React.useCallback(() => setIsTimeModalVisible(false), []);
  const client = useApolloClient();

  const updateQueryCache = (type: string, isActive: boolean, time?: string) => {
    const filterNotifications = notifications.map((i) => ({
      ...i,
      isActive: i.type === type ? isActive : i.isActive,
      alertTimestamp: i.type === type && time ? time : i.alertTimestamp,
    }));
    client.writeQuery({
      query: GQL_QUERY_GET_USER_NOTIFICATIONS_SETTINGS,
      data: {
        getUserNotificationsSettings: filterNotifications,
      },
    });
  };

  const handleTimeModalConfirm = React.useCallback(
    async () => {
      try {
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
    (c: Connection) => () => {
      dispatch(updateConnectionStart(c));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleConnectionInfoPress = React.useCallback(
    (c: Connection) => () => {
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

  const gameSettings = {
    name: "gameSettings",
    title: "Game settings",
    isVisible: true,
    items: [
      {
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
        title: t("screens.permissions.title"),
        description: t("screens.permissions.description"),
        value: "",
        onPress: () => {
          Navigation.push(ROUTES.settings, {
            component: {
              id: ROUTES.permissions,
              name: ROUTES.permissions,
            },
          });
        },
      },
      {
        title: "Measurement (Cycling)",
        description: "Change between the imperial (miles) and metric (kilometers) system.",
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
    ],
  };

  const connection = {
    title: "Fitness trackers",
    isVisible: features.showConnections,
    items: connections.map((c) => ({
      ...c,
      lastUpdated: c.lastUpdated,
      onPress: handleConnectionItemPress(c),
      onPressInfo: handleConnectionInfoPress(c),
    })),
    name: "connections",
  } as any;

  const notification = {
    isVisible: features.showNotifications,
    items: notifications.map((n) => ({
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
        setIsTimeModalVisible(true);
        setModalDate(n.alertTimestamp);
        setNotification(n);
      },
    })),
    title: "Push notifications",
    name: "notifications",
  } as any;

  const pickers = useMemo(() => {
    const times = generateTimes();
    const currentTime = times.findIndex((time) => time.value === modalDate);
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
      <SettingsScreen onPressClose={handleClose} sections={[notification, gameSettings, connection]} />
      {!isTimeModalVisible ? null : (
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
      label: hourMoment.format("hh:mm A"),
      value: formatToDefaultDate(hourMoment.toISOString()),
    });

    hourMoment.minute(30);
    times.push({
      label: hourMoment.format("hh:mm A"),
      value: formatToDefaultDate(hourMoment.toISOString()),
    });
  }

  return times;
};

const DATE_REG_EX = /^.{10}/g;
const DEFAULT_DATE = "2000-01-01";
const formatToDefaultDate = (date: string) => date.replace(DATE_REG_EX, DEFAULT_DATE);

export default SettingsContainer;
