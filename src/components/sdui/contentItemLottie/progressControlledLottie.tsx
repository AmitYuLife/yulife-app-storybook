import { default as Reanimated, SharedValue, useAnimatedProps } from "react-native-reanimated";
import { LottieView } from "@molecules";
import { memo, useContext } from "react";
import { useGetLottieJson } from "@hooks";
import { SduiStateContext } from "../_context/SduiProvider";
import { Props } from "./types";
import { useFadeIn } from "./useFadeIn";
import { get, isNil } from "lodash";
import { Animated } from "react-native";
import { styles } from "./styles";
import { Style } from "@styles";
import { mapServerStyles } from "../_utils/mapServerStyles";

const AnimatedLottieView = Reanimated.createAnimatedComponent(LottieView);

export const ProgressControlledLottie = memo((props: Props) => {
  const { uri: lottieUri } = useGetLottieJson(props.uri);
  const { bus } = useContext(SduiStateContext);
  const progress = get(bus, props.progressKey) as unknown as SharedValue<number>;
  const animatedProps = useAnimatedProps(() => ({ progress: progress?.value ?? 0 }), [progress]);
  const { opacity } = useFadeIn(props.shouldUseFadeIn);

  if (isNil(progress) || !lottieUri) {
    return null;
  }

  const animationAspectRatio = props.aspectRatio ?? (lottieUri?.w / lottieUri?.h || 1);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        { opacity, height: Style.DEVICE_WIDTH / animationAspectRatio },
        mapServerStyles(props.styles),
      ]}
    >
      <AnimatedLottieView style={styles.wrapper} source={lottieUri} animatedProps={animatedProps} />
    </Animated.View>
  );
});
