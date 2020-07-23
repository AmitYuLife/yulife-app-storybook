import { GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn } from "@app/graphql/_core/schema";
import { IAppStore } from "@app/redux/app/app.reducer";
import { ILeaderboard } from "@redux/user/user.reducer";
import React from "react";
import {
  Animated,
  StyleSheet,
  View,
  FlatList,
  Platform,
  ActivityIndicator,
  LayoutChangeEvent,
  Image,
} from "react-native";
import { Navigation } from "react-native-navigation";
import { Text, Pad } from "../../../atoms";
import { ILabel, NavBar, TopBar } from "../../../molecules";
import LeaderboardConsent from "./leaderboard-consent/leaderboard-consent";
import LeaderboardItem from "./leaderboard-item/leaderboard-item";
import { shouldLeaderboardUpdate } from "./leaderboards.screen.helpers";
import { LEADERBOARD_SCREEN } from "@ids";
import styles, {
  LIST_PAD_HEIGHT,
  LOADING_ITEM_HEIGHT,
  TOP_BAR_WRAPPER_HEIGHT,
  LEADERBOARD_PROMPT_OFFSET,
} from "./leaderboards.screen.styles";
import { ROUTES } from "../../../../navigation/constants";
import { Style } from "@styles/index";
import LeaderboardTop, { LeaderboardTopIOS } from "./leaderboard-top/leaderboard-top.screen";
import { LEADERBOARD_ITEM_HEIGHT } from "./leaderboard-item/leaderboard-item.styles";
import { LockedCell } from "./locked-cell";
import { LeaderboardTitle } from "./leaderboard-title";
import deviceInfo from "react-native-device-info";

const LEADERBOARD_ITEMS_OFFSET = LIST_PAD_HEIGHT + LOADING_ITEM_HEIGHT;

export type LeaderboardTypes = "coins" | "steps";

const LOADING_ITEM = "loadingItem";

export interface IItem {
  id: string;
  coins: number;
  firstName: string;
  lastName: string;
  name: string;
  steps: number;
  avatarRemoteFile: string;
}

export interface ILeaderboardsScreenProps {
  componentId: string;
  activeLeaderboardIndex: number;
  sortBy: string;
  hasNotification: boolean;
  appState: IAppStore["appState"];
  labels: ILabel[];
  totalCoins: number;
  isLoading: boolean;
  leaderboards: ILeaderboard[];
  items: IItem[];
  copy: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn;
  userId: string;
  onLeftMenuPress: () => void;
  onLeaderboardChange: (index: number) => void;
  onRefetch: () => void;
  onAllowLeaderboard: () => void;
  onRefuseConsent: () => void;
  onPrivacyPolicyPress: () => void;
}

export const initialState = {
  flatlistOnScrollValue: new Animated.Value(0),
  viewportHeight: 0,
  itemOffsetY: null as number,
  viewableInViewportMin: 0,
  viewableInViewportMax: 0,
  topbarHeight: Platform.OS === "ios" ? TOP_BAR_WRAPPER_HEIGHT : TopBar.height,
  leaderboardTopHeight: 0,
};

export default class LeaderboardsScreen extends React.Component<ILeaderboardsScreenProps, typeof initialState> {
  public state = initialState;
  private itemForPad = {
    id: "first_element",
    coins: 1,
    firstName: "",
    lastName: "",
    name: "",
    steps: 1,
    avatarRemoteFile: "",
  };
  private animatedFlatListRef: FlatList = null;

  private avatarDataFirstUser: string;
  private avatarDataSecondUser: string;
  private avatarDataThirdUser: string;

  public constructor(props: ILeaderboardsScreenProps) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  public shouldComponentUpdate(nextProps: ILeaderboardsScreenProps, nextState: typeof initialState) {
    return shouldLeaderboardUpdate({
      nextProps,
      currentProps: this.props,
      nextState,
      currentState: this.state,
    });
  }

  public componentDidMount() {
    this.calculateitemOffsetY();
  }

  public componentDidUpdate(prevProps: ILeaderboardsScreenProps, prevState: typeof initialState) {
    const hasFinishedLoading = prevProps.isLoading !== this.props.isLoading;
    const viewportHeightChanged = prevState.viewportHeight !== this.state.viewportHeight;
    const viewableInViewportMinChanged = prevState.viewableInViewportMin !== this.state.viewableInViewportMin;
    const viewableInViewportMaxChanged = prevState.viewableInViewportMax !== this.state.viewableInViewportMax;
    const hasMetRecalculationCondition =
      hasFinishedLoading || viewportHeightChanged || viewableInViewportMinChanged || viewableInViewportMaxChanged;
    if (hasMetRecalculationCondition) {
      this.calculateitemOffsetY();
      this.restartScroll();
    }

    if (
      prevProps.leaderboards[prevProps.activeLeaderboardIndex]?.isLoading !==
      this.props.leaderboards[this.props.activeLeaderboardIndex]?.isLoading
    ) {
      this.props.onRefetch();
    }
  }

