import * as React from "react";
import { PureComponent } from "react";
import { setAuthenticatedRoot } from "../../../../navigation/root";
import { SignUpRewardScreen } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

class FitKitConnectContainer extends PureComponent<IProps> {
    public render() {
        return <SignUpRewardScreen onCollectPress={this.onCollect} reward={2345} />;
    }

    private onCollect = () => {
        setAuthenticatedRoot();
    }
}

export default FitKitConnectContainer;
