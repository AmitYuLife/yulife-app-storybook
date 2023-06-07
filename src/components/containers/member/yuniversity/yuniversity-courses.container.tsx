import React, { useCallback, memo } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import YuniversityCoursesScreen, { IHeaderProps } from "@components/screens/member/yuniversity/yuniversity.screen";
import { Loading } from "@atoms";
import { useQuery } from "@apollo/client";
import {
  COURSE_CATEGORY_CPD,
  GQL_QUERY_GET_YUNIVERSITY_COURSES,
} from "@graphql/yuniversity/getInAppYuniversityCourses.gql";
import { GetInAppYuniversityCourses } from "@graphql/_core/schema/GetInAppYuniversityCourses";
import { useDispatch, useSelector } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { getCurrentLevel } from "@redux/levels/levels.selectors";

interface IProps {
  popTo?: string;
}

const YuniversityCoursesContainer = ({ popTo }: IProps) => {
  const dispatch = useDispatch();
  const userLevel = useSelector(getCurrentLevel);

  const onLeftIconPress = useCallback(() => Navigation.popToRoot(popTo || ROUTES.wellbeingHubItems), [popTo]);
  const { data, loading } = useQuery<GetInAppYuniversityCourses>(GQL_QUERY_GET_YUNIVERSITY_COURSES, {
    variables: { category: COURSE_CATEGORY_CPD },
    fetchPolicy: "network-only",
  });

  const { title, headerImage, headerColour, headerTitle, headerLabel, headerTextColour, courses, categoryImage } =
    data?.getInAppYuniversityCourses || {};

  const onModulePress = useCallback(
    (courseSlug: string, moduleSlug: string) => {
      dispatch(
        logMixpanelEventActionCreator("item_viewed", {
          topic: "CPD",
          detail_1: courseSlug,
          detail_2: moduleSlug,
          title: title,
          action: "module_press",
          location: "yuniversity_courses",
          levelId: userLevel,
        })
      );
      Navigation.push(ROUTES.yuniversityCourses, {
        component: {
          id: ROUTES.courseDetails,
          name: ROUTES.courseDetails,
          passProps: {
            moduleId: moduleSlug,
            courseId: courseSlug,
          },
        },
      });
    },
    [title, userLevel, dispatch]
  );

  const headerProps = {
    title: headerTitle,
    label: headerLabel,
    source: { uri: headerImage?.uri },
    backgroundColor: headerColour,
    headerTextColor: headerTextColour,
    onLeftIconPress,
  } as IHeaderProps;

  if (loading) {
    return <Loading />;
  }

  if (!data?.getInAppYuniversityCourses?.courses?.length) {
    return null;
  }

  return (
    <YuniversityCoursesScreen
      category={title}
      categoryImageUri={categoryImage?.uri}
      headerProps={headerProps}
      courses={courses}
      onModulePress={onModulePress}
    />
  );
};

export default memo(YuniversityCoursesContainer);
