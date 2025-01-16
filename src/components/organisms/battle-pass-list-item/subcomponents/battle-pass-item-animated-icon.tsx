import { Box, Source } from "@atoms";
import MaskedView from "@react-native-masked-view/masked-view";
import { Image } from "expo-image";
import { memo, useEffect, useMemo, useState } from "react";
import { ImageResizeMode, View, ViewStyle } from "react-native";
import Animated, { Easing, FadeOut, ZoomIn } from "react-native-reanimated";

interface BattlePassItemAnimatedIconProps {
  images: Source[];
  radius?: number;
  style?: ViewStyle;
}

const EXIT_DURATION = 500;
const ENTER_DURATION = 1000;

const AnimatedImage = Animated.createAnimatedComponent(Image);

const BattlePassItemAnimatedIcon = ({ radius = 24, images, style }: BattlePassItemAnimatedIconProps) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prevActiveImage) => {
        return (prevActiveImage + 1) % images.length;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  const wrapperStyle = useMemo(() => {
    return { height: radius, width: radius, borderRadius: radius / 2, backgroundColor: "black" };
  }, [radius]);

  const imageStyle = useMemo(() => {
    return {
      height: radius,
      width: radius,
      resizeMode: "contain" as ImageResizeMode,
      flex: 1,
      background: "transparent",
    };
  }, [radius]);

  return (
    <MaskedView style={style} maskElement={<View style={wrapperStyle} />}>
      <Box
        entering={ZoomIn.easing(Easing.elastic(1.1)).duration(ENTER_DURATION)}
        exiting={FadeOut.duration(EXIT_DURATION)}
        key={activeImage}
      >
        <AnimatedImage source={images[activeImage]} style={imageStyle} />
      </Box>
    </MaskedView>
  );
};

export default memo(BattlePassItemAnimatedIcon);
