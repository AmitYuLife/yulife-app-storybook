import React, { useCallback, memo } from "react";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import YuniversityCoursesScreen, { IHeaderProps } from "@components/screens/member/yuniversity/yuniversity.screen";
import { Loading } from "@atoms";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_YUNIVERSITY_COURSES } from "@graphql/yuniversity/getInAppYuniversityCourses.gql";
import { GetInAppYuniversityCourses } from "@graphql/_core/schema/GetInAppYuniversityCourses";

const YuniversityCoursesContainer = () => {
  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.wellbeingHubItems), []);
  const { data, loading } = useQuery<GetInAppYuniversityCourses>(GQL_QUERY_GET_YUNIVERSITY_COURSES, {
    fetchPolicy: "network-only",
  });

  const { title, headerImage, headerColour, courses, categoryImage } = data?.getInAppYuniversityCourses || {};

  const headerProps = {
    title: "Yuniversity",
    label: "Semper prorsum",
    source: { uri: headerImage?.uri },
    backgroundColor: headerColour,
    headerTextColor: "black",
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
      categoryImageUri={categoryImage.uri}
      headerProps={headerProps}
      courses={courses}
    />
  );
};

export default memo(YuniversityCoursesContainer);
