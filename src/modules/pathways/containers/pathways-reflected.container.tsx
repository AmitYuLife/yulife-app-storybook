import { memo, useCallback, useMemo } from "react";
import PathwaysReflectedScreen from "../screens/pathways-reflected/pathways-reflected.screen";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import { usePathways } from "../hooks/usePathways";
import { useBackHandler } from "@hooks";
import { getUserDataStart } from "@redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDataType } from "@redux/user/user.types";
import { showYuModal } from "@navigation/root";
import { getPushNotifications } from "@redux/device/device.selectors";
import { gql, UserNotificationsType } from "@graphql/__generated";
import { useQuery } from "@apollo/client";
import { PUSH_NOTIFICATION_DENY_LIMIT } from "@redux/device/device.constants";
import { PushPermissionsStatus } from "@redux/device/device.types";
import { getPathwayNotificationDenyCount } from "../redux/pathways.selectors";

interface IPathwaysReflectedContainerProps {
  componentId: string;
}

const PathwaysReflectedContainer = ({ componentId }: IPathwaysReflectedContainerProps) => {
  useBackHandler(() => true);

  const { loading, reflectionProgress, currentProgress, isStreakComplete, todayReward, onReflectionComplete } =
    usePathways(componentId, {
      fetchPolicy: "network-only",
    });

  const notificationSettingQuery = useQuery(gql("GetUserNotificationsSettingsDocument"), {
    fetchPolicy: "cache-first",
  });

  const pushNotificationPermissions = useSelector(getPushNotifications);
  const pathwayNotificationDenyCount = useSelector(getPathwayNotificationDenyCount);

  const reflectionReminderData = useMemo(() => {
    return notificationSettingQuery.data?.pushNotifications?.notifications?.find(
      (n) => n.type === UserNotificationsType.ReflectionReminder
    );
  }, [notificationSettingQuery.data]);

  const dispatch = useDispatch();

  const showReflectionReminderModal = useCallback(() => {
    // user does not want any notifications at all
    if (
      pushNotificationPermissions.denyCount >= PUSH_NOTIFICATION_DENY_LIMIT &&
      pushNotificationPermissions.status === PushPermissionsStatus.notyet
    ) {
      return;
    }

    // denied
    if (pushNotificationPermissions.status === PushPermissionsStatus.denied) {
      return;
    }

    // is already enabled
    if (
      reflectionReminderData?.isActive &&
      reflectionReminderData?.isAvailable &&
      pushNotificationPermissions.status === PushPermissionsStatus.enabled
    ) {
      return;
    }

    // notification is enabled, but pathway notification denied
    if (pathwayNotificationDenyCount >= PUSH_NOTIFICATION_DENY_LIMIT) {
      return;
    }

    showYuModal({
      component: {
        id: MODALS.reflectionReminder,
        name: MODALS.reflectionReminder,
      },
    });
  }, [
    pushNotificationPermissions.denyCount,
    pushNotificationPermissions.status,
    reflectionReminderData?.isActive,
    reflectionReminderData?.isAvailable,
    pathwayNotificationDenyCount,
  ]);

  const onClose = useCallback(async () => {
    if (isStreakComplete) {
      dispatch(
        getUserDataStart({
          types: [AppDataType.dailyChallengeAmountAvailable],
        })
      );

      Navigation.push(componentId, {
        component: {
          id: ROUTES.pathwaysClaim,
          name: ROUTES.pathwaysClaim,
        },
      });

      return;
    }

    onReflectionComplete();

    showReflectionReminderModal();
  }, [componentId, dispatch, isStreakComplete, onReflectionComplete, showReflectionReminderModal]);

  return (
    <PathwaysReflectedScreen
      onClose={onClose}
      isLoading={loading || notificationSettingQuery.loading}
      currentProgress={currentProgress}
      isStreakComplete={isStreakComplete}
      reflectionProgress={reflectionProgress}
      todayReward={todayReward}
    />
  );
};

export default memo(PathwaysReflectedContainer);
