import { ScrollView, StyleSheet, View } from "react-native";
import React, { memo, useCallback, useRef } from "react";
import { TextTemplate, YuCoinBadge } from "@atoms";
import { useTranslation } from "@hooks";
import { useSelector } from "react-redux";
import SudokuStatsList from "@components/games/sudoku/sudoku-stats-list";
import { GetSudokuBoard_getSudokuBoard_results, GetSudokuBoard_getSudokuBoard_stats } from "@graphql/_core/schema";
import { Button } from "@components/molecules";
import { Style } from "@styles";
import LottieView from "lottie-react-native";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { getCurrentWorld, getCurrentYuniverse } from "@utils";
import colours from "@styles/colours";
import Animated, { FadeInDown } from "react-native-reanimated";
import { DETOX_ENABLED } from "@services/socket";
import { SUDOKU_COMPLETED_SCREEN_SCROLL } from "@ids";

interface IProps {
  onCollect: () => void;
  results: GetSudokuBoard_getSudokuBoard_results;
  stats: GetSudokuBoard_getSudokuBoard_stats;
  reward?: number;
  isLoading?: boolean;
}

const AnimatedView = Animated.createAnimatedComponent(View);

const SPIRAL_ANIMATION = require("./assets/spiral.json");
const SHINE_ANIMATION = require("./assets/shine.json");

const SudokuCompletedScreen = ({ onCollect, reward, isLoading, results, stats }: IProps) => {
  const currentLevel = useSelector(getCurrentLevel);
  const currentYuniverse = getCurrentYuniverse(currentLevel);
  const currentWorld = getCurrentWorld(currentLevel);

  const lottie = useRef<LottieView>();
  const t = useTranslation([
    "sudoku.title",
    "sudoku.completed.title",
    "sudoku.completed.sub1",
    "sudoku.completed.sub2",
    "sudoku.completed.collect",
    "yu_coin.camel_case",
  ]);

  const onAnimationFinish = useCallback(() => {
    if (DETOX_ENABLED) {
      return;
    }

    lottie?.current?.play(120, 240);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      bounces={false}
      contentInsetAdjustmentBehavior="never"
      testID={SUDOKU_COMPLETED_SCREEN_SCROLL}
    >
      <View style={styles.wrapper}>
        <View>
          <TextTemplate type="b1b" textAlign="center">
            {t["sudoku.title"]}
          </TextTemplate>

          <View style={styles.rewardWrapper}>
            <LottieView
              resizeMode="contain"
              ref={lottie}
              style={styles.lottie}
              source={SPIRAL_ANIMATION}
              loop={false}
              autoPlay={true}
              onAnimationFinish={onAnimationFinish}
            />
            <View style={styles.rewards}>
              <AnimatedView style={styles.yucoinContainer} entering={FadeInDown.delay(750).duration(500)}>
                <View style={styles.yucoinWrapper}>
                  <YuCoinBadge
                    hasWhiteGlow={false}
                    width={Style.adjust(70)}
                    height={Style.adjust(70)}
                    currentWorld={currentWorld}
                    currentYuniverse={currentYuniverse}
                  />
                  <TextTemplate type="l1b" textAlign="center">
                    {reward}
                  </TextTemplate>
                  <TextTemplate type="l1b" textAlign="center">
                    {t["yu_coin.camel_case"]}
                  </TextTemplate>
                </View>
                <LottieView
                  resizeMode="contain"
                  style={styles.shine}
                  source={SHINE_ANIMATION}
                  loop={false}
                  autoPlay={true}
                />
              </AnimatedView>
            </View>
          </View>

          <View style={styles.header}>
            <TextTemplate type="h2" textAlign="center">
              {t["sudoku.completed.title"]}
            </TextTemplate>
          </View>
          <TextTemplate type="b2" textAlign="center">
            {t["sudoku.completed.sub2"]}
          </TextTemplate>
          <View style={styles.statsWrapper}>
            <SudokuStatsList results={results} stats={stats} reward={reward} onCompleteScreen={true} />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onCollect} isLoading={isLoading} label={t["sudoku.completed.collect"]} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Style.adjust(60),
    paddingBottom: Style.adjust(20),
  },
  scrollContent: {
    justifyContent: "space-between",
    paddingBottom: Style.adjust(20),
    flexGrow: 1,
  },
  header: {
    marginTop: Style.adjust(20),
    marginBottom: Style.adjust(10),
  },
  statsWrapper: {
    marginHorizontal: Style.adjust(40),
    marginTop: Style.adjust(40),
  },
  yucoinContainer: {
    backgroundColor: colours.yuscreen.brown,
    paddingBottom: Style.adjust(4),
    borderRadius: Style.adjust(10),
    width: Style.adjust(100),
  },
  yucoinWrapper: {
    padding: Style.adjust(20),
    paddingVertical: Style.adjust(15),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Style.adjust(10),
    backgroundColor: colours.products.fib.u100S4,
  },
  buttonContainer: {
    marginTop: Style.adjust(10),
  },
  lottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.adjust(300),
  },
  shine: {
    position: "absolute",
  },
  rewards: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  rewardWrapper: {
    height: Style.adjust(250),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(SudokuCompletedScreen);
