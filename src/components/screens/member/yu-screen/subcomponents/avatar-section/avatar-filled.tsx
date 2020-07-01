import React, { memo } from "react";
import { BodyAvatar } from "../../svg/body";
import { TouchableOpacity } from "react-native";
import { IAvatar } from "../../avatar-builder/avatar.types";
import { Style } from "@styles";
import { YUSCREEN_AVATAR } from "@ids";

const MULTIPLIER = 1.1;
const BASE_WIDTH = 176;
const BASE_HEIGHT = 361;

interface Props {
  onEditPress?: () => void;
  avatar: IAvatar;
}

export const AvatarFilled = memo(function ({ avatar, onEditPress }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onEditPress} testID={YUSCREEN_AVATAR}>
      <BodyAvatar
        avatar={avatar}
        showElipse={true}
        width={Style.adjust(BASE_WIDTH * MULTIPLIER)}
        height={Style.adjust(BASE_HEIGHT * MULTIPLIER)}
        viewBox={`0 0 265 553`}
      />
    </TouchableOpacity>
  );
});
