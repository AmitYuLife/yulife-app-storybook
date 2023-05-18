import React, { memo, useCallback, useMemo, useState } from "react";
import { checkPermissions, SettingsPermissions } from "@services/fitkit/permissions.helpers";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import LeaderboardSettingsScreen from "@screens/member/leaderboard-settings/leaderboard-settings.screen";
import { useSelector, useDispatch } from "react-redux";
import { getAcceptedLeaderboards, getUserFeatures } from "@redux/user/user.selectors";
import { t } from "@locale";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { updateLeaderboardConsent } from "@redux/user/user.actions";
import { showYuModal } from "@navigation/root";
import { ILeaderboard } from "@redux/user/user.reducer";
import { GQL_QUERY_GET_SUDOKU_STATS } from "@graphql/brainGames/sudoku/getSudokuStats.gql";
import { useMutation, useQuery } from "@apollo/client";
import { UpdateSudokuLeaderboardConsent, UpdateSudokuLeaderboardConsentVariables } from "@graphql/_core/schema";
import { GQL_MUTATION_UPDATE_SUDOKU_LEADERBOARD_CONSENT } from "@graphql/brainGames/sudoku/updateSudokuLeaderboardConsent.gql";

const SUDOKU_LEADERBOARD: ILeaderboard = {
  days: 0,
  name: t("sudoku.title"),
  metric: "",
  consent: false,
  inviteFrom: "",
  hasAccepted: false,
  leaderboardId: "sudoku",
};

interface IProps {
  componentId: string;
}

const LeaderboardSettingsContainer = ({ componentId }: IProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { showBrainGameSudoku } = useSelector(getUserFeatures);
  const standardLeaderboards = useSelector(getAcceptedLeaderboards);
  const [settingsPermissions, setSettingsPermissions] = useState<SettingsPermissions>();
  const { refetch: refetchSudoku, data: sudokuStats } = useQuery(GQL_QUERY_GET_SUDOKU_STATS, {
    fetchPolicy: "network-only",
  });

  const [updateSudokuLeaderboardConsent] = useMutation<
    UpdateSudokuLeaderboardConsent,
    UpdateSudokuLeaderboardConsentVariables
  >(GQL_MUTATION_UPDATE_SUDOKU_LEADERBOARD_CONSENT);

  const leaderboards = useMemo(() => {
    return [
      ...standardLeaderboards,
      ...(showBrainGameSudoku ? [{ ...SUDOKU_LEADERBOARD, consent: sudokuStats?.getSudokuStats?.leaderboardId }] : []),
    ];
  }, [showBrainGameSudoku, standardLeaderboards, sudokuStats?.getSudokuStats?.leaderboardId]);

  const getPermissionStatus = useCallback(async () => {
    setLoading(true);
    const permissions = await checkPermissions();
    setSettingsPermissions(permissions);
    setLoading(false);
  }, []);

  const dismissModal = useCallback(() => {
    Navigation.dismissModal(MODALS.generic);
  }, []);

  const onToggleSudoku = useCallback(
    ({ consent }: { consent: boolean }) => {
      if (consent) {
        showYuModal({
          component: {
            id: MODALS.sudokuLeaderboardConsent,
            name: MODALS.sudokuLeaderboardConsent,
            passProps: {
              onConsented: () => {
                refetchSudoku();
              },
            },
          },
        });
      } else {
        showYuModal({
          component: {
            passProps: {
              ctaLabel: t("screens.leaderboard.turn_board_off.ctaLabel"),
              ctaLabelSecondary: t("screens.leaderboard.turn_board_off.ctaLabelSecondary"),
              heading: t("screens.leaderboard.turn_board_off.heading"),
              subheading: t("screens.leaderboard.turn_board_off.subheading"),
              onPressSecondary: () => {
                updateSudokuLeaderboardConsent({
                  variables: {
                    consent: false,
                  },
                  onCompleted: () => {
                    dispatch(
                      logMixpanelEventActionCreator("leaderboard_toggle", {
                        name: "sudoku",
                        isActive: false,
                      })
                    );
                    Navigation.dismissModal(MODALS.generic);
                    refetchSudoku();
                  },
                });
              },
              onPress: () => Navigation.dismissModal(MODALS.generic),
            },
            id: MODALS.generic,
            name: MODALS.generic,
          },
        });
      }
    },
    [dispatch, refetchSudoku, updateSudokuLeaderboardConsent]
  );

  const updateConsent = useCallback(
    ({ name, consent, leaderboardId }: { consent: boolean; name: string; leaderboardId: string }) => {
      logMixpanelEventActionCreator("leaderboard_toggle", {
        name: name,
        isActive: consent,
      });

      dispatch(updateLeaderboardConsent({ consent, leaderboardId }));
      dismissModal();
    },
    [dismissModal, dispatch]
  );

  const onChangeConsent = useCallback(
    ({ leaderboardId, name, consent }: { leaderboardId: string; name: string; consent: boolean }) => {
      if (leaderboardId === "sudoku") {
        onToggleSudoku({ consent });
        return;
      }

      const passProps = !consent
        ? {
            ctaLabel: t("screens.leaderboard.turn_board_off.ctaLabel"),
            ctaLabelSecondary: t("screens.leaderboard.turn_board_off.ctaLabelSecondary"),
            heading: t("screens.leaderboard.turn_board_off.heading"),
            onPress: () => Navigation.dismissModal(MODALS.generic),
            onPressSecondary: () => {
              updateConsent({ name, consent, leaderboardId });
            },
            subheading: t("screens.leaderboard.turn_board_off.subheading"),
          }
        : {
            ctaLabel: t("screens.leaderboard.turn_board_on.ctaLabel"),
            ctaLabelSecondary: t("screens.leaderboard.turn_board_on.ctaLabelSecondary"),
            heading: t("screens.leaderboard.turn_board_on.heading"),
            onPress: () => {
              updateConsent({ name, consent, leaderboardId });
            },
            onPressSecondary: dismissModal,
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
    [dismissModal, onToggleSudoku, updateConsent]
  );

  const onRightIconPress = useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.settings), []);

  return (
    <LeaderboardSettingsScreen
      loading={loading}
      leaderboards={leaderboards}
      settingsPermissions={settingsPermissions}
      updatePermissions={getPermissionStatus}
      onLeftIconPress={onLeftIconPress}
      onChangeConsent={onChangeConsent}
      onRightIconPress={onRightIconPress}
    />
  );
};

export default memo(LeaderboardSettingsContainer);
