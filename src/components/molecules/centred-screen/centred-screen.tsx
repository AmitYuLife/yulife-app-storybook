import { createElement, memo, PropsWithChildren, JSX, ReactElement, ReactNode, isValidElement } from "react";
import { Image as RNImage, ImageSourcePropType, ImageStyle, View, ViewStyle } from "react-native";
import styles from "./centred-screen.styles";
import { Style } from "@styles";
import { IScreen } from "@theme";
import { LottieView } from "@molecules";
import { Box, Image, Source } from "@atoms";
import { isWeb } from "@utils/device";
import { getBundledImageUri, normalizeImageSource } from "@utils/normalize-image-source";

interface Props {
  children?: ReactNode;
  testID?: string;
  BackgroundGradient?: JSX.Element | null;
  backgroundImage?: Source | ReactElement;
  style?: ViewStyle | ImageStyle;
  isLottie?: boolean;
  isFullScreen?: boolean;
}

const CentredScreen = ({
  children,
  testID,
  BackgroundGradient = null,
  backgroundImage,
  style,
  isLottie,
  isFullScreen,
}: Props) => {
  return (
    <View style={[styles.wrapper, style]} testID={testID}>
      {BackgroundGradient}
      {isValidElement(backgroundImage) ? (
        <Box
          position="absolute"
          width={Style.DEVICE_WIDTH}
          height={Style.DEVICE_HEIGHT}
          disableAutoAdjust={true}
          left={0}
          right={0}
          justifyContent="flex-end"
        >
          {backgroundImage}
        </Box>
      ) : !backgroundImage ? null : (
        <View style={styles.imageWrapper}>
          <Background
            backgroundImage={backgroundImage as Source}
            isFullScreen={!!isFullScreen}
            isLottie={!!isLottie}
            style={(style ?? {}) as ViewStyle}
          />
        </View>
      )}
      {children}
    </View>
  );
};

export default memo(CentredScreen);

const BackgroundWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  if (Style.DEVICE_HEIGHT < 750) {
    const translateY = 750 - Style.DEVICE_HEIGHT;

    return (
      <View
        style={{
          transform: [{ translateY }],
        }}
      >
        {children}
      </View>
    );
  }

  return <>{children}</>;
};

const Background = memo(({ isFullScreen, isLottie, backgroundImage, style }: IScreen) => {
  if (isLottie) {
    return (
      <LottieView
        loop={true}
        autoPlay={true}
        source={backgroundImage}
        resizeMode="cover"
        style={{ ...styles.lottie, ...style }}
      />
    );
  }

  const backgroundUri = isWeb() ? getBundledImageUri(backgroundImage) : null;

  if (backgroundUri) {
    const imageStyle = isFullScreen
      ? { width: Style.DEVICE_WIDTH, height: Style.DEVICE_HEIGHT, ...(style as ImageStyle) }
      : (style as ImageStyle);

    return createElement("img", {
      src: backgroundUri,
      alt: "",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        ...(typeof imageStyle.width === "number" ? { width: `${imageStyle.width}px` } : { width: imageStyle.width }),
        ...(typeof imageStyle.height === "number"
          ? { height: `${imageStyle.height}px` }
          : { height: imageStyle.height }),
        objectFit: "cover",
        pointerEvents: "none",
      },
    });
  }

  if (isFullScreen) {
    return (
      <Image contentFit="cover" source={backgroundImage} width={Style.DEVICE_WIDTH} height={Style.DEVICE_HEIGHT} />
    );
  }

  return (
    <BackgroundWrapper>
      <RNImage
        resizeMode="cover"
        style={style as ImageStyle}
        source={normalizeImageSource(backgroundImage) as ImageSourcePropType}
      />
    </BackgroundWrapper>
  );
});
