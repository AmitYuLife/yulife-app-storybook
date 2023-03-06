import { YuniversityMediaPlayerScreen } from "@components/screens";
import { ROUTES } from "@navigation/constants";
import React, { useCallback, memo, useEffect, useRef } from "react";
import { Navigation } from "@navigation/main";
import { Media } from "@graphql/_core/schema";
import { useMutation } from "@apollo/client";
import {
  GQL_MUTATION_COMPLETE_IN_APP_YUNIVERSITY_MODULE_CHAPTER,
  CompleteYuniversityModuleChapterTuple,
} from "@graphql/yuniversity/completeInAppYuniversityModuleChapter.gql";
import { LoadError, OnProgressData } from "react-native-video";
import { useDispatch, useSelector } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { getUserFeatures } from "@redux/user/user.selectors";

interface IProps {
  componentId: string;
  video: Media;
  moduleId: string;
  chapterId: string;
  trackingData: { levelId: number; courseId: string; moduleId: string; chapterId: string };
}

const YuniversityMediaPlayerContainer = ({ video, moduleId, chapterId, trackingData }: IProps) => {
  const videoProgressRef = useRef(0);

  const [completeChapter]: CompleteYuniversityModuleChapterTuple = useMutation(
    GQL_MUTATION_COMPLETE_IN_APP_YUNIVERSITY_MODULE_CHAPTER
  );
  const dispatch = useDispatch();
  const { logYuniversity } = useSelector(getUserFeatures);

  const logYuniversityEvents = useCallback(
    (data: Record<string, string | number | boolean>) => {
      if (logYuniversity) {
        dispatch(logMixpanelEventActionCreator("app_debug", data));
      }
    },
    [logYuniversity, dispatch]
  );

  const onChapterEnd = useCallback(async () => {
    dispatch(
      logMixpanelEventActionCreator("video_completed", {
        name: video.title,
        topic: "CPD",
        video_length: video.duration,
        levelId: trackingData.levelId,
        detail_1: trackingData.courseId,
        detail_2: trackingData.moduleId,
        detail_3: trackingData.chapterId,
      })
    );

    logYuniversityEvents({ type: "cpdVideoEnd", moduleId, chapterId });
    await completeChapter({
      variables: { moduleId, chapterId },
      refetchQueries: ["GetInAppYuniversityCourseModuleDetails"],
    });
    await Navigation.popTo(ROUTES.courseDetails);
  }, [trackingData, moduleId, chapterId, video, completeChapter, logYuniversityEvents, dispatch]);

  const onError = useCallback(
    (e: LoadError) => {
      logYuniversityEvents({ type: "cpdVideoError", error: e?.error?.errorString });
    },
    [logYuniversityEvents]
  );

  const onPause = useCallback(() => {
    logYuniversityEvents({ type: "cpdVideoPause" });
  }, [logYuniversityEvents]);

  const onPlay = useCallback(() => {
    logYuniversityEvents({ type: "cpdVideoPlay" });
  }, [logYuniversityEvents]);

  const onClose = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("video_cancelled", {
        name: video.title,
        topic: "CPD",
        video_length: video.duration,
        length_viewed: videoProgressRef.current,
        levelId: trackingData.levelId,
        detail_1: trackingData.courseId,
        detail_2: trackingData.moduleId,
        detail_3: trackingData.chapterId,
      })
    );

    logYuniversityEvents({ type: "cpdVideoClose" });
    Navigation.popTo(ROUTES.courseDetails);
  }, [trackingData, video, logYuniversityEvents, dispatch]);

  useEffect(() => {
    dispatch(
      logMixpanelEventActionCreator("video_started", {
        name: video.title,
        topic: "CPD",
        video_length: video.duration,
        levelId: trackingData.levelId,
        detail_1: trackingData.courseId,
        detail_2: trackingData.moduleId,
        detail_3: trackingData.chapterId,
      })
    );
  }, []);

  const onProgress = useCallback(({ currentTime }: OnProgressData) => {
    const inComingProgress = Math.floor(currentTime);
    videoProgressRef.current = inComingProgress;
  }, []);

  return (
    <YuniversityMediaPlayerScreen
      onEnd={onChapterEnd}
      onError={onError}
      video={video}
      onLeftIconPress={onClose}
      onPause={onPause}
      onPlay={onPlay}
      onProgress={onProgress}
    />
  );
};

export default memo(YuniversityMediaPlayerContainer);
