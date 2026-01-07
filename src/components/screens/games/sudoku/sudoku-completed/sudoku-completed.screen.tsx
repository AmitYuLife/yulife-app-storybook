import { ScrollView, View } from "react-native";
import { memo, useCallback, useRef } from "react";
import { Image, TextTemplate } from "@atoms";
import { useTranslation } from "@hooks";
import SudokuStatsList from "@components/games/sudoku/sudoku-stats-list";
import { Button } from "@components/molecules";
import { Style, StyleSheet } from "@styles";
import Lottie from "lottie-react-native";
import colours from "@styles/colours";
import Animated, { FadeInDown } from "react-native-reanimated";
import { DETOX_ENABLED } from "@services/socket";
import { SUDOKU_COMPLETED_SCREEN_SCROLL } from "@ids";
import { LottieView } from "@molecules";
import { GetSudokuBoardQuery } from "@graphql/__generated";
import { useSelector } from "react-redux";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { MAX_EXTRA_CHALLENGES_HINT_LEVEL } from "@services/constants";
import Hint from "@components/molecules/hint/hint";

interface IProps {
  onCollect: () => void;
  isPractice?: boolean;
  results: GetSudokuBoardQuery["getSudokuBoard"]["results"] & { leaderboardId?: string };
  stats: GetSudokuBoardQuery["getSudokuBoard"]["stats"];
  reward?: number;
}

const AnimatedView = Animated.createAnimatedComponent(View);

const SPIRAL_ANIMATION = require("./assets/spiral.json");
const SHINE_ANIMATION = require("./assets/shine.json");

const SudokuCompletedScreen = ({ onCollect, isPractice, reward, results, stats }: IProps) => {
  const currentLevel = useSelector(getCurrentLevel);
  const showChallengesHint = currentLevel <= MAX_EXTRA_CHALLENGES_HINT_LEVEL;

  const lottie = useRef<Lottie>(null);
  const t = useTranslation([
    "sudoku.title",
    "sudoku.completed.title",
    "sudoku.completed.sub1",
    "sudoku.completed.sub2",
    "sudoku.completed.collect",
    "sudoku.completed.practice",
    "sudoku.completed.continue",
    "sudoku.completed.practice_title",
    "yu_coin.camel_case",
    "hints.unlock_more_challenges.title",
    "hints.unlock_more_challenges.description",
  ]);

  const onAnimationFinish = useCallback(() => {
    if (DETOX_ENABLED) {
      return;
    }

    lottie?.current?.play(120, 240);
  }, []);

  function getTitle() {
    if (isPractice) {
      return t["sudoku.completed.practice_title"];
    }

    return t["sudoku.title"];
  }

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
            {getTitle()}
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
              {isPractice ? null : (
                <AnimatedView style={styles.yucoinContainer} entering={FadeInDown.delay(750).duration(500)}>
                  <View style={styles.yucoinWrapper}>
                    <Image
                      width={Style.adjust(55)}
                      height={Style.adjust(55)}
                      suppressLoadingUi={true}
                      source={require("@assets/icons/yucoin-shadow.png")}
                      style={styles.yucoin}
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
              )}
            </View>
          </View>

          <View style={styles.headerWrapper}>
            <View style={styles.header}>
              <TextTemplate type="h2" textAlign="center">
                {t["sudoku.completed.title"]}
              </TextTemplate>
            </View>
            <TextTemplate type="b2" textAlign="center">
              {isPractice ? t["sudoku.completed.practice"] : t["sudoku.completed.sub2"]}
            </TextTemplate>
          </View>

          <View
            style={[
              styles.statsWrapper,
              {
                marginBottom: Style.adjust(showChallengesHint ? 20 : 0),
              },
            ]}
          >
            <SudokuStatsList
              results={results}
              stats={stats}
              reward={reward}
              onCompleteScreen={true}
              isPractice={isPractice}
            />
          </View>

          {showChallengesHint ? (
            <View style={styles.hintWrapper}>
              <Hint
                label={t["hints.unlock_more_challenges.title"]}
                description={t["hints.unlock_more_challenges.description"]}
                variant="challenges"
              />
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onCollect}
          translationKey={isPractice ? "sudoku.completed.continue" : "sudoku.completed.collect"}
        />
      </View>
    </ScrollView>
  );
};

const LOTTIE_HEIGHT = Style.adjust(220);

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
  headerWrapper: {
    paddingHorizontal: Style.adjust(60),
    marginBottom: Style.adjust(10),
  },
  buttonContainer: {
    marginTop: Style.adjust(10),
  },
  lottie: {
    width: Style.DEVICE_WIDTH,
    height: LOTTIE_HEIGHT,
  },
  shine: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  rewards: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  rewardWrapper: {
    height: LOTTIE_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  yucoin: {
    marginBottom: Style.adjust(12),
  },
  hintWrapper: {
    paddingHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(12),
  },
});

export default memo(SudokuCompletedScreen);
