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
      onClose={props.onClose ? () => dispatch(props.onClose) : null}
      heading={props.contentItemProcessingTimerHeading}
    />
  );
});
