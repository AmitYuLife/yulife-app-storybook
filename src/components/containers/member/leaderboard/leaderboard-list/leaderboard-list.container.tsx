import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import LeaderboardListScreen from "./leaderboard-list.screen";
import { getActiveLeaderboardId, getUserFeatures } from "@redux/user/user.selectors";
import { getAcceptedLeaderboards } from "@redux/user/user.selectors";
import {
  getUserLeaderboardsStart,
  updateActiveLeaderboardId,
  updateLeaderboardConsent,
} from "@redux/user/user.actions";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@hooks";
import { showYuModal } from "@navigation/root";
import { t } from "@locale";

interface OwnProps {
  componentId: string;
}

type Props = OwnProps;

function dismissGenericModal() {
  Navigation.dismissModal(MODALS.generic);
}

function handleCreateNewLeaderboard() {
  showYuModal({
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

  const onRefresh = useCallback(() => {
    dispatch(getUserLeaderboardsStart());
  }, [dispatch]);

  useBackHandler(() => {
    goBack();
    return true;
  });

  const handleChangeLeaderboardConsent = React.useCallback((leaderboardId: string, consent: boolean) => {
    const passProps = consent
      ? {
          ctaLabel: t("screens.leaderboard.turn_board_off.ctaLabel"),
          ctaLabelSecondary: t("screens.leaderboard.turn_board_off.ctaLabelSecondary"),
          heading: t("screens.leaderboard.turn_board_off.heading"),
          onPress: dismissGenericModal,
          onPressSecondary: () => {
            dispatch(updateLeaderboardConsent({ consent: !consent, leaderboardId }));
            dismissGenericModal();
          },
          subheading: t("screens.leaderboard.turn_board_off.subheading"),
        }
      : {
          ctaLabel: t("screens.leaderboard.turn_board_on.ctaLabel"),
          ctaLabelSecondary: t("screens.leaderboard.turn_board_on.ctaLabelSecondary"),
          heading: t("screens.leaderboard.turn_board_on.heading"),
          onPress: () => {
            dispatch(updateLeaderboardConsent({ consent: !consent, leaderboardId }));
            dismissGenericModal();
          },
          onPressSecondary: dismissGenericModal,
          subheading: t("screens.leaderboard.turn_board_on.subheading"),
        };

    showYuModal({
      component: {
        id: MODALS.generic,
        name: MODALS.generic,
        passProps,
      },
    });
  }, []);

  return (
    <LeaderboardListScreen
      leaderboards={leaderboards}
      activeLeaderboardId={activeLeaderboardId}
      onChangeActiveLeaderboard={handleChangeActiveLeaderboardId}
      onChangeLeaderboardConsent={handleChangeLeaderboardConsent}
      onRefresh={onRefresh}
      onLeftIconPress={goBack}
      onRightIconPress={!features.showCreateLeaderboard ? null : handleCreateNewLeaderboard}
    />
  );
}

export default LeaderboardListContainer;
