import React, { forwardRef, memo } from "react";
import LottieView, { LottieViewProps } from "lottie-react-native";
import { useGetLottieJson } from "@hooks";
import { Loading, Source } from "@atoms";
import { View } from "react-native";
import { LOTTIE_VIEW } from "@ids";

export interface ILottieProps extends Omit<LottieViewProps, "source"> {
  suppressLoadingUi?: boolean;
  source: Source | string;
}

const LottieWrapper = forwardRef<LottieView, ILottieProps>((props, ref) => {
  const { uri, loading } = useGetLottieJson(typeof props.source === "string" ? props.source : null);

  return (
    <>
      {loading && !props?.suppressLoadingUi ? (
        <View style={props.style}>
          <Loading />
        </View>
      ) : (
        <LottieView ref={ref} {...props} source={uri || props.source} testID={LOTTIE_VIEW} />
      )}
    </>
  );
});

export default memo(LottieWrapper);
