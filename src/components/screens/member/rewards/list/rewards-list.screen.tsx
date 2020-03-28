import { Pad } from "@atoms/index";
import Loading from "@atoms/loading/loading";
import { REWARDS_SCREEN } from "@ids";
import { NavBar, RewardsListItem, RewardTabs, TopBar, YulifeRefreshHeader } from "@molecules/index";
import { Style } from "@styles/index";
import * as React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { IndexPath, LargeList } from "react-native-largelist-v3";
import { GetRewards_getRewards } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import styles from "./rewards-list.screen.styles";

export interface IRewardsListScreenProps extends IConnectedScreenProps {
    data: GetRewards_getRewards[];
    hasNotification?: boolean;
    onLeftTabPress: () => void;
    onRightTabPress: () => void;
    onItemPress: (item: GetRewards_getRewards) => void;
    loading: boolean;
}

export default class RewardsListScreen extends React.PureComponent<IRewardsListScreenProps> {
    private largeList: LargeList;

    public render() {
        const {
            data,
            hasNotification = false,
            onLeftTabPress,
            onRightTabPress,
            onLeftMenuPress,
            totalCoins
        } = this.props;

        return (
            <SafeAreaView style={styles.wrapper} testID={REWARDS_SCREEN}>
                <View style={StyleSheet.absoluteFillObject}>
                    {Platform.OS !== "ios" ? null : <Pad height={isIphoneX() ? 40 : 20} />}
                    <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
                    <View style={styles.rewardTabsWrapper}>
                        <RewardTabs
                            onLeftTabPress={onLeftTabPress}
                            onRightTabPress={onRightTabPress}
                            activeTabIndex={0}
                        />
                    </View>
                    <View style={styles.listWrapper}>
                        <LargeList
                            ref={this.setLargeListRef}
                            renderIndexPath={this.renderIndexPath}
                            heightForIndexPath={this.getHeight}
                            data={[{ items: data }]}
                            onRefresh={this.handleRefresh}
                            renderEmpty={Loading}
                            refreshHeader={YulifeRefreshHeader}
                            renderFooter={this.renderFooter}
                        />
                    </View>
                </View>
                <NavBar activeIndex={3} hasNotification={hasNotification} />
            </SafeAreaView>
        );
    }

    private setLargeListRef = (ref: LargeList) => {
        this.largeList = ref;
    };

    private handleRefresh = async () => {
        await this.props.onLeftTabPress();
        this.largeList.endRefresh();
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
