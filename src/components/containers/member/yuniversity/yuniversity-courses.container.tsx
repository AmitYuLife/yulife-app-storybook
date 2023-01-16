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

const YuniversityCoursesContainer = () => {
  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.wellbeingHubItems), []);
  const { data, loading } = useQuery<GetInAppYuniversityCourses>(GQL_QUERY_GET_YUNIVERSITY_COURSES, {
    variables: { category: COURSE_CATEGORY_CPD },
    fetchPolicy: "network-only",
  });

  const onModulePress = useCallback((moduleSlug: string) => {
    Navigation.push(ROUTES.yuniversityCourses, {
      component: {
        id: ROUTES.courseDetails,
        name: ROUTES.courseDetails,
        passProps: {
          moduleId: moduleSlug,
        },
      },
    });
  }, []);

  const { title, headerImage, headerColour, headerTitle, headerLabel, headerTextColour, courses, categoryImage } =
    data?.getInAppYuniversityCourses || {};

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
