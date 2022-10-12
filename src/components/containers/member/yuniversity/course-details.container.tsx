import React, { useCallback, memo } from "react";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import CourseDetailsScreen from "@components/screens/member/yuniversity/course-details.screen";
import { Loading } from "@atoms";
import { useQuery } from "@apollo/client";
import {
  GetInAppYuniversityCourseModuleDetails as GetModuleDetails,
  GetInAppYuniversityCourseModuleDetailsVariables as GetModuleDetailsVariables,
} from "@graphql/_core/schema/GetInAppYuniversityCourseModuleDetails";
import { GQL_QUERY_GET_YUNIVERSITY_COURSE_MODULE_DETAILS } from "@graphql/yuniversity/getYuniversityCourseModuleDetails.gql";

interface IProps {
  moduleId: string;
}

const CourseDetailsContainer = ({ moduleId }: IProps) => {
  const onClose = useCallback(() => Navigation.pop(ROUTES.courseDetails), []);

  const { data, loading } = useQuery<GetModuleDetails, GetModuleDetailsVariables>(
    GQL_QUERY_GET_YUNIVERSITY_COURSE_MODULE_DETAILS,
    {
      variables: { id: moduleId },
      fetchPolicy: "network-only",
    }
  );

  if (loading) {
    return <Loading />;
  }

  if (!data?.getInAppYuniversityCourseModuleDetails) {
    return null;
  }

  return <CourseDetailsScreen onClose={onClose} course={data.getInAppYuniversityCourseModuleDetails} />;
};

export default memo(CourseDetailsContainer);
