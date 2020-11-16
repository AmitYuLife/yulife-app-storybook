import React from "react";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../../navigation/constants";
import ProductsSurvey from "@screens/member/yu-screen/products-survey/products-survey";

function YuProductSurvey() {
  return <ProductsSurvey onExitConfirmed={onExitConfirmed} />;
}

export default YuProductSurvey;

function onExitConfirmed() {
  Navigation.popTo(ROUTES.yuScreen);
}
