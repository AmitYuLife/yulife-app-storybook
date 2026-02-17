import React, { forwardRef, memo } from "react";
import LottieView, { LottieViewProps } from "lottie-react-native";
import { useGetLottieJson } from "@hooks";
import { Loading, Source } from "@atoms";
import { View } from "react-native";
import { LOTTIE_VIEW } from "@ids";
import { DETOX_ENABLED } from "@services/socket";

export interface ILottieProps extends Omit<LottieViewProps, "source"> {
  suppressLoadingUi?: boolean;
  source: Source | string;
}

const LottieWrapper = forwardRef<LottieView, ILottieProps>((props, ref) => {
  const { uri, loading } = useGetLottieJson(typeof props.source === "string" ? props.source : null);

  const autoPlay = DETOX_ENABLED ? false : props.autoPlay;
  const loop = DETOX_ENABLED ? false : props.loop;

  return (
    <>
      {loading && !props?.suppressLoadingUi ? (
        <View style={props.style}>
          <Loading />
        </View>
      ) : (
        <LottieView
          ref={ref}
          {...props}
          autoPlay={autoPlay}
          loop={loop}
          source={uri || props.source}
          testID={LOTTIE_VIEW}
        />
      )}
    </>
  );
});

export default memo(LottieWrapper);
