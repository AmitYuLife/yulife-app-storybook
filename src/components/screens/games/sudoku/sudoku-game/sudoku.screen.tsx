import { View } from "react-native";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style, StyleSheet } from "@styles";
import { getYuniversalProgress } from "@redux/levels/levels.selectors";
import { useSelector } from "react-redux";
import { ISudokuGameContainerProps, SudokuGameContainer } from "@components/games/sudoku/sudoku-game-container";
import { LottieView } from "@molecules";

const BACKGROUND_ANIMATION = require("@assets/yuniversal/yuniversal_quest_map_1.json");

interface IProps extends ISudokuGameContainerProps {
  invertHeader?: boolean;
  onBack: () => void;
}

export const SudokuScreen = ({ onBack, ...props }: IProps) => {
  const { yuniversalMap } = useSelector(getYuniversalProgress);

  return (
    <>
      {!yuniversalMap ? null : (
        <LottieView
          resizeMode="cover"
          style={styles.lottie}
          source={BACKGROUND_ANIMATION}
          autoPlay={true}
          loop={true}
        />
      )}
      <View style={styles.screenWrapper}>
        <View style={styles.headerWrapper}>
          <GenericHeadingPad />

          <GenericHeadingAbsolute
            color={yuniversalMap ? Colours.neutral.white : undefined}
            logo="yulife"
            backgroundColor="transparent"
            onLeftIconPress={onBack}
          />
          <SudokuGameContainer {...props} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    zIndex: 10,
  },
  lottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    zIndex: -1,
    position: "absolute",
  },
  headerWrapper: {},
});

export default SudokuScreen;
