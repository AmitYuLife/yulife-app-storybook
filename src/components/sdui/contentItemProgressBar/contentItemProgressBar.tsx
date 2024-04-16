import React, { ComponentProps, ReactNode, memo } from "react";

import { ContentItemProgressBarType, ContentItemProgressBarFragment as GqlProgressBar } from "@graphql/__generated";
import { ProgressBar } from "@molecules";
import { ProgressBarYuCoin } from "@organisms";
import { LayoutChangeEvent, View } from "react-native";
import { useSduiActionUpdateBus } from "../_hooks";

type ProgressBarSuperset = (props: ComponentProps<typeof ProgressBarYuCoin>) => ReactNode;

export const ContentItemProgressBar = memo((props: GqlProgressBar) => {
  const { maxLength, progressType, publishKeyHeight } = props;

  const Component: ProgressBarSuperset =
    progressType === ContentItemProgressBarType.YuCoin ? ProgressBarYuCoin : ProgressBar;

  const { updateBus } = useSduiActionUpdateBus();

  const handleLayout = (event: LayoutChangeEvent) => {
    if (!publishKeyHeight) {
      return;
    }

    updateBus(publishKeyHeight, event.nativeEvent.layout.height);
  };

  return (
    <View onLayout={handleLayout}>
      <Component {...props} yuCoin={maxLength} />
    </View>
  );
});

