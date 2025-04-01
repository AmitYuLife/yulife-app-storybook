import React, { memo, useEffect } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { setOnboardingReferralsBadge } from "@redux/onboarding/onboarding.actions";
import moment from "moment";
import { GetReferralHistoryQuery, GetReferralInformationQuery } from "@graphql/__generated";
import { REFERRALS_SCREEN } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { UserAvatarCoinCard } from "@molecules";
import { Style } from "@styles";
import { styles } from "./referrals.styles";
import { getDateFormat } from "@locale";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import ReferralsHeader from "./referrals-header";
import { BusinessAccountState } from "@components/molecules/business-picker";

export type Item = GetReferralHistoryQuery["getReferralHistory"]["referralHistory"][0];

interface IProps {
  onShare: () => Promise<void>;
  info: GetReferralInformationQuery["referralInformation"];
  handleClose: () => void;
  componentId: string;
  data: Item[];
  onFetchMoreData: () => void;
  onRefresh: (variables?: unknown) => void;
  businessAccountState: BusinessAccountState;
  loading: boolean;
}

const ReferralsScreen = ({
  onShare,
  data,
  info,
  handleClose,
  componentId,
  onFetchMoreData,
  onRefresh,
  businessAccountState,
  loading,
}: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOnboardingReferralsBadge({ showReferralsBadge: false }));
  }, []);

  if (!data) {
    return null;
  }

  return (
    <View testID={REFERRALS_SCREEN} style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.referralsWrapper}>
        <FlashList
          renderItem={renderItem}
          data={data}
          refreshing={loading}
          onEndReached={onFetchMoreData}
          onRefresh={onRefresh}
          estimatedItemSize={Style.adjust(70)}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <ReferralsHeader
              businessAccountState={businessAccountState}
              onShare={onShare}
              data={data}
              info={info}
              componentId={componentId}
            />
          }
          ListFooterComponent={<View style={styles.footer} />}
        />
      </View>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
    </View>
  );
};

const keyExtractor = (item: Item) => item.id;

const renderItem = ({ item }: ListRenderItemInfo<Item>) => {
  return (
    <View style={styles.listItem}>
      <UserAvatarCoinCard
        name={item.name}
        avatarUrl={item.avatarUrl}
        subTitle={moment(item.date).format(getDateFormat())}
        coin={item.coin}
      />
    </View>
  );
};

export default memo(ReferralsScreen);
