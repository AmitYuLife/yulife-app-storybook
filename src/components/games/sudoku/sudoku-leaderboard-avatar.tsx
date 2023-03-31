import { Rank } from "@atoms/icon/rank";
import { Colours, Style } from "@styles";
import { memo } from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

interface IProps {
  uri: string;
}

const SudokuLeaderboardAvatar = ({ uri }: IProps) => {
  if (uri) {
    return (
      <View style={filledStyles.wrapper}>
        <View style={filledStyles.avatarWrapper}>
          <FastImage source={{ uri }} style={filledStyles.image} />
        </View>
        <View style={filledStyles.rankWrapper}>
          <Rank isWinner={true} isDraw={false} size={25} />
        </View>
      </View>
    );
  }

  return (
    <View style={emptyStyles.wrapper}>
      <FastImage source={{ uri }} />
    </View>
  );
};

export default memo(SudokuLeaderboardAvatar);

const AVATAR_WIDTH = Style.adjust(70);
const emptyStyles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(-6),
    height: "100%",
    width: AVATAR_WIDTH,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: Style.adjust(45),
    height: Style.adjust(105),
  },
});

const filledStyles = StyleSheet.create({
  wrapper: {},
  rankWrapper: {
    position: "absolute",
    bottom: Style.adjust(-8),
  },
  avatarWrapper: {
    marginBottom: -2,
    height: AVATAR_WIDTH,
    width: AVATAR_WIDTH,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colours.metallic.m100,
    borderRadius: Style.adjust(AVATAR_WIDTH),
  },
  image: {
    width: AVATAR_WIDTH,
    height: Style.adjust(180),
  },
});
