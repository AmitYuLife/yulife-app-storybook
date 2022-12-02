import React, { memo } from "react";
import { Image as RNImage, ImageSourcePropType, ImageStyle, SafeAreaView, View, ViewStyle } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./centred-screen.styles";
import { Style } from "@styles";
import { Image } from "@atoms";
import { IScreen } from "@theme";
import { Source } from "react-native-fast-image";

interface Props {
  children?: React.ReactNode;
  testID?: string;
  BackgroundGradient?: JSX.Element;
  backgroundImage?: ImageSourcePropType & Source & string;
  style?: ViewStyle | ImageStyle;
  isLottie?: boolean;
  isFullScreen?: boolean;
}

function CentredScreen({
  children,
  testID,
  BackgroundGradient = null,
  backgroundImage,
  style,
  isLottie,
  isFullScreen,
}: Props) {
  return (
    <SafeAreaView style={[styles.wrapper, style]} testID={testID}>
      {BackgroundGradient}
      {!backgroundImage ? null : (
        <View style={styles.imageWrapper}>
          <Background backgroundImage={backgroundImage} isFullScreen={isFullScreen} isLottie={isLottie} style={style} />
        </View>
      )}
      {children}
    </SafeAreaView>
  );
}

export default memo(CentredScreen);

const BackgroundWrapper: React.FC = ({ children }) => {
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
    return <Image source={backgroundImage} width={Style.DEVICE_WIDTH} height={Style.DEVICE_HEIGHT} />;
  }

  return (
    <BackgroundWrapper>
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
        <RNImage resizeMode="cover" style={style as ImageStyle} source={backgroundImage} />
      )}
    </BackgroundWrapper>
  );
});
