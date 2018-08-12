import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { ResetPasswordScreen } from "../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

class ResetPasswordContainer extends PureComponent<IProps> {

    public render() {
        return (
            <ResetPasswordScreen
                onCancelPress={this.onCancel}
                onSubmitPress={this.onSubmit}
            />
        );
    }

    private onCancel = () => {
        Navigation.pop(this.props.componentId);
    }

    private onSubmit = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.Login"
            }
        });
    }
}

export default ResetPasswordContainer;
