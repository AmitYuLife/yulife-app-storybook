import React, { memo } from "react";
import { GQL_MUTATION_REPLY_TO_LEADERBOARD_INVITE, ReplyToLeaderboardInviteMutationTuple } from "@graphql/user";
import { GenericScreen } from "@screens/index";
import { Navigation } from "@navigation/main";
import { getUserLeaderboardsStart } from "@redux/user/user.actions";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { t } from "@locale";

interface IProps {
  componentId: string;
  leaderboardId: string;
  inviteFrom: string;
}

const LeaderboardInviteModal = ({ componentId, inviteFrom, leaderboardId }: IProps) => {
  const [loadingLabel, setLoadingLabel] = React.useState<"primary" | "secondary">(null);
  const [replyToInvite]: ReplyToLeaderboardInviteMutationTuple = useMutation(GQL_MUTATION_REPLY_TO_LEADERBOARD_INVITE);
  const dispatch = useDispatch();
  const dismissModal = () => Navigation.dismissModal(componentId);

  const [firstName, lastName] = inviteFrom.split(" ");
  const heading =
    firstName.slice(-1) === "s"
      ? `${t("modals.leaderboards.invite.heading_before_name")} ${firstName}' ${t(
          "modals.leaderboards.invite.heading_after_name"
        )}`
      : `${t("modals.leaderboards.invite.heading_before_name")} ${firstName}'s ${t(
          "modals.leaderboards.invite.heading_after_name"
        )}`;
  const subheading = `${t("modals.leaderboards.invite.heading_before_name")} ${firstName} ${lastName}'s ${t(
    "modals.leaderboards.invite.heading_after_name"
  )}`;
  const ctaLabel = t("modals.leaderboards.invite.cta_label");
  const ctaLabelSecondary = t("modals.leaderboards.invite.cta_label_secondary");

  const handlePress = (hasAccepted: boolean) => async () => {
    setLoadingLabel(hasAccepted ? "primary" : "secondary");

    try {
      await replyToInvite({
        variables: { leaderboardId, hasAccepted },
      });
      dismissModal();
      dispatch(getUserLeaderboardsStart());
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

export default memo(LeaderboardInviteModal);
