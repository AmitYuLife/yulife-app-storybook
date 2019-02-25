import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../navigation/constants";
import { WelcomeScreen } from "../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

class WelcomeContainer extends PureComponent<IProps> {
    public render() {
        return <WelcomeScreen onSignUpPress={this.onSignUp} onLogInPress={this.onLogin} />;
    }

    private onSignUp = () => {
        Navigation.push(this.props.componentId, {
            component: {
                id: ROUTES.signUp,
                name: ROUTES.signUp
            }
        });
    }

    private onLogin = () => {
        Navigation.push(this.props.componentId, {
            component: {
                id: ROUTES.login,
                name: ROUTES.login
            }
        });
    }
}

export default WelcomeContainer;
