import React, { memo } from "react";
import { Image as RNImage, SafeAreaView, StyleSheet, View, ViewStyle, ImageStyle } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./centred-screen.styles";
import { Style } from "@styles";
import { Image } from "@atoms";
import { CenteredScreenImages } from "@redux/theme/theme.reducer";

interface Props {
  children?: React.ReactNode;
  footerImage?: CenteredScreenImages;
  style?: ViewStyle;
  testID?: string;
  BackgroundGradient?: JSX.Element;
}

function CentredScreen({ children, footerImage, style, testID, BackgroundGradient = null }: Props) {
  return (
    <SafeAreaView style={StyleSheet.flatten([styles.wrapper, style])} testID={testID}>
      {BackgroundGradient}
      {!footerImage ? null : (
        <View style={styles.imageWrapper}>
          <Background footerImage={footerImage} />
        </View>
      )}
      {children}
    </SafeAreaView>
  );
}

export default memo(CentredScreen);

const IMAGES: Record<
  CenteredScreenImages,
  { style?: ImageStyle; isLottie?: boolean; isFullScreen?: boolean; source: any }
> = {
  forest: {
    source: require("@assets/centred-screen/forestBackground.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageForest]),
    isLottie: false,
  },
  earth_forest: {
    source: require("@assets/centred-screen/planets/earth/forest.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageNewForest]),
    isLottie: false,
  },
  gray_forest: {
    source: require("@assets/centred-screen/gray-forest.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageNewForest]),
    isLottie: false,
  },
  challenge_failed_forest: {
    source: require("@assets/centred-screen/challenge_failed_forest.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  earth_ocean: {
    source: require("@assets/centred-screen/planets/earth/ocean.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  gray_ocean: {
    source: require("@assets/centred-screen/gray-ocean.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  challenge_failed_ocean: {
    source: require("@assets/centred-screen/challenge_failed_ocean.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  challenge_success_ocean: {
    source: require("@assets/centred-screen/challenge_failed_ocean.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  earth_desert: {
    source: require("@assets/centred-screen/planets/earth/desert.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  gray_desert: {
    source: require("@assets/centred-screen/gray_desert.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  challenge_failed_desert: {
    source: require("@assets/centred-screen/challenge_failed_desert.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.challengeImage]),
    isLottie: false,
  },

  challenge_success_desert: {
    source: require("@assets/centred-screen/challenge_success_desert.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.challengeImage]),
    isLottie: false,
  },
  earth_mountain: {
    source: require("@assets/centred-screen/planets/earth/mountain.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  gray_mountain: {
    source: require("@assets/centred-screen/gray_mountain.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  challenge_mountain: {
    source: require("@assets/centred-screen/challenge_mountain.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.challengeImage]),
    isLottie: false,
  },
  challenge_success_forest: {
    source: require("@assets/centred-screen/challenge_success_forest.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.challengeSuccess]),
    isLottie: false,
  },
  new_forest: {
    source: require("@assets/centred-screen/new_forest.png"),
    isFullScreen: true,
  },
  new_ocean: {
    source: require("@assets/centred-screen/new_ocean.png"),
    isFullScreen: true,
  },
  new_desert: {
    source: require("@assets/centred-screen/new_desert.png"),
    isFullScreen: true,
  },
  new_mountain: {
    source: require("@assets/centred-screen/new_mountain.png"),
    isFullScreen: true,
  },
  yuniversal_1: {
    source: require("@assets/yuniversal/yuniversal_1.json"),
    isLottie: true,
  },
  gray_yuniversal_1: {
    source: require("@assets/yuniversal/gray_yuniversal_1.png"),
    isFullScreen: true,
  },
  red_forest: {
    source: require("@assets/centred-screen/planets/red/forest.png"),
    isFullScreen: true,
  },
  red_ocean: {
    source: require("@assets/centred-screen/planets/red/ocean.png"),
    isFullScreen: true,
  },
  red_desert: {
    source: require("@assets/centred-screen/planets/red/desert.png"),
    isFullScreen: true,
  },
  red_mountain: {
    source: require("@assets/centred-screen/planets/red/mountain.png"),
    isFullScreen: true,
  },
};

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

function _Background({ footerImage }: Pick<Props, "footerImage">) {
  const { source, style, isLottie, isFullScreen } = IMAGES[footerImage];

  if (isFullScreen && !isLottie) {
    return <Image source={source} width={Style.DEVICE_WIDTH} height={Style.DEVICE_HEIGHT} />;
  }

  return (
    <BackgroundWrapper>
      {isLottie ? (
        <LottieView
          loop={true}
          autoPlay={true}
          source={source}
          resizeMode="cover"
          style={{ ...styles.lottie, ...style }}
        />
      ) : (
        <RNImage resizeMode="cover" style={style} source={source} />
      )}
    </BackgroundWrapper>
  );
}

const Background = React.memo(_Background);
