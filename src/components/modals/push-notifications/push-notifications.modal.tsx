import * as React from "react";
import { PureComponent } from "react";
import { Linking } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetMobileCopy_getMobileCopy_screens_pushNotification } from "../../../graphql/_core/schema";
import { requirePushEnabled } from "../../../redux/device/device.actions";
import { IPushNotification } from "../../../redux/device/device.selectors";
import { GenericScreen } from "../../screens";

type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
  callback?: () => void;
  componentId?: string;
  fromChallenge?: boolean;
  permissions: IPushNotification;
  copy: GetMobileCopy_getMobileCopy_screens_pushNotification;
}

type Props = ConnectedDispatch & IProps;

class PushNotificationsModal extends PureComponent<Props> {
  public render() {
    const {
      fromChallenge,
      permissions: { status },
    } = this.props;
    const toSettings = status === "denied";
    const data = this.getProps(toSettings, fromChallenge);

    return <GenericScreen {...data} />;
  }

  private dismissModal = async () => {
    const { callback, componentId } = this.props;

    if (callback) {
      callback();
    }

    Navigation.dismissModal(componentId);
  };

  private handleAgree = () => {
    this.props.requirePushEnabled();
    this.dismissModal();
  };

  private openSettings = async () => {
    try {
      await Linking.openURL("app-settings:");
    } catch (e) {
      // tslint:disable-next-line
      // console.log(e);
    }
    this.dismissModal();
  };

  private getProps = (toSettings: boolean, fromChallenge?: boolean) => {
    const { copy } = this.props;
    if (toSettings) {
      return {
        ctaLabel: copy.toSettings.ctaLabel,
        ctaLabelSecondary: copy.toSettings.ctaLabelSecondary,
        heading: copy.toSettings.heading,
        onPress: this.openSettings,
        onPressSecondary: this.dismissModal,
        subheading: copy.toSettings.subheading,
      };
    }
    if (fromChallenge) {
      return {
        ctaLabel: copy.fromChallenge.ctaLabel,
        ctaLabelSecondary: copy.fromChallenge.ctaLabelSecondary,
        heading: copy.fromChallenge.heading,
        onPress: this.handleAgree,
        onPressSecondary: this.dismissModal,
        subheading: copy.fromChallenge.subheading,
      };
    }
    return {
      ctaLabel: copy.turnNotificationOn.ctaLabel,
      ctaLabelSecondary: copy.turnNotificationOn.ctaLabelSecondary,
      heading: copy.turnNotificationOn.heading,
      onPress: this.handleAgree,
      onPressSecondary: this.dismissModal,
      subheading: copy.turnNotificationOn.subheading,
    };
  };
}

const mapDispatchToProps = {
  requirePushEnabled,
};

export default connect<{}, ConnectedDispatch>(null, mapDispatchToProps)(PushNotificationsModal);
