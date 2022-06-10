import React, { memo, useCallback } from "react";
import InspectScreen from "@components/screens/member/inspect/inspect.screen";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

interface IProps {
  componentId: string;
}

const InspectContainer = ({ componentId: _componentId }: IProps) => {
  const onClose = useCallback(() => Navigation.pop(ROUTES.inspect), []);
  return <InspectScreen infoItems={topItems} duelsItems={bottomItems} yumoji={yumoji} onClose={onClose} />;
};

const yumoji =
  "https://yulife-develop.imgix.net/avatars/54CU/2752161b-7651-4511-b313-31375589eef5.svg?ixlib=js-3.2.1&fm=png8&w=530&h=1106&fit=clip&s=098b2f3a6402b414c8c10df4da2fdacf";
const topItems = [
  {
    id: "1",
    remoteImage: {
      id: "",
      uri:
        "https://yulife-local.imgix.net/user-inspect/inspect-star.svg?ixlib=js-3.2.1&w=44&h=44&s=946c804981f7b929f55d3a5f2d6e5c50",
    },
    text: "Challenges done",
    value: "1,232",
  },
  {
    id: "2",
    remoteImage: {
      id: "",
      uri:
        "https://yulife-local.imgix.net/user-inspect/inspect-calendar.svg?ixlib=js-3.2.1&w=44&h=44&s=bc0f32a4c9cd2fc75b0f4f37fbaee46f",
    },
    text: "Longest streak",
    value: "7,232d",
  },
  {
    id: "3",
    remoteImage: {
      id: "",
      uri:
        "https://yulife-local.imgix.net/user-inspect/inspect-trophy.svg?ixlib=js-3.2.1&w=44&h=44&s=35b45a7639074e466963335ee77fecf2",
    },
    text: "Trophies",
    value: "323",
  },
  {
    id: "4",
    remoteImage: {
      id: "",
      uri:
        "https://yulife-local.imgix.net/user-inspect/inspect-tree.svg?ixlib=js-3.2.1&w=44&h=44&s=9b51fb467d7384cc9ad0d7943475a8d5",
    },
    text: "Donations",
    infoText:
      "“Donations” refer to every charitable effort you supported in our rewards section. For example planting a tree.",
    value: "123",
  },
];

const bottomItems = [
  {
    id: "5",
    remoteImage: {
      id: "",
      uri:
        "https://yulife-local.imgix.net/user-inspect/inspect-calendar.svg?ixlib=js-3.2.1&w=44&h=44&s=bc0f32a4c9cd2fc75b0f4f37fbaee46f",
    },
    text: "Win streak",
    value: "40",
  },
  {
    id: "4",
    remoteImage: {
      id: "",
      uri:
        "https://yulife-local.imgix.net/user-inspect/inspect-trophy.svg?ixlib=js-3.2.1&w=44&h=44&s=35b45a7639074e466963335ee77fecf2",
    },
    text: "Duels won",
    value: "53",
  },
];

export default memo(InspectContainer);
