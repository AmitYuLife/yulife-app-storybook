import * as React from "react";
import { Image, SafeAreaView, StyleSheet, View, ViewStyle, ImageStyle } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./centred-screen.styles";

interface Props {
  children?: React.ReactNode;
  footerImage?: CenteredScreenImages;
  style?: ViewStyle;
  testID?: string;
}

export type CenteredScreenImages =
  | "forest"
  | "large_forest"
  | "gray_forest"
  | "challenge_failed_forest"
  | "ocean"
  | "gray_ocean"
  | "challenge_failed_ocean"
  | "desert"
  | "gray_desert"
  | "challenge_success_desert"
  | "challenge_failed_desert"
  | "gray_mountain"
  | "mountain"
  | "challenge_mountain"
  | "challenge_success_forest";

export default function CenteredScreen({ children, footerImage, style, testID }: Props) {
  return (
    <SafeAreaView style={StyleSheet.flatten([styles.wrapper, style])} testID={testID}>
      {!footerImage ? null : (
        <View style={styles.imageWrapper}>
          <Background footerImage={footerImage} />
        </View>
      )}
      {children}
    </SafeAreaView>
  );
}

const IMAGES: Record<CenteredScreenImages, { style: ImageStyle; isLottie: boolean; source: any }> = {
  forest: {
    source: require("../../../../assets/centred-screen/forestBackground.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageForest]),
    isLottie: false,
  },
  large_forest: {
    source: require("../../../../assets/centred-screen/largeForest.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageNewForest]),
    isLottie: false,
  },
  gray_forest: {
    source: require("../../../../assets/centred-screen/gray-forest.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageNewForest]),
    isLottie: false,
  },
  challenge_failed_forest: {
    source: require("../../../../assets/centred-screen/challenge_failed_forest.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  ocean: {
    source: require("../../../../assets/centred-screen/ocean.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  gray_ocean: {
    source: require("../../../../assets/centred-screen/gray-ocean.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  challenge_failed_ocean: {
    source: require("../../../../assets/centred-screen/challenge_failed_ocean.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  desert: {
    source: require("../../../../assets/centred-screen/desert.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  gray_desert: {
    source: require("../../../../assets/centred-screen/gray_desert.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  challenge_failed_desert: {
    source: require("../../../../assets/centred-screen/challenge_failed_desert.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.challengeImage]),
    isLottie: false,
  },

  challenge_success_desert: {
    source: require("../../../../assets/centred-screen/challenge_success_desert.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.challengeImage]),
    isLottie: false,
  },
  mountain: {
    source: require("../../../../assets/centred-screen/mountain.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  // leaving this as an example here for introducing lottie json animations
  // mountain: {
  //   source: require("../../../../assets/centred-screen/mountain.json"),
  //   style: styles.lottie,
  //   isLottie: true,
  // },
  gray_mountain: {
    source: require("../../../../assets/centred-screen/gray_mountain.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.imageLargeForest]),
    isLottie: false,
  },
  challenge_mountain: {
    source: require("../../../../assets/centred-screen/challenge_mountain.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.challengeImage]),
    isLottie: false,
  },
  challenge_success_forest: {
    source: require("../../../../assets/centred-screen/challenge_success_forest.png"),
    style: StyleSheet.flatten([styles.imageBase, styles.challengeSuccess]),
    isLottie: false,
  },
};

function _Background({ footerImage }: Pick<Props, "footerImage">) {
  const { source, style, isLottie } = IMAGES[footerImage];

  if (isLottie) {
    return <LottieView style={style} source={source} autoPlay={true} loop={true} />;
  }

  return <Image resizeMode="cover" style={style} source={source} />;
}

const Background = React.memo(_Background, () => true);
