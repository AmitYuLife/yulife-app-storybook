import moment from "moment";
import React, { useMemo } from "react";
import { Navigation } from "react-native-navigation";
import { useSelector, useDispatch } from "react-redux";
import { MODALS, ROUTES } from "@navigation/constants";
import { updateConnectionStart } from "@redux/user/user.actions";
import { Connection, getUserConnections, getUserFeatures } from "@redux/user/user.selectors";
import { SettingsScreen } from "@screens/index";
import { useTranslation } from "@hooks";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";
import {
  GQL_QUERY_GET_USER_NOTIFICATIONS_SETTINGS,
  GQL_MUTATION_UPDATE_USER_NOTIFICATIONS_SETTINGS,
} from "@graphql/pushNotifications";
import {
  GetMobileRewardStoreLocations as RewardStoreData,
  GetUserNotificationsSettings as NotificationData,
  GetUserNotificationsSettings_getUserNotificationsSettings as Notification,
  UpdateUserNotificationsSettingsVariables as Variables,
  UpdateUserNotificationsSettings as ReturnedData,
} from "@graphql/_core/schema";
import Logger from "@services/logging/logger";
import { ScrollPickerModal } from "@components/modals";
import { showYuModal } from "@navigation/root";
import { getDailyCyclingMeasurement } from "@redux/daily-cycling/daily-cycling.selectors";
import { GQL_QUERY_GET_MOBILE_REWARD_STORE_LOCATIONS } from "@graphql/rewards";
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

  const translations = useTranslation([
    "screens.settings.info.heading",
    "screens.settings.info.cta_label",
    "screens.settings.tracker_info.heading",
    "screens.settings.tracker_info.cta_label",
  ]);

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
  const rewardStoreLocations = useQuery<RewardStoreData>(GQL_QUERY_GET_MOBILE_REWARD_STORE_LOCATIONS, {
    ...graphqlFetchPolicy,
    skip: !features.showRewardStoreSelection,
  });
  const notifications = notificationSettings?.data?.getUserNotificationsSettings || [];
  const rewardsLocations = rewardStoreLocations?.data?.data || [];
  const rewardStore = rewardsLocations.find((r) => r.isSelected);
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
      // TODO: we probably need to add a `type` so we know if it's a device or an app
      let heading = translations["screens.settings.info.heading"];
      let ctaLabel = translations["screens.settings.info.cta_label"];
      if (c.name.toLowerCase() === "strava") {
        heading = translations["screens.settings.tracker_info.heading"];
        ctaLabel = translations["screens.settings.tracker_info.cta_label"];
      }

      showYuModal({
        component: {
          id: MODALS.info,
          name: MODALS.info,
          passProps: {
            onPress: () => Navigation.dismissModal(MODALS.info),
            type: c.name,
            heading: heading.replace("${connection}", c.name.charAt(0).toUpperCase() + c.name.slice(1)),
            ctaLabel,
          },
        },
      });
    },
    [translations]
  );

  const gameSettings = {
    name: "gameSettings",
    title: "Game settings",
    isVisible: true,
    items: [
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

  const rewardStoreSettings = {
    name: "rewardStoreSettings",
    title: "Rewards settings",
    isVisible: rewardStore && features.showRewardStoreSelection,
    items: [
      {
        title: "Rewards region selection",
        description:
          "This selection defines the collection of rewards available to you. This may change the currency of new vouchers.",
        value: rewardStore?.id,
        onPress: () => {
          Navigation.push(ROUTES.settings, {
            component: {
              id: ROUTES.rewardStoreLocation,
              name: ROUTES.rewardStoreLocation,
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

  const pickers = useMemo(
    () => {
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [modalDate]
  );

  return (
    <>
      <SettingsScreen
        onPressClose={handleClose}
        sections={[notification, gameSettings, connection, rewardStoreSettings]}
      />
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
