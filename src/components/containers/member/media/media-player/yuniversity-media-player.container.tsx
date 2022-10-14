import { YuniversityMediaPlayerScreen } from "@components/screens";
import { ROUTES } from "@navigation/constants";
import React, { useCallback, memo } from "react";
import { Navigation } from "react-native-navigation";
import { Media } from "@graphql/_core/schema";
import { useMutation } from "@apollo/client";
import {
  GQL_MUTATION_COMPLETE_IN_APP_YUNIVERSITY_MODULE_CHAPTER,
  CompleteYuniversityModuleChapterTuple,
} from "@graphql/yuniversity/completeInAppYuniversityModuleChapter.gql";

interface IProps {
  componentId: string;
  video: Media;
  moduleId: string;
  chapterId: string;
}

const YuniversityMediaPlayerContainer = ({ componentId, video, moduleId, chapterId }: IProps) => {
  const [completeChapter]: CompleteYuniversityModuleChapterTuple = useMutation(
    GQL_MUTATION_COMPLETE_IN_APP_YUNIVERSITY_MODULE_CHAPTER
  );
  const onStart = useCallback(async () => {
    /* do something*/
  }, []);
  const endChallenge = useCallback(async () => {
    await completeChapter({
      variables: { moduleId, chapterId },
    });
    await Navigation.popTo(ROUTES.courseDetails);
  }, [moduleId, chapterId, completeChapter]);

  const onError = useCallback(() => {
    /* do something*/
  }, []);
  const onLeftIconPress = useCallback(() => Navigation.popTo(ROUTES.courseDetails), [componentId]);
  const onRightIconPress = useCallback(() => Navigation.popTo(ROUTES.courseDetails), [componentId]);

  return (
    <YuniversityMediaPlayerScreen
      onStart={onStart}
      onEnd={endChallenge}
      onError={onError}
      video={video}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      startErrorMessage={""}
    />
  );
};

export default memo(YuniversityMediaPlayerContainer);
