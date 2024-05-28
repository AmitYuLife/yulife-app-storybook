import React, { memo, useCallback, useMemo, useState } from "react";
import { StyleSheet, View, Platform, LayoutChangeEvent, FlatList, ListRenderItemInfo } from "react-native";
import { Style, NAV_BAR } from "@styles";
import { AdBanner } from "@molecules";
import { FLAT_LIST_EVENTS } from "@ids";
import { getTheme } from "@theme";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { updateUserGoal } from "@redux/user/user.actions";
import { t } from "@locale";
import EventPanel, { IEventPanelProps } from "./event-panel";
import { baseStyles } from "./event-panel.styles";
import HealthPermissionPanel, { IHealthPermissionPanelProps } from "../health-permission-panel/health-permission-panel";
import { GetUserProfileQuery } from "@graphql/__generated";
import { EventType } from "@redux/user/user.types";

interface IAdBanner {
  imageUrl: string;
  navigateTo: string;
  routeProps?: string;
}

type UserProfileEvents = GetUserProfileQuery["getUserProfile"]["events"][0];

type IEvents = UserProfileEvents & IAdBanner;
type IEventPanelData = Partial<IEvents> & {
  eventPanelMilestones?: IEventPanelProps["milestones"];
};

interface IEventPanelsProps {
  componentId?: string;
  events: Partial<IEvents>[];
  currentWorld: number;
  onJoin: (event: Partial<UserProfileEvents>) => Promise<void>;
  healthPermissions: Omit<IHealthPermissionPanelProps, "width">;
}

const CARD_WIDTH = Style.DEVICE_WIDTH * 0.8 - 8;
const INITIAL_PADDING = Style.DEVICE_WIDTH * 0.1 - 8;

enum EventPanelType {
  event = "event",
  healthPermission = "healthPermission",
}

interface IEventListItems {
  data?: Partial<IEventPanelData>;
  type: EventPanelType;
}

const EventPanels = ({ healthPermissions, events = [], componentId, onJoin }: IEventPanelsProps) => {
  const dispatch = useDispatch();
  const [adHeight, setAdHeight] = useState(143);
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const { dailyStepsScreen } = getTheme(currentLevel, yuniversalMap);

  const snapToInterval = CARD_WIDTH + baseStyles.wrapper.marginHorizontal * 2;

  const onLayout = useCallback((e: LayoutChangeEvent) => setAdHeight(e?.nativeEvent?.layout?.height || 148), []);

  const data: IEventListItems[] = useMemo(
    () => [
      ...(healthPermissions ? [{ type: EventPanelType.healthPermission }] : []),
      ...events.map((event) => {
        const eventPanel: IEventPanelData = {
          ...event,
          id: event.id ?? "unknown",
          stageId: event.stageId ?? "unknown",
          eventPanelMilestones: event.milestones?.map((m) => ({
            value: m.targetValue,
            shouldAttractAttention: m.isClaimable,
            rewardClaimed: m.rewardClaimed,
          })),
        };

        return {
          type: EventPanelType.event,
          data: eventPanel,
        };
      }),
    ],
    [events]
  );

  const renderEvent = useCallback(
    ({ item }: ListRenderItemInfo<Partial<IEventPanelData>>) => {
      if (item.id.startsWith("ad-")) {
        return (
          <View style={styles.adBanners}>
            <AdBanner
              imageUrl={item.imageUrl}
              navigateTo={item.navigateTo}
              routeProps={item.routeProps}
              style={styles.adBannerImage}
              height={adHeight - Style.adjust(2)}
              width={CARD_WIDTH - Style.adjust(15)}
            />
          </View>
        );
      }

      const handleOnPress = async () => {
        if (item.onPress) {
          dispatch(item.onPress);
        } else if (item.type === EventType.Goal) {
          await Navigation.push(componentId, {
            component: {
              id: ROUTES.eventDialog,
              name: ROUTES.eventDialog,
              passProps: {
                event: item,
                eventId: item.id,
                componentId,
                onLeftIconPress: () => Navigation.pop(componentId),
              },
            },
          });
        }

        if (item.type === EventType.Goal) {
          dispatch(updateUserGoal({ id: item.id, badge: null }));
        }
      };

      const [buttonText, onButtonPress] =
        item.type === EventType.Journey || item.joined
          ? []
          : [
              t("labels.cta.join"),
              async () => {
                try {
                  await onJoin(item);
                  handleOnPress();
                } catch (_) {}
              },
            ];

      return (
        <EventPanel
          width={CARD_WIDTH}
          title={item.title}
          description={item.description}
          image={item.image}
          challenges={item.challenges}
          progressBar={item.progressBar}
          milestones={item.eventPanelMilestones}
          badge={item.badge}
          fontColor={dailyStepsScreen.eventPanel.fontColor}
          backgroundColor={dailyStepsScreen.eventPanel.backgroundColor}
          borderColor={dailyStepsScreen.eventPanel.borderColor}
          tags={item.tags}
          buttonText={buttonText}
          onPanelPress={handleOnPress}
          onButtonPress={onButtonPress}
        />
      );
    },
    [onJoin, componentId, adHeight, onLayout]
  );

  const renderHealthPermission = useCallback(() => {
    return <HealthPermissionPanel {...healthPermissions} width={CARD_WIDTH} />;
  }, [healthPermissions]);

  const renderItem = useCallback(
    ({ item, ...info }: ListRenderItemInfo<IEventListItems>) => {
      switch (item.type) {
        case EventPanelType.event: {
          if (!item.data) {
            return null;
          }

          return renderEvent({ item: item.data, ...info });
        }

        case EventPanelType.healthPermission: {
          return renderHealthPermission();
        }
      }
    },
    [renderEvent, renderHealthPermission]
  );

  const keyExtractor = useCallback((event: IEventListItems, index: number) => event?.data?.id ?? `${index}`, []);

  return (
    <View style={styles.flatListWrapper}>
      <FlatList
        data={data}
        horizontal={true}
        pagingEnabled={false}
        decelerationRate={0.9}
        renderItem={renderItem}
        testID={FLAT_LIST_EVENTS}
        snapToInterval={snapToInterval}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainerStyle}
      />
    </View>
  );
};

const isShort = Platform.select({ ios: Style.isXShort(), android: Style.isShorterThan(750) });
const styles = StyleSheet.create({
  flatListWrapper: {
    position: "absolute",
    bottom: NAV_BAR.getPositionBottom({ additionalBottom: Style.adjust(isShort ? 85 : 145) }),
  },
  flatListContentContainerStyle: {
    paddingHorizontal: INITIAL_PADDING,
  },
  adBanners: {
    marginTop: Style.adjust(15),
    marginHorizontal: Style.adjust(8),
    justifyContent: "center",
  },
  adBannerImage: {
    borderRadius: 8,
  },
});

export default memo(EventPanels);
