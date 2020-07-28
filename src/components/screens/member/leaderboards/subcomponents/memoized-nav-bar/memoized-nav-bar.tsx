import React, { memo } from "react";
import { ConnectedNavBar } from "@components/organisms";

const neverUpdate = () => true;

const _MemoizedNavBar = () => {
  return <ConnectedNavBar activeIndex={3} />;
};

export const MemoizedNavBar = memo(_MemoizedNavBar, neverUpdate);
