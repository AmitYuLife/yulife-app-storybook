import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import LeaderboardListScreen from "./leaderboard-list.screen";
import { getActiveLeaderboardId, getAcceptedLeaderboards } from "@redux/user/user.selectors";
import {
  AppDataType,
  getUserDataStart,
  updateActiveLeaderboardId,
  updateLeaderboardConsent,
} from "@redux/user/user.actions";
import { MODALS } from "@navigation/constants";
import { useBackHandler } from "@hooks";
import { showYuModal } from "@navigation/root";
import { t } from "@locale";
import { ILeaderboard } from "@redux/user/user.reducer";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

interface OwnProps {
  componentId: string;
}

type Props = OwnProps;

function dismissGenericModal() {
  Navigation.dismissModal(MODALS.generic);
}

function LeaderboardListContainer(props: Props) {
  const { componentId } = props;
  const dispatch = useDispatch();

  const activeLeaderboardId = useSelector(getActiveLeaderboardId);
  const leaderboards = useSelector(getAcceptedLeaderboards);

  const handleChangeActiveLeaderboardId = useCallback(
    (leaderboardId: string, leaderboardName: string, consent: boolean) => {
      const previousLeaderboard = (leaderboards as ILeaderboard[]).find(
        (item) => item.leaderboardId === activeLeaderboardId
      );
      if (previousLeaderboard.name !== leaderboardName) {
        dispatch(
          logMixpanelEventActionCreator("leaderboard_switched", {
            previous_name: previousLeaderboard.name,
            previous_consent: previousLeaderboard.consent,
            current_name: leaderboardName,
            current_consent: consent,
          })
        );
      }

      dispatch(updateActiveLeaderboardId(leaderboardId));
      Navigation.pop(componentId);
    },
    [dispatch, componentId, leaderboards, activeLeaderboardId]
  );

  const goBack = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  const onRefresh = useCallback(() => {
    dispatch(getUserDataStart([AppDataType.leaderboards]));
  }, [dispatch]);

  useBackHandler(() => {
    goBack();
    return true;
  });

  const handleChangeLeaderboardConsent = React.useCallback(
    (leaderboardId: string, consent: boolean, leaderboardName: string) => {
      const passProps = consent
        ? {
            ctaLabel: t("screens.leaderboard.turn_board_off.ctaLabel"),
            ctaLabelSecondary: t("screens.leaderboard.turn_board_off.ctaLabelSecondary"),
            heading: t("screens.leaderboard.turn_board_off.heading"),
            onPress: dismissGenericModal,
            onPressSecondary: () => {
              dispatch(
                logMixpanelEventActionCreator("leaderboard_toggle", {
                  name: leaderboardName,
                  isActive: !consent,
                })
              );
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
              dispatch(
                logMixpanelEventActionCreator("leaderboard_toggle", {
                  name: leaderboardName,
                  isActive: !consent,
                })
              );
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
    },
    []
  );

  return (
    <LeaderboardListScreen
      leaderboards={leaderboards}
      activeLeaderboardId={activeLeaderboardId}
      onChangeActiveLeaderboard={handleChangeActiveLeaderboardId}
      onChangeLeaderboardConsent={handleChangeLeaderboardConsent}
      onRefresh={onRefresh}
      onLeftIconPress={goBack}
      onRightIconPress={null}
    />
  );
}

export default LeaderboardListContainer;
