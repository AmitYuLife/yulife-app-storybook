import * as React from "react";
import { Image } from "@atoms";
import { TouchableOpacity, View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { memo, useMemo } from "react";
import Avatar, { FRAME_SCALE_FACTOR } from "@components/molecules/avatar/avatar";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";

interface IAvatarFrameSelectItemProps {
  frame: { imageUri: string; lottieUri: string };
  avatar: string;
  isActive: boolean;
  onPress: () => void;
}

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const ANIMATION_DURATION = 300;
const AVATAR_SIZE = 60;

const AvatarFrameSelectItem = ({ frame, avatar, isActive, onPress }: IAvatarFrameSelectItemProps) => {
  const avatarWrapperStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(isActive ? 1.1 : 1, { duration: ANIMATION_DURATION }) }],
    borderRadius: 100,
  }));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Wrong reanimated type for translate and scale
  const avatarUserWrapperStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(!isActive ? AVATAR_SIZE : 0, { duration: 300 }) },
        { scale: withTiming(!isActive ? 0.5 : 1, { duration: 350 }) },
      ],
      overflow: "hidden",
    };
  });

  const frameImageStyle = useMemo(
    () => ({
      ...frameItemStyles.overlay,
      top: (-AVATAR_SIZE * (FRAME_SCALE_FACTOR - 1)) / 2,
      left: (-AVATAR_SIZE * (FRAME_SCALE_FACTOR - 1)) / 2,
    }),
    []
  );

  return (
    <AnimatedTouchableOpacity
      hitSlop={Style.adjust(20)}
      activeOpacity={0.9}
      onPress={onPress}
      style={frameItemStyles.wrapper}
    >
      <Animated.View style={avatarWrapperStyle}>
        <View style={frameItemStyles.avatarFrameContainer}>
          <Animated.View style={avatarUserWrapperStyle}>
            <Avatar size={AVATAR_SIZE} uri={avatar} showEmpty={true} justFrame={!isActive} backgroundColor="white" />
          </Animated.View>
        </View>
        <Image
          source={{ uri: frame.imageUri }}
          style={frameImageStyle}
          width={AVATAR_SIZE * FRAME_SCALE_FACTOR}
          height={AVATAR_SIZE * FRAME_SCALE_FACTOR}
          resizeMode="cover"
        />
      </Animated.View>
    </AnimatedTouchableOpacity>
  );
};

const frameItemStyles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    gap: Style.adjust(20),
  },
  avatarFrameContainer: {
    overflow: "hidden",
  },
  activeIndicator: {
    borderRadius: 100,
    width: Style.adjust(10),
    marginTop: Style.adjust(2),
    aspectRatio: 1,
  },
  overlay: {
    position: "absolute",
    aspectRatio: 1,
  },
});

export default memo(AvatarFrameSelectItem);
