import React, { memo } from "react";
import LottieView, { LottieViewProps } from "lottie-react-native";
import { useGetLottieJson } from "@hooks";
import { Loading } from "@atoms";
import { View } from "react-native";

export interface ILottieProps extends LottieViewProps {
  suppressLoadingUi?: boolean;
}

const LottieWrapper = (props: ILottieProps) => {
  const { uri, loading } = useGetLottieJson(typeof props.source === "string" ? props.source : null);

  return (
    <>
      {loading && !props?.suppressLoadingUi ? (
        <View style={props.style}>
          <Loading />
        </View>
      ) : (
        <LottieView {...props} source={uri || props.source} />
      )}
    </>
  );
};

export default memo(LottieWrapper);
