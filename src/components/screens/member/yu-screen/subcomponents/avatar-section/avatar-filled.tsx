import React, { memo } from "react";
import { BodyAvatar } from "../../svg/body";
import { TouchableOpacity } from "react-native";
import { IAvatar } from "../../avatar-builder/avatar.types";
import { Style } from "@styles";
import { YUSCREEN_AVATAR } from "@ids";

const DEFAULT_MULTIPLIER = 1.1;
const BASE_WIDTH = 176;
const BASE_HEIGHT = 361;

interface Props {
  onEditPress?: () => void;
  avatar: IAvatar;
  sizeMultiplier?: number;
}

export const AvatarFilled = memo(function ({ avatar, onEditPress, sizeMultiplier = DEFAULT_MULTIPLIER }: Props) {
  return (
    <TouchableOpacity activeOpacity={!onEditPress ? 1 : 0.5} onPress={onEditPress} testID={YUSCREEN_AVATAR}>
      <BodyAvatar
        avatar={avatar}
        showElipse={true}
        width={Style.adjust(BASE_WIDTH * sizeMultiplier)}
        height={Style.adjust(BASE_HEIGHT * sizeMultiplier)}
        viewBox={`0 0 265 553`}
      />
    </TouchableOpacity>
  );
});
