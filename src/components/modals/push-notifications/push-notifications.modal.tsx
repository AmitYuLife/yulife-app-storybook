import * as React from "react";
import { PureComponent } from "react";
import { Linking } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { requirePushEnabled } from "../../../redux/device/device.actions";
import { IPushNotification } from "../../../redux/device/device.selectors";
import { GenericScreen } from "../../screens";

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
            permissions: { status }
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
            console.log(e);
        }
        this.dismissModal();
    };

    private getProps = (toSettings: boolean, fromChallenge?: boolean) => {
        if (toSettings) {
            return {
                ctaLabel: "go to settings",
                ctaLabelSecondary: "skip",
                heading: "notification",
                onPress: this.openSettings,
                onPressSecondary: this.dismissModal,
                subheading: "To get notifications, you need to go to the system settings and turn it on."
            };
        }
        if (fromChallenge) {
            return {
                ctaLabel: "of course",
                ctaLabelSecondary: "maybe later",
                heading: "don't miss out",
                onPress: this.handleAgree,
                onPressSecondary: this.dismissModal,
                subheading: "Do you want us to give you a shout when you finish a challenge?"
            };
        }
        return {
            ctaLabel: "allow",
            ctaLabelSecondary: "skip",
            heading: "notification",
            onPress: this.handleAgree,
            onPressSecondary: this.dismissModal,
            subheading: "Turn the notification on so we can notify you when there’s a response to your message."
        };
    };
}

const mapDispatchToProps = {
    requirePushEnabled
};

export default connect<{}, ConnectedDispatch>(
    null,
    mapDispatchToProps
)(PushNotificationsModal);
