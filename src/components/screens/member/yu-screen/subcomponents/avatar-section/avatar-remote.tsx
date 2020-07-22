import React, { memo } from "react";
import { AvatarCachedSvg } from "@components/organisms";
import { TouchableOpacityWithState } from "@molecules";
import { YUSCREEN_AVATAR } from "@ids";
import { ViewStyle } from "react-native";

interface Props {
  onEditPress?: () => void;
  avatarUrl: string;
  style: ViewStyle;
}

export const AvatarRemote = memo(function ({ avatarUrl, onEditPress, style }: Props) {
  return (
    <TouchableOpacityWithState activeOpacity={!onEditPress ? 1 : 0.5} onPress={onEditPress} testID={YUSCREEN_AVATAR}>
      <AvatarCachedSvg uri={avatarUrl} style={style} />
    </TouchableOpacityWithState>
  );
});
