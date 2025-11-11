import { View } from "react-native";
import StreakCompletion from "@components/screens/member/streaks/subcomponents/streak-completion";
import StreakStart from "../subcomponents/streak-start";
import { Style, StyleSheet } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { AnimatedPlusPoints, LottieView } from "@molecules";

interface Props {
  streakInfo: {
    header: string;
    subHeader: string;
    image: any;
  };
  autoPlayLottie: boolean;
  isStreakCompleted: boolean;
  timeRemaining: string;
  isNotValidTime: boolean;
  ribbonLabel: string;
  accessibilityLabel: string;
  streakCompleted: number;
  streakMax: number;
  reward: number;
  streakAwardId?: string;
  textColor: string;
}

export const StreaksLegacy = ({
  streakInfo,
  autoPlayLottie,
  isStreakCompleted,
  timeRemaining,
  isNotValidTime,
  ribbonLabel,
  accessibilityLabel,
  streakCompleted,
  streakMax,
  reward,
  streakAwardId,
  textColor,
}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.lottieWrapper}>
        <Box top={130}>
          {(!!streakAwardId || isStreakCompleted) && reward ? (
            <AnimatedPlusPoints type="collect-reward" coins={reward} textType="h3" />
          ) : null}
        </Box>
        <LottieView style={styles.lottie} source={streakInfo?.image} autoPlay={autoPlayLottie} loop={false} />
      </View>

      <View accessible={true} accessibilityLabel={accessibilityLabel} style={styles.progressWrapper}>
        <TextTemplate type={Style.isShortToMedium() ? "h3" : "h2"} textAlign="center" color={textColor}>
          {streakInfo?.header}
        </TextTemplate>
        <View style={styles.streaksWrapper}>
          {isStreakCompleted ? (
            <StreakCompletion
              timeRemaining={timeRemaining}
              isNotValidTime={isNotValidTime}
              label={ribbonLabel}
              textColor={textColor}
            />
          ) : (
            <StreakStart
              heading={streakInfo?.subHeader}
              streakMax={streakMax}
              streakCompleted={streakCompleted}
              textColor={textColor}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const lottieSize = Style.adjust(800);

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: Style.DEVICE_WIDTH,
  },
  lottieWrapper: {
    position: "absolute",
    top: Style.adjust(-70),
    left: (Style.DEVICE_WIDTH - lottieSize) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: lottieSize,
    height: lottieSize,
  },
  activeBuffsButton: {
    position: "absolute",
    top: Style.adjust(100),
    right: Style.adjust(44),
    shadowColor: "#000000",
    shadowOffset: { width: Style.adjust(2), height: Style.adjust(2) },
    shadowOpacity: 0.16,
    shadowRadius: 7,
    elevation: 2,
  },
  streaksWrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(16),
  },
  progressWrapper: {
    alignItems: "center",
    paddingHorizontal: Style.adjust(16),
    marginTop: Style.adjust(Style.isShortToMedium() ? 220 : 250),
  },
});
