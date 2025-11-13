import React, { memo } from "react";
import { IYuLifeLogoProps, default as YuLifeLogo } from "@atoms/logo";

interface Props {
  logo: "yulife";
  type?: IYuLifeLogoProps["type"];
}

const _Logo = ({ logo, type }: Props) => {
  if (logo !== "yulife") {
    return null;
  }

  return <YuLifeLogo type={type} />;
};

export const Logo = memo(_Logo);
