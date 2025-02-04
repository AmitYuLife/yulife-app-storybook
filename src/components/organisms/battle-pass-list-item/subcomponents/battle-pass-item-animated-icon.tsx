import { Source } from "@atoms";
import MaskedView from "@react-native-masked-view/masked-view";
import { Image } from "expo-image";
import { memo, useEffect, useMemo, useState } from "react";
import { ImageResizeMode, View, ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import BattlePassListItemTeaserAnimation from "./battle-pass-list-item-teaser-animation";

interface BattlePassItemAnimatedIconProps {
  images: Source[];
  radius?: number;
  style?: ViewStyle;
}

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
      flex: 1,
      width: radius,
      height: radius,
      background: "transparent",
      resizeMode: "contain" as ImageResizeMode,
    };
  }, [radius]);

  return (
    <MaskedView style={style} maskElement={<View style={wrapperStyle} />}>
      <BattlePassListItemTeaserAnimation key={activeImage}>
        <AnimatedImage source={images[activeImage]} style={imageStyle} />
      </BattlePassListItemTeaserAnimation>
    </MaskedView>
  );
};

export default memo(BattlePassItemAnimatedIcon);
