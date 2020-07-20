import React, { memo, ComponentProps } from "react";
import { AvatarEmpty } from "./avatar-empty";
import { AvatarFilled } from "./avatar-filled";
import { IAvatar } from "../../avatar-builder/avatar.types";
import { AvatarRemote } from "./avatar-remote";

type Props = ComponentProps<typeof AvatarFilled> & {
  isAvatarCreated: boolean;
  loading: boolean;
  avatarUrl?: string;
  avatar?: IAvatar;
  sizeMultiplier?: number;
};

export const Avatar = memo(function (props: Props) {
  const { isAvatarCreated, avatar, onEditPress, sizeMultiplier, loading, avatarUrl } = props;
  if (!isAvatarCreated || loading || !avatarUrl) {
    return <AvatarEmpty />;
  }

  if (avatar) {
    return <AvatarFilled avatar={avatar} onEditPress={onEditPress} sizeMultiplier={sizeMultiplier} />;
  }

  if (avatarUrl) {
    return <AvatarRemote avatarUrl={avatarUrl} sizeMultiplier={sizeMultiplier} onEditPress={onEditPress} />;
  }

  return <AvatarEmpty />;
});
