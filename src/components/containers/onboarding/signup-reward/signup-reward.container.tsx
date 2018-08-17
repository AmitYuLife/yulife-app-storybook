import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { SignUpRewardScreen } from "../../../screens";
import { ROUTES } from "../../../../navigation/routes";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

class FitKitConnectContainer extends PureComponent<IProps> {
    public render() {
        return <SignUpRewardScreen onCollectPress={this.onCollect} reward={2345} />;
    }

    private onCollect = () => {
        Navigation.setStackRoot(this.props.componentId, {
            component: {
                id: ROUTES.member,
                name: ROUTES.member,
            },
        });
    }
}

export default FitKitConnectContainer;
