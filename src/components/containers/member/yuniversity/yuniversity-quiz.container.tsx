import YuniversityQuizScreen from "@components/screens/member/yuniversity/yuniversity-quiz.screen";
import { ROUTES } from "@navigation/constants";
import React, { memo, useCallback } from "react";
import { Navigation } from "react-native-navigation";

interface IYuniversityQuizProps {
  moduleId: string;
}

const YuniversityQuizContainer = ({ moduleId }: IYuniversityQuizProps) => {
  const onClose = useCallback(() => {
    Navigation.popTo(ROUTES.courseDetails);
  }, []);

  return (
    <YuniversityQuizScreen
      onClose={onClose}
      onPress={onClose}
      moduleTitle={moduleTitle}
      messageTitle={messagTitle}
      message={message}
      image={image}
      ctaLabel={ctaLable}
      moduleId={moduleId}
    />
  );
};

const moduleTitle = "Why group risk makes sense for your clients and your business";
const messagTitle = "Take the quiz";
const message = "and see how much you have learned";
const ctaLable = "Let's go";
const image =
  "https://yulife-local.imgix.net/yuniversity/yugi-question.svg?ixlib=js-3.2.1&h=531&w=516&s=114b063109bdcab44fd63df7c17a4245";

export default memo(YuniversityQuizContainer);
