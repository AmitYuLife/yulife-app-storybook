import { REWARDS_SCREEN } from "@ids";
import * as React from "react";
import { SafeAreaView, View } from "react-native";
import { GetRewards_getRewards } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { NavBar, RewardsList, RewardTabs, TopBar } from "../../../../molecules";
import styles from "./rewards-list.screen.styles";

export interface IRewardsListScreenProps extends IConnectedScreenProps {
    data: Array<Partial<GetRewards_getRewards>>;
    hasNotification?: boolean;
    onLeftTabPress: () => void;
    onRightTabPress: () => void;
    onItemPress: (item: GetRewards_getRewards) => void;
    refreshing: boolean;
}

export default function RewardsListScreen({
    data,
    hasNotification = false,
    labels,
    onLeftTabPress,
    onRightTabPress,
    onItemPress,
    onLeftMenuPress,
    refreshing,
    totalCoins
}: IRewardsListScreenProps) {
    return (
        <SafeAreaView style={styles.wrapper} testID={REWARDS_SCREEN}>
            <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
            <View style={styles.rewardTabsWrapper}>
                <RewardTabs onLeftTabPress={onLeftTabPress} onRightTabPress={onRightTabPress} activeTabIndex={0} />
            </View>
            <View style={styles.listWrapper}>
                <RewardsList data={data} onItemPress={onItemPress} refreshing={refreshing} onRefresh={onLeftTabPress} />
            </View>
            <View style={styles.navBarWrapper}>
                <NavBar
                    activeIndex={2}
                    colour={NavBar.Colours.DARKER}
                    hasNotification={hasNotification}
                    hasWhiteBackground={true}
                    labels={labels}
                />
            </View>
        </SafeAreaView>
    );
}
