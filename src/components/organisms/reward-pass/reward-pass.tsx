import { Box, RawImage } from "@atoms";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { SduiAction } from "@graphql/__generated";
import { Rays } from "@organisms";
import React, { memo, useMemo } from "react";
import { DimensionValue, StyleSheet } from "react-native";
import RewardPassRewardImage from "./subcomponents/reward-pass-reward-image";
import { RewardPassRewardLabel } from "./subcomponents/reward-pass-reward-label";
import RewardPassLottieStars from "./subcomponents/reward-pass-lottie-stars/reward-pass-lottie-stars";
import { Pressable } from "@components/molecules";

interface IRewardPassProps {
  label: string;
  primaryColor: string;
  passIcon: string;
  backgroundImage: string;
  foregroundImage: string;
  index?: number;
  onPress?: SduiAction;
  slots: {
    x: string;
    y: string;
    images: string[];
  }[];
}

const RAYS_DURATION = 20000;
const STARS_DELAY = 560;

const RewardPass = ({
  label,
  backgroundImage,
  primaryColor,
  onPress,
  index,
  passIcon,
  slots,
  foregroundImage,
}: IRewardPassProps) => {
  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onPress);
  const initialRaysRotation = useMemo(() => index * 2 * Math.PI, [index]);

  return (
    <Pressable
      br={15}
      w="100%"
      bg={primaryColor}
      overflow="hidden"
      pressedTranslation={0}
      enableAnimation={true}
      aspectRatio={344 / 180}
      onPress={handleSduiAction}
    >
      <RawImage source={backgroundImage} style={styles.backgroundImage} contentFit="cover" />
      <Box position="absolute" w="100%" h="100%" alignItems="center" justifyContent="center">
        <RawImage source={foregroundImage} style={styles.backgroundImage} contentFit="cover" />
      </Box>
      <Box position="absolute" w="100%" h="100%" top={"-165%"} right="-44%">
        <Rays
          initialRotation={initialRaysRotation}
          backgroundColor="transparent"
          style="thin"
          duration={RAYS_DURATION}
          positionStyle={styles.rays}
        />
      </Box>
      <RewardPassLottieStars delay={STARS_DELAY * index} />
      <Box position="absolute" w="100%" h="100%">
        {slots.map(({ x, y, images }, slotIndex) => (
          <RewardPassRewardImage
            w="14%"
            left={x as DimensionValue}
            bottom={y as DimensionValue}
            position="absolute"
            aspectRatio={1}
            images={images}
            key={slotIndex}
          />
        ))}
      </Box>
      <Box position="absolute" w="100%" h="100%" alignItems="flex-end">
        <Box p={2} w="60%" alignItems="center" mt={12}>
          <RewardPassRewardLabel iconUrl={passIcon} label={label} />
        </Box>
      </Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rays: {
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  lottie: {
    width: "100%",
    height: "100%",
  },
});

export default memo(RewardPass);
