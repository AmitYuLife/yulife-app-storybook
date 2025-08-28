import { TextTemplate } from "@atoms";
import { useTranslation } from "@hooks";
import { Style } from "@styles";
import colours from "@styles/colours";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import SudokuLeaderboardAvatar from "./sudoku-leaderboard-avatar";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { ISudokuLeaderboardItem } from "./sudoku.interface";
import { SUDOKU_LEADERBOARD } from "@ids";
import { MedalIcon } from "@atoms/icon/medal-icon";
import { truncate } from "@utils";

interface IProps {
  leaderboard: ISudokuLeaderboardItem[];
  onPress: () => void;
}

const SudokuLeaderboardBox = ({ leaderboard, onPress }: IProps) => {
  const t = useTranslation(["sudoku.leaderboard.empty_description"]);
  const topUser = useMemo(() => {
    if (!leaderboard) {
      return null;
    }

    return leaderboard[0];
  }, [leaderboard]);

  if (!leaderboard || leaderboard?.length <= 0) {
    return (
      <View style={styles.emptyWrapper}>
        <MedalIcon position={1} size={29} />
        <View style={styles.noText}>
          <TextTemplate type="b2" textAlign="center">
            {t["sudoku.leaderboard.empty_description"]}
          </TextTemplate>
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacityWithDelay onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <SudokuLeaderboardAvatar uri={topUser?.avatar?.uri} />
          <View style={styles.contentWrapper}>
            {leaderboard.map((user, index) => (
              <View
                key={user.position}
                style={styles.contentItem}
                testID={SUDOKU_LEADERBOARD(user.position, user.name, user.score)}
              >
                <TextTemplate type={index === 0 ? "b2b" : "l1"}>
                  {user.position}. {truncate(user.name, 18)}
                </TextTemplate>
                <TextTemplate type={index === 0 ? "b2b" : "l1"}>{user.score}</TextTemplate>
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Style.adjust(20),
  },
  emptyWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: Style.adjust(15),
    backgroundColor: colours.neutral.white,
    margin: Style.adjust(20),
    marginTop: 0,
    borderRadius: Style.adjust(10),
  },
  wrapper: {
    borderRadius: Style.adjust(10),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Style.adjust(20),
    backgroundColor: colours.neutral.white,
    flexDirection: "row",
    padding: Style.adjust(15),
  },
  contentWrapper: {
    flex: 1,
    marginStart: Style.adjust(20),
    flexDirection: "column",
  },
  contentItem: {
    flexDirection: "row",
    marginVertical: Style.adjust(1),
    justifyContent: "space-between",
  },
  noText: {
    marginTop: Style.adjust(10),
  },
});

export default SudokuLeaderboardBox;
