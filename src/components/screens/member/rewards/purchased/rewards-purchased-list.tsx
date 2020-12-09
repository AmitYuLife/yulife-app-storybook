import { YulifeRefreshHeader } from "@molecules/index";
import { Style, TOP_BAR } from "@styles/index";
import * as React from "react";
import { View, Platform, ViewStyle, StyleSheet } from "react-native";
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { GetMobileCopy_getMobileCopy_screens_purchases } from "../../../../../graphql/_core/schema";
import RewardsPurchasedItem, { IRewardsPurchasedItemProps } from "./purchased-item/purchased-item";
import PurchasesEmpty from "./purchases-empty/purchases-empty";
import { isIphoneX } from "react-native-iphone-x-helper";

interface IProps {
  data: RewardsPurchasedItemData[];
  copy: GetMobileCopy_getMobileCopy_screens_purchases;
  onPressEmptyCta: () => void;
  onRefresh: () => void;
}

export type RewardsPurchasedItemData = IRewardsPurchasedItemProps & {
  id: string;
};

export class RewardsPurchasedList extends React.PureComponent<IProps> {
  private largeList: LargeList;

  public render() {
    const { data } = this.props;

    return (
      <View style={styles.wrapper}>
        <View style={styles.listWrapper}>
          <LargeList
            ref={this.setLargeListRef}
            renderIndexPath={this.renderIndexPath}
            heightForIndexPath={this.getHeight}
            data={[{ items: data }]}
            onRefresh={this.handleRefresh}
            renderEmpty={this.renderEmpty}
            refreshHeader={YulifeRefreshHeader}
            renderFooter={this.renderFooter}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  private renderFooter = () => <View style={styles.footer} />;

  private renderEmpty = () => {
    const { onPressEmptyCta, copy } = this.props;

    return <PurchasesEmpty onCtaPress={onPressEmptyCta} copy={copy.empty} />;
  };

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
      const { day, month, reward, cost, status, onPress } = item;

      return (
        <RewardsPurchasedItem day={day} month={month} reward={reward} cost={cost} status={status} onPress={onPress} />
      );
    }

    return null;
  };

  private getHeight = () => Style.SCALE_UP_AND_DOWN(74);
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  listWrapper: {
    flex: 1,
    paddingHorizontal: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  navBarWrapper: {
    height: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 25 : 15),
    paddingBottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 0 : 25),
    alignItems: "center",
  } as ViewStyle,
  rewardTabsWrapper: {
    alignItems: "center",
    marginTop: TOP_BAR.HEIGHT * 2,
  } as ViewStyle,
  footer: {
    height: Style.SCALE_UP_AND_DOWN(72),
  } as ViewStyle,
  topbarWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
  } as ViewStyle,
});
