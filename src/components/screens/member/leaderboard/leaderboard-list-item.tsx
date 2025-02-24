import { ListItem } from "@organisms";
import { memo } from "react";
import { View } from "react-native";
import { styles } from "./leaderboard.screen";
import { ListRenderItemInfo } from "@shopify/flash-list";

export type ISocialGroupLeaderboardListItem = {
  id: string;
  userId: string;
  score: string;
  name: string;
  position: number;
  isTarget: boolean;
  avatar: { id: string; uri?: string };
  avatarFrame?: {
    lottieUri?: string;
    image?: { uri?: string };
  };
};
interface IItemsProps {
  item: ISocialGroupLeaderboardListItem;
  currentUserInfo: ISocialGroupLeaderboardListItem;
  onPress: (item: ListRenderItemInfo<ISocialGroupLeaderboardListItem>) => void;
  listItem: ListRenderItemInfo<ISocialGroupLeaderboardListItem>;
}

const LeaderboardListItem = ({ onPress, listItem, currentUserInfo }: IItemsProps) => {
  const { item } = listItem;

  return (
    <View style={styles.listWrapper}>
      <ListItem
        type="leaderboard"
        onPress={onPress}
        data={listItem}
        frame={item?.avatarFrame}
        uri={item?.avatar?.uri}
        score={item.score}
        theme={item.userId === currentUserInfo?.userId ? "highlighted" : null}
        {...item}
      />
    </View>
  );
};

export default memo(
  LeaderboardListItem,
  (prevProps, nextProps) =>
    prevProps.listItem.item.userId === nextProps.listItem.item.userId &&
    prevProps.listItem.item.score === nextProps.listItem.item.score &&
    prevProps.listItem.item.position === nextProps.listItem.item.position &&
    prevProps.listItem.item.avatar === nextProps.listItem.item.avatar &&
    prevProps.listItem.item.avatarFrame?.image?.uri === nextProps.listItem.item.avatarFrame?.image?.uri
);
