import * as React from "react";
import { View, Animated, Platform, ViewStyle, LayoutChangeEvent } from "react-native";
import { avatarStyles } from "./leaderboard-top.styles";
import { LeaderboardPedestal, EmptyMaleBody } from "./../svg/leaderboard";
import { BodyAvatar } from "../../yu-screen/svg/body";
import { IAvatar } from "../../yu-screen/avatar-builder/avatar.types";
import commonStyles from "../leaderboards.screen.styles";
import { Style } from "@styles/index";

interface IProps {
  avatars: IAvatar[];
}
const MULTIPLIER = 1.1;

const BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(150 * MULTIPLIER);
const BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(53 * MULTIPLIER);
const VIEWBOX_MIN_Y = 40;

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
            style={[
              avatarStyles.avatarBase,
              avatar.head ? avatarStyles[`avatar${i + 1}`] : avatarStyles[`avatarEmpty${i + 1}`],
            ]}
          >
            <Avatar avatar={avatar} />
          </View>
        ))}
      </View>
    </>
  );
}

function Avatar({ avatar }: { avatar: IAvatar }) {
  const Component = !avatar.head ? EmptyMaleBody : BodyAvatar;
  return (
    <View>
      <Component
        avatar={avatar}
        showElipse={false}
        width={BODY_AVATAR_WIDTH}
        height={BODY_AVATAR_HEIGHT}
        viewBox={`0 ${VIEWBOX_MIN_Y} 265 553`}
      />
    </View>
  );
}

interface ILeaderboardTopIOS {
  translateYTransform: Animated.AnimatedInterpolation;
  showsActiveLeaderboard: boolean;
  avatars: IAvatar[];
  style?: ViewStyle;
  onLayout?: (e: LayoutChangeEvent) => void;
}

export function LeaderboardTopIOS({
  translateYTransform,
  showsActiveLeaderboard,
  avatars,
  style,
  onLayout,
}: ILeaderboardTopIOS) {
  if (Platform.OS === "android" || showsActiveLeaderboard) {
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
    </Animated.View>
  );
}
