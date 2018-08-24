// tslint:disable:variable-name

import * as React from "react";
import { PureComponent } from "react";
import { Linking } from "react-native";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import { FitKitConnectScreen } from "../../../screens";
import { ROUTES } from "../../../../navigation/routes";
import { FitKitAvailable } from "react-native-fitkit";
import { Loading } from "../../../atoms";
import { SyncAction } from "../../../../redux/_core/types";
import { connect } from "react-redux";
import { authoriseFitKit } from "../../../../redux/app/app.actions";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IConnectedDispatch {
    authoriseFitKit: () => SyncAction;
}

interface IState {
    connecting: boolean;
}

type Props = IProps & IConnectedDispatch;

class FitKitConnectContainer extends PureComponent<Props, IState> {

    public state: IState = {
        connecting: false,
    };

    public render() {
        const { connecting } = this.state;

        return (
            <FitKitAvailable>
                {(fitKitAvailable, _authorised, fitKitLoading) => {
                    if (fitKitLoading) {
                        return <Loading />;
                    }

                    return (
                        <FitKitConnectScreen
                            connecting={connecting}
                            fitKitAvailable={fitKitAvailable}
                            onConnectPress={this.onConnect}
                            onPrivacyPolicyPress={this.onPrivacyPolicy}
                            onSkipPress={this.onSkip}
                        />
                    );
                }}
            </FitKitAvailable>
        );
    }

    private onConnect = () => {
        this.setState({ connecting: true }, async () => {
            try {
                this.props.authoriseFitKit();
                this.continue();
            } catch (e) {
                // tslint:disable-next-line
                console.log("ERR", e);
            }
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
        await Navigation.push(this.props.componentId, {
            component: {
                id: ROUTES.onboardingSignUpReward,
                name: ROUTES.onboardingSignUpReward,
            },
        });
    }
}

const mapDispatchToProps = {
    authoriseFitKit
};

export default connect<{}, IConnectedDispatch>(
    null,
    mapDispatchToProps
)(FitKitConnectContainer);
