import { Image } from "@atoms";
import { Colours, Style } from "@styles";
import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { EmptyMaleBody } from "../yumoji/assets/empty-male-body-svg";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import LottieView from "../lottie-view/lottie-view";
import { IAvatarFrame } from "@redux/leaderboards/leaderboards.types";
import { useUserFeatures } from "@hooks";
import { MedalIcon } from "@atoms/icon/medal-icon";

interface IProps {
  uri: string;
  justFrame?: boolean;
  frame?: IAvatarFrame;
  backgroundColor?: string;
  showEmpty?: boolean;
  position?: number;
  size: number;
  testID?: string;
}

export const FRAME_SCALE_FACTOR = 1.3;
const AVATAR_HEIGHT_SCALE = 2.1;

const Avatar = ({
  uri,
  size,
  frame,
  position,
  testID,
  showEmpty,
  justFrame,
  backgroundColor = Colours.metallic.m100,
}: IProps) => {
  const { tempGameEnableAvatarFrames } = useUserFeatures();

  const avatarSize = Style.adjust(size);
  const wrapperStyle = useAnimatedStyle(
    () => ({
      ...styles.wrapper,
      backgroundColor,
      width: avatarSize,
      height: avatarSize,
      opacity: withTiming(justFrame ? 0 : 1),
    }),
    [avatarSize, backgroundColor, justFrame]
  );

  const containerStyle: ViewStyle = useMemo(() => {
    return {
      overflow: "hidden",
      backgroundColor,
      borderRadius: 100,
    };
  }, [backgroundColor]);

  const frameStyle: ViewStyle = useMemo(() => {
    if (!tempGameEnableAvatarFrames) {
      return null;
    }

    return {
      ...styles.overlay,
      width: avatarSize * FRAME_SCALE_FACTOR,
      height: avatarSize * FRAME_SCALE_FACTOR,
      top: (-avatarSize * (FRAME_SCALE_FACTOR - 1)) / 2,
      left: (-avatarSize * (FRAME_SCALE_FACTOR - 1)) / 2,
    };
  }, [avatarSize, tempGameEnableAvatarFrames]);

  return (
    <View>
      <View style={containerStyle}>
        <Animated.View style={wrapperStyle}>
          {uri ? (
            <Image
              suppressLoadingUi={true}
              source={{ uri }}
              width={avatarSize}
              height={avatarSize * AVATAR_HEIGHT_SCALE}
              testID={testID}
            />
          ) : null}
          {showEmpty && !uri ? (
            <View style={styles.emptyAvatar}>
              <EmptyMaleBody width={avatarSize} height={avatarSize * AVATAR_HEIGHT_SCALE} />
            </View>
          ) : null}
        </Animated.View>
      </View>

      {frame && tempGameEnableAvatarFrames ? (
        <>
          {frame.lottieUri ? (
            <LottieView source={frame.lottieUri} resizeMode="contain" autoPlay={true} loop={true} style={frameStyle} />
          ) : (
            <Image
              source={frame.image}
              style={frameStyle}
              width={avatarSize * FRAME_SCALE_FACTOR}
              height={avatarSize * FRAME_SCALE_FACTOR}
              resizeMode="cover"
            />
          )}
        </>
      ) : null}

      {!position ? null : (
        <View style={styles.badge}>
          <MedalIcon position={position} size={avatarSize / 2} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    borderRadius: 100,
  },
  overlay: {
    position: "absolute",
    aspectRatio: 1,
  },
  badge: {
    position: "absolute",
    bottom: Style.adjust(-4),
    right: 0,
  },
  emptyAvatar: {
    marginTop: Style.adjust(10),
  },
});

export default memo(Avatar);
