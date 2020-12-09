import * as React from "react";
import { ScrollView, View } from "react-native";
import {
  GetRewards_getRewards_available_denominations as Denomitation,
  GetRewards_getRewards_uiSettings as UiSettings,
} from "@graphql/_core/schema";
import { Pad } from "@atoms";
import { RewardItemContent, RewardsListItem } from "@molecules";
import styles from "./wegift-details.screen.styles";
import { WEGIFT_DETAILS } from "@ids";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { TopBarLeftIconTypes } from "@organisms/top-bar/top-bar.helpers";

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
  onPressTopBar: () => void;
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  testID?: string;
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
  showWegiftPicker = false,
}) => (
  <View style={styles.wrapper}>
    <View style={styles.pad} />
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper} testID={WEGIFT_DETAILS}>
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
    <TopBarAbsolute
      hasShadow={true}
      hasWhiteBackground={true}
      leftIcon={TopBarLeftIconTypes.BACK}
      onPressLeftIcon={onPressTopBar}
    />
  </View>
);

export default WegiftDetailsScreen;
