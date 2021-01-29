import moment from "moment";
import * as React from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Navigation } from "react-native-navigation";
import { useSelector, useDispatch } from "react-redux";
import { MODALS } from "@navigation/constants";
import { updateConnectionStart } from "@redux/user/user.actions";
import { Connection, getUserConnections, getUserFeatures } from "@redux/user/user.selectors";
import { SettingsScreen } from "@screens/index";
import { getCopySelector } from "@redux/copy/copy.selectors";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GQL_QUERY_GET_USER_NOTIFICATIONS_SETTINGS,
  GQL_MUTATION_UPDATE_USER_NOTIFICATIONS_SETTINGS,
} from "@graphql/pushNotifications";
import {
  GetUserNotificationsSettings as Data,
  GetUserNotificationsSettings_getUserNotificationsSettings as Notification,
  UpdateUserNotificationsSettingsVariables as Variables,
  UpdateUserNotificationsSettings as ReturnedData,
} from "@graphql/_core/schema";
import Logger from "@services/logging/logger";
import { Appearance } from "react-native";
import { Colours } from "@styles";

interface IOwnProps {
  componentId: string;
}

function handleCreateNewLeaderboard() {
  Navigation.showModal({
    component: {
      id: MODALS.createLeaderboard,
      name: MODALS.createLeaderboard,
    },
  });
}

const settingsCopySelector = getCopySelector("settingsInfo");
const updateNotificationOptions = { refetchQueries: ["GetUserNotificationsSettings"] };
const getNotificationsOptions = { fetchPolicy: "cache-and-network" as "cache-and-network" };

function SettingsContainer({ componentId }: IOwnProps) {
  const dispatch = useDispatch();

  // redux selectors
  const connections = useSelector(getUserConnections);
  const features = useSelector(getUserFeatures);
  const settingsCopy = useSelector(settingsCopySelector);

  // local state
  const [isTimeModalVisible, setIsTimeModalVisible] = React.useState<boolean>(false);
  const [modalDate, setModalDate] = React.useState<Date>(null);
  const [selectedNotification, setNotification] = React.useState<Notification>(null);

  // gql
  const [updateNotification] = useMutation<ReturnedData, Variables>(
    GQL_MUTATION_UPDATE_USER_NOTIFICATIONS_SETTINGS,
    updateNotificationOptions
  );
  const { data } = useQuery<Data>(GQL_QUERY_GET_USER_NOTIFICATIONS_SETTINGS, getNotificationsOptions);
  const notifications = data?.getUserNotificationsSettings || [];

  // helper functions
  const handleClose = React.useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const handleTimeModalCancel = React.useCallback(() => setIsTimeModalVisible(false), []);

  const handleTimeModalConfirm = React.useCallback(
    async (date: Date) => {
      try {
        const time = moment(date.toISOString()).format("HH:mm");
        await updateNotification({
          variables: { type: selectedNotification.type, isActive: true, time },
        });
      } catch (e) {
        Logger.error(e, { file: "settings-container-time" });
      } finally {
        setNotification(null);
        setIsTimeModalVisible(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedNotification]
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
      const { heading, subheading, ctaLabel } = settingsCopy;
      Navigation.showModal({
        component: {
          id: MODALS.info,
          name: MODALS.info,
          passProps: {
            onPress: () => Navigation.dismissModal(MODALS.info),
            type: c.name,
            heading: heading.replace("${connection}", c.name.charAt(0).toUpperCase() + c.name.slice(1)),
            subheading,
            ctaLabel,
          },
        },
      });
    },
    [settingsCopy]
  );

  const connection = {
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
        const [hours, minutes] = n.time.split(":");
        const currentDate = moment().add(parseInt(hours, 10), "hours").add(parseInt(minutes, 10), "minutes").toDate();

        setModalDate(currentDate);
        setIsTimeModalVisible(true);
        setNotification(n);
      },
    })),
    name: "notifications",
  } as any;

  return (
    <>
      <SettingsScreen
        onCreateLeaderboard={handleCreateNewLeaderboard}
        onPressClose={handleClose}
        sections={[notification, connection]}
      />
      <DateTimePicker
        date={modalDate}
        mode="time"
        headerTextIOS="Set time"
        isVisible={isTimeModalVisible}
        onConfirm={handleTimeModalConfirm}
        onCancel={handleTimeModalCancel}
        textColor={Appearance.getColorScheme() === "dark" ? Colours.neutral.white : Colours.neutral.n900}
      />
    </>
  );
}

export default SettingsContainer;
