import * as React from "react";
import { useBackHandler } from "@hooks";
import { EOTWChestScreen } from "@screens";
import { ImageSourcePropType } from "react-native";
import { GQL_QUERY_GET_UNITY_REWARDS } from "@graphql/challenges";
import { GetUnityRewards } from "@graphql/_core/schema";
import { useQuery } from "@apollo/client";
import { RewardsChestType } from "@graphql/_core/schema/globalTypes";
import { IUnityData } from "@components/screens/member/quests/quests-scroll-screen/unity-movies/unity.data";

interface IProps {
  level: number;
  yuniversalLevel?: number;
  yuniversalMap?: number;
  levelId: string;
  assets: IUnityData;
  avatar: ImageSourcePropType;
  onPressCta: () => void;
}

const AnimatedChestModal: React.FC<IProps> = (props: IProps) => {
  const { onPressCta, level, yuniversalLevel, yuniversalMap } = props;
  useBackHandler(() => {
    onPressCta();
    return true;
  });

  const { data } = useQuery<GetUnityRewards>(GQL_QUERY_GET_UNITY_REWARDS, {
    variables: { level, yuniversalLevel, yuniversalMap },
    fetchPolicy: "network-only",
  });

  const chest = data?.getUnityRewards?.chest ?? { chestType: RewardsChestType.CELESTIAL, title: "", items: [] };

  return <EOTWChestScreen {...props} {...chest} />;
};

export default AnimatedChestModal;
