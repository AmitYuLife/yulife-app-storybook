import React, { useCallback, memo } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import CourseDetailsScreen from "@components/screens/member/yuniversity/course-details.screen";
import { Loading } from "@atoms";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { GetInAppYuniversityCourseModuleDetailsQuery, gql } from "@graphql/__generated";

type IGqlMedia =
  GetInAppYuniversityCourseModuleDetailsQuery["getInAppYuniversityCourseModuleDetails"]["chapters"]["0"]["videoMedia"];
interface IProps {
  moduleId: string;
  courseId: string;
  popTo?: string;
}

const CourseDetailsContainer = ({ moduleId, courseId, popTo }: IProps) => {
  const onClose = useCallback(() => Navigation.popTo(popTo || ROUTES.wellbeingHubItems), [popTo]);
  const onBackPress = useCallback(() => Navigation.pop(ROUTES.courseDetails), []);

  const dispatch = useDispatch();
  const userLevel = useSelector(getCurrentLevel);

  const { data, loading } = useQuery(gql("GetInAppYuniversityCourseModuleDetailsDocument"), {
    variables: { id: moduleId },
    fetchPolicy: "no-cache",
  });

  const onChapterPress = useCallback(
    (video: IGqlMedia, chapterId: string) => {
      dispatch(
        logMixpanelEventActionCreator("item_viewed", {
          topic: "CPD",
          detail_1: courseId,
          detail_2: moduleId,
          detail_3: chapterId,
          title: data?.getInAppYuniversityCourseModuleDetails.title,
          action: "chapter_press",
          location: "module_details",
          levelId: userLevel,
        })
      );

      Navigation.push(ROUTES.courseDetails, {
        component: {
          id: ROUTES.yuniversityMediaPlayer,
          name: ROUTES.yuniversityMediaPlayer,
          passProps: {
            video,
            moduleId,
            chapterId,
            trackingData: {
              levelId: userLevel,
              courseId,
              moduleId,
              chapterId,
            },
          },
        },
      });
    },
    [moduleId, courseId, userLevel, data?.getInAppYuniversityCourseModuleDetails.title, dispatch]
  );

  const startQuiz = useCallback(() => {
    Navigation.push(ROUTES.courseDetails, {
      component: {
        id: ROUTES.journey,
        name: ROUTES.journey,
        passProps: {
          journeyId: data?.getInAppYuniversityCourseModuleDetails.quiz,
        },
      },
    });
  }, [moduleId, data?.getInAppYuniversityCourseModuleDetails.quiz]);

  if (loading) {
    return <Loading />;
  }

  if (!data?.getInAppYuniversityCourseModuleDetails) {
    return null;
  }

  return (
    <CourseDetailsScreen
      onBackPress={onBackPress}
      onClose={onClose}
      courseId={courseId}
      moduleDetails={data.getInAppYuniversityCourseModuleDetails}
      onChapterPress={onChapterPress}
      startQuiz={startQuiz}
    />
  );
};

export default memo(CourseDetailsContainer);
