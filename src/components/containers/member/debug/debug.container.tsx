import { upperFirst } from "lodash";
import { useMutation, useQuery } from "@apollo/client";
import { SduiActionType, gql } from "@graphql/__generated";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";
import { sendTestPush } from "@redux/notifications/notifications.actions";
import { getUserDataStart, getUserStart } from "@redux/user/user.actions";
import { DebugScreen } from "@screens";
import Logger from "@services/logging/logger";
import { ROUTES } from "@navigation/constants";
import { sudokuReset } from "@redux/sudoku/sudoku.actions";
import { IDebugItem } from "@components/screens/member/debug/debug.screen";
import { labels } from "@navigation/root";
import { clearApolloCache } from "@graphql/_core/clearCache";
import { clearImageDiskCache, clearImageMemoryCache } from "@atoms";
import { Storage, StorageKey } from "@utils/storage";
import { updateYuScreenMaximiseYuAnimationSeen } from "@redux/yu-screen/yu-screen.actions";
import { clearSeenQuestMapNewUserOnboardingAnimation } from "@redux/quest-map/quest-map.actions";
import moment from "moment";
import { queryHealthSmokingState } from "@redux/health-smoking/health-smoking.actions";
import { getCurrentUserId } from "@redux/user/user.selectors";

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
  showGiftingSearch = "show-gifting-search",
  clearApolloCachedData = "clear-apollo-cached-data",
  sendTestPushNotification = "send-test-push-notification",
  playGround = "play-ground",
  componentBenchmark = "component-benchmark",
  play2048 = "play-2048",
  workoutDebug = "workout-debug",
  debugSmokingJourneyPlants = "debug-smoking-journey-plants",
  debugSmokingJourneyTree = "debug-smoking-journey-tree",
  debugSmokingJourneyStories = "debug-smoking-journey-stories",
  yuHealthDebug = "yu-health-debug",
  testJourney = "test-journey",
  clearExpoDiskCache = "clear-expo-disk-cache",
  clearExpoMemoryCache = "clear-expo-memory-cache",
  watchDebug = "watch-debug",
  clearYuScreenAnimationSeen = "clear-yu-screen-animation-seen",
  clearQuestOnboardingSeen = "clear-quest-onboarding-seen",
  donationsBattlePass = "donations-battle-pass",
  querySmokingState = "query-smoking-state",
  wrapped = "wrapped",
  sendGiftToSelf = "send-gift-to-self",
  genericHeading = "generic-heading",
  breathingExercise = "breathing-exercise",
  pathways = "pathways",
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

  const currentUserId = useSelector(getCurrentUserId);

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
          case DebugCodes.querySmokingState:
            Alert.alert("Success");
            return dispatch(queryHealthSmokingState());

          case DebugCodes.clearYuScreenAnimationSeen:
            Alert.alert("Success");
            return dispatch(updateYuScreenMaximiseYuAnimationSeen({ timestamp: moment().subtract(1, "day").format() }));

          case DebugCodes.clearQuestOnboardingSeen:
            Alert.alert("Success");
            return dispatch(clearSeenQuestMapNewUserOnboardingAnimation());

          case DebugCodes.testJourney:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.testJourney,
                name: ROUTES.testJourney,
              },
            });

          case DebugCodes.breathingExercise:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.breathingExercise,
                name: ROUTES.breathingExercise,
                passProps: {
                  lottieUri:
                    "https://yulife-local.imgix.net/media/meditation/meditopia/lottie/florest-meditation-lottie-v2.1.json?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=9958acfe532576df1a4bed3eab6c5232",
                  data: {
                    id: "breathing_4_4_4_4",
                    availableDurations: [60000, 180000, 300000],
                    parts: [
                      { id: "4_4_4_1", type: "Inhale", duration: 4000 },
                      { id: "4_4_4_2", type: "Hold", duration: 4000 },
                      { id: "4_4_4_3", type: "Exhale", duration: 4000 },
                      { id: "4_4_4_4", type: "Hold", duration: 4000 },
                    ],
                  },
                  // data: {
                  //   id: "breathing_4_7_8",
                  //   availableDurations: [60000, 180000, 300000],
                  //   parts: [
                  //     { id: "4_7_8_1", type: "Inhale", duration: 4000 },
                  //     { id: "4_7_8_2", type: "Hold", duration: 7000 },
                  //     { id: "4_7_8_3", type: "Exhale", duration: 8000 },
                  //   ],
                  // },
                },
              },
            });

          case DebugCodes.debugSmokingJourneyPlants:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.smokingJourneyPlants,
                name: ROUTES.smokingJourneyPlants,
              },
            });
          case DebugCodes.debugSmokingJourneyStories:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.smokingJourneyStories,
                name: ROUTES.smokingJourneyStories,
              },
            });
          case DebugCodes.debugSmokingJourneyTree:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.smokingJourneyTree,
                name: ROUTES.smokingJourneyTree,
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

          case DebugCodes.donationsBattlePass:
            await Navigation.push(ROUTES.rewards, {
              component: {
                id: ROUTES.battlePass,
                name: ROUTES.battlePass,
              },
            });
            labels[4].onPress();
            return handleClose();

          case DebugCodes.toggleLeanplum:
            return Logger.leanplum.toggleDevelopmentMode();

          case DebugCodes.sleepMeditation:
            return dispatch({
              type: SduiActionType.SduiActionNavigate,
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
          case DebugCodes.play2048:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.game2048Selector,
                name: ROUTES.game2048Selector,
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
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.leaderboardSearch,
                name: ROUTES.leaderboardSearch,
                passProps: {
                  heading: "Yulife",
                  subHeading: "All Companies",
                },
              },
            });

          case DebugCodes.showGiftingSearch:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.gifting,
                name: ROUTES.gifting,
              },
            });

          case DebugCodes.watchDebug:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.watchDebug,
                name: ROUTES.watchDebug,
              },
            });

          case DebugCodes.componentBenchmark:
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.debugComponentBenchmark,
                name: ROUTES.debugComponentBenchmark,
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

          case DebugCodes.wrapped: {
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.wrapped,
                name: ROUTES.wrapped,
                passProps: {
                  wrappedId: "2024",
                },
              },
            });
          }

          case DebugCodes.sendGiftToSelf: {
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.gifting,
                name: ROUTES.gifting,
                passProps: {
                  preselectedUserIds: [currentUserId],
                },
              },
            });
          }

          case DebugCodes.genericHeading: {
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.genericHeading,
                name: ROUTES.genericHeading,
              },
            });
          }

          case DebugCodes.pathways: {
            return Navigation.push(componentId, {
              component: {
                id: ROUTES.pathways,
                name: ROUTES.pathways,
              },
            });
          }
        }

        await resetData({ variables: { code } });
        Alert.alert("Success");
        dispatch(getUserStart());
        dispatch(getUserDataStart());
        dispatch(sudokuReset());
      } catch (e) {
        Alert.alert("Fail");
      }
    },
    [componentId, dispatch, handleClose, resetData]
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
