import * as React from "react";
import { Navigation } from "react-native-navigation";
import { CreateLeaderboardScreen } from "../../screens";

interface IProps {
    componentId: string;
}

class CreateLeaderboardModal extends React.PureComponent<IProps> {
    public render() {
        return (
            <CreateLeaderboardScreen onCreateLeaderboard={this.onCreateLeaderboard} onPressClose={this.pressClose} />
        );
    }

    private onCreateLeaderboard = () => {
        return;
    };

    private pressClose = () => {
        Navigation.dismissModal(this.props.componentId);
    };
}

export default CreateLeaderboardModal;
