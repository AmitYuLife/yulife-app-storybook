import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "react-native-navigation";
import LeaderboardListScreen from "./leaderboard-list.screen";
import { getActiveLeaderboardId, getUserFeatures } from "@redux/user/user.selectors";
import { getAcceptedLeaderboards } from "@redux/user/user.selectors";
import { updateActiveLeaderboardId, updateLeaderboardConsent } from "@redux/user/user.actions";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { getCopySelector } from "@redux/copy/copy.selectors";

interface OwnProps {
  componentId: string;
}

type Props = OwnProps;

const leaderboardCopySelector = getCopySelector("leaderboards");

function dismissGenericModal() {
  Navigation.dismissModal(MODALS.generic);
}

function handleCreateNewLeaderboard() {
  Navigation.showModal({
    component: {
      id: MODALS.createLeaderboard,
      name: MODALS.createLeaderboard,
    },
  });
}

function LeaderboardListContainer(props: Props) {
  const { componentId } = props;
  const dispatch = useDispatch();

  const features = useSelector(getUserFeatures);
  const activeLeaderboardId = useSelector(getActiveLeaderboardId);
  const leaderboards = useSelector(getAcceptedLeaderboards);
  const leaderboardCopy = useSelector(leaderboardCopySelector);

  const handleChangeActiveLeaderboardId = useCallback(
    (leaderboardId: string) => {
      dispatch(updateActiveLeaderboardId(leaderboardId));
      Navigation.pop(componentId);
    },
    [dispatch, componentId]
  );

  const goBack = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  useBackHandler(() => {
    goBack();
    return true;
  });

  const handleChangeLeaderboardConsent = React.useCallback(
    (leaderboardId: string, consent: boolean) => {
      const { turnBoardOff, turnBoardOn } = leaderboardCopy;
      const passProps = consent
        ? {
            ctaLabel: turnBoardOff.ctaLabel,
            ctaLabelSecondary: turnBoardOff.ctaLabelSecondary,
            heading: turnBoardOff.heading,
            onPress: dismissGenericModal,
            onPressSecondary: () => {
              dispatch(updateLeaderboardConsent({ consent: !consent, leaderboardId }));
              dismissGenericModal();
            },
            subheading: turnBoardOff.subheading,
          }
        : {
            ctaLabel: turnBoardOn.ctaLabel,
            ctaLabelSecondary: turnBoardOn.ctaLabelSecondary,
            heading: turnBoardOn.heading,
            onPress: () => {
              dispatch(updateLeaderboardConsent({ consent: !consent, leaderboardId }));
              dismissGenericModal();
            },
            onPressSecondary: dismissGenericModal,
            subheading: turnBoardOn.subheading,
          };

      Navigation.showModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps,
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [leaderboardCopy]
  );

  return (
    <LeaderboardListScreen
      leaderboards={leaderboards}
      activeLeaderboardId={activeLeaderboardId}
      onChangeActiveLeaderboard={handleChangeActiveLeaderboardId}
      onChangeLeaderboardConsent={handleChangeLeaderboardConsent}
      onLeftIconPress={goBack}
      onRightIconPress={!features.showCreateLeaderboard ? null : handleCreateNewLeaderboard}
    />
  );
}

export default LeaderboardListContainer;
