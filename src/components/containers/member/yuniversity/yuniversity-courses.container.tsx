import React, { useCallback, useState, useEffect } from "react";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import YuniversityCoursesScreen, { ICourse } from "@components/screens/member/yuniversity/yuniversity.screen";
import { Loading } from "@atoms";
import { getYuniversityCategoryCourses } from "./mock-data";

interface ICategoryCourses {
  headerImage: {
    id: string;
    uri: string;
  };
  category: string;
  categoryImage: {
    id: string;
    uri: string;
  };
  headerColour: string;
  courses: ICourse[];
}

interface IHeaderProps {
  title: string;
  label: string;
  source: { uri: string };
  backgroundColor: string;
  headerTextColor: string;
  onLeftIconPress: () => void;
}

interface IGetCategoryCourses {
  getYuniversityCategoryCourses: ICategoryCourses;
}

const UserFeatures = () => {
  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.wellbeingHubItems), []);

  const [data, setData] = useState<IGetCategoryCourses>(null);

  useEffect(() => {
    setTimeout(() => setData({ getYuniversityCategoryCourses }), 1000);
  }, []);
  const headerProps = {
    title: "Yuniversity",
    label: "Semper prorsum",
    source: { uri: data?.getYuniversityCategoryCourses.headerImage.uri },
    backgroundColor: data?.getYuniversityCategoryCourses.headerColour,
    headerTextColor: "black",
    onLeftIconPress,
  } as IHeaderProps;

  if (!data?.getYuniversityCategoryCourses) {
    return <Loading />;
  }

  return (
    <YuniversityCoursesScreen
      category={data?.getYuniversityCategoryCourses.category}
      categoryImageUri={data?.getYuniversityCategoryCourses.categoryImage.uri}
      headerProps={headerProps}
      courses={data?.getYuniversityCategoryCourses.courses}
    />
  );
};

export default UserFeatures;
