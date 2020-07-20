import * as React from "react";
import { View, Animated, Platform, ViewStyle, LayoutChangeEvent } from "react-native";
import { avatarStyles, BODY_AVATAR_WIDTH, SVG_HEIGHT } from "./leaderboard-top.styles";
import { LeaderboardPedestal, EmptyMaleBody } from "./../svg/leaderboard";
import commonStyles from "../leaderboards.screen.styles";
import { SvgCssUri } from "react-native-svg";
import { YUSCREEN_AVATAR } from "@ids";

interface IProps {
  avatars: string[];
}

export default function LeaderboardTop({ avatars }: IProps) {
  return (
    <>
      <View pointerEvents="none">
        <LeaderboardPedestal />
      </View>
      <View pointerEvents="none" style={avatarStyles.wrapper}>
        {avatars.map((avatar, i) => (
          <View
            key={i}
            testID={i === 1 ? YUSCREEN_AVATAR : null}
            style={[
              avatarStyles.avatarBase,
              avatar ? avatarStyles[`avatar${i + 1}`] : avatarStyles[`avatarEmpty${i + 1}`],
            ]}
          >
            <Avatar avatar={avatar} />
          </View>
        ))}
      </View>
    </>
  );
}

function Avatar({ avatar }: { avatar: string }) {
  if (!avatar) {
    return <EmptyMaleBody />;
  }
  return (
    <View style={avatarStyles.avatarWrapper}>
      <SvgCssUri uri={avatar} style={{ width: BODY_AVATAR_WIDTH, height: SVG_HEIGHT }} />
    </View>
  );
}

interface ILeaderboardTopIOS {
  translateYTransform: Animated.AnimatedInterpolation;
  showConsentPrompt: boolean;
  avatars: string[];
  style?: ViewStyle;
  onLayout?: (e: LayoutChangeEvent) => void;
  children: React.ReactChild;
}

export function LeaderboardTopIOS({
  translateYTransform,
  showConsentPrompt,
  avatars,
  style,
  onLayout,
  children,
}: ILeaderboardTopIOS) {
  if (Platform.OS === "android" || showConsentPrompt) {
    return null;
  }
  return (
    <Animated.View
      onLayout={onLayout}
      pointerEvents="box-none"
      style={[
        commonStyles.imageWrapper,
        {
          transform: [{ translateY: translateYTransform }],
        },
        style,
      ]}
    >
      <LeaderboardTop avatars={avatars} />
      {children}
    </Animated.View>
  );
}
