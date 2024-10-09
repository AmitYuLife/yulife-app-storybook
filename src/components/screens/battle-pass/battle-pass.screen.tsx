import { BattlePassHeader } from "@organisms";
import React, { memo, useCallback, useRef, useState } from "react";
import {
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { IDonationListItem } from "@organisms/donation-list-item/donation-list-item";
import { Style, TOP_BAR } from "@styles";
import { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";
import { RewardsList } from "./rewards-list/rewards-list";
import { BattlePassSeasonComplete } from "@organisms/battle-pass-season-complete/battle-pass-season-complete";
import { FlashList } from "@shopify/flash-list";

interface IProps {
  title: string;
  description: string;
  disclaimer?: string;
  backgroundImage: ImageSourcePropType;
  donationTemplates: IDonationListItem[];
  progressStatus: IBattlePassProgressBar;
  isCompleteLoading?: boolean;
  rewards: IBattlePassListItem[];
  onComplete: () => void;
  showCoinAnimation: boolean;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const BattlePassScreen = ({
  title,
  description,
  disclaimer,
  backgroundImage,
  isCompleteLoading,
  onComplete,
  donationTemplates,
  progressStatus,
  rewards,
  showCoinAnimation,
  onScroll,
}: IProps) => {
  const isSeasonComplete = progressStatus.step === progressStatus.steps;
  const headerListRef = useRef<FlashList<IBattlePassListItem>>(null);
  const [showClaimButton, setShowClaimButton] = useState<boolean>(true);

  const onClaimRewards = useCallback(() => {
    const unclaimedIndex = rewards.findIndex((reward) => reward.status !== "claimed");
    setShowClaimButton(false);
    headerListRef.current?.scrollToIndex({
      index: unclaimedIndex,
      animated: true,
    });
  }, [rewards]);

  const onScrollStart = useCallback(() => {
    if (!showClaimButton) {
      setShowClaimButton(true);
    }
  }, [showClaimButton]);

  return (
    <View style={styles.wrapper}>
      <BattlePassHeader
        title={title}
        description={description}
        backgroundImage={backgroundImage}
        items={rewards}
        listRef={headerListRef}
        onScrollStart={onScrollStart}
        progressStatus={progressStatus}
      />
      <View style={styles.container}>
        <ScrollView bounces={false} scrollEventThrottle={16} onScroll={onScroll} showsVerticalScrollIndicator={false}>
          {!isSeasonComplete ? (
            <RewardsList
              donationTemplates={donationTemplates}
              showCoinAnimation={showCoinAnimation}
              disclaimer={disclaimer}
            />
          ) : (
            <BattlePassSeasonComplete
              rewards={rewards}
              title={title}
              onClaimRewards={onClaimRewards}
              showClaimButton={showClaimButton}
              onComplete={onComplete}
              isLoading={isCompleteLoading}
            />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    paddingHorizontal: Style.adjust(16),
    flex: 1,
    paddingBottom: Style.adjust(80),
    marginTop: Style.adjust(30),
  },
  impactTitle: {
    marginBottom: Style.adjust(16),
  },
  impactItem: {
    marginBottom: Style.adjust(16),
  },
  actionContainer: {
    paddingHorizontal: Style.adjust(16),
  },
  contentInset: {
    top: 0,
    left: 0,
    bottom: Style.adjust(180),
    right: 0,
  },
  topbarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
  },
  lottie: {
    position: "absolute",
    right: Style.adjust(-15),
    top: Style.adjust(-100),
    width: Style.adjust(130),
    height: Style.adjust(130),
  },
});

export default memo(BattlePassScreen);
