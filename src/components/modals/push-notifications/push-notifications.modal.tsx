import * as React from "react";
import { PureComponent } from "react";
import { Linking } from "react-native";
import { Navigation } from "@navigation/main";
import { connect } from "react-redux";
import { requirePushEnabled, denyPushNotification } from "@redux/device/device.actions";
import { IPushNotification, PushPermissionsStatus } from "@redux/device/device.types";
import { GenericScreen } from "@screens";
import Logger from "@services/logger/logger";
import { t } from "@locale";

type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
  callback?: () => void;
  componentId?: string;
  fromChallenge?: boolean;
  permissions: IPushNotification;
}

type Props = ConnectedDispatch & IProps;

class PushNotificationsModal extends PureComponent<Props> {
  public render() {
    const {
      fromChallenge,
      permissions: { status },
    } = this.props;
    const toSettings = status === PushPermissionsStatus.denied;
    const data = this.getProps(toSettings, fromChallenge);

    return <GenericScreen {...data} />;
  }

  private dismissModal = async () => {
    const { callback, componentId } = this.props;

    if (callback) {
      callback();
    }

    this.props.denyPushNotification();

    Navigation.dismissModal(componentId);
  };

  private handleAgree = () => {
    this.props.requirePushEnabled();
    this.dismissModal();
  };

  private openSettings = async () => {
    try {
      await Linking.openSettings();
    } catch (e) {
      Logger.notify(e, { url: "app-settings" });
    }

    this.dismissModal();
  };

  private getProps = (toSettings: boolean, fromChallenge?: boolean) => {
    if (toSettings) {
      return {
        ctaLabel: t("modals.push_notifications.to_settings.cta_label"),
        ctaLabelSecondary: t("labels.cta.skip"),
        heading: t("modals.push_notifications.to_settings.heading"),
        onPress: this.openSettings,
        onPressSecondary: this.dismissModal,
        subheading: t("modals.push_notifications.to_settings.subheading"),
      };
    }

    if (fromChallenge) {
      return {
        ctaLabel: t("modals.push_notifications.from_challenge.cta_label"),
        ctaLabelSecondary: t("modals.push_notifications.from_challenge.cta_label_secondary"),
        heading: t("modals.push_notifications.from_challenge.heading"),
        onPress: this.handleAgree,
        onPressSecondary: this.dismissModal,
        subheading: t("modals.push_notifications.from_challenge.subheading"),
      };
    }

    return {
      ctaLabel: t("labels.cta.allow"),
      ctaLabelSecondary: t("labels.cta.skip"),
      heading: t("modals.push_notifications.turn_notification_on.heading"),
      onPress: this.handleAgree,
      onPressSecondary: this.dismissModal,
      subheading: t("modals.push_notifications.turn_notification_on.subheading"),
    };
  };
}

const mapDispatchToProps = {
  requirePushEnabled,
  denyPushNotification,
};

export default connect<null, ConnectedDispatch>(null, mapDispatchToProps)(PushNotificationsModal);
