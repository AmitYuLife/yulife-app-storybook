import { upperFirst } from "lodash";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import React, { memo, useCallback, useMemo } from "react";
import { Alert } from "react-native";
import { Navigation } from "@navigation/main";
import { useDispatch } from "react-redux";
import { sendTestPush } from "@redux/notifications/notifications.actions";
import { getUserDataStart, getUserStart } from "@redux/user/user.actions";
import { DebugScreen } from "@screens";
import Logger from "@services/logging/logger";
import { MODALS, ROUTES } from "@navigation/constants";
import { getYuScreen } from "@graphql/yuscreen/getYuScreen.gql";
import { sudokuReset } from "@redux/sudoku/sudoku.actions";
import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { IDebugItem } from "@components/screens/member/debug/debug.screen";
import { showYuModal } from "@navigation/root";

interface IDebugContainerProps {
  componentId: string;
}

enum DebugCodes {
  inspect = "inspect",
  features = "features",
  videoPlayer = "video-player",
  dailySurvey = "daily-survey",
  levelSelector = "level-selector",
  toggleLeanplum = "toggle-leanplum",
  sleepMeditation = "sleep-meditation",
  inspectOpponent = "inspect-opponent",
  showLeaderboardSearch = "show-leaderboard-search",
  sendTestPushNotification = "send-test-push-notification",
  playGround = "play-ground",
  workoutDebug = "workout-debug",
  yuHealthDebug = "yu-health-debug",
}

const DebugContainer = memo(({ componentId }: IDebugContainerProps) => {
  const dispatch = useDispatch();
  const [resetData] = useMutation(gql("ResetDataDocument"));
  const { data } = useQuery(gql("GetDebugCodesDocument"), { fetchPolicy: "no-cache" });

  const handleClose = useCallback((): void => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  const formatTitle = useCallback((code: string): string => {
    const formattedTitle = upperFirst(code.replace(/-/g, " "));

    if (code.startsWith(DebugCodes.toggleLeanplum)) {
      return `${formattedTitle} (${Logger.leanplum?.isDevMode ? "dev" : "prod"})`;
    }

    return formattedTitle;
  }, []);

  const debugCodes = useMemo(() => [...Object.values<DebugCodes>(DebugCodes), ...(data?.getDebugCodes || [])], [data]);
  const personalProductDebugCodes = useMemo(
    () => ["personal-products-reset-fib", "personal-products-reset-dental"],
    []
  );

  const listData: IDebugItem[] = useMemo(
    () =>
      [...debugCodes]
        .sort((a, b) => (a > b ? 1 : -1))
        .map((code) => ({
          id: code,
          title: formatTitle(code),
          onPress: async () => {
            try {
              switch (code) {
                case DebugCodes.features:
                  return Navigation.push(componentId, {
                    component: {
                      id: ROUTES.userFeatures,
                      name: ROUTES.userFeatures,
                    },
                  });
                case DebugCodes.dailySurvey:
                  return Navigation.push(componentId, {
                    component: {
                      id: ROUTES.journey,
                      name: ROUTES.journey,
                      passProps: {
                        journeyId: "daily_survey",
                      },
                    },
                  });

                case DebugCodes.sendTestPushNotification:
                  return dispatch(sendTestPush());

                case DebugCodes.levelSelector:
                  return Navigation.push(componentId, {
                    component: {
                      id: ROUTES.levelSelector,
                      name: ROUTES.levelSelector,
                    },
                  });

                case DebugCodes.toggleLeanplum:
                  return Logger.leanplum.toggleDevelopmentMode();

                case DebugCodes.sleepMeditation:
                  return dispatch({
                    type: SduiActionType.SDUI_ACTION_NAVIGATE,
                    payload: JSON.stringify({
                      routeId: "sleep_meditation",
                      isSduiStatic: true,
                      props: {
                        stepId: "goal_media",
                        dynamicId: "sleep_meditation",
                      },
                    }),
                  });

                case DebugCodes.inspectOpponent:
                  return Navigation.push(componentId, {
                    component: {
                      id: ROUTES.inspect,
                      name: ROUTES.inspect,
                      passProps: {
                        showOpponent: true,
                      },
                    },
                  });
                case DebugCodes.playGround:
                  return Navigation.push(componentId, {
                    component: {
                      id: ROUTES.debugPlayground,
                      name: ROUTES.debugPlayground,
                    },
                  });

                case DebugCodes.workoutDebug:
                  return Navigation.push(componentId, {
                    component: {
                      id: ROUTES.workoutDebug,
                      name: ROUTES.workoutDebug,
                    },
                  });

                case DebugCodes.yuHealthDebug:
                  return Navigation.push(componentId, {
                    component: {
                      id: ROUTES.yuHealthDebug,
                      name: ROUTES.yuHealthDebug,
                    },
                  });

                case DebugCodes.showLeaderboardSearch:
                  return showYuModal({
                    component: {
                      id: MODALS.leaderboardSearch,
                      name: MODALS.leaderboardSearch,
                      passProps: {
                        heading: "Yulife",
                        subHeading: "All Companies",
                      },
                    },
                  });
              }

              await resetData({ variables: { code } });
              Alert.alert("Success");
              dispatch(getUserStart());
              dispatch(getUserDataStart());
              dispatch(sudokuReset());

              if (personalProductDebugCodes.includes(code)) {
                await getYuScreen();
              }
            } catch (e) {
              Alert.alert("Fail");
            }
          },
        })),
    [componentId, debugCodes, dispatch, formatTitle, resetData, personalProductDebugCodes]
  );

  return <DebugScreen onPressClose={handleClose} data={listData} />;
});

export default DebugContainer;
