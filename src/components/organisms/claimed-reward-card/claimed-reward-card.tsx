import { Box, Image, TextTemplate } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { Style, StyleSheet } from "@styles";
import { memo, ReactNode, useEffect, useRef } from "react";
import LinearGradient from "react-native-linear-gradient";
import type Lottie from "lottie-react-native";
import { LottieView } from "@molecules";
import shineAnimation from "./sparkles.json";

interface IClaimedRewardBaseProps extends IBoxProps {
  image: string | ReactNode;
  borderColor?: string;
  backgroundColor?: string;
  backgroundGradient?: string[];
  borderGradient?: string[];
  sparkles?: {
    enabled: boolean;
    delay?: number;
  };
}

interface IClaimedRewardNoChildrenProps extends IClaimedRewardBaseProps {
  title: string;
  value?: string;
  color?: string;
  valueColor?: string;
  children?: never;
}

interface IClaimedRewardChildrenProps extends IClaimedRewardBaseProps {
  children: ReactNode;
  title?: never;
  value?: never;
  color?: never;
  valueColor?: never;
}

type IClaimedRewardProps = IClaimedRewardNoChildrenProps | IClaimedRewardChildrenProps;

const BORDER_RADIUS = 20;
const BORDER_WIDTH = 2;
const BOTTOM_BORDER_WIDTH = 4;

const ClaimedReward = ({
  image,
  color,
  title,
  value,
  children,
  borderColor,
  sparkles,
  borderGradient,
  backgroundColor,
  backgroundGradient,
  valueColor = "#956AFF",
  ...props
}: IClaimedRewardProps) => {
  const lottieRef = useRef<Lottie>(null);

  useEffect(() => {
    if (!sparkles?.enabled || !lottieRef.current) {
      return;
    }

    if (!sparkles.delay) {
      lottieRef.current?.play();
      return;
    }

    const timeout = setTimeout(() => {
      lottieRef.current?.play();
    }, sparkles.delay);

    return () => clearTimeout(timeout);
  }, [sparkles?.enabled, sparkles?.delay]);

  const maxWidth = Style.SCREEN_WIDTH / 3 - 10;

  const innerContent = (
    <Box
      aspectRatio={5 / 7}
      br={borderGradient ? BORDER_RADIUS - BORDER_WIDTH : BORDER_RADIUS}
      borderBottomWidth={borderGradient ? 0 : BOTTOM_BORDER_WIDTH}
      borderColor={borderGradient ? undefined : borderColor}
      borderWidth={borderGradient ? 0 : 1}
      bg={backgroundGradient ? undefined : backgroundColor}
      w={borderGradient ? undefined : 115}
      maxWidth={borderGradient ? undefined : maxWidth}
      flex={borderGradient ? 1 : undefined}
      overflow="hidden"
      {...props}
    >
      {backgroundGradient ? <LinearGradient colors={backgroundGradient} style={styles.backgroundGradient} /> : null}
      <Box
        borderTopRadius={12}
        borderColor={borderGradient ? undefined : borderColor}
        overflow="hidden"
        w="100%"
        px={5}
        pt={5}
      >
        {typeof image === "string" ? (
          <Image
            source={{ uri: image }}
            overflow="hidden"
            width="100%"
            resizeMode="cover"
            borderBottomRadius={0}
            borderTopRadius={15}
            br={0}
            height={80}
          />
        ) : (
          <Box overflow="hidden" w="100%" h={80} borderTopRadius={15} justifyContent="center" alignItems="center">
            {image}
          </Box>
        )}
      </Box>
      <Box py={0} flex={1} pt={0} justifyContent="center" alignItems="flex-end" flexDirection="row">
        <Box px={12} pb={15} justifyContent="center" flex={1} h="100%">
          {children ? (
            children
          ) : (
            <>
              <TextTemplate type="l1b" textAlign="center" color={color} numberOfLines={3}>
                {title}
              </TextTemplate>
              {value ? (
                <TextTemplate type="b2b" textAlign="center" color={valueColor}>
                  {value}
                </TextTemplate>
              ) : null}
            </>
          )}
        </Box>
      </Box>
      {sparkles?.enabled ? (
        <Box position="absolute" w="100%" h="100%" overflow="hidden" pointerEvents="none">
          <LottieView
            ref={lottieRef}
            source={shineAnimation}
            autoPlay={false}
            loop={true}
            resizeMode="cover"
            style={styles.sparkles}
          />
        </Box>
      ) : null}
    </Box>
  );

  if (borderGradient) {
    return (
      <Box w={115} maxWidth={maxWidth} aspectRatio={5 / 7}>
        <LinearGradient
          colors={borderGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientBorder}
        >
          {innerContent}
        </LinearGradient>
      </Box>
    );
  }

  return innerContent;
};

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: BORDER_RADIUS,
    padding: BORDER_WIDTH,
    paddingBottom: BOTTOM_BORDER_WIDTH,
    flex: 1,
  },
  backgroundGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  sparkles: {
    width: "100%",
    height: "100%",
  },
});

export default memo(ClaimedReward);
