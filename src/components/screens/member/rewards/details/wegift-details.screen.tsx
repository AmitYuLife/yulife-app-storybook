import * as React from "react";
import { SFC } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { GetRewards_getRewards_uiSettings } from "../../../../../graphql/_core/schema";
import { Pad } from "../../../../atoms";
import { RewardItemContent, RewardsListItem, RewardTabs, TopBar } from "../../../../molecules";
import styles from "./wegift-details.screen.styles";

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
    linkType?: string;
    isLoading?: boolean;
    onPressTerms: () => void;
    onPressPolicy: () => void;
    coins: number;
    onPressTopBar: () => void;
    onLeftTabPress: () => void;
    onRightTabPress: () => void;
}

const WegiftDetailsScreen: SFC<IProps> = ({
    uiSettings,
    code,
    cost,
    rewardValue,
    rewardCurrency,
    description,
    instructions,
    onPressCtaPrimary,
    labelCtaPrimary,
    linkType,
    isLoading,
    onPressTerms,
    onPressPolicy,
    onPressTopBar,
    coins,
    onLeftTabPress,
    onRightTabPress
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
                linkType={linkType}
                rewardValue={rewardValue}
                rewardCurrency={rewardCurrency}
                code={code}
            />
            <View style={styles.scrollViewContentWrapper}>
                <RewardItemContent
                    isLoadingPrimary={isLoading}
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

export default WegiftDetailsScreen;
