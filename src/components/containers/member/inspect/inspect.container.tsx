import React, { memo, useCallback, useMemo } from "react";
import InspectScreen from "@components/screens/member/inspect/inspect.screen";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

interface IProps {
  componentId: string;
  showOpponent?: boolean;
}

const InspectContainer = ({ componentId: _componentId, showOpponent }: IProps) => {
  const onClose = useCallback(() => Navigation.pop(ROUTES.inspect), []);
  const items = useMemo(() => (showOpponent ? activityItemsOpponent : activityItems), [showOpponent]);
  return (
    <InspectScreen
      infoItems={topItems}
      duelsItems={bottomItems}
      yumoji={yumoji}
      onClose={onClose}
      activityItems={items}
    />
  );
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

const activityItems = {
  avatarUri:
    "https://yulife-develop.imgix.net/avatars/54CU/2752161b-7651-4511-b313-31375589eef5.svg?ixlib=js-3.2.1&fm=png8&w=530&h=1106&fit=clip&s=098b2f3a6402b414c8c10df4da2fdacf",
  averageItems: [
    {
      id: "averageItems1",
      icon:
        "https://yulife-local.imgix.net/user-inspect/steps.svg?ixlib=js-3.2.1&w=44&h=44&s=e56e46edc3ba3c8015009869db75f977",
      value: "9,134",
      name: "Average steps",
    },
    {
      id: "averageItems2",
      icon:
        "https://yulife-local.imgix.net/user-inspect/cycling.svg?ixlib=js-3.2.1&w=44&h=44&s=f8d5b68a3c2786f5d4bcf0eeafa559e2",
      value: "2.3 km",
      name: "Average cycling",
    },
    {
      id: "averageItems3",
      icon:
        "https://yulife-local.imgix.net/user-inspect/meditation.svg?ixlib=js-3.2.1&w=44&h=44&s=2f12a52492a6b488d436600651d9b0e6",
      value: "12 min",
      name: "Average mindfulness",
    },
  ],
};

const activityItemsOpponent = {
  avatarUri:
    "https://yulife-develop.imgix.net/avatars/56ZG/5265a899-68a9-489b-b1ad-a1fcdfcee410.svg?ixlib=js-3.2.1&fm=png8&w=530&h=1106&fit=clip&s=31c43fd7d1cc9479f2aa279f17a5d40d",
  opponentAvatarUri:
    "https://yulife-develop.imgix.net/avatars/54CU/2752161b-7651-4511-b313-31375589eef5.svg?ixlib=js-3.2.1&fm=png8&w=530&h=1106&fit=clip&s=098b2f3a6402b414c8c10df4da2fdacf",
  opponentName: "Boris",
  averageItems: [
    {
      id: "averageItems1",
      icon:
        "https://yulife-local.imgix.net/user-inspect/steps.svg?ixlib=js-3.2.1&w=44&h=44&s=e56e46edc3ba3c8015009869db75f977",
      value: "9,134",
      opponentValue: "6,134",
      opponentIsWinner: false,
      name: "Average steps",
    },
    {
      id: "averageItems2",
      icon:
        "https://yulife-local.imgix.net/user-inspect/cycling.svg?ixlib=js-3.2.1&w=44&h=44&s=f8d5b68a3c2786f5d4bcf0eeafa559e2",
      value: "2.3 km",
      opponentValue: "0 km",
      opponentIsWinner: false,
      name: "Average cycling",
    },
    {
      id: "averageItems3",
      icon:
        "https://yulife-local.imgix.net/user-inspect/meditation.svg?ixlib=js-3.2.1&w=44&h=44&s=2f12a52492a6b488d436600651d9b0e6",
      value: "10 min",
      opponentValue: "12 min",
      opponentIsWinner: true,
      name: "Average mindfulness",
    },
  ],
};

export default memo(InspectContainer);
