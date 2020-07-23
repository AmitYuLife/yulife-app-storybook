import React from "react";
import { LargeList, IndexPath } from "react-native-largelist-v3";
import { Loading } from "@atoms";
import { GetRewards_getRewards } from "@graphql/_core/schema";
import { YulifeRefreshHeader, RewardsListItem } from "@components/molecules";
import { Style } from "@styles";
import { View, StyleSheet, ViewStyle } from "react-native";

interface Props {
  data: GetRewards_getRewards[];
  onLeftTabPress: () => void;
  onItemPress: (item: GetRewards_getRewards) => void;
}

export class RewardsList extends React.Component<Props> {
  private largeList: LargeList;

  render() {
    return (
      <LargeList
        ref={this.setLargeListRef}
        renderIndexPath={this.renderIndexPath}
        heightForIndexPath={this.getHeight}
        data={[{ items: this.props.data }]}
        onRefresh={this.handleRefresh}
        renderEmpty={Loading}
        refreshHeader={YulifeRefreshHeader}
        renderFooter={this.renderFooter}
      />
    );
  }

  private setLargeListRef = (ref: LargeList) => {
    this.largeList = ref;
  };

  private handleRefresh = () => {
    this.props.onLeftTabPress();

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

  private getHeight = () => Style.adjust(150);

  private renderFooter = () => <View style={styles.footer} />;
}

const styles = StyleSheet.create({
  footer: {
    height: Style.adjust(72),
  } as ViewStyle,
});
