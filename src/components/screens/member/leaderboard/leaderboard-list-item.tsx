import { ListItem } from "@organisms";
import { memo } from "react";
import { View } from "react-native";
import { styles } from "./leaderboard.screen";
import { ListRenderItemInfo } from "@shopify/flash-list";
import { GetMobileSocialGroupLeaderboardItems_getMobileSocialGroupLeaderboardItems as SocialGroupLeaderboardItem } from "@graphql/_core/schema";

interface IItemsProps {
  item: SocialGroupLeaderboardItem;
  currentUserInfo: SocialGroupLeaderboardItem;
  onPress: (item: ListRenderItemInfo<SocialGroupLeaderboardItem>) => void;
  listItem: ListRenderItemInfo<SocialGroupLeaderboardItem>;
}

const LeaderboardListItem = ({ onPress, listItem, currentUserInfo }: IItemsProps) => {
  const { item } = listItem;
  return (
    <View style={styles.listWrapper}>
      <ListItem
        type="leaderboard"
        onPress={onPress}
        data={listItem}
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
    prevProps.listItem.item.score === nextProps.listItem.item.score
);
