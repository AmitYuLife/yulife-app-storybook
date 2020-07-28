import { NavBar, RewardTabs, TopBar, YulifeRefreshHeader } from "@molecules/index";
import { Style } from "@styles/index";
import * as React from "react";
import { View, Platform, ViewStyle, StyleSheet } from "react-native";
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { GetMobileCopy_getMobileCopy_screens_purchases } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import RewardsPurchasedItem, { IRewardsPurchasedItemProps } from "./purchased-item/purchased-item";
import PurchasesEmpty from "./purchases-empty/purchases-empty";
import { isIphoneX } from "react-native-iphone-x-helper";

interface IProps extends IConnectedScreenProps {
  data: RewardsPurchasedItemData[];
  hasNotification?: boolean;
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_purchases;
  currentWorld?: number;
}

export type RewardsPurchasedItemData = IRewardsPurchasedItemProps & {
  id: string;
};

export class RewardsPurchasedList extends React.PureComponent<IProps> {
  private largeList: LargeList;

  public render() {
    const { data, hasNotification = false, onLeftTabPress, onRightTabPress, onLeftMenuPress, totalCoins } = this.props;

    return (
      <View style={styles.wrapper}>
        <View
          style={[styles.rewardTabsWrapper, { paddingTop: TopBar.height + Platform.select({ ios: 36, android: 0 }) }]}
        >
          <RewardTabs activeTabIndex={1} onLeftTabPress={onLeftTabPress} onRightTabPress={onRightTabPress} />
        </View>
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
          />
        </View>
        <View style={styles.topbarWrapper}>
          <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
        </View>
        <NavBar activeIndex={4} hasNotification={hasNotification} />
      </View>
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

  private handleRefresh = async () => {
    await this.props.onRightTabPress();
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
    marginTop: 8,
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
