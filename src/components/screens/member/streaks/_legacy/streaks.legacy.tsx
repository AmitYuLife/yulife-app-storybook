import { View } from "react-native";
import StreakCompletion from "@components/screens/member/streaks/subcomponents/streak-completion";
import StreakStart from "../subcomponents/streak-start";
import { Style, StyleSheet } from "@styles";
import { TextTemplate } from "@atoms";
import { LottieView } from "@molecules";

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
}: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.lottieWrapper}>
        <LottieView style={styles.lottie} source={streakInfo?.image} autoPlay={autoPlayLottie} loop={false} />
      </View>

      <View accessible={true} accessibilityLabel={accessibilityLabel} style={styles.progressWrapper}>
        <TextTemplate type={Style.isShortToMedium() ? "h2" : "h1"} textAlign="center">
          {streakInfo?.header}
        </TextTemplate>
        <View style={styles.streaksWrapper}>
          {isStreakCompleted ? (
            <StreakCompletion timeRemaining={timeRemaining} isNotValidTime={isNotValidTime} label={ribbonLabel} />
          ) : (
            <StreakStart heading={streakInfo?.subHeader} streakMax={streakMax} streakCompleted={streakCompleted} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: Style.DEVICE_WIDTH,
  },
  lottieWrapper: {
    width: Style.adjust(220),
    height: Style.adjust(220),
    marginBottom: Style.adjust(Style.isShortToMedium() ? Style.adjust(15) : Style.adjust(32)),
  },
  lottie: {
    width: Style.adjust(220),
    height: Style.adjust(220),
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
  },
});
