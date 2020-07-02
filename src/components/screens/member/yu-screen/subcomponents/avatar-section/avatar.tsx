import React, { memo, ComponentProps } from "react";
import { AvatarEmpty } from "./avatar-empty";
import { AvatarFilled } from "./avatar-filled";
import { IAvatar } from "../../avatar-builder/avatar.types";

type Props = ComponentProps<typeof AvatarFilled> & {
  isAvatarCreated: boolean;
  loading: boolean;
  avatarFromLocal: IAvatar;
};

export const Avatar = memo(function (props: Props) {
  const { isAvatarCreated, avatar, onEditPress, loading, avatarFromLocal } = props;
  if (!isAvatarCreated || loading || !avatar) {
    return <AvatarEmpty />;
  }

  if (avatarFromLocal) {
    return <AvatarFilled avatar={avatarFromLocal} onEditPress={onEditPress} />;
  }

  return <AvatarFilled onEditPress={onEditPress} avatar={avatar} />;
});
