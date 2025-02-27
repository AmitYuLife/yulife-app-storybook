import React, { memo, useCallback, useMemo } from "react";
import { FlatList, StyleSheet, ListRenderItemInfo } from "react-native";
import { useSelector } from "react-redux";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { FLAT_LIST_EVENTS } from "@ids";
import { Style } from "@styles";
import { Box } from "@atoms";
import HealthPermissionPanel, { IHealthPermissionPanelProps } from "../health-permission-panel/health-permission-panel";
import { HeroCard as HeroCardProps } from "@utils/heroCards";
import HeroCard from "./hero-card";
import { CARD_WIDTH, INITIAL_PADDING, SNAP_TO_INTERVAL } from "./constants";

enum HeroCardType {
  event = "event",
  healthPermission = "healthPermission",
}

const HeroCards = ({
  heroCards,
  healthPermissions,
}: {
  heroCards: Partial<HeroCardProps>[];
  healthPermissions: Omit<IHealthPermissionPanelProps, "width">;
}) => {
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<HeroCardProps & { type?: HeroCardType }>) => {
      if (item.type === HeroCardType.healthPermission) {
        return (
          <Box mh={-8}>
            <HealthPermissionPanel {...healthPermissions} width={SNAP_TO_INTERVAL} />
          </Box>
        );
      }

      return <HeroCard {...item} width={CARD_WIDTH} currentLevel={currentLevel} yuniversalMap={yuniversalMap} />;
    },
    [currentLevel, yuniversalMap, healthPermissions]
  );

  const keyExtractor = useCallback((item: HeroCardProps & { type?: HeroCardType }, index: number) => {
    return item.id ?? item.type ?? index.toString();
  }, []);

  const data = useMemo(
    () => [...(healthPermissions ? [{ type: HeroCardType.healthPermission }] : []), ...heroCards],
    [heroCards, healthPermissions]
  );

  return (
    <FlatList
      data={data}
      horizontal={true}
      pagingEnabled={false}
      decelerationRate={0.9}
      renderItem={renderItem}
      testID={FLAT_LIST_EVENTS}
      snapToInterval={SNAP_TO_INTERVAL}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContentContainerStyle}
    />
  );
};

export default memo(HeroCards);

const styles = StyleSheet.create({
  wrapper: {
    minHeight: Style.adjust(143),
    borderRadius: 8,
    alignItems: "center",
    marginTop: Style.adjust(15),
    paddingBottom: Style.adjust(5),
  },
  flatListContentContainerStyle: {
    paddingHorizontal: INITIAL_PADDING,
    marginTop: Style.adjust(16),
    gap: Style.adjust(16),
  },
});
