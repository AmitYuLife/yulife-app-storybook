import React, { memo, useState } from "react";
import { View } from "react-native";
import { TODAYS_EARNINGS } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import ActivityFeed from "./subcomponents/activity-feed";
import { Colours, Style, StyleSheet } from "@styles";
import { t } from "@locale";
import HintContainer from "@components/molecules/hint/hint.container";
import { ROUTES } from "@navigation/constants";
import { Box, YuCoinBadge, TextTemplate } from "@atoms";
import { YucoinPowerButton } from "@components/molecules";
import { ScrollThresholdView } from "@molecules";
import { GetTodayEarningsQuery } from "@graphql/__generated";

interface ITodaysEarningScreenProps {
  header: GetTodayEarningsQuery["getTodayEarnings"]["header"];
  activityFeed: GetTodayEarningsQuery["getTodayEarnings"]["activityFeed"];
  isGoogleFitAuthorised: boolean;
  onLeftIconPress: () => void;
  currentWorld: number;
  currentYuniverse: number;
}

const GAP = Style.adjust(24);
const HEADER_HEIGHT = Style.adjust(240);

const TodayEarningsScreen = ({
  activityFeed,
  onLeftIconPress,
  isGoogleFitAuthorised,
  currentWorld,
  currentYuniverse,
  header: { yuCoinToday },
}: ITodaysEarningScreenProps) => {
  const [isThresholdReached, setIsThresholdReached] = useState<boolean>(false);

  const onThresholdStateChanged = (state: boolean): void => {
    setIsThresholdReached(state);
  };

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad hideBorder={true} />
      <ScrollThresholdView
        bounces={false}
        style={styles.wrapper}
        testID={TODAYS_EARNINGS}
        scrollThreshold={HEADER_HEIGHT}
        showsVerticalScrollIndicator={false}
        onThresholdStateChanged={onThresholdStateChanged}
      >
        <Box gap={10} style={styles.headerWrapper}>
          <View style={styles.headerYucoinWrapper}>
            <YuCoinBadge width={110} height={116} currentWorld={currentWorld} currentYuniverse={currentYuniverse} />
          </View>
          <View style={styles.headerText} accessible={true}>
            <TextTemplate color={Colours.neutral.n900} type="l1">
              {t("screens.today_earning.yucoin_header.coins.earned_today")}
            </TextTemplate>
            <TextTemplate color={Colours.neutral.n900} type="h1">
              {t("yu_coin.amount", { amount: yuCoinToday })}
            </TextTemplate>
          </View>
          <YucoinPowerButton />
        </Box>

        <Box gap={10} style={styles.bodyWrapper}>
          <Box gap={GAP}>
            {activityFeed.map((item) => (
              <ActivityFeed key={item.id} {...item} isGoogleFitAuthorised={isGoogleFitAuthorised} />
            ))}
          </Box>
          <View style={styles.hintWrapper}>
            <HintContainer screen={ROUTES.todayEarnings} />
          </View>
        </Box>
      </ScrollThresholdView>
      <GenericHeadingAbsolute
        color={Colours.neutral.n900}
        onLeftIconPress={onLeftIconPress}
        heading={t("screens.today_earning.heading.title")}
        backgroundColor={isThresholdReached ? Colours.neutral.white : "#FFFBE5"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerWrapper: {
    width: "100%",
    backgroundColor: "#FFFBE5",
    paddingBottom: Style.adjust(GAP),
    paddingHorizontal: Style.adjust(GAP),
  },
  headerYucoinWrapper: {
    alignSelf: "center",
  },
  headerText: {
    alignItems: "center",
  },
  bodyWrapper: {
    paddingTop: Style.adjust(GAP),
    paddingHorizontal: Style.adjust(GAP),
    backgroundColor: Colours.neutral.white,
  },
  hintWrapper: {
    marginTop: Style.adjust(GAP),
    paddingHorizontal: Style.adjust(GAP),
  },
});

export default memo(TodayEarningsScreen);
