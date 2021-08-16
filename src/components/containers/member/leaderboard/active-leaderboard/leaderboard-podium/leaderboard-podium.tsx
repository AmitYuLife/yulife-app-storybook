import React, { useEffect, useState } from "react";
import { View, Animated, Platform } from "react-native";
import { Yumoji } from "@molecules";
import { GetLeaderboard_getLeaderboard_avatarRemoteFiles } from "@graphql/_core/schema";
import { YUMOJI_PODIUM } from "@ids";
import styles, { dynamicStyles, LEADERBOARD_PODIUM_HEIGHT } from "./leaderboard-podium.styles";
import { PodiumAsset } from "./assets/podium";
import { LeaderboardTitle } from "./subcomponents/leaderboard-title";
import { goToLeaderboardsList, goToLeaderboardInfo } from "./helpers/routing";

export interface IAvatarRemoteFiles {
  uriSet: Array<GetLeaderboard_getLeaderboard_avatarRemoteFiles["pngFull"]>;
}

export interface ILeaderboardPodiumProps {
  leaderboardName: string;
  uriSet?: string[];
  hideAvatars?: boolean;
  cropAmount?: number;
  scrollValue?: Animated.Value;
}

const _LeaderboardPodium = ({
  cropAmount,
  hideAvatars,
  uriSet,
  leaderboardName,
  scrollValue,
}: ILeaderboardPodiumProps) => {
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
          <Yumoji testID={uri != null ? YUMOJI_PODIUM(index) : null} uri={uri} />
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
