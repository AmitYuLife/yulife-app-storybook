import { Source } from "@atoms";
import MaskedView from "@react-native-masked-view/masked-view";
import { Image, ImageContentFit } from "expo-image";
import { memo, useEffect, useMemo, useState } from "react";
import { DimensionValue, View, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import BattlePassListItemTeaserAnimation from "./battle-pass-list-item-teaser-animation";

interface BattlePassItemAnimatedIconProps {
  images: Source[];
  radius?: DimensionValue;
  style?: ViewStyle;
  resizeMode?: ImageContentFit;
}

const AnimatedImage = Animated.createAnimatedComponent(Image);

const MAX_BORDER_RADIUS = 500;

const BattlePassItemAnimatedIcon = ({
  radius = 24,
  images = [],
  style,
  resizeMode,
}: BattlePassItemAnimatedIconProps) => {
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
    return { height: radius, width: radius, borderRadius: MAX_BORDER_RADIUS, backgroundColor: "black" };
  }, [radius]);

  const imageStyle = useMemo(() => {
    return {
      flex: 1,
      width: radius,
      height: radius,
      background: "transparent",
    };
  }, [radius]);

  return (
    <MaskedView style={style} maskElement={<View style={wrapperStyle} />}>
      <BattlePassListItemTeaserAnimation key={activeImage}>
        <AnimatedImage source={images[activeImage]} style={imageStyle} contentFit={resizeMode} />
      </BattlePassListItemTeaserAnimation>
    </MaskedView>
  );
};

export default memo(BattlePassItemAnimatedIcon);
