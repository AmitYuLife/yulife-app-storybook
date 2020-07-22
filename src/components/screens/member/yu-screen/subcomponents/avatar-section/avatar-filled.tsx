import React, { memo } from "react";
import { BodyAvatar } from "../../svg/body";
import { TouchableOpacity } from "react-native";
import { IAvatar } from "../../avatar-builder/avatar.types";
import { YUSCREEN_AVATAR } from "@ids";

export interface AvatarFilledProps {
  onEditPress?: () => void;
  avatar: IAvatar;
  width: number;
  height: number;
}

export const AvatarFilled = memo(function ({ avatar, onEditPress, width, height }: AvatarFilledProps) {
  return (
    <TouchableOpacity activeOpacity={!onEditPress ? 1 : 0.5} onPress={onEditPress} testID={YUSCREEN_AVATAR}>
      <BodyAvatar avatar={avatar} showElipse={true} width={width} height={height} viewBox={`0 0 265 553`} />
    </TouchableOpacity>
  );
});
