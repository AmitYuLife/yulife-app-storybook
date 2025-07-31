import React, { memo, RefObject, useCallback, useMemo, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { GenericHeadingPad, LeaderboardFloatingRank, ListItem, TopBarAbsolute } from "@organisms";
import { Image, TextTemplate } from "@atoms";
import { Colours, NAV_BAR, Style } from "@styles";
import { ChevronIcon } from "@atoms/icon/chevron-icon";
import { FlashList as _FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { TouchableOpacityWithDelay } from "@molecules";
import { ISocialGroupLeaderboardListItem } from "@components/screens/member/leaderboard/leaderboard-list-item";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { SduiAction } from "@redux/user/user.types";
import { ISocialGroup } from "@redux/leaderboards/leaderboards.types";
import BattlePassLeaderboardHeader from "@organisms/battle-pass-leaderboard-header/battle-pass-leaderboard-header";

interface IDetails {
  id: string;
  groupScore: {
    id: string;
    title: string;
    value: string;
  };
  yourScore: {
    id: string;
    title: string;
    yuCoin: string;
    yuCoinDescription: string;
    valueDescription: string;
    value: string;
  };
  image: {
    uri?: string;
    id: string;
  };
  rewardInfo?: {
    title: string;
    description: string;
    image: {
      uri?: string;
      id: string;
    };
    onPress: SduiAction;
  };
  backgroundColour: string;
}

interface IProps {
  onBack: () => void;
  details: IDetails;
  selectedDate?: string;
  availableDates?: string;
  onPressDate?: () => void;
  activeSocialGroup?: string;
  socialGroups: ISocialGroup[];
  onPressSocialGroup: () => void;
  leaderboard: ISocialGroupLeaderboardListItem[];
  currentUserInfo: ISocialGroupLeaderboardListItem;
}

const FlashList = Animated.createAnimatedComponent(_FlashList);

const FLOATING_ITEM_OFFSET = Style.adjust(190) - 10 - Style.DEVICE_HEIGHT + NAV_BAR.DEFAULT_FULL_HEIGHT / 2;

const BattlePassLeaderboardScreen = ({
  details,
  onBack,
  onPressDate,
  leaderboard,
  selectedDate,
  currentUserInfo,
  activeSocialGroup,
  onPressSocialGroup,
}: IProps) => {
  const flashList: RefObject<_FlashList<ISocialGroupLeaderboardListItem>> = useRef();
  const scrollValue = useRef(new Animated.Value(0)).current;

  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(details?.rewardInfo?.onPress);
  const stylesMemo = useMemo(
    () => ({
      wrapper: { backgroundColor: details.backgroundColour, flex: 1 },
      image: {
        ...styles.detailsImageRec,
        backgroundColor: details.backgroundColour,
      },
      header: {
        ...styles.header,
        marginBottom: !details.rewardInfo ? Style.adjust(44) : 0,
      },
    }),
    [details.backgroundColour, details.rewardInfo]
  );

  const onPressFloatingRank = useCallback(() => {
    flashList.current.scrollToIndex({
      index: currentUserInfo?.position - 2,
      animated: true,
    });
  }, [currentUserInfo?.position]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ISocialGroupLeaderboardListItem>) => {
      return (
        <ListItem
          type="leaderboard"
          uri={item?.avatar?.uri}
          score={item.score}
          showYuCoin={true}
          showNewMedal={true}
          theme={item.userId === currentUserInfo?.userId ? "highlighted" : null}
          {...item}
        />
      );
    },
    [currentUserInfo]
  );

  return (
    <View style={stylesMemo.wrapper}>
      <GenericHeadingPad />
      <View style={stylesMemo.header}>
        <View>
          <TextTemplate type="l1">{details.groupScore.title}</TextTemplate>
          <View style={styles.detailsGroupScore}>
            <TextTemplate type="h1">{details.groupScore.value}</TextTemplate>
          </View>
          <View style={styles.headerImage}>
            <Image
              source={details.image}
              width={Style.adjust(122)}
              height={Style.adjust(122)}
              suppressLoadingUi={true}
            />
          </View>
          {!details.rewardInfo ? null : (
            <TouchableOpacityWithDelay style={styles.details} onPress={handleSduiAction}>
              <View style={styles.detailsTextWrapper}>
                <View style={styles.detailsText}>
                  <View style={styles.detailsWrapper}>
                    <TextTemplate type="b2b" numberOfLines={2}>
                      {details.rewardInfo.title}
                    </TextTemplate>
                  </View>
                  <TextTemplate type="l2">{details.rewardInfo.description}</TextTemplate>
                </View>
                <View style={styles.detailsIcon}>
                  <ChevronIcon size={22} />
                </View>
              </View>
              <View style={styles.detailsImage}>
                <View style={stylesMemo.image} />
                <Image
                  imageStyle={styles.detailsImageIcon}
                  source={details.rewardInfo.image}
                  width={Style.adjust(60)}
                  height={Style.adjust(60)}
                  resizeMode="cover"
                  suppressLoadingUi={true}
                />
              </View>
            </TouchableOpacityWithDelay>
          )}
        </View>
      </View>
      <View style={styles.leaderboardWrapper}>
        <FlashList
          ref={flashList}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={45}
          scrollEventThrottle={16}
          data={leaderboard}
          ListHeaderComponent={
            <BattlePassLeaderboardHeader
              onPressSocialGroup={onPressSocialGroup}
              activeSocialGroup={activeSocialGroup}
              onPressDate={onPressDate}
              selectedDate={selectedDate}
            />
          }
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], {
            useNativeDriver: true,
          })}
          contentContainerStyle={styles.leaderboardContainer}
        />
        <LeaderboardFloatingRank
          name={currentUserInfo?.name}
          frame={currentUserInfo?.avatarFrame}
          position={currentUserInfo?.position}
          score={currentUserInfo?.score}
          avatar={currentUserInfo?.avatar?.uri}
          scrollValue={scrollValue}
          offset={FLOATING_ITEM_OFFSET}
          onPress={onPressFloatingRank}
        />
      </View>
      <TopBarAbsolute type="default" leftIcon={LeftIcon.BACK} onPressLeftIcon={onBack} />
    </View>
  );
};

const keyExtractor = (item: ISocialGroupLeaderboardListItem) => item.id;

const styles = StyleSheet.create({
  header: {
    marginTop: Style.adjust(16),
    marginHorizontal: Style.adjust(16),
  },
  headerImage: {
    position: "absolute",
    right: 0,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Style.adjust(24),
    marginBottom: Style.adjust(20),
  },
  detailsImage: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsImageRec: {
    width: Style.adjust(80),
    height: Style.adjust(80),
    borderRadius: 100,
    position: "absolute",
    left: -Style.adjust(16),
  },
  detailsImageIcon: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colours.neutral.white,
  },
  detailsTextWrapper: {
    position: "absolute",
    backgroundColor: Colours.neutral.white,
    width: "100%",
    minHeight: Style.adjust(56),
    borderRadius: 8,
    justifyContent: "center",
  },
  detailsWrapper: {
    width: "86%",
  },
  detailsText: {
    marginLeft: Style.adjust(72),
    marginVertical: Style.adjust(3),
  },
  detailsIcon: {
    position: "absolute",
    right: Style.adjust(16),
  },
  detailsGroupScore: {
    marginTop: Style.adjust(8),
  },
  leaderboardWrapper: {
    backgroundColor: Colours.neutral.white,
    flex: 1,
    paddingHorizontal: Style.adjust(16),
  },
  leaderboardContainer: {
    paddingTop: Style.adjust(16),
  },
});

export default memo(BattlePassLeaderboardScreen);
