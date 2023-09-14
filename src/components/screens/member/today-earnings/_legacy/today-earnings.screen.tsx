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
import { t } from "@locale";
import HintContainer from "@components/molecules/hint/hint.container";
import { ROUTES } from "@navigation/constants";

interface IProps {
  header: Header;
  activityFeed: IActivityFeed[];
  isGoogleFitAuthorised: boolean;
  onLeftIconPress: () => void;
  currentWorld: number;
  currentYuniverse: number;
}

const TodayEarningsScreenLegacy = ({
  header,
  activityFeed,
  onLeftIconPress,
  isGoogleFitAuthorised,
  currentWorld,
  currentYuniverse,
}: IProps) => {
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView testID={TODAYS_EARNINGS} style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <TodayYuCoinHeader {...header} currentWorld={currentWorld} currentYuniverse={currentYuniverse} />
        <View style={styles.activityFeedWrapper}>
          {activityFeed.map((item) => (
            <ActivityFeed key={item.id} {...item} isGoogleFitAuthorised={isGoogleFitAuthorised} />
          ))}
          <View style={styles.hintWrapper}>
            <HintContainer screen={ROUTES.todayEarnings} />
          </View>
        </View>
      </ScrollView>
      <GenericHeadingAbsolute heading={t("screens.today_earning.heading.title")} onLeftIconPress={onLeftIconPress} />
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
  hintWrapper: {
    marginTop: Style.adjust(24),
    paddingHorizontal: Style.adjust(24),
  },
});

export default memo(TodayEarningsScreenLegacy);
