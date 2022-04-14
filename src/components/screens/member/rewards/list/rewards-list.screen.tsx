import * as React from "react";
import { GetMobileRewardsList_data, GetMobileRewardsList_data_list } from "@graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { RewardsList } from "./rewards-list";
import { StyleSheet, ViewStyle, View } from "react-native";
import { TOP_BAR, Style, NAV_BAR, Colours } from "@styles";
import { REWARDS_SCREEN } from "@ids";
import { NavBar } from "@components/organisms";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { ChipList } from "@components/molecules";
import { ArrowRightSvg, TertiaryButton } from "@atoms";
import Coupon from "./subcomponents/coupon";

export interface IRewardsListScreenProps extends IConnectedScreenProps {
  data: GetMobileRewardsList_data;
  onItemPress: (item: GetMobileRewardsList_data_list) => void;
  onRefresh: () => void;
  selectedTag: string;
  onTagPress: React.Dispatch<React.SetStateAction<string>>;
  onPurchasesPress: () => void;
  loading: boolean;
}

const RewardsListScreen = React.memo((props: IRewardsListScreenProps) => {
  const { data, selectedTag, onLeftMenuPress, onTagPress, onRefresh, onItemPress, onPurchasesPress } = props;

  const chips = (data?.tags || []).map((tag) => ({
    value: tag,
    isSelected: selectedTag === tag,
    onPress: onTagPress,
  }));

  return (
    <View style={styles.wrapper} testID={REWARDS_SCREEN}>
      <View style={styles.topBarFiller} />
      {!chips.length ? null : (
        <>
          <ChipList chips={chips} />
          <View style={styles.separator} />
        </>
      )}

      <View style={styles.listWrapper}>
        {/* add loading */}
        <RewardsList onRefresh={onRefresh} data={data?.list || []} onItemPress={onItemPress} />
      </View>
      <View style={styles.purchases}>
        <TertiaryButton
          size="Fill"
          onPress={onPurchasesPress}
          label="Purchase history"
          LeftIcon={<Coupon fill={Colours.neutral.n800} hasCheckmark={true} />}
          RightIcon={
            <View style={styles.purchasesRightIcon}>
              <ArrowRightSvg colour={Colours.primary.p600} />
            </View>
          }
        />
      </View>
      <View style={styles.navBarFiller} />
      <TopBarAbsolute onPressLeftIcon={onLeftMenuPress} />
      <NavBar activeIndex={4} />
    </View>
  );
});

export default RewardsListScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  listWrapper: {
    flex: 1,
    marginBottom: Style.adjust(12),
  } as ViewStyle,
  separator: {
    marginTop: Style.adjust(16),
  },
  purchases: {
    paddingHorizontal: Style.adjust(16),
  },
  purchasesRightIcon: { marginRight: Style.adjust(-8) },
  topBarFiller: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
  navBarFiller: {
    marginTop: Style.adjust(16),
    height: NAV_BAR.DEFAULT_FULL_HEIGHT,
  } as ViewStyle,
});
