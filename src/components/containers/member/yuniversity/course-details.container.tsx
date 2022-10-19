import React, { useCallback, memo, useEffect } from "react";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import CourseDetailsScreen from "@components/screens/member/yuniversity/course-details.screen";
import { Loading } from "@atoms";
import { useLazyQuery } from "@apollo/client";
import {
  GetInAppYuniversityCourseModuleDetails as GetModuleDetails,
  GetInAppYuniversityCourseModuleDetailsVariables as GetModuleDetailsVariables,
  GetInAppYuniversityCourseModuleDetails_getInAppYuniversityCourseModuleDetails_chapters_videoMedia as IGqlMedia,
} from "@graphql/_core/schema/GetInAppYuniversityCourseModuleDetails";
import { GQL_QUERY_GET_YUNIVERSITY_COURSE_MODULE_DETAILS } from "@graphql/yuniversity/getYuniversityCourseModuleDetails.gql";

interface IProps {
  moduleId: string;
}

const CourseDetailsContainer = ({ moduleId }: IProps) => {
  const onClose = useCallback(() => Navigation.pop(ROUTES.courseDetails), []);

  const [getCourseModuleDetails, { data, loading }] = useLazyQuery<GetModuleDetails, GetModuleDetailsVariables>(
    GQL_QUERY_GET_YUNIVERSITY_COURSE_MODULE_DETAILS,
    { fetchPolicy: "network-only" }
  );

  const getData = useCallback(() => {
    getCourseModuleDetails({
      variables: { id: moduleId },
    });
  }, [getCourseModuleDetails, moduleId]);

  const onChapterPress = useCallback(
    (video: IGqlMedia, chapterId: string) => {
      Navigation.push(ROUTES.courseDetails, {
        component: {
          id: ROUTES.yuniversityMediaPlayer,
          name: ROUTES.yuniversityMediaPlayer,
          passProps: {
            video,
            moduleId,
            chapterId,
            onEnd: getData,
          },
        },
      });
    },
    [moduleId, getData]
  );

  useEffect(() => {
    getData();
  }, [getData]);

  const startQuiz = useCallback(() => {
    Navigation.push(ROUTES.courseDetails, {
      component: {
        id: ROUTES.yuniversityQuiz,
        name: ROUTES.yuniversityQuiz,
        passProps: {
          moduleId,
        },
      },
    });
  }, [moduleId]);

  if (loading) {
    return <Loading />;
  }

  if (!data?.getInAppYuniversityCourseModuleDetails) {
    return null;
  }

  return (
    <CourseDetailsScreen
      onClose={onClose}
      moduleDetails={data.getInAppYuniversityCourseModuleDetails}
      onChapterPress={onChapterPress}
      startQuiz={startQuiz}
    />
  );
};

export default memo(CourseDetailsContainer);
