import ReplyToLeaderboardInviteMutation, {
    ReplyToLeaderboardInviteMutationFunction
} from "@graphql/user/replyToLeaderboardInvite.gql";
import { GenericScreen } from "@screens/index";
import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../redux/_core/reducers";
import { getCopy } from "../../../redux/copy/copy.selectors";
import { getUserStart } from "../../../redux/user/user.actions";

interface IProps {
    componentId: string;
    leaderboardId: string;
    inviteFrom: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = ConnectedState & ConnectedDispatch & IProps;

interface IState {
    isPrimaryLoading: boolean;
    isSecondaryLoading: boolean;
}

class LeaderboardInviteModal extends PureComponent<Props, IState> {
    public state: IState = {
        isPrimaryLoading: false,
        isSecondaryLoading: false
    };

    public render() {
        const { isPrimaryLoading, isSecondaryLoading } = this.state;

        return (
            <ReplyToLeaderboardInviteMutation>
                {(replyToLeaderboardInvite) => {
                    return (
                        <GenericScreen
                            {...this.getProps()}
                            isPrimaryLoading={isPrimaryLoading}
                            isSecondaryLoading={isSecondaryLoading}
                            onPress={this.handlePress(replyToLeaderboardInvite)}
                            onPressSecondary={this.handleSecondaryPress(replyToLeaderboardInvite)}
                        />
                    );
                }}
            </ReplyToLeaderboardInviteMutation>
        );
    }

    private dismissModal = async () => Navigation.dismissModal(this.props.componentId);

    private handlePress = (replyToLeaderboardInvite: ReplyToLeaderboardInviteMutationFunction) => () => {
        this.setState({ isPrimaryLoading: true }, async () => {
            try {
                await replyToLeaderboardInvite({
                    variables: { leaderboardId: this.props.leaderboardId, hasAccepted: true }
                });
                await this.dismissModal();
                this.props.getUserStart();
            } catch (e) {
                this.setState({ isPrimaryLoading: false });
            }
        });
    };

    private handleSecondaryPress = (replyToLeaderboardInvite: ReplyToLeaderboardInviteMutationFunction) => () => {
        this.setState({ isSecondaryLoading: true }, async () => {
            try {
                await replyToLeaderboardInvite({
                    variables: { leaderboardId: this.props.leaderboardId, hasAccepted: false }
                });
                await this.dismissModal();
                this.props.getUserStart();
            } catch (e) {
                this.setState({ isSecondaryLoading: false });
            }
        });
    };

    private getProps = () => {
        const { inviteFrom, copy } = this.props;
        const [firstName, lastName] = inviteFrom.split(" ");
        const heading =
            firstName.slice(-1) === "s"
                ? `${copy.invite.headingBeforeName} ${firstName}' ${copy.invite.headingAfterName}`
                : `${copy.invite.headingBeforeName} ${firstName}'s ${copy.invite.headingAfterName}`;
        const subheading =
        `${copy.invite.subheadingBeforeName} ${firstName} ${lastName}'s ${copy.invite.subheadingAfterName}`;

        return {
            heading,
            subheading,
            ctaLabel: copy.invite.ctaLabel,
            ctaLabelSecondary: copy.invite.ctaLabelSecondary
        };
    };
}
const mapStateToProps = (state: IReduxState) => ({
    copy: getCopy(state, "leaderboards")
});

const mapDispatchToProps = {
    getUserStart
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(LeaderboardInviteModal);
