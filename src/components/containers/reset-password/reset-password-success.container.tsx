import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { ResetPasswordSuccessScreen } from "../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

class ResetPasswordSuccessContainer extends PureComponent<IProps> {

    public render() {
        return (
            <ResetPasswordSuccessScreen
                onLogInPress={this.onLogIn}
            />
        );
    }

    private onLogIn = async () => {
        await Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.Login"
            }
        });
    }
}

export default ResetPasswordSuccessContainer;
