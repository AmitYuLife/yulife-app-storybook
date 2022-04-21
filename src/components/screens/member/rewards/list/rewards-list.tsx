import * as React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { ArrowRightSvg } from "@atoms";
import { YulifeRefreshHeader, TertiaryButton } from "@molecules";
import { Colours, Style } from "@styles";
import { GetMobileRewardsList_data_list } from "@graphql/_core/schema";

import { RewardsListItem } from "./rewards-list.item";
import Coupon from "./subcomponents/coupon";
export interface IRewardsListScreenProps {
  data: GetMobileRewardsList_data_list[];
  onRefresh: () => void;
  onPurchasesPress: () => void;
  onItemPress: (item: GetMobileRewardsList_data_list) => void;
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
          renderHeader={this.renderHeader}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  private setLargeListRef = (ref: LargeList) => {
    this.largeList = ref;
  };

  private handleRefresh = async () => {
    this.props.onRefresh();

    if (this.largeList) {
      this.largeList.endRefresh();
    }
  };

  private renderIndexPath = ({ row }: IndexPath) => {
    const { data } = this.props;
    const item = data[row];

    if (item) {
      return <RewardsListItem {...item} onPress={this.handleItemPress(item)} />;
    }

    return null;
  };

  private handleItemPress = (item: GetMobileRewardsList_data_list) => () => {
    this.props.onItemPress(item);
  };

  private getHeight = () => Style.adjust(136);

  private renderFooter = () => (
    <View style={styles.footer}>
      <TertiaryButton
        size="Fill"
        onPress={this.props.onPurchasesPress}
        label="Purchase history"
        LeftIcon={<Coupon fill={Colours.neutral.n800} hasCheckmark={true} />}
        RightIcon={
          <View style={styles.purchasesRightIcon}>
            <ArrowRightSvg colour={Colours.primary.p600} />
          </View>
        }
      />
    </View>
  );
  private renderHeader = () => <View style={styles.header} />;
}

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  header: {
    height: Style.adjust(16),
  } as ViewStyle,
  footer: {} as ViewStyle,
  purchasesRightIcon: { marginRight: Style.adjust(-8) },
});
