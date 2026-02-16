import React, { memo, useCallback, useEffect, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import { useDispatch } from "react-redux";
import { setOnboardingReferralsBadge } from "@redux/onboarding/onboarding.actions";
import moment from "moment";
import { GetReferralHistoryQuery, GetReferralInformationQuery } from "@graphql/__generated";
import { REFERRALS_SCREEN, REFERRALS_SCREEN_NAME } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { UserAvatarCoinCard } from "@molecules";
import { styles } from "./referrals.styles";
import { getDateFormat } from "@locale";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import ReferralsHeader from "./referrals-header";
import { BusinessAccountState } from "@components/molecules/business-picker";
import { Box } from "@atoms";

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

  // We need to keep track of the scroll position.
  // This is so we can show the image background colour when pulling
  // down to refresh, and hide it when scrolling up.
  // We can’t set a background component for all of the list items, so we just use
  // the white background of the parent view itself. If we don’t hide the box on scroll,
  // eventually the box will be visible at the top in a long enough referral list.
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    dispatch(setOnboardingReferralsBadge({ showReferralsBadge: false }));
  }, []);

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setIsAtTop(scrollY <= 20);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <View testID={REFERRALS_SCREEN} style={styles.wrapper}>
      <GenericHeadingPad />

      {isAtTop ? <Box bg="#D9F7FF" position="absolute" height={450} left={0} right={0} top={0} /> : null}

      <View style={styles.referralsWrapper}>
        <FlashList
          renderItem={renderItem}
          data={data}
          refreshing={loading}
          onEndReached={onFetchMoreData}
          onRefresh={onRefresh}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <ReferralsHeader
              businessAccountState={businessAccountState}
              onShare={onShare}
              data={data}
              info={info}
              componentId={componentId}
              loading={loading}
            />
          }
          ListFooterComponent={<Box bg="white" height={50} />}
        />
      </View>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} backgroundColor="#D9F7FF" />
      <View style={styles.safeAreaBackground} />
    </View>
  );
};

const keyExtractor = (item: Item) => item.id;

const renderItem = ({ item }: ListRenderItemInfo<Item>) => {
  return (
    <View style={styles.listItemWrapper}>
      <View style={styles.listItem} testID={REFERRALS_SCREEN_NAME(item.name)}>
        <UserAvatarCoinCard
          name={item.name}
          avatarUrl={item.avatarUrl}
          subTitle={moment(item.date).format(getDateFormat())}
          coin={item.coin}
        />
      </View>
    </View>
  );
};

export default memo(ReferralsScreen);
