import React, { memo } from "react";
import { AvatarEmpty } from "@molecules";
import { Style } from "@styles";
import { AvatarFilled, AvatarFilledProps } from "./avatar-filled";
import { IAvatar } from "../../avatar-builder/avatar.types";
import { AvatarRemote } from "./avatar-remote";

type Props = Omit<AvatarFilledProps, "width" | "height"> & {
  isAvatarCreated: boolean;
  loading: boolean;
  avatarUrl?: string;
  avatar?: IAvatar;
  sizeMultiplier?: number;
};

const DEFAULT_MULTIPLIER = 1.1;
const BASE_WIDTH = 176;
const BASE_HEIGHT = 361;

export const Avatar = memo(function (props: Props) {
  const { isAvatarCreated, avatar, onEditPress, sizeMultiplier = DEFAULT_MULTIPLIER, loading, avatarUrl } = props;
  const style = {
    width: Style.adjust(BASE_WIDTH * sizeMultiplier),
    height: Style.adjust(BASE_HEIGHT * sizeMultiplier),
  };

  if (!isAvatarCreated || loading || !avatarUrl) {
    return <AvatarEmpty style={style} />;
  }

  if (avatar) {
    return <AvatarFilled avatar={avatar} onEditPress={onEditPress} width={style.width} height={style.height} />;
  }

  if (avatarUrl) {
    return <AvatarRemote avatarUrl={avatarUrl} onEditPress={onEditPress} style={style} />;
  }

  return <AvatarEmpty style={style} />;
});
