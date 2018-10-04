import * as React from "react";
import { PureComponent } from "react";
import { Linking } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import {
    requirePushEnabled,
    RequirePushEnabledAction,
    skipPushPermissions,
    SkipPushPermissionsAction
} from "../../../redux/device/device.actions";
import { IPushNotification } from "../../../redux/device/device.selectors";
import GenericModal from "../generic-modal/generic-modal";

interface IConnectedDispatch {
    requirePushEnabled: RequirePushEnabledAction;
    skipPushPermissions: SkipPushPermissionsAction;
}

interface IProps {
    componentId?: string;
    permissions: IPushNotification;
}

type Props = IConnectedDispatch & IProps;

class PushNotificationsModal extends PureComponent<Props> {
    public render() {
        const {
            permissions: { requested, skipped }
        } = this.props;
        const toSettings = requested && skipped;
        const data = {
            ctaLabel: toSettings ? "go to settings" : "allow",
            onPress: toSettings ? () => this.openSettings : this.handleAgree,
            subheading: toSettings
                ? "To get notifications, you need to go to the system settings and turn it on."
                : "Turn the notification on so we can notify you when there’s a response to your message."
        };
        return (
            <GenericModal
                heading="notification"
                ctaLabelSecondary="skip"
                onPressSecondary={this.handleSkip}
                {...data}
            />
        );
    }

    private dismissModal = async () => {
        Navigation.dismissModal(this.props.componentId);
    }

    private handleAgree = () => {
        this.props.requirePushEnabled();
        this.dismissModal();
    }

    private handleSkip = () => {
        this.props.skipPushPermissions();
        this.dismissModal();
    }

    private openSettings = async () => {
        try {
            await Linking.openURL("app-settings:");
        } catch (e) {
            // tslint:disable-next-line
            console.log(e);
        }
        this.dismissModal();
    }
}

const mapDispatchToProps = {
    requirePushEnabled,
    skipPushPermissions
};

export default connect<{}, IConnectedDispatch>(
    null,
    mapDispatchToProps
)(PushNotificationsModal);
