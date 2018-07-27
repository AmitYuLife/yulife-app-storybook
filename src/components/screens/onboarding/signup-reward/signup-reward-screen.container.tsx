import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { SignUpRewardScreen } from "../../../organisms/screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

class FitKitConnectScreenContainer extends PureComponent<IProps> {

    public render() {
        return (
            <SignUpRewardScreen
                onCollectPress={this.onCollect}
                reward={2345}
            />
        );
    }

    private onCollect = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.member.DailyStepsScreen"
            }
        });
    }
}

export default FitKitConnectScreenContainer;
