import * as React from "react";
import { Image, View, TouchableOpacity, Animated, Platform, ViewStyle, LayoutChangeEvent } from "react-native";
import { Text } from "../../../../atoms";
import styles, { avatarStyles } from "./leaderboard-top.styles";
import { LeaderboardPedestal, EmptyMaleBody } from "./../svg/leaderboard";
import { BodyAvatar } from "../../yu-screen/svg/body";
import { IAvatar } from "../../yu-screen/avatar-builder/avatar.types";
import commonStyles, { LEADERBOARD_PROMPT_OFFSET } from "../leaderboards.screen.styles";
import { ILeaderboard } from "@redux/user/user.reducer";
import { Style } from "@styles/index";
import { toCapitalLetter } from "../../../../../services/utils";
import { LEADERBOARD_TOP_SCREEN } from "@ids";

interface IProps {
  avatars: IAvatar[];
  leaderboardName: string;
  chooseLeaderboardScreen: () => void;
  pedestalViewBox?: string;
  pedestalHeight?: number;
  leaderboardNameStyle?: ViewStyle;
}

const BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(150);
const BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(53);

export default function LeaderboardTop({
  avatars,
  leaderboardName,
  chooseLeaderboardScreen,
  pedestalViewBox,
  pedestalHeight,
  leaderboardNameStyle,
}: IProps) {
  return (
    <>
      <View pointerEvents="none">
        <LeaderboardPedestal viewBox={pedestalViewBox} height={pedestalHeight} />
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
      <LeaderboardName onPress={chooseLeaderboardScreen} name={leaderboardName} style={leaderboardNameStyle} />
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
        viewBox="0 0 265 553"
      />
    </View>
  );
}

interface ILeaderboardTopIOS {
  activeLeaderboardIndex: number;
  translateYTransform: Animated.AnimatedInterpolation;
  activeLeaderboard: ILeaderboard;
  showsActiveLeaderboard: boolean;
  avatars: IAvatar[];
  onChooseLeaderboardScreen: () => void;
  style?: ViewStyle;
  onLayout?: (e: LayoutChangeEvent) => void;
}

export function LeaderboardTopIOS({
  translateYTransform,
  activeLeaderboard,
  showsActiveLeaderboard,
  avatars,
  onChooseLeaderboardScreen,
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
      <LeaderboardTop
        avatars={avatars}
        leaderboardName={activeLeaderboard.name}
        chooseLeaderboardScreen={onChooseLeaderboardScreen}
      />
    </Animated.View>
  );
}

export function EmptyLeaderboard({ activeLeaderboard, onChooseLeaderboardScreen, style }: ILeaderboardTopIOS) {
  return (
    <Animated.View pointerEvents="box-none" style={style}>
      <LeaderboardTop
        avatars={[]}
        leaderboardName={activeLeaderboard.name}
        chooseLeaderboardScreen={onChooseLeaderboardScreen}
        leaderboardNameStyle={{ top: LEADERBOARD_PROMPT_OFFSET + 16 }}
      />
    </Animated.View>
  );
}

function LeaderboardName({ onPress, name, style }: { onPress: () => void; name: string; style: ViewStyle }) {
  return (
    <View pointerEvents="box-none" style={[styles.leaderboardNameAbsolute, style]}>
      <TouchableOpacity style={styles.row} activeOpacity={1} onPress={onPress}>
        <View style={styles.leaderboardNameWrapper} testID={LEADERBOARD_TOP_SCREEN}>
          <Text numberOfLines={1} style={styles.leaderboardName}>
            {toCapitalLetter(name)}
          </Text>
          <Text style={styles.leaderboardSteps}>30 day steps</Text>
        </View>
        <View style={styles.changeLeaderboardArrow}>
          <Image source={require("../../../../../../assets/icons/v.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
