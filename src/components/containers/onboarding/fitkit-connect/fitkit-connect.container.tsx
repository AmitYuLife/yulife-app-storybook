import * as React from "react";
import { PureComponent } from "react";
import { BackHandler, Linking, NativeEventSubscription } from "react-native";
import Config from "react-native-config";
import { FitKitAuthoriseFunction, FitKitAvailable } from "react-native-fitkit";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { fitKitConsentAuthorised } from "../../../../redux/user/user.actions";
import FitKitPermissions from "../../../../services/fitkit/fitkit.permissions";
import { FitKitConnectScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
    navigateToNext: () => void;
}

type ConnectedDispatch = typeof mapDispatchToProps;

interface IState {
    connecting: boolean;
}

type Props = IProps & ConnectedDispatch;

class FitKitConnectContainer extends PureComponent<Props, IState> {
    public state: IState = {
        connecting: false
    };
    private backHandler: NativeEventSubscription;

    constructor(props: Props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidAppear() {
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
    }

    public componentDidDisappear() {
        this.backHandler.remove();
    }

    public render() {
        const { connecting } = this.state;
        const { navigateToNext } = this.props;

        return (
            <FitKitAvailable>
                {({ available, authorised, authorise, loading }) => {
                    if (authorised) {
                        // ensure authorised when coming back to app
                        // authorise(FitKitPermissions);
                        navigateToNext();
                    }

                    return (
                        <FitKitConnectScreen
                            connecting={connecting}
                            loading={loading || authorised}
                            fitKitAvailable={available}
                            onConnectPress={() => this.onConnect(authorise)}
                            onPrivacyPolicyPress={this.onPrivacyPolicy}
                            onSkipPress={navigateToNext}
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
    };

    private onPrivacyPolicy = async () => {
        try {
            await Linking.openURL(Config.PRIVACY_POLICY_URL);
        } catch (e) {
            // tslint:disable-next-line
            console.log("Unable to open privacy policy link:", e);
        }
    };
}

const mapDispatchToProps = {
    fitKitConsentAuthorised
};

export default connect<{}, ConnectedDispatch>(
    null,
    mapDispatchToProps
)(FitKitConnectContainer);
