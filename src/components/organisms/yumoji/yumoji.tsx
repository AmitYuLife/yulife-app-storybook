import React, { memo } from "react";
import { GetYumojiRemoteParts_avatar } from "@graphql/_core/schema";
import { ScalableYumoji } from "./scalableYumoji";

type Props = GetYumojiRemoteParts_avatar & { width: number; height: number };

function _Yumoji(props: Props) {
  const { width, height, shadow, head, eyes, hair, body, pants, chest, gloves, facialHair, glasses, boots } = props;

  const items = [
    { partType: "shadow", remoteUrl: shadow?.remoteUrl },
    { partType: "head", remoteUrl: head?.remoteUrl },
    { partType: "eyes", remoteUrl: eyes?.remoteUrl },
    { partType: "hair", remoteUrl: hair?.remoteUrl },
    { partType: "body", remoteUrl: body?.remoteUrl },
    { partType: "pants", remoteUrl: pants?.remoteUrl },
    { partType: "chest", remoteUrl: chest?.remoteUrl },
    { partType: "gloves", remoteUrl: gloves?.remoteUrl },
    { partType: "facialHair", remoteUrl: facialHair?.remoteUrl },
    { partType: "glasses", remoteUrl: glasses?.remoteUrl },
    { partType: "boots", remoteUrl: boots?.remoteUrl },
  ];

  return <ScalableYumoji height={height} width={width} items={items} bodyType={"yumoji"} />;
}

export const Yumoji = memo(_Yumoji);
