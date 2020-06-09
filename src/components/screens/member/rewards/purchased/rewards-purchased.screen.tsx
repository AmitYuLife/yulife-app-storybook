import Loading from "@atoms/loading/loading";
import { NavBar, RewardTabs, TopBar, YulifeRefreshHeader } from "@molecules/index";
import { Style } from "@styles/index";
import * as React from "react";
import { View, Platform } from "react-native";
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { GetMobileCopy_getMobileCopy_screens_purchases } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import RewardsPurchasedItem, { IRewardsPurchasedItemProps } from "./purchased-item/purchased-item";
import PurchasesEmpty from "./purchases-empty/purchases-empty";
import styles from "./rewards-purchased.screen.styles";

interface IProps extends IConnectedScreenProps {
  data: RewardsPurchasedItemData[];
  hasNotification?: boolean;
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  loading: boolean;
  copy: GetMobileCopy_getMobileCopy_screens_purchases;
  currentWorld?: number;
}

type RewardsPurchasedItemData = IRewardsPurchasedItemProps & {
  id: string;
};

export default class RewardsPurchasedScreen extends React.PureComponent<IProps> {
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
    const { onLeftTabPress, loading, copy } = this.props;

    if (loading) {
      return <Loading />;
    }

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
