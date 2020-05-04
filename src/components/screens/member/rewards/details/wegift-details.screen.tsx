import * as React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import {
  GetRewards_getRewards_available_denominations as Denomitation,
  GetRewards_getRewards_uiSettings as UiSettings,
} from "../../../../../graphql/_core/schema";
import { Pad } from "../../../../atoms";
import { RewardItemContent, RewardsListItem, RewardTabs, TopBar } from "../../../../molecules";
import styles from "./wegift-details.screen.styles";

interface IProps {
  uiSettings: UiSettings;
  availableDenomitations: Denomitation[];
  code: string;
  cost: number;
  rewardValue: number;
  rewardCurrency: string;
  description: string;
  instructions: string[];
  onPressCtaPrimary: () => void;
  onPressPicker?: () => void;
  labelCtaPrimary: string;
  linkType?: string;
  isLoading?: boolean;
  showWegiftPicker?: boolean;
  onPressTerms: () => void;
  onPressPolicy: () => void;
  coins: number;
  onPressTopBar: () => void;
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
}

const WegiftDetailsScreen: React.SFC<IProps> = ({
  uiSettings,
  availableDenomitations = [],
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
  onPressPicker,
  onPressTerms,
  onPressPolicy,
  onPressTopBar,
  coins,
  onLeftTabPress,
  onRightTabPress,
  showWegiftPicker = false,
}) => (
  <SafeAreaView style={styles.wrapper}>
    <View>
      <TopBar leftIcon={TopBar.LeftIcon.BACK} onPressLeftIcon={onPressTopBar} coins={coins} />
    </View>
    <View style={styles.rewardTabsWrapper}>
      <RewardTabs onLeftTabPress={onLeftTabPress} onRightTabPress={onRightTabPress} activeTabIndex={0} />
    </View>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <RewardsListItem
        settings={uiSettings}
        cost={cost}
        rewardValue={rewardValue}
        linkType={linkType}
        rewardCurrency={rewardCurrency}
        code={code}
      />
      <View style={styles.scrollViewContentWrapper}>
        <RewardItemContent
          rewardValue={rewardValue}
          onPressPicker={showWegiftPicker && availableDenomitations.length > 1 ? onPressPicker : null}
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
