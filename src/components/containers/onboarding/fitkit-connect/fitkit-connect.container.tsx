import * as React from "react";
import { PureComponent } from "react";
import { Linking } from "react-native";
import Config from "react-native-config";
import { FitKitAuthoriseFunction, FitKitAvailable } from "react-native-fitkit";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { setAuthenticatedRoot } from "../../../../navigation/root";
import { ROUTES } from "../../../../navigation/routes";
import { SyncAction } from "../../../../redux/_core/types";
import { fitKitConsentAuthorised } from "../../../../redux/user/user.actions";
import FitKitPermissions from "../../../../services/fitkit/fitkit.permissions";
import { FitKitConnectScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
    onboarded: boolean;
}

interface IConnectedDispatch {
    fitKitConsentAuthorised: () => SyncAction;
}

interface IState {
    connecting: boolean;
}

type Props = IProps & IConnectedDispatch;

class FitKitConnectContainer extends PureComponent<Props, IState> {
    public state: IState = {
        connecting: false
    };

    public render() {
        const { connecting } = this.state;

        return (
            <FitKitAvailable>
                {({ available, authorised, authorise, loading }) => {
                    if (authorised) {
                        // ensure authorised when coming back to app
                        // authorise(FitKitPermissions);
                        this.continue();
                    }

                    return (
                        <FitKitConnectScreen
                            connecting={connecting}
                            loading={loading || authorised}
                            fitKitAvailable={available}
                            onConnectPress={() => this.onConnect(authorise)}
                            onPrivacyPolicyPress={this.onPrivacyPolicy}
                            onSkipPress={this.onSkip}
                        />
                    );
                }}
            </FitKitAvailable>
        );
    }

    private onConnect = (authorise: FitKitAuthoriseFunction) => {
        this.setState({ connecting: true }, () => {
            this.props.fitKitConsentAuthorised();
            authorise(FitKitPermissions);
        });
    }

    private onPrivacyPolicy = async () => {
        try {
            await Linking.openURL(Config.PRIVACY_POLICY_URL);
        } catch (e) {
            // tslint:disable-next-line
            console.log("Unable to open privacy policy link:", e);
        }
    }

    private onSkip = async () => {
        this.continue();
    }

    private continue = async () => {
        if (!this.props.onboarded) {
            await Navigation.push(this.props.componentId, {
                component: {
                    id: ROUTES.onboardingSignUpReward,
                    name: ROUTES.onboardingSignUpReward
                }
            });
        }

        setAuthenticatedRoot();
    }
}

const mapDispatchToProps = {
    fitKitConsentAuthorised
};

export default connect<{}, IConnectedDispatch>(
    null,
    mapDispatchToProps
)(FitKitConnectContainer);
