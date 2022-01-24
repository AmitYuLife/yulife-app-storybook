import React, { memo } from "react";
import { ContentItemProcessingTimer as Props } from "@graphql/_core/schema";
import { ProcessingTimer } from "@molecules";
import { useDispatch } from "react-redux";

export const ContentItemProcessingTimer = memo((props: Props) => {
  const dispatch = useDispatch();

  return (
    <ProcessingTimer
      backgroundUrl={props.backgroundUrl}
      secondsUntilTarget={props.secondsUntilTarget}
      onClose={() => dispatch(props.onClose)}
      heading={props.contentItemProcessingTimerHeading}
    />
  );
});
