import React, { ComponentProps, memo } from "react";
import { ContentItemProgressBarType } from "@graphql/_core/schema/globalTypes";
import { ContentItemProgressBar as GqlProgressBar } from "@graphql/_core/schema";
import { ProgressBar } from "@molecules";
import { ProgressBarYuCoin } from "@organisms";
import { LayoutChangeEvent, View } from "react-native";
import { useSduiActionUpdateBus } from "../_hooks";

type ProgressBarSuperset = (props: ComponentProps<typeof ProgressBarYuCoin>) => JSX.Element;

export const ContentItemProgressBar = memo((props: GqlProgressBar) => {
  const { maxLength, progressType, publishKeyHeight } = props;

  const Component: ProgressBarSuperset =
    progressType === ContentItemProgressBarType.yuCoin ? ProgressBarYuCoin : ProgressBar;

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
