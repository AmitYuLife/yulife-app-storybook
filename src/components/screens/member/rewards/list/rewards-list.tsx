import { RewardsListItem, YulifeRefreshHeader } from "@molecules/index";
import { Style } from "@styles/index";
import * as React from "react";
import { View } from "react-native";
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { GetRewards_getRewards } from "../../../../../graphql/_core/schema";

import { StyleSheet, ViewStyle } from "react-native";
export interface IRewardsListScreenProps {
  data: GetRewards_getRewards[];
  onRefresh: () => void;
  onItemPress: (item: GetRewards_getRewards) => void;
}

export class RewardsList extends React.PureComponent<IRewardsListScreenProps> {
  private largeList: LargeList;

  public render() {
    const { data } = this.props;
    return (
      <View style={styles.listWrapper}>
        <LargeList
          ref={this.setLargeListRef}
          renderIndexPath={this.renderIndexPath}
          heightForIndexPath={this.getHeight}
          data={[{ items: data }]}
          onRefresh={this.handleRefresh}
          refreshHeader={YulifeRefreshHeader}
          renderFooter={this.renderFooter}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  private setLargeListRef = (ref: LargeList) => {
    this.largeList = ref;
  };

  private handleRefresh = async () => {
    await this.props.onRefresh();
    if (this.largeList) {
      this.largeList.endRefresh();
    }
  };

  private renderIndexPath = ({ row }: IndexPath) => {
    const { data } = this.props;
    const item = data[row];
    if (item) {
      const { available_denominations, code, currency_code, link_type, uiSettings } = item;
      const isLocked = !available_denominations.length;
      const { yuCoin = 0, value = 0 } = available_denominations[0] || {};

      return (
        <RewardsListItem
          onPress={this.handleItemPress(item)}
          code={code}
          settings={uiSettings}
          cost={isLocked ? 0 : yuCoin}
          linkType={link_type}
          rewardValue={isLocked ? 0 : value}
          rewardCurrency={currency_code}
          isLocked={isLocked}
        />
      );
    }

    return null;
  };

  private handleItemPress = (item: GetRewards_getRewards) => () => {
    this.props.onItemPress(item);
  };

  private getHeight = () => Style.SCALE_UP_AND_DOWN(150);

  private renderFooter = () => <View style={styles.footer} />;
}

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
  } as ViewStyle,
  footer: {
    height: Style.SCALE_UP_AND_DOWN(72),
  } as ViewStyle,
});
