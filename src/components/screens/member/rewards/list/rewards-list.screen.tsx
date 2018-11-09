import * as React from "react";
import { SFC } from "react";
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

const RewardsListScreen: SFC<IRewardsListScreenProps> = ({
    data,
    hasNotification = false,
    labels,
    onLeftTabPress,
    onRightTabPress,
    onItemPress,
    onLeftMenuPress,
    refreshing,
    totalCoins
}) => (
    <SafeAreaView style={styles.wrapper}>
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
                areIconsHidden={true}
                colour={NavBar.Colours.DARKER}
                hasNotification={hasNotification}
                labels={labels}
            />
        </View>
    </SafeAreaView>
);

export default RewardsListScreen;
