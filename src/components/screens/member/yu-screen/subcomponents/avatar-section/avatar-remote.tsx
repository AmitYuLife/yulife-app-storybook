import React, { memo } from "react";
import { SvgCssUri } from "react-native-svg";
import { TouchableOpacityWithState } from "@molecules";
import { YUSCREEN_AVATAR } from "@ids";

const DEFAULT_MULTIPLIER = 1.1;
const BASE_WIDTH = 176;
const BASE_HEIGHT = 361;

interface Props {
  onEditPress?: () => void;
  avatarUrl: string;
  sizeMultiplier?: number;
}

export const AvatarRemote = memo(function ({ avatarUrl, onEditPress, sizeMultiplier = DEFAULT_MULTIPLIER }: Props) {
  return (
    <TouchableOpacityWithState activeOpacity={!onEditPress ? 1 : 0.5} onPress={onEditPress} testID={YUSCREEN_AVATAR}>
      <SvgCssUri uri={avatarUrl} style={{ width: BASE_WIDTH * sizeMultiplier, height: BASE_HEIGHT * sizeMultiplier }} />
    </TouchableOpacityWithState>
  );
});
