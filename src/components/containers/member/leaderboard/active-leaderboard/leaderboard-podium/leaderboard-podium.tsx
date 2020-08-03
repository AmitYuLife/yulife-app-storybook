import React, { useContext, useEffect, useState } from "react";
import { View, Animated, Platform } from "react-native";
import { Yumoji } from "@atoms";
import { GetLeaderboard_getLeaderboard_avatarRemoteFiles } from "@graphql/_core/schema";
import { YUSCREEN_AVATAR } from "@ids";
import styles, { dynamicStyles, LEADERBOARD_PODIUM_HEIGHT } from "./leaderboard-podium.styles";
import { PodiumAsset } from "./assets/podium";
import { LeaderboardTitle } from "./subcomponents/leaderboard-title";
import { goToLeaderboardsList, goToLeaderboardInfo } from "./helpers/routing";
import { ScrollValueContext } from "../leaderboard-content/leaderboard-content.context";

export interface IAvatarRemoteFiles {
  uriSet: Array<GetLeaderboard_getLeaderboard_avatarRemoteFiles["pngFull"]>;
}

export interface ILeaderboardPodiumProps {
  leaderboardName: string;
  uriSet?: string[];
  hideAvatars?: boolean;
  cropAmount?: number;
}

const _LeaderboardPodium = ({ cropAmount, hideAvatars, uriSet, leaderboardName }: ILeaderboardPodiumProps) => {
  const scrollValue = useContext(ScrollValueContext);
  const [translateY, setTranslateY] = useState(0 as number | Animated.AnimatedInterpolation);

  useEffect(() => {
    if (scrollValue && Platform.OS === "ios") {
      setTranslateY(
        scrollValue.interpolate({
          inputRange: [0, LEADERBOARD_PODIUM_HEIGHT],
          outputRange: [0, -LEADERBOARD_PODIUM_HEIGHT],
          extrapolate: "clamp",
        })
      );
    }
  }, [scrollValue]);

  return (
    <Animated.View pointerEvents="box-none" style={[styles.wrapper, { transform: [{ translateY }] }]}>
      <View pointerEvents="none">
        <PodiumAsset cropAmount={cropAmount} />
        <Avatars hideAvatars={hideAvatars} uriSet={uriSet} />
      </View>
      <LeaderboardTitle name={leaderboardName} onPressLabel={goToLeaderboardsList} onPressInfo={goToLeaderboardInfo} />
    </Animated.View>
  );
};

export const LeaderboardPodium = Object.assign(_LeaderboardPodium, { HEIGHT: LEADERBOARD_PODIUM_HEIGHT });

function Avatars({ uriSet, hideAvatars }: Pick<ILeaderboardPodiumProps, "uriSet" | "hideAvatars">) {
  if (hideAvatars) {
    return null;
  }

  return (
    <>
      {uriSet.map((uri, index) => (
        <PodiumPosition key={uri || index} order={index} isEmpty={!uri}>
          <Yumoji testID={index === 1 ? YUSCREEN_AVATAR : null} uri={uri} />
        </PodiumPosition>
      ))}
    </>
  );
}

function PodiumPosition({ children, order, isEmpty }: { children: React.ReactChild; order: number; isEmpty: boolean }) {
  return (
    <View
      pointerEvents="none"
      style={[
        styles.avatarBase,
        isEmpty ? dynamicStyles[`avatarEmpty${order + 1}`] : dynamicStyles[`avatar${order + 1}`],
      ]}
    >
      {children}
    </View>
  );
}
