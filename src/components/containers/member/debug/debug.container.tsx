import { upperFirst } from "lodash";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
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
import { clearApolloCache } from "@graphql/_core/clearCache";
import { clearImageDiskCache, clearImageMemoryCache } from "@atoms";
import { Storage, StorageKey } from "@utils/storage";

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
  clearApolloCachedData = "clear-apollo-cached-data",
  sendTestPushNotification = "send-test-push-notification",
  playGround = "play-ground",
  workoutDebug = "workout-debug",
  yuHealthDebug = "yu-health-debug",
  testJourney = "test-journey",
  clearExpoDiskCache = "clear-expo-disk-cache",
  clearExpoMemoryCache = "clear-expo-memory-cache",
  watchDebug = "watch-debug",
}

const sortFn = (a: string, b: string, favourites: Record<string, boolean>) => {
  const aIsFavorite = favourites[a] || false;
  const bIsFavorite = favourites[b] || false;

  // If both or neither are favorites, sort alphabetically
  if (aIsFavorite === bIsFavorite) {
    return a.localeCompare(b);
  }

  // If only one is a favorite, it comes first
  return bIsFavorite ? 1 : -1;
};

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

  const [debugFavourites, setDebugFavourites] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    (async () => {
      const debugFavouritesStr = await Storage.getItem(StorageKey.debugFavourites);
      setDebugFavourites(debugFavouritesStr ? JSON.parse(debugFavouritesStr) : {});
    })();
  }, []);

  const onPress = useCallback(
    async (code: string) => {
      try {
        switch (code) {
          case DebugCodes.testJourney:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.testJourney,
                name: ROUTES.testJourney,
              },
            });
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
          case DebugCodes.watchDebug:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.watchDebug,
                name: ROUTES.watchDebug,
              },
            });
          case DebugCodes.clearApolloCachedData:
            await clearApolloCache();
            return Alert.alert("Apollo cache cleared");
          case DebugCodes.clearExpoDiskCache:
            await clearImageDiskCache();
            return Alert.alert("expo-image disk cache cleared");
          case DebugCodes.clearExpoMemoryCache:
            await clearImageMemoryCache();
            return Alert.alert("expo-image memory cache cleared");
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
    [componentId, dispatch, personalProductDebugCodes, resetData]
  );

  const listData: IDebugItem[] = useMemo(
    () =>
      [...debugCodes]
        .sort((a, b) => sortFn(a, b, debugFavourites))
        .map((code) => ({
          id: code,
          title: formatTitle(code),
          isFavourite: !!debugFavourites[code],
          onFavouriteToggle: async () => {
            setDebugFavourites((prev) => {
              const newDebugFavourites = {
                ...prev,
                [code]: !prev[code],
              };
              Storage.setItem(StorageKey.debugFavourites, JSON.stringify(newDebugFavourites));
              return newDebugFavourites;
            });
          },
          onPress: () => onPress(code),
        })),
    [debugCodes, debugFavourites, formatTitle, onPress]
  );

  return <DebugScreen onPressClose={handleClose} data={listData} />;
});

export default DebugContainer;
