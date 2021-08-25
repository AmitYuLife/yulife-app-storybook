import React, { memo } from "react";
import { ContentItemProgressBarType } from "@graphql/_core/schema/globalTypes";
import { ContentItemProgressBar as GqlProgressBar } from "@graphql/_core/schema";
import { ProgressBar } from "@molecules";
import { ProgressBarYuCoin } from "@organisms";

export const ContentItemProgressBar = memo((props: GqlProgressBar) => {
  const { currentPosition, maxLength, progressType } = props;

  if (progressType === ContentItemProgressBarType.yuCoin) {
    return <ProgressBarYuCoin currentPosition={currentPosition} maxLength={maxLength} yuCoin={maxLength} />;
  }

  return <ProgressBar currentPosition={currentPosition} maxLength={maxLength} />;
});
