import * as React from "react";
import { FlatList, ListRenderItemInfo, SafeAreaView, View } from "react-native";
import { IConnectedScreenProps } from "../../../../../typings";
import { NavBar, RewardTabs, TopBar } from "../../../../molecules";
import RewardsPurchasedItem, { IRewardsPurchasedItemProps } from "./purchased-item/purchased-item";
import PurchasesEmpty from "./purchases-empty/purchases-empty";
import styles from "./rewards-purchased.screen.styles";

interface IProps extends IConnectedScreenProps {
    data: RewardsPurchasedItemData[];
    hasNotification?: boolean;
    onLeftTabPress: () => void;
    onRightTabPress: () => void;
    refreshing: boolean;
}

type RewardsPurchasedItemData = IRewardsPurchasedItemProps & {
    id: string;
};

function renderItem({
    item: { day, month, reward, cost, status, onPress }
}: ListRenderItemInfo<RewardsPurchasedItemData>) {
    return (
        <RewardsPurchasedItem day={day} month={month} reward={reward} cost={cost} status={status} onPress={onPress} />
    );
}

export default function RewardsPurchasedScreen({
    data,
    hasNotification = false,
    labels,
    onLeftTabPress,
    onRightTabPress,
    onLeftMenuPress,
    refreshing,
    totalCoins
}: IProps) {
    return (
        <SafeAreaView style={styles.wrapper}>
            <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
            <View style={styles.rewardTabsWrapper}>
                <RewardTabs activeTabIndex={1} onLeftTabPress={onLeftTabPress} onRightTabPress={onRightTabPress} />
            </View>
            <View style={styles.listWrapper}>
                {!data.length ? (
                    <PurchasesEmpty onCtaPress={onLeftTabPress} />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        onRefresh={onRightTabPress}
                        refreshing={refreshing}
                        renderItem={renderItem}
                    />
                )}
            </View>
            <View style={styles.navBarWrapper}>
                <NavBar
                    activeIndex={2}
                    areIconsHidden={true}
                    colour={NavBar.Colours.DARKER}
                    hasNotification={hasNotification}
                    hasWhiteBackground={true}
                    labels={labels}
                />
            </View>
        </SafeAreaView>
    );
}
