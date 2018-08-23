import * as React from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Pad } from "../../../../atoms";
import { RewardsListItem, RewardItemContent, TopBar, RewardTabs } from "../../../../molecules";
import styles from "./wegift-details.screen.styles";
import { GetRewards_getRewards_uiSettings } from "../../../../../graphql/_core/schema";

interface IProps {
    uiSettings: GetRewards_getRewards_uiSettings;
    code: string;
    cost: number;
    rewardValue: number;
    rewardCurrency: string;
    description: string;
    instructions: string[];
    onPressCtaPrimary: () => void;
    labelCtaPrimary: string;
    onPressTerms: () => void;
    onPressPolicy: () => void;
    coins: number;
    onPressTopBar: () => void;
    onLeftTabPress: () => void;
    onRightTabPress: () => void;
}

const WegiftRewardDetails: React.SFC<IProps> = ({
    uiSettings,
    code,
    cost,
    rewardValue,
    rewardCurrency,
    description,
    instructions,
    onPressCtaPrimary,
    labelCtaPrimary,
    onPressTerms,
    onPressPolicy,
    onPressTopBar,
    coins,
    onLeftTabPress,
    onRightTabPress,
}) => (
    <SafeAreaView style={styles.wrapper}>
        <View>
            <TopBar leftIcon={TopBar.LeftIcon.BACK} onPressLeftIcon={onPressTopBar} coins={coins} />
        </View>
        <View style={styles.rewardTabsWrapper}>
            <RewardTabs onLeftTabPress={onLeftTabPress} onRightTabPress={onRightTabPress} activeTabIndex={0} />
        </View>
        <ScrollView style={styles.wrapper}>
            <RewardsListItem
                settings={uiSettings}
                cost={cost}
                rewardValue={rewardValue}
                rewardCurrency={rewardCurrency}
                code={code}
            />
            <View style={styles.scrollViewContentWrapper}>
                <RewardItemContent
                    description={description}
                    instructions={instructions}
                    labelCtaPrimary={labelCtaPrimary}
                    onPressCtaPrimary={onPressCtaPrimary}
                    onPressTerms={onPressTerms}
                    onPressPolicy={onPressPolicy}
                />
            </View>
            <Pad height={50} />
        </ScrollView>
    </SafeAreaView>
);

export default WegiftRewardDetails;
