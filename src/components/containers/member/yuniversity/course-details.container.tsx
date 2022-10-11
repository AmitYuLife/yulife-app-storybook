import React, { useCallback, useState, useEffect } from "react";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import CourseDetailsScreen, { IGqlCourse } from "@components/screens/member/yuniversity/course-details.screen";
import { Loading } from "@atoms";
import { getYuniversityCourseDetails } from "./mock-data";

const CourseDetailsContainer = () => {
  const onClose = useCallback(() => Navigation.pop(ROUTES.courseDetails), []);
  const [data, setData] = useState<{ getYuniversityCourseDetails: IGqlCourse }>(null);

  useEffect(() => {
    setTimeout(() => setData({ getYuniversityCourseDetails }), 1000);
  }, []);

  if (!data?.getYuniversityCourseDetails) {
    return <Loading />;
  }

  return <CourseDetailsScreen onClose={onClose} course={data.getYuniversityCourseDetails} />;
};

export default CourseDetailsContainer;
