import { memo, useEffect, useRef } from "react";
import LottieView, { LottieViewProps } from "lottie-react-native";
import { useGetLottieJson } from "@hooks";
import { Loading, Source } from "@atoms";
import { View } from "react-native";
import { LOTTIE_VIEW } from "@ids";
import { DETOX_ENABLED } from "@services/socket";

export interface ILottieProps extends Omit<LottieViewProps, "source"> {
  suppressLoadingUi?: boolean;
  source: LottieViewProps["source"] | Source;
  ref?: React.RefObject<LottieView>;
}

const LottieWrapper = ({ ref, ...props }: ILottieProps) => {
  const internalRef = useRef<LottieView>(null);
  const lottieRef = ref || internalRef;
  const { uri, loading } = useGetLottieJson(typeof props.source === "string" ? props.source : null);

  const autoPlay = DETOX_ENABLED ? false : props.autoPlay;
  const loop = DETOX_ENABLED ? false : props.loop;

  // fixes a bug on IOS when props.autoPlay=false is ignored
  useEffect(() => {
    if (lottieRef.current && autoPlay === false) {
      lottieRef.current.reset();
    }
  }, [lottieRef, autoPlay]);

  return (
    <>
      {loading && !props?.suppressLoadingUi ? (
        <View style={props.style}>
          <Loading />
        </View>
      ) : (
        <LottieView
          ref={lottieRef}
          {...props}
          autoPlay={autoPlay}
          loop={loop}
          source={uri || props.source}
          testID={LOTTIE_VIEW}
        />
      )}
    </>
  );
};

export default memo(LottieWrapper);
