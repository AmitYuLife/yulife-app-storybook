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
  onEnd: () => void;
}

const YuniversityMediaPlayerContainer = ({ video, moduleId, chapterId, onEnd }: IProps) => {
  const [completeChapter]: CompleteYuniversityModuleChapterTuple = useMutation(
    GQL_MUTATION_COMPLETE_IN_APP_YUNIVERSITY_MODULE_CHAPTER
  );

  const onChapterEnd = useCallback(async () => {
    await completeChapter({
      variables: { moduleId, chapterId },
    });
    onEnd();
    await Navigation.popTo(ROUTES.courseDetails);
  }, [moduleId, chapterId, completeChapter, onEnd]);

  const onError = useCallback(() => {
    /* do something*/
  }, []);
  const onClose = useCallback(() => Navigation.popTo(ROUTES.courseDetails), []);

  return (
    <YuniversityMediaPlayerScreen onEnd={onChapterEnd} onError={onError} video={video} onLeftIconPress={onClose} />
  );
};

export default memo(YuniversityMediaPlayerContainer);
