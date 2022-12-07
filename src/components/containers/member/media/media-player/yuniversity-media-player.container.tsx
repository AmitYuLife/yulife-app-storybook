import { YuniversityMediaPlayerScreen } from "@components/screens";
import { ROUTES } from "@navigation/constants";
import React, { useCallback, memo } from "react";
import { Navigation } from "@navigation/main";
import { Media } from "@graphql/_core/schema";
import { useMutation } from "@apollo/client";
import {
  GQL_MUTATION_COMPLETE_IN_APP_YUNIVERSITY_MODULE_CHAPTER,
  CompleteYuniversityModuleChapterTuple,
} from "@graphql/yuniversity/completeInAppYuniversityModuleChapter.gql";
import { LoadError } from "react-native-video";
import { useDispatch, useSelector } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { getUserFeatures } from "@redux/user/user.selectors";

interface IProps {
  componentId: string;
  video: Media;
  moduleId: string;
  chapterId: string;
}

const YuniversityMediaPlayerContainer = ({ video, moduleId, chapterId }: IProps) => {
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
    logYuniversityEvents({ type: "cpdVideoEnd", moduleId, chapterId });
    await completeChapter({
      variables: { moduleId, chapterId },
      refetchQueries: ["GetInAppYuniversityCourseModuleDetails"],
    });
    await Navigation.popTo(ROUTES.courseDetails);
  }, [moduleId, chapterId, completeChapter, logYuniversityEvents]);

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
    logYuniversityEvents({ type: "cpdVideoClose" });
    Navigation.popTo(ROUTES.courseDetails);
  }, [logYuniversityEvents]);

  return (
    <YuniversityMediaPlayerScreen
      onEnd={onChapterEnd}
      onError={onError}
      video={video}
      onLeftIconPress={onClose}
      onPause={onPause}
      onPlay={onPlay}
    />
  );
};

export default memo(YuniversityMediaPlayerContainer);
