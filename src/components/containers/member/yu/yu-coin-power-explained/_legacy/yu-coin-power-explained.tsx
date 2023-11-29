import React, { memo, useCallback } from "react";
import { View, ScrollView } from "react-native";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { Loading, Text, TextTemplate, YuCoinBadge } from "@atoms";
import { Button } from "@molecules";
import { useQuery } from "@apollo/client";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { useBackHandler } from "@hooks";
import { GQL_QUERY_GET_YU_COIN_POWER_EXPLAINED } from "@graphql/yuscreen/getYuCoinPowerExplained";
import { EARN_RATE, TEXT_TEMPLATE, YUCOIN_TITLE, YUCOIN_EXPLAINED_SCROLL_VIEW } from "@ids";
import { GetYuCoinPowerExplained } from "@graphql/_core/schema";
import { Style } from "@styles";
import { YuCoinPowerSVG } from "./yu-coin-power-svg";
import Markdown from "@molecules/markdown/markdown";
import {
  descriptionMarkdownStyles,
  styles,
  titleMarkdownStyles,
  yuCoinPowerHeight,
} from "./yu-coin-power-explained.styles";
import YuCoinPowerExplainedActivityGroup from "./yu-coin-power-explained-activity-group";
import { useDispatch, useSelector } from "react-redux";
import { logEvent } from "../../helpers/logEvent";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { getCurrentWorld, getCurrentYuniverse } from "@utils";

const YuCoinPowerExplained = () => {
  const dispatch = useDispatch();
  const currentLevel = useSelector(getCurrentLevel);
  const currentYuniverse = getCurrentYuniverse(currentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const { data } = useQuery<GetYuCoinPowerExplained>(GQL_QUERY_GET_YU_COIN_POWER_EXPLAINED, {
    fetchPolicy: "no-cache",
  });

  const dismissOverlay = useCallback(async () => {
    await Navigation.dismissModal(MODALS.yuCoinPowerExplained);
    if (data?.getYuCoinPowerExplained?.button) {
      const event = data?.getYuCoinPowerExplained?.button.event;
      logEvent(dispatch, event);
    }
  }, [data, dispatch]);

  const backHandler = useCallback(() => {
    dismissOverlay();
    return true;
  }, [dismissOverlay]);

  useBackHandler(backHandler);

  if (!data?.getYuCoinPowerExplained) {
    return <Loading />;
  }

  const { activities, button, heading, yuCoin } = data.getYuCoinPowerExplained;
  return (
    <GenericOverlay onClose={dismissOverlay}>
      <ScrollView showsVerticalScrollIndicator={false} testID={YUCOIN_EXPLAINED_SCROLL_VIEW}>
        <View style={styles.wrapper}>
          <View style={styles.headerWrapper}>
            <View style={styles.yuCoinIconWrapper}>
              <YuCoinBadge
                hasWhiteGlow={false}
                width={110}
                height={116}
                currentWorld={currentWorld}
                currentYuniverse={currentYuniverse}
              />
            </View>
            <TextTemplate type="b1b" testID={TEXT_TEMPLATE(heading)} textAlign="center">
              {heading}
            </TextTemplate>
          </View>
          <View>
            <View style={styles.yuCoinPowerSvgWrapper}>
              <YuCoinPowerSVG height={yuCoinPowerHeight} width={Style.DEVICE_WIDTH} />
            </View>
            <View style={styles.yuCoinPowerWrapper}>
              <View style={styles.yuCoinPowerEarnRateWrapper}>
                <Text bold={true} style={styles.yuCoinPowerEarnRate} testID={EARN_RATE(yuCoin.earnRate)}>
                  {yuCoin.earnRate}
                </Text>
              </View>
              <View style={styles.yuCoinTitle} testID={YUCOIN_TITLE}>
                <Markdown text={yuCoin.title} markdownStyles={titleMarkdownStyles} />
              </View>
              <View style={styles.yuCoinPowerDescription}>
                <Markdown text={yuCoin.description} markdownStyles={descriptionMarkdownStyles} />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.activitiesWrapper}>
              <View style={styles.activitiesHeading}>
                <TextTemplate textAlign="center" type="b2b">
                  {activities.heading}
                </TextTemplate>
              </View>
              <YuCoinPowerExplainedActivityGroup {...activities.dailyCoreActivities} />
              <View style={styles.activityGroupSpacer} />
              <YuCoinPowerExplainedActivityGroup {...activities.additionalActivities} />
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <Button size="Large" onPress={dismissOverlay} label={button.label} />
          </View>
        </View>
      </ScrollView>
    </GenericOverlay>
  );
};

export default memo(YuCoinPowerExplained);
