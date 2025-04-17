import { memo, PropsWithChildren, JSX, ReactElement, isValidElement } from "react";
import { Image as RNImage, ImageStyle, SafeAreaView, View, ViewStyle } from "react-native";
import styles from "./centred-screen.styles";
import { Style } from "@styles";
import { IScreen } from "@theme";
import { LottieView } from "@molecules";
import { Box, Image, Source } from "@atoms";

interface Props {
  children?: React.ReactNode;
  testID?: string;
  BackgroundGradient?: JSX.Element;
  backgroundImage?: Source | ReactElement;
  style?: ViewStyle | ImageStyle;
  isLottie?: boolean;
  isFullScreen?: boolean;
  shouldUseSafeArea?: boolean;
}

function CentredScreen({
  children,
  testID,
  BackgroundGradient = null,
  backgroundImage,
  style,
  isLottie,
  isFullScreen,
  shouldUseSafeArea = true,
}: Props) {
  const Wrapper = shouldUseSafeArea ? SafeAreaView : View;

  return (
    <Wrapper style={[styles.wrapper, style]} testID={testID}>
      {BackgroundGradient}
      {isValidElement(backgroundImage) ? (
        <Box
          position="absolute"
          width={Style.DEVICE_WIDTH}
          height={Style.DEVICE_HEIGHT}
          left={0}
          right={0}
          bottom={0}
          justifyContent="flex-end"
        >
          {backgroundImage}
        </Box>
      ) : !backgroundImage ? null : (
        <View style={styles.imageWrapper}>
          <Background
            backgroundImage={backgroundImage as Source}
            isFullScreen={isFullScreen}
            isLottie={isLottie}
            style={style}
          />
        </View>
      )}
      {children}
    </Wrapper>
  );
}

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
  if (isFullScreen && !isLottie) {
    return (
      <Image resizeMode="cover" source={backgroundImage} width={Style.DEVICE_WIDTH} height={Style.DEVICE_HEIGHT} />
    );
  }

  return (
    <>
      {isLottie ? (
        <LottieView
          loop={true}
          autoPlay={true}
          source={backgroundImage}
          resizeMode="cover"
          style={{
            ...styles.lottie,
            ...style,
          }}
        />
      ) : (
        <BackgroundWrapper>
          <RNImage resizeMode="cover" style={style as ImageStyle} source={backgroundImage} />
        </BackgroundWrapper>
      )}
    </>
  );
});
