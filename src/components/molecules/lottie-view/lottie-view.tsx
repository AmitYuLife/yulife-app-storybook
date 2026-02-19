import { memo, useCallback, useImperativeHandle, useRef } from "react";
import LottieView, { LottieViewProps } from "lottie-react-native";
import { useGetLottieJson } from "@hooks";
import { Loading, Source } from "@atoms";
import { LayoutChangeEvent, View } from "react-native";
import { LOTTIE_VIEW } from "@ids";
import { DETOX_ENABLED } from "@services/socket";

export interface ILottieProps extends Omit<LottieViewProps, "source"> {
  suppressLoadingUi?: boolean;
  source: LottieViewProps["source"] | Source;
  ref?: React.RefObject<LottieView>;
}

const LottieWrapper = ({ ref, ...props }: ILottieProps) => {
  const internalRef = useRef<LottieView>(null);
  const isPlayCalledExternally = useRef<boolean>(false);
  const { uri, loading } = useGetLottieJson(typeof props.source === "string" ? props.source : null);

  const autoPlay = DETOX_ENABLED && props.loop ? false : props.autoPlay;
  const loop = DETOX_ENABLED ? false : props.loop;

  // Intercept play calls from the parent so we can track whether play()
  // has been called. This prevents the iOS autoPlay=false workaround below from
  // racing with a parent that calls ref.current.play() in its own useEffect.
  useImperativeHandle(
    ref,
    () =>
      ({
        ...internalRef.current,
        play: (startFrame?: number, endFrame?: number) => {
          isPlayCalledExternally.current = true;
          internalRef.current?.play(startFrame, endFrame);
        },
      } as LottieView),
    []
  );

  const propsOnLayout = props?.onLayout;

  // fixes a bug on IOS when props.autoPlay=false is ignored
  // only runs after layout to avoid racing with play() calls in useEffects
  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (!isPlayCalledExternally.current && internalRef.current && !autoPlay) {
        internalRef.current.reset();
      }

      propsOnLayout?.(event);
    },
    [autoPlay, isPlayCalledExternally, propsOnLayout]
  );

  return (
    <>
      {loading && !props?.suppressLoadingUi ? (
        <View style={props.style}>
          <Loading />
        </View>
      ) : (
        <LottieView
          ref={internalRef}
          {...props}
          autoPlay={autoPlay}
          loop={loop}
          source={uri || props.source}
          testID={LOTTIE_VIEW}
          onLayout={onLayout}
        />
      )}
    </>
  );
};

export default memo(LottieWrapper);
