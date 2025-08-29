import { RawImage } from "@atoms";
import { Rank } from "@atoms/icon/rank";
import { EmptyMaleBody } from "@components/molecules/yumoji/assets/empty-male-body-svg";
import { Colours, Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";

interface IProps {
  uri: string;
}

const SudokuLeaderboardAvatar = ({ uri }: IProps) => {
  return (
    <View style={filledStyles.wrapper}>
      <View style={filledStyles.avatarWrapper}>
        {!uri ? <EmptyMaleBody /> : <RawImage source={{ uri }} style={filledStyles.image} />}
      </View>
      <View style={filledStyles.rankWrapper}>
        <Rank isWinner={true} isDraw={false} size={25} />
      </View>
    </View>
  );
};

export default memo(SudokuLeaderboardAvatar);

const AVATAR_WIDTH = Style.adjust(70);

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
