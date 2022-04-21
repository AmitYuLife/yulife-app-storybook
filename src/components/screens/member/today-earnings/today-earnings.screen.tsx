import React, { memo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TODAYS_EARNINGS } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import TodayYuCoinHeader from "./subcomponents/today-yucoin-header";
import ActivityFeed from "./subcomponents/activity-feed";
import {
  GetTodayEarnings_getTodayEarnings_activityFeed as IActivityFeed,
  GetTodayEarnings_getTodayEarnings_header as Header,
} from "@graphql/_core/schema";
import { Style } from "@styles";

interface IProps {
  header: Header;
  activityFeed: IActivityFeed[];
  isGoogleFitAuthorised: boolean;
  onLeftIconPress: () => void;
}

const TodayEarningsScreen = ({ header, activityFeed, onLeftIconPress, isGoogleFitAuthorised }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView testID={TODAYS_EARNINGS} style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <TodayYuCoinHeader {...header} />
        <View style={styles.activityFeedWrapper}>
          {activityFeed.map((item) => (
            <ActivityFeed key={item.id} {...item} isGoogleFitAuthorised={isGoogleFitAuthorised} />
          ))}
        </View>
      </ScrollView>
      <GenericHeadingAbsolute heading="Today’s Earnings" onLeftIconPress={onLeftIconPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  activityFeedWrapper: {
    marginBottom: Style.adjust(30),
  },
});

export default memo(TodayEarningsScreen);