  public render() {
    const {
      activeLeaderboardIndex,
      isLoading,
      hasNotification,
      items = [],
      totalCoins,
      leaderboards,
      onLeftMenuPress,
      onPrivacyPolicyPress,
      onRefuseConsent,
      copy,
    } = this.props;
    const activeLeaderboard = leaderboards.length > 0 && leaderboards[activeLeaderboardIndex];
    this.avatarDataFirstUser = items[0]?.avatarRemoteFile;
    this.avatarDataSecondUser = items[1]?.avatarRemoteFile;
    this.avatarDataThirdUser = items[2]?.avatarRemoteFile;

    const TRANSLATE_Y_TRANSFORM_ADJUST = Platform.select({ ios: -Style.getSafeAreaStart(), android: 0 });
    const translateYTransform = this.state.flatlistOnScrollValue.interpolate({
      inputRange: [0 + TRANSLATE_Y_TRANSFORM_ADJUST, LIST_PAD_HEIGHT + TRANSLATE_Y_TRANSFORM_ADJUST],
      outputRange: [0, -LIST_PAD_HEIGHT],
      extrapolate: "clamp",
    });
    const AnimatedFlatList = createAnimatedComponentForwardingRef(FlatList);
    const myLeaderboardItemIndex = this.props.items.findIndex((item) => item.id === this.props.userId);
    const myLeaderboardItem = this.props.items[myLeaderboardItemIndex];
    const showConsentPrompt = activeLeaderboard && !activeLeaderboard.consent;
    const avatars = [this.avatarDataFirstUser, this.avatarDataSecondUser, this.avatarDataThirdUser];

    return (
      <View style={styles.wrapper}>
        <View
          style={StyleSheet.flatten([
            styles.list,
            styles.listWrapperMargin,
            { marginTop: showConsentPrompt ? -LEADERBOARD_PROMPT_OFFSET : 0 },
          ])}
          testID={LEADERBOARD_SCREEN}
        >
          {showConsentPrompt ? (
            <>
              <View pointerEvents="box-none" style={styles.emptyLeaderboardWrapper}>
                <LeaderboardTop avatars={[]} />
                <View style={styles.leaderboardTitleConsent}>
                  <LeaderboardTitle
                    name={(leaderboards.length > 0 && leaderboards[activeLeaderboardIndex])?.name}
                    onPressLabel={this.chooseLeaderboardScreen}
                    onPressInfo={this.showLeaderboardInfoScreen}
                  />
                </View>
              </View>
              <View style={styles.consentWrapper}>
                <LeaderboardConsent
                  isLoading={activeLeaderboard.isLoading}
                  onAllowLeaderboard={this.allowLeaderboard}
                  onPrivacyPolicyPress={onPrivacyPolicyPress}
                  onRefuseConsent={onRefuseConsent}
                  copy={copy}
                />
              </View>
            </>
          ) : (
            <View style={{ marginTop: Platform.select({ ios: -1, android: this.state.topbarHeight }) }}>
              <AnimatedFlatList
                getItemLayout={this.getItemLayout}
                onLayout={(e: LayoutChangeEvent) => this.setState({ viewportHeight: e.nativeEvent.layout.height })}
                onScrollToIndexFailed={() => null}
                ref={(ref) => ((this.animatedFlatListRef as any) = ref)}
                showsVerticalScrollIndicator={false}
                keyExtractor={(keyItem: IItem) => keyItem.id}
                data={items[0]?.id !== "first_element" ? [this.itemForPad].concat(items) : items}
                renderItem={this.renderIndexPath}
                horizontal={false}
                style={styles.listFullWidth}
                contentContainerStyle={styles.contentContainer}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: this.state.flatlistOnScrollValue } } }],
                  { useNativeDriver: Platform.OS === "ios" } // Why does it not work on Android?
                )}
                onRefresh={this.props.onRefetch}
                refreshing={isLoading}
              />
            </View>
          )}
        </View>
        <LeaderboardTopIOS
          translateYTransform={translateYTransform}
          showConsentPrompt={showConsentPrompt}
          avatars={avatars}
          onLayout={this.handleLeaderboardTopIOSLayout}
          style={{ marginTop: this.state.topbarHeight }}
        >
          <View style={styles.leaderboardTitle}>
            <LeaderboardTitle
              name={(leaderboards.length > 0 && leaderboards[activeLeaderboardIndex])?.name}
              onPressLabel={this.chooseLeaderboardScreen}
              onPressInfo={this.showLeaderboardInfoScreen}
            />
          </View>
        </LeaderboardTopIOS>
        <LockedCell
          show={activeLeaderboard.consent}
          sortBy={this.props.sortBy}
          onPress={this.handleScrollToMyRow(myLeaderboardItemIndex - 1 > 0 ? myLeaderboardItemIndex - 1 : 0)}
          leaderboardItem={myLeaderboardItem}
          leaderboardItemIndex={myLeaderboardItemIndex}
          floatingItemAnimatedOpacity={this.getOpacityInterpolation() as number}
        />
        <NavBar activeIndex={3} hasNotification={hasNotification} />
        <View onLayout={this.handleTopBarWrapperLayout} style={styles.topBarWrapper}>
          <TopBar coins={totalCoins} type="default" onPressLeftIcon={onLeftMenuPress} />
        </View>
      </View>
    );
  }

  private handleLeaderboardTopIOSLayout = (e: LayoutChangeEvent) => {
    if (Platform.OS !== "ios") {
      return;
    }

    this.setState({ leaderboardTopHeight: e.nativeEvent.layout.height });
  };

  private handleTopBarWrapperLayout = (e: LayoutChangeEvent) => {
    this.setState({ topbarHeight: e.nativeEvent.layout.height });
  };

  private getOpacityInterpolation = (options?: { reverse: boolean }) => {
    const { reverse = false } = options || {};
    const { viewableInViewportMin, viewableInViewportMax } = this.state;
    const FORWARD_ANIMATION_FRAMES = 1;
    const REVERSE_ANIMATION_FRAMES = 5;
    const TRANSITION_FRAMES = FORWARD_ANIMATION_FRAMES - REVERSE_ANIMATION_FRAMES;
    const inputRange = [
      -Number.MAX_SAFE_INTEGER,
      viewableInViewportMin + (reverse ? TRANSITION_FRAMES : 0),
      viewableInViewportMin + FORWARD_ANIMATION_FRAMES,
      viewableInViewportMax,
    ];
    const outputRange = [1, 1, 0, 0];
    const animatedOpacityInterpolation = !(viewableInViewportMin && viewableInViewportMax)
      ? 0
      : this.state.flatlistOnScrollValue.interpolate({
          inputRange,
          outputRange: reverse ? outputRange.reverse() : outputRange,
          extrapolate: "clamp",
        });
    return animatedOpacityInterpolation;
  };

  private handleScrollToMyRow = (index: number) => {
    return () => {
      this.animatedFlatListRef.scrollToIndex({
        animated: true,
        index,
      });
    };
  };

  private getItemLayout = (data: any, index: number) => {
    if (data[index].id === "first_element") {
      return { length: LIST_PAD_HEIGHT, offset: 0, index };
    }

    return {
      length: LEADERBOARD_ITEM_HEIGHT,
      offset: LIST_PAD_HEIGHT + LEADERBOARD_ITEM_HEIGHT * index,
      index,
    };
  };

  private restartScroll = () => {
    this.animatedFlatListRef?.scrollToIndex({ animated: true, index: 0 });
  };

  private calculateitemOffsetY = (): null => {
    const { viewportHeight } = this.state;
    if (!viewportHeight) {
      return null;
    }

    const userIndex = this.props.items.findIndex((item) => item.id === this.props.userId);
    const itemOffsetY = Math.floor(userIndex * LEADERBOARD_ITEM_HEIGHT + LEADERBOARD_ITEMS_OFFSET);
    const ADJUST_MULTIPLIER = Style.isAnyIphoneX() ? 0.5 : 1;
    const ADJUSTED_LEADERBOARD_ITEM_HEIGHT = LEADERBOARD_ITEM_HEIGHT * ADJUST_MULTIPLIER;
    const scrollThreshold = ADJUSTED_LEADERBOARD_ITEM_HEIGHT + itemOffsetY - viewportHeight;
    const VIEWABLE_IN_VIEWPORT_MIN_ADJUSTMENT_IOS = deviceInfo.hasNotch() ? -52 : Style.SCALE_Y_UP_AND_DOWN(6);
    const VIEWABLE_IN_VIEWPORT_MIN_ADJUSTMENT_ANDROID = Style.adjust(48, {
      shrinkThreshold: null,
      growThreshold: Style.DEVICE_HEIGHT > 700,
      growMultiplier: 0.2,
    });
    const VIEWABLE_IN_VIEWPORT_MIN_ADJUSTMENT = Platform.select({
      ios: VIEWABLE_IN_VIEWPORT_MIN_ADJUSTMENT_IOS,
      android: VIEWABLE_IN_VIEWPORT_MIN_ADJUSTMENT_ANDROID,
    });
    const VIEWABLE_IN_VIEWPORT_MAX_ADJUSTMENT = Platform.select({ ios: 120, android: 80 });
    const viewableInViewportMin = scrollThreshold - VIEWABLE_IN_VIEWPORT_MIN_ADJUSTMENT;
    const viewableInViewportMax = viewportHeight + scrollThreshold - VIEWABLE_IN_VIEWPORT_MAX_ADJUSTMENT;
    this.setState({ viewableInViewportMin, viewableInViewportMax });
  };

  private renderIndexPath = ({ item, index }: any) => {
    const { sortBy, leaderboards, activeLeaderboardIndex } = this.props;

    if (index === 0) {
      if (Platform.OS === "android") {
        return (
          <View style={styles.imageWrapper}>
            <LeaderboardTop avatars={[this.avatarDataFirstUser, this.avatarDataSecondUser, this.avatarDataThirdUser]} />
            <View style={styles.androidTitle}>
              <LeaderboardTitle
                name={(leaderboards.length > 0 && leaderboards[activeLeaderboardIndex])?.name}
                onPressLabel={this.chooseLeaderboardScreen}
                onPressInfo={this.showLeaderboardInfoScreen}
              />
            </View>
          </View>
        );
      }

      const { isLoading } = this.props;
      return <FirstListItem isLoading={isLoading} scrollOffset={this.state.flatlistOnScrollValue} />;
    }

    if (item.id === LOADING_ITEM) {
      return <LoadingItem />;
    }

    if (item) {
      const isCurrentUser = item.id === this.props.userId;
      const opacityInterpolation = !isCurrentUser ? 1 : this.getOpacityInterpolation({ reverse: true });
      return (
        <LeaderboardItem
          {...item}
          isCurrentUser={isCurrentUser}
          sortBy={sortBy}
          rank={index}
          animatedOpacity={opacityInterpolation}
        />
      );
    }

    return null;
  };

  private allowLeaderboard = () => {
    this.props.onAllowLeaderboard();
  };

  private onChangeActiveLeaderboard = (activePage: number) => {
    this.props.onLeaderboardChange(activePage);
  };

  private chooseLeaderboardScreen = () => {
    const {
      onChangeActiveLeaderboard,
      props: { leaderboards, activeLeaderboardIndex, componentId },
    } = this;
    Navigation.push(componentId, {
      component: {
        id: ROUTES.chooseLeaderboard,
        name: ROUTES.chooseLeaderboard,
        passProps: {
          componentId,
          leaderboards,
          activePage: activeLeaderboardIndex,
          onChangeActiveLeaderboard,
        },
      },
    });
  };

  private showLeaderboardInfoScreen = () => {
    const { componentId } = this.props;
    Navigation.push(componentId, {
      component: {
        id: ROUTES.chooseLeaderboard,
        name: ROUTES.chooseLeaderboard,
        passProps: {
          componentId,
          showInfo: true,
        },
      },
    });
  };
}

