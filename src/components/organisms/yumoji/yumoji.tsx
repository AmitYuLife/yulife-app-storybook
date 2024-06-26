import React, { memo, useMemo } from "react";
import { ScalableYumoji } from "./scalableYumoji";
import { AvatarPartType, GetYumojiRemotePartsQuery } from "@graphql/__generated";

interface IYumojiProps {
  width: number;
  height: number;
  avatar: GetYumojiRemotePartsQuery["avatar"];
}

export const Yumoji = memo(({ width, height, avatar }: IYumojiProps) => {
  const items = useMemo(
    () => [
      { partType: "shadow", ...avatar.shadow },
      { partType: AvatarPartType.Hair, ...avatar.head },
      { partType: AvatarPartType.Eyes, ...avatar.eyes },
      { partType: AvatarPartType.Hair, ...avatar.hair },
      { partType: AvatarPartType.Body, ...avatar.body },
      { partType: AvatarPartType.Chest, ...avatar.chest },
      { partType: AvatarPartType.Pants, ...avatar.pants },
      { partType: AvatarPartType.Gloves, ...avatar.gloves },
      { partType: AvatarPartType.FacialHair, ...avatar.facialHair },
      { partType: AvatarPartType.Glasses, ...avatar.glasses },
      { partType: AvatarPartType.Boots, ...avatar.boots },
      { partType: AvatarPartType.Headwear, ...avatar.headwear },
      { partType: AvatarPartType.Makeup, ...avatar.makeup },
      { partType: AvatarPartType.Headband, ...avatar.headband },
    ],
    [avatar]
  );

  return <ScalableYumoji height={height} width={width} items={items} bodyType={"yumoji"} />;
});
