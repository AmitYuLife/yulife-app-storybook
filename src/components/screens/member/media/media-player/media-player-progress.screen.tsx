import moment from "moment";
import { truncate } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useLazyQuery } from "@apollo/client";
import { StyleSheet, View } from "react-native";
import { Navigation } from "react-native-navigation";
import React, { memo, useCallback, useMemo, useState } from "react";
import { t } from "@locale";
import { useAsyncEffect } from "@hooks";
import { Colours, Style } from "@styles";
import { Button } from "@components/molecules";
import { showYuModal } from "@navigation/root";
import { MODALS, ROUTES } from "@navigation/constants";
import { Storage, StorageKey } from "@utils/storage";
import { TextTemplate, Image } from "@atoms";
import { IActiveLevel } from "@redux/levels/levels.types";
import { challengeCancelAction } from "@redux/levels/levels.actions";
import { GenericFullScreenLoading, GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { IMediaPlayerContainerProps } from "@components/containers/member/media/media-player/media-player.container";
import { GetMediaQuery, gql } from "@graphql/__generated";
import { getRouteState } from "@redux/app/app.selectors";

type IMedia = GetMediaQuery["getMedia"][0];
export interface IVideoProgressStorage {
  id: string;
  seconds: number;
}

export interface IMediaPlayerProgressScreenProps extends Pick<IMediaPlayerContainerProps, "onLeftIconPress"> {
  activeLevel: IActiveLevel;
  onDismissPress: () => void;
}

const MediaPlayerProgressScreen = ({
  activeLevel,
  onDismissPress,
  onLeftIconPress,
}: IMediaPlayerProgressScreenProps) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeVideo, setActiveVideo] = useState<IMedia>(null);
  const [activeVideoProgress, setActiveVideoProgress] = useState<IVideoProgressStorage>(null);
  const currentRoute = useSelector(getRouteState);
  const [getVideos] = useLazyQuery(gql("GetMediaDocument"), {
    fetchPolicy: "network-only",
    variables: {
      tags: ["meditopia_challenges"],
    },
  });

  const isVideoProgressStorage = useCallback((videoStorage: unknown): videoStorage is IVideoProgressStorage => {
    return typeof videoStorage === "object" && "id" in videoStorage && "seconds" in videoStorage;
  }, []);

  const getVideoProgress = useCallback(async (): Promise<IVideoProgressStorage | null> => {
    const videoProgressStorage = await Storage.getItem(StorageKey.mediaPlayerProgress);

    if (!videoProgressStorage) {
      return null;
    }

    const videoProgress = JSON.parse(videoProgressStorage);

    if (!isVideoProgressStorage(videoProgress)) {
      return;
    }

    return isVideoProgressStorage(videoProgress) ? videoProgress : null;
  }, [isVideoProgressStorage]);

  const cancelChallenge = useCallback(() => {
    dispatch(challengeCancelAction());
  }, [dispatch]);

  const getHasChallengeEnded = useCallback(
    (video: IMedia, progress: IVideoProgressStorage): boolean => {
      const videoDuration = video?.duration || 0;
      const videoProgressInSeconds = progress?.seconds || 0;
      const durationLeft = videoDuration - videoProgressInSeconds;

      return (
        moment()
          // Add an additional time to be extra sure
          // that we don't start a challenge that could expire.
          .add(5, "minutes")
          // Add the media duration from the end time
          // Just to be sure the user can't resume the challenge
          // when there is not enough time left to complete it.
          .add(durationLeft, "seconds")
          .isAfter(activeLevel.endDateTime)
      );
    },
    [activeLevel]
  );

  useAsyncEffect(async (): Promise<void> => {
    const result = await getVideos();
    const videoProgress = await getVideoProgress();
    const videoToResume = (result?.data?.getMedia || []).find((video) => video.id === videoProgress?.id);
    const isVideoResumable = videoProgress && videoToResume && currentRoute === ROUTES.quests;

    if (!isVideoResumable) {
      return;
    }

    setIsLoading(false);
    setActiveVideo(videoToResume);
    setActiveVideoProgress(videoProgress);

    dispatch(
      logMixpanelEventActionCreator("media_challenge_resume", {
        progress: videoProgress?.seconds,
        duration: videoToResume?.duration,
        levelSlotId: activeLevel?.levelSlotId,
        id: activeLevel?.id,
        level: activeLevel?.level,
        yuniversalMap: activeLevel.yuniversalMap,
        levelSlotTemplateId: activeLevel?.levelSlotTemplateId,
      })
    );
  }, [
    activeLevel?.levelSlotId,
    activeLevel?.id,
    activeLevel?.level,
    activeLevel?.yuniversalMap,
    activeLevel?.levelSlotTemplateId,
    isVideoProgressStorage,
    getVideoProgress,
    cancelChallenge,
    getHasChallengeEnded,
    getVideos,
    currentRoute,
  ]);

  /**
   * Navigates to the media screen to resume the challenge
   */
  const onResumePress = useCallback(async () => {
    // This solves a rare use case where the user
    // lingers on this screen for a long time and the
    // end date has since passed, the challenge cannot be
    // continue's so we cancel it and take them to the quest map.
    if (!activeVideo || getHasChallengeEnded(activeVideo, activeVideoProgress)) {
      return await showYuModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            isPrimaryOnePressOnly: true,
            heading: t("modals.generic_modal.on_meditopia_error.heading"),
            ctaLabel: t("modals.generic_modal.on_meditopia_error.cta_label"),
            subheading: t("modals.generic_modal.on_meditopia_error.subheading"),
            onPress: () => {
              cancelChallenge();
              Navigation.dismissAllModals();
            },
          },
        },
      });
    }

    Navigation.push(ROUTES.quests, {
      component: {
        id: ROUTES.mediaPlayer,
        name: ROUTES.mediaPlayer,
        passProps: {
          video: activeVideo,
          autoPlay: true,
          trackingInfo: {},
          orientation: "portrait",
          eventType: "mindfullness",
          level: activeLevel?.level,
          levelSlotId: activeLevel?.levelSlotId,
          levelSlotTemplateId: activeLevel?.levelSlotTemplateId,
          yuniversalMap: activeLevel?.yuniversalMap,
          startTimeInSeconds: activeVideoProgress.seconds,
          startChallengeButtonLabel: t("screens.meditopia_media_list.startChallengeButtonLabel"),
          shouldCreateChallenge: false,
        },
        options: {
          popGesture: false,
        },
      },
    });
  }, [
    activeLevel?.level,
    activeLevel?.yuniversalMap,
    activeLevel?.levelSlotId,
    activeLevel?.levelSlotTemplateId,
    activeVideo,
    activeVideoProgress,
    getHasChallengeEnded,
    cancelChallenge,
  ]);

  const progressTimeFormatted = useMemo((): string | null => {
    if (!activeVideo?.duration) {
      return null;
    }

    const durationTotalFomatted = moment.utc(1000 * activeVideo?.duration).format("mm:ss");
    const durationWatchedFormatted = moment.utc(1000 * activeVideoProgress?.seconds).format("mm:ss");

    return `${durationWatchedFormatted} / ${durationTotalFomatted}`;
  }, [activeVideoProgress, activeVideo]);

  if (isLoading) {
    return (
      <View style={styles.wrapper}>
        <GenericFullScreenLoading onRightIconPress={onDismissPress} />
      </View>
    );
  }

  return (
    <>
      <View style={styles.wrapper}>
        {activeVideo?.cover?.uri ? (
          <Image
            source={{ uri: activeVideo?.cover?.uri }}
            width={Style.DEVICE_WIDTH}
            style={{ ...StyleSheet.absoluteFillObject }}
          />
        ) : null}

        <View style={styles.contentContainer}>
          <View>
            <GenericHeadingPad />
            <View style={styles.headerContainer}>
              <TextTemplate color={Colours.neutral.white} type="h1">
                {t("meditation_progress.paused")}
              </TextTemplate>
              {progressTimeFormatted ? (
                <View style={styles.timeContainer}>
                  <View style={styles.timeWrapper}>
                    <TextTemplate type="l1">
                      {truncate(activeVideo?.title, { length: 30 })} {progressTimeFormatted}
                    </TextTemplate>
                  </View>
                </View>
              ) : null}
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <Button
              size="Medium"
              onPress={onDismissPress}
              translationKey="labels.cta.cancel"
              wrapperStyle={styles.leftButton}
              textColor={Colours.products.fib.n800}
              backgroundColor={Colours.neutral.white}
              shadowColor={Colours.sudoku.cancelShadow}
            />
            <Button
              size="Medium"
              onPress={onResumePress}
              wrapperStyle={styles.rightButton}
              translationKey="meditation_progress.resume"
            />
          </View>
        </View>
      </View>
      <TopBarAbsolute type="white" onPressLeftIcon={onLeftIconPress} />
      <NavBar activeIndex={1} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerContainer: {
    overflow: "hidden",
    padding: Style.adjust(5),
    paddingTop: Style.adjust(40),
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingBottom: Style.adjust(120),
  },
  leftButton: {
    marginRight: Style.adjust(10),
    flex: 1,
  },
  rightButton: {
    flex: 1,
    marginLeft: Style.adjust(10),
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: Style.adjust(20),
  },
  backgroundImage: {
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  timeWrapper: {
    padding: Style.adjust(5),
    borderRadius: Style.adjust(4),
    paddingHorizontal: Style.adjust(7),
    backgroundColor: Colours.neutral.white,
  },
  timeContainer: {
    flexDirection: "row",
    marginTop: Style.adjust(15),
  },
});

export default memo(MediaPlayerProgressScreen);