function createAnimatedComponentForwardingRef<P, S>(Component: React.ComponentClass<P, S>) {
  return React.forwardRef<React.Component<P, S>, P>((props, ref) => {
    class Wrapper extends React.Component<P, S> {
      render() {
        return <Component {...this.props} ref={ref} />;
      }
    }
    const AnimatedWrapper = Animated.createAnimatedComponent(Wrapper);
    return <AnimatedWrapper {...(props as any)} />;
  });
}

function LoadingItem() {
  return <View style={styles.loadingItem} />;
}

function FirstListItem({ isLoading, scrollOffset }: { isLoading: boolean; scrollOffset: Animated.Value }) {
  const ARBITRARY_SCROLL_FINISH = -Style.adjust(150, { shrinkMultiplier: 0.35 });
  const ARBITRARY_SCROLL_START = -Style.adjust(30);
  const rotateTransform = scrollOffset.interpolate({
    inputRange: [ARBITRARY_SCROLL_FINISH, ARBITRARY_SCROLL_START, 0],
    outputRange: ["180deg", "0deg", "0deg"],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.firstListItem}>
      <View style={{ position: "absolute", bottom: 0, right: 0, left: 0, alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center", paddingBottom: 8 }}>
          {!isLoading && (
            <>
              <Animated.View style={{ transform: [{ rotate: rotateTransform }] }}>
                <Image source={require("../../../../../assets/icons/v.png")} />
              </Animated.View>
              <Pad width={16} />
            </>
          )}
          {isLoading ? <ActivityIndicator /> : <Text>Keep pulling to refresh</Text>}
        </View>
      </View>
    </View>
  );
}
