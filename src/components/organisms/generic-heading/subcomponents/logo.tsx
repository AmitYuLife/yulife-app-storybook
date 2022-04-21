import React, { memo } from "react";
import { default as YuLifeLogo } from "@atoms/logo";

interface Props {
  logo: "yulife";
}

const _Logo = ({ logo }: Props) => {
  if (logo !== "yulife") {
    return null;
  }

  return <YuLifeLogo />;
};

export const Logo = memo(_Logo);
