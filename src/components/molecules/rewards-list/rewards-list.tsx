import * as React from "react";
import { SFC } from "react";
import { FlatList } from "react-native";
import { GetRewards_getRewards } from "@graphql/_core/schema";
import RewardsListItem from "./rewards-list-item/rewards-list-item";

interface IProps {
  data: Partial<GetRewards_getRewards>[];
  onItemPress: RenderItem;
  onRefresh: () => void;
  refreshing: boolean;
}

type RenderItem = (item: Item) => void;

type Item = Partial<GetRewards_getRewards>;

interface IRenderItemArgs {
  item: Item;
  index: number;
}

const handleRenderItem = (onPress: RenderItem) => ({ item, index }: IRenderItemArgs) => {
  const { available_denominations, code, currency_code, link_type, uiSettings, logoImageUri, background } = item;
  const isLocked = !available_denominations.length;
  const { yuCoin = 0, value = 0 } = available_denominations[0] || {};
  const handlePress = () => {
    onPress(item);
  };

  return (
    <RewardsListItem
      onPress={handlePress}
      key={index}
      code={code}
      settings={uiSettings}
      cost={isLocked ? 0 : yuCoin}
      linkType={link_type}
      rewardValue={isLocked ? 0 : value}
      rewardCurrency={currency_code}
      isLocked={isLocked}
      logoImageUri={logoImageUri}
      backgroundImageUri={background?.uri}
    />
  );
};

const keyExtractor = (item: GetRewards_getRewards) => item.code;

const RewardsList: SFC<IProps> = ({ data, onItemPress, onRefresh, refreshing }) => {
  const renderItem = handleRenderItem(onItemPress);

  return (
    <FlatList
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      data={data}
      onRefresh={onRefresh}
      refreshing={refreshing}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RewardsList;
