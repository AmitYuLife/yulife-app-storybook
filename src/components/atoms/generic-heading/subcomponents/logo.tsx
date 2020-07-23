import React, { memo } from "react";
import { Logo as YuLifeLogo } from "@atoms";

interface Props {
  logo: "yulife";
}

const _Logo = ({ logo }: Props) => {
  if (logo !== "yulife") {
    return null;
  }

  return <YuLifeLogo scale={0.27} />;
};

export const Logo = memo(_Logo);
