import React, { memo } from "react";
import { BodyAvatar } from "../../svg/body";
import { IAvatar } from "../../avatar-builder/avatar.types";
import { YUSCREEN_AVATAR } from "@ids";
import { TouchableOpacityWithDelay } from "@components/molecules";

export interface AvatarFilledProps {
  onEditPress?: () => void;
  avatar: IAvatar;
  width: number;
  height: number;
}

export const AvatarFilled = memo(function ({ avatar, onEditPress, width, height }: AvatarFilledProps) {
  return (
    <TouchableOpacityWithDelay activeOpacity={!onEditPress ? 1 : 0.5} onPress={onEditPress} testID={YUSCREEN_AVATAR}>
      <BodyAvatar avatar={avatar} showElipse={true} width={width} height={height} viewBox={`0 0 265 553`} />
    </TouchableOpacityWithDelay>
  );
});
