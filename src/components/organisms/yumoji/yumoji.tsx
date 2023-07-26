import React, { memo, useMemo } from "react";
import { GetYumojiRemoteParts_avatar } from "@graphql/_core/schema";
import { ScalableYumoji } from "./scalableYumoji";
import { AvatarPartType } from "@graphql/_core/schema/globalTypes";

interface IYumojiProps {
  width: number;
  height: number;
  avatar: GetYumojiRemoteParts_avatar;
}

export const Yumoji = memo(({ width, height, avatar }: IYumojiProps) => {
  const items = useMemo(
    () => [
      { partType: "shadow", ...avatar.shadow },
      { partType: AvatarPartType.head, ...avatar.head },
      { partType: AvatarPartType.eyes, ...avatar.eyes },
      { partType: AvatarPartType.hair, ...avatar.hair },
      { partType: AvatarPartType.body, ...avatar.body },
      { partType: AvatarPartType.chest, ...avatar.chest },
      { partType: AvatarPartType.pants, ...avatar.pants },
      { partType: AvatarPartType.gloves, ...avatar.gloves },
      { partType: AvatarPartType.facialHair, ...avatar.facialHair },
      { partType: AvatarPartType.glasses, ...avatar.glasses },
      { partType: AvatarPartType.boots, ...avatar.boots },
      { partType: AvatarPartType.headwear, ...avatar.headwear },
    ],
    [avatar]
  );

  return <ScalableYumoji height={height} width={width} items={items} bodyType={"yumoji"} />;
});
