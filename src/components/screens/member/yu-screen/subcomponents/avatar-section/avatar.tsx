import React, { memo, ComponentProps } from "react";
import { AvatarEmpty } from "./avatar-empty";
import { AvatarFilled } from "./avatar-filled";
import { IAvatar } from "../../avatar-builder/avatar.types";

type Props = ComponentProps<typeof AvatarFilled> & {
  isAvatarCreated: boolean;
  loading: boolean;
  avatarFromLocal: IAvatar;
  sizeMultiplier?: number;
};

export const Avatar = memo(function (props: Props) {
  const { isAvatarCreated, avatar, onEditPress, sizeMultiplier, loading, avatarFromLocal } = props;
  if (!isAvatarCreated || loading || !avatar) {
    return <AvatarEmpty />;
  }

  return (
    <AvatarFilled
      avatar={avatarFromLocal ? avatarFromLocal : avatar}
      onEditPress={onEditPress}
      sizeMultiplier={sizeMultiplier}
    />
  );
});
