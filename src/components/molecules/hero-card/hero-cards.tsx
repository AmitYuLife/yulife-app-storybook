import React, { memo, useCallback, useMemo } from "react";
import { View, FlatList, StyleSheet, Platform, ListRenderItemInfo } from "react-native";
import { FLAT_LIST_EVENTS } from "@ids";
import { NAV_BAR, Style } from "@styles";
import HeroCard from "./hero-card";
import { HeroCard as HeroCardProps } from "@utils/heroCards";
import { useSelector } from "react-redux";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import HealthPermissionPanel, { IHealthPermissionPanelProps } from "../health-permission-panel/health-permission-panel";

const INITIAL_PADDING = Style.adjust(24);
const CARD_WIDTH = Style.DEVICE_WIDTH - Style.adjust(64);
const SNAP_TO_INTERVAL = CARD_WIDTH + Style.adjust(16);

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
        return <HealthPermissionPanel {...healthPermissions} width={SNAP_TO_INTERVAL} />;
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
    <View style={styles.flatListWrapper}>
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
    </View>
  );
};

export default memo(HeroCards);

const isShort = Platform.select({ ios: Style.isXShort(), android: Style.isShorterThan(750) });

const styles = StyleSheet.create({
  wrapper: {
    minHeight: Style.adjust(143),
    borderRadius: 8,
    alignItems: "center",
    marginTop: Style.adjust(15),
    paddingBottom: Style.adjust(5),
  },
  flatListWrapper: {
    position: "absolute",
    bottom: NAV_BAR.getPositionBottom({ additionalBottom: Style.adjust(isShort ? 85 : 145) }),
  },
  flatListContentContainerStyle: {
    paddingHorizontal: INITIAL_PADDING,
  },
});
