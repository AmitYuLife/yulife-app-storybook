import * as React from "react";
import { useBackHandler } from "@hooks";
import { EOTWChestScreen } from "@screens";
import { ImageSourcePropType } from "react-native";
import { useQuery } from "@apollo/client";
import { IUnityData } from "@components/screens/member/quests/quests-scroll-screen/unity-movies/unity.data";
import { GetUnityRewardsQuery, RewardsChestType, gql } from "@graphql/__generated";

interface IProps {
  level: number;
  yuniversalLevel?: number;
  yuniversalMap?: number;
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

  const { data } = useQuery(gql("GetUnityRewardsDocument"), {
    variables: { level, yuniversalLevel, yuniversalMap },
    fetchPolicy: "network-only",
  });

  const chest = data?.getUnityRewards?.chest ?? CHEST_FALLBACK;

  return <EOTWChestScreen {...props} {...chest} />;
};

const CHEST_FALLBACK: GetUnityRewardsQuery["getUnityRewards"]["chest"] = {
  chestType: RewardsChestType.Celestial,
  title: "",
  items: [],
};

export default AnimatedChestModal;
