import * as React from "react";
import {
    View,
    SafeAreaView,
    StatusBar,
} from "react-native";
import {
    RewardsList,
    RewardTabs,
} from "../../../../molecules";
import styles from "./rewards-list-screen.styles";
import { GetRewards_getRewards } from "../../../../../graphql/_core/schema";
import { Pad } from "../../../../atoms";

export interface IRewardsListScreenProps {
    data: Array<Partial<GetRewards_getRewards>>;
    onLeftTabPress: () => void;
    onRightTabPress: () => void;
    onItemPress: (item: GetRewards_getRewards) => void;
}

const RewardsListScreen: React.SFC<IRewardsListScreenProps> = ({
    data,
    onLeftTabPress,
    onRightTabPress,
    onItemPress,
}) => (
    <SafeAreaView style={styles.wrapper}>
        <StatusBar />
        <Pad height={40} />
        <View style={styles.rewardTabsWrapper}>
            <RewardTabs
                onLeftTabPress={onLeftTabPress}
                onRightTabPress={onRightTabPress}
                activeTabIndex={0}
            />
        </View>
        <View style={styles.listWrapper}>
            <RewardsList data={data} onItemPress={onItemPress} />
        </View>
        <Pad height={80} />
    </SafeAreaView>
);

export default RewardsListScreen;
