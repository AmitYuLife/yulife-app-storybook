import { YulifeRefreshHeader } from "@molecules/index";
import { Style } from "@styles/index";
import * as React from "react";
import { View } from "react-native";
import { StyleSheet, ViewStyle } from "react-native";
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { GetMobileCopy_getMobileCopy_screens_purchases } from "../../../../../graphql/_core/schema";
import RewardsPurchasedItem, { IRewardsPurchasedItemProps } from "./purchased-item/purchased-item";
import PurchasesEmpty from "./purchases-empty/purchases-empty";

interface IProps {
  data: RewardsPurchasedItemData[];
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_purchases;
}

export type RewardsPurchasedItemData = IRewardsPurchasedItemProps & {
  id: string;
};

export class RewardsPurchasedList extends React.PureComponent<IProps> {
  private largeList: LargeList;

  public render() {
    const { data } = this.props;

    return (
      <LargeList
        ref={this.setLargeListRef}
        renderIndexPath={this.renderIndexPath}
        heightForIndexPath={this.getHeight}
        data={[{ items: data }]}
        onRefresh={this.handleRefresh}
        renderEmpty={this.renderEmpty}
        refreshHeader={YulifeRefreshHeader}
        renderFooter={this.renderFooter}
      />
    );
  }

  private renderFooter = () => <View style={styles.footer} />;

  private renderEmpty = () => {
    const { onLeftTabPress, copy } = this.props;

    return <PurchasesEmpty onCtaPress={onLeftTabPress} copy={copy.empty} />;
  };

  private setLargeListRef = (ref: LargeList) => {
    this.largeList = ref;
  };

  private handleRefresh = () => {
    this.props.onRightTabPress();

    if (this.largeList) {
      this.largeList.endRefresh();
    }
  };

  private renderIndexPath = ({ row }: IndexPath) => {
    const { data } = this.props;
    const item = data[row];

    if (item) {
      const { day, month, reward, cost, status, onPress } = item;

      return (
        <RewardsPurchasedItem day={day} month={month} reward={reward} cost={cost} status={status} onPress={onPress} />
      );
    }

    return null;
  };

  private getHeight = () => Style.adjust(80);
}

const styles = StyleSheet.create({
  footer: {
    height: Style.adjust(72),
  } as ViewStyle,
});
