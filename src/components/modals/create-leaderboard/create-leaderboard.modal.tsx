import { CreateLeaderboardVariables } from "@graphql/_core/schema";
import CreateLeaderboardMutation, { CreateLeaderboardMutationFunction } from "@graphql/member/createLeaderboard.gql";
import { getUserStart } from "@redux/user/user.actions";
import * as React from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { CreateLeaderboardScreen } from "../../screens";

type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
    componentId: string;
}

type Props = IProps & ConnectedDispatch;

class CreateLeaderboardModal extends React.PureComponent<Props> {
    public render() {
        return (
            <CreateLeaderboardMutation>
                {(createLeaderboard, { loading }) => {
                    return (
                        <CreateLeaderboardScreen
                            isLoading={loading}
                            onCreateLeaderboard={this.onCreateLeaderboard(createLeaderboard)}
                            onPressClose={this.pressClose}
                        />
                    );
                }}
            </CreateLeaderboardMutation>
        );
    }

    private onCreateLeaderboard = (createLeaderboard: CreateLeaderboardMutationFunction) => async (
        variables: CreateLeaderboardVariables
    ) => {
        try {
            await createLeaderboard({ variables });
            this.props.getUserStart();
            await Navigation.dismissModal(this.props.componentId);
        } catch (e) {
            // console.log(e);
        }
    };

    private pressClose = () => {
        Navigation.dismissModal(this.props.componentId);
    };
}

const mapDispatchToProps = {
    getUserStart
};

export default connect<{}, ConnectedDispatch>(
    null,
    mapDispatchToProps
)(CreateLeaderboardModal);
