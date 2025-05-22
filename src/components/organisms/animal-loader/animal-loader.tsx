import { LottieView } from "@components/molecules";
import { Colours, Style } from "@styles";
import { memo, useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const LOADING_ANIMATION = require("./animal-loader-animation.json");

interface IQuestMapLoaderProps {
  isLoading: boolean;
}

const DEBOUNCE_TIME = 500;
const AnimalLoader = ({ isLoading }: IQuestMapLoaderProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(isLoading);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isLoading && isVisible) {
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, DEBOUNCE_TIME);

      return () => clearTimeout(timeout);
    }

    if (!isVisible && isLoading) {
      setIsVisible(true);
      clearTimeout(timeout);
    }
  }, [isVisible, isLoading]);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LottieView
        loop={true}
        autoPlay={true}
        resizeMode="cover"
        style={styles.lottie}
        suppressLoadingUi={true}
        source={LOADING_ANIMATION}
      />
    </View>
  );
};

const { height: screenHeight } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: screenHeight,
    backgroundColor: Colours.neutral.white,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_WIDTH,
  },
});

export default memo(AnimalLoader);
