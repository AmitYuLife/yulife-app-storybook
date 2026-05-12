import { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";
import { requirePushEnabled, denyPushNotification } from "@redux/device/device.actions";
import { PushPermissionsStatus } from "@redux/device/device.types";
import { GenericScreen } from "@screens";
import { t } from "@locale";
import { getPushNotifications } from "@redux/device/device.selectors";
import { ROUTES } from "@navigation/constants";
import { pathwayNotificationDenied } from "@app/modules/pathways/redux/pathways.actions";
import { pushScreenFromActiveRoute } from "@navigation/root";
import { Linking } from "react-native";
import Logger from "@services/logger/logger";

interface IReflectionReminderModalProps {
  callback?: () => void;
  componentId?: string;
}

const ReflectionReminderModal = ({ callback, componentId }: IReflectionReminderModalProps) => {
  const dispatch = useDispatch();
  const permissions = useSelector(getPushNotifications);
  const toSettings = permissions.status === PushPermissionsStatus.denied;

  const dismissModal = useCallback(async () => {
    if (callback) {
      callback();
    }

    if (toSettings) {
      dispatch(denyPushNotification());
    } else {
      dispatch(pathwayNotificationDenied());
    }

    if (componentId) {
      Navigation.dismissModal(componentId);
    }
  }, [callback, componentId, dispatch, toSettings]);

  const handleConfirm = useCallback(async () => {
    dispatch(requirePushEnabled());

    // need to await to get correct push
    if (componentId) {
      await Navigation.dismissModal(componentId);
    }

    pushScreenFromActiveRoute({
      component: {
        id: ROUTES.settings,
        name: ROUTES.settings,
      },
    });
  }, [dispatch, componentId]);

  const openSettings = useCallback(async () => {
    try {
      await Linking.openSettings();
    } catch (e) {
      Logger.error(e, { url: "app-settings" });
    }

    if (componentId) {
      Navigation.dismissModal(componentId);
    }
  }, [componentId]);

  if (toSettings) {
    return (
      <GenericScreen
        ctaLabel={t("modals.push_notifications.to_settings.cta_label")}
        ctaLabelSecondary={t("labels.cta.skip")}
        heading={t("modals.reflection_reminder.heading")}
        onPress={openSettings}
        onPressSecondary={dismissModal}
        subheading={t("modals.push_notifications.to_settings.subheading")}
      />
    );
  }

  return (
    <GenericScreen
      ctaLabel={t("modals.reflection_reminder.cta_label")}
      ctaLabelSecondary={t("modals.reflection_reminder.secondary_cta_label")}
      heading={t("modals.reflection_reminder.heading")}
      onPress={handleConfirm}
      onPressSecondary={dismissModal}
      subheading={t("modals.reflection_reminder.subheading")}
    />
  );
};

export default memo(ReflectionReminderModal);
