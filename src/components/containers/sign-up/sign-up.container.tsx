import * as React from "react";
import { PureComponent } from "react";
import { NativeSyntheticEvent, WebViewMessageEventData } from "react-native";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../navigation/routes";
import { SignUpScreen } from "../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IState {
    error?: string;
    loading: boolean;
}

class SignUpContainer extends PureComponent<IProps, IState> {
    public state: IState = {
        loading: false
    };

    public componentDidMount() {
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                title: {
                    text: "Sign Up"
                },
                visible: true
            }
        });
    }

    public render() {
        const { error, loading } = this.state;

        return (
            <SignUpScreen
                error={error}
                loading={loading}
                onError={this.onError}
                onLoad={this.onLoad}
                onLoadEnd={this.onLoadEnd}
                onLoadStart={this.onLoadStart}
                onMessage={this.onMessage}
            />
        );
    }

    private onError = (error: Error) => {
        this.setState({ loading: false, error: error.message });
    }

    private onLoad = () => {
        this.setState({ loading: false });
    }

    private onLoadEnd = () => {
        this.setState({ loading: false });
    }

    private onLoadStart = () => {
        this.setState({ loading: true });
    }

    private onMessage = (event: NativeSyntheticEvent<WebViewMessageEventData>) => {
        if (event.nativeEvent.data === "signedup") {
            Navigation.setStackRoot(this.props.componentId, {
                component: {
                    id: ROUTES.login,
                    name: ROUTES.login
                }
            });
        }
    }
}

export default SignUpContainer;
