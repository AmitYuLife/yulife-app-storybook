import * as React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import styles from "./rewards-purchased.styles";
import PurchasesEmpty from "./purchases-empty/purchases-empty";
import { RewardTabs } from "../../../../molecules";
import RewardsPurchasedItem, { IRewardsPurchasedItemProps } from "./purchased-item/purchased-item";
import { Pad } from "../../../../atoms";

interface IProps {
    data: RewardsPurchasedItemData[];
    onLeftTabPress: () => void;
    onRightTabPress: () => void;
}

type RewardsPurchasedItemData = IRewardsPurchasedItemProps & {
    id: string;
};

const Rewards: React.SFC<IProps> = ({ data, onLeftTabPress, onRightTabPress }) => (
    <SafeAreaView style={styles.wrapper}>
        <Pad height={40} />
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
                    renderItem={({ item: { day, month, reward, cost, status, onPress } }) => (
                        <RewardsPurchasedItem
                            day={day}
                            month={month}
                            reward={reward}
                            cost={cost}
                            status={status}
                            onPress={onPress}
                        />
                    )}
                />
            )}
        </View>
        <Pad height={80} />
    </SafeAreaView>
);

export default Rewards;
