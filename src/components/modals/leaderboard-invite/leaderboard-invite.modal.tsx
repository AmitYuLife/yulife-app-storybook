import { GQL_MUTATION_REPLY_TO_LEADERBOARD_INVITE, ReplyToLeaderboardInviteMutationTuple } from "@graphql/user";
import { GenericScreen } from "@screens/index";
import * as React from "react";
import { Navigation } from "@navigation/main";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import { getUserStart } from "@redux/user/user.actions";
import { useMutation } from "@apollo/client";

interface IProps {
  componentId: string;
  leaderboardId: string;
  inviteFrom: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = ConnectedState & ConnectedDispatch & IProps;

const LeaderboardInviteModal: React.FC<Props> = ({
  componentId,
  inviteFrom,
  copy,
  leaderboardId,
  getUserStart: dispatchGetUserStart,
}) => {
  const [loadingLabel, setLoadingLabel] = React.useState<"primary" | "secondary">(null);

  const [replyToInvite]: ReplyToLeaderboardInviteMutationTuple = useMutation(GQL_MUTATION_REPLY_TO_LEADERBOARD_INVITE);

  const dismissModal = () => Navigation.dismissModal(componentId);

  const [firstName, lastName] = inviteFrom.split(" ");
  const heading =
    firstName.slice(-1) === "s"
      ? `${copy.invite.headingBeforeName} ${firstName}' ${copy.invite.headingAfterName}`
      : `${copy.invite.headingBeforeName} ${firstName}'s ${copy.invite.headingAfterName}`;
  const subheading = `${copy.invite.subheadingBeforeName} ${firstName} ${lastName}'s ${copy.invite.subheadingAfterName}`;
  const ctaLabel = copy.invite.ctaLabel;
  const ctaLabelSecondary = copy.invite.ctaLabelSecondary;

  const handlePress = (hasAccepted: boolean) => async () => {
    setLoadingLabel(hasAccepted ? "primary" : "secondary");

    try {
      await replyToInvite({
        variables: { leaderboardId, hasAccepted },
      });
      dismissModal();
      dispatchGetUserStart();
    } catch (e) {
      setLoadingLabel(null);
    }
  };

  return (
    <GenericScreen
      heading={heading}
      subheading={subheading}
      ctaLabel={ctaLabel}
      ctaLabelSecondary={ctaLabelSecondary}
      isPrimaryLoading={loadingLabel === "primary"}
      isSecondaryLoading={loadingLabel === "secondary"}
      onPress={handlePress(true)}
      onPressSecondary={handlePress(false)}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "leaderboards"),
});

const mapDispatchToProps = {
  getUserStart,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(LeaderboardInviteModal);
