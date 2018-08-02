import * as React from "react";
import { PureComponent } from "react";
import { Linking } from "react-native";
import { Navigation } from "react-native-navigation";
import { setFitkitPermission } from "../../../../services/storage";
import { FitKitConnectScreen } from "../../../organisms/screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IState {
    connecting: boolean;
}

class FitKitConnectContainer extends PureComponent<IProps, IState> {
    public state: IState = {
        connecting: false,
    };

    public render() {
        const { connecting } = this.state;

        return (
            <FitKitConnectScreen
                connecting={connecting}
                onConnectPress={this.onConnect}
                onPrivacyPolicyPress={this.onPrivacyPolicy}
                onSkipPress={this.onSkip}
            />
        );
    }

    private onConnect = () => {
        this.setState({ connecting: true }, async () => {
            await setFitkitPermission("accepted");
            await Navigation.push(this.props.componentId, {
                component: {
                    name: "yulife.onboarding.SignUpReward",
                },
            });
        });
    }

    private onPrivacyPolicy = async () => {
        // try {
        //     await Linking.openURL(Config.PRIVACY_POLICY_URL);
        // } catch (e) {
        //     // tslint:disable-next-line
        //     console.log("Unable to open privacy policy link:", e);
        // }

        // TODO set up react-native-config
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.onboarding.SignUpReward",
            },
        });
    }

    private onSkip = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.onboarding.SignUpReward",
            },
        });
    }
}

export default FitKitConnectContainer;
