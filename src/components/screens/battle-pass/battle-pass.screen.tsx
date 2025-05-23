import { BattlePassHeader, TopBarAbsolute } from "@organisms";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from "react-native";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { IDonationListItem } from "@organisms/donation-list-item/donation-list-item";
import { TOP_BAR } from "@styles";
import { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";
import { RewardsList } from "./rewards-list/rewards-list";
import { BattlePassSeasonComplete } from "@organisms/battle-pass-season-complete/battle-pass-season-complete";
import { FlashList } from "@shopify/flash-list";
import { BATTLE_PASS_SCREEN } from "@ids";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import { Box } from "@atoms";

interface IProps {
  title: string;
  description: string;
  disclaimer?: string;
  backgroundImage: ImageSourcePropType;
  isInnerScreen?: boolean;
  donationTemplates: IDonationListItem[];
  progressStatus: IBattlePassProgressBar;
  isCompleteLoading?: boolean; //leave this for now, it will be purged on container changes
  rewards: IBattlePassListItem[];
  onBackPress?: () => void;
  showNavigation?: boolean;
  onPressWallet?: () => void;
  onComplete: () => void; //leave this for now, it will be purged on container changes
  showCoinAnimation: boolean;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

const BattlePassScreen = ({
  title,
  description,
  disclaimer,
  backgroundImage,
  onBackPress,
  showNavigation,
  donationTemplates,
  progressStatus,
  isInnerScreen,
  rewards,
  showCoinAnimation,
  onScroll,
  onPressWallet,
}: IProps) => {
  const isSeasonComplete = progressStatus.step === progressStatus.steps;
  const headerListRef = useRef<FlashList<IBattlePassListItem>>(null);
  const [showClaimButton, setShowClaimButton] = useState<boolean>(true);

  const onScrollStart = useCallback(() => {
    if (!showClaimButton) {
      setShowClaimButton(true);
    }
  }, [showClaimButton]);

  useEffect(() => {
    const noRewardsIsClaimed = rewards.every((reward) => reward.status === "pending");
    if (noRewardsIsClaimed) {
      headerListRef.current?.scrollToIndex({
        index: 0,
        animated: true,
      });
    }
  }, [rewards]);

  return (
    <>
      <Box flex={1} bg="white" pb={isInnerScreen ? 80 : 0} testID={BATTLE_PASS_SCREEN}>
        <BattlePassHeader
          title={title}
          description={description}
          backgroundImage={backgroundImage}
          items={rewards}
          listRef={headerListRef}
          onScrollStart={onScrollStart}
          onPressWallet={onPressWallet}
          progressStatus={progressStatus}
          pt={showNavigation || isInnerScreen ? TOP_BAR_WITH_PAD : 0}
        />
        <Box px={16} pb={showNavigation || isInnerScreen ? 0 : 80} mt={30} flex={1}>
          <ScrollView scrollEventThrottle={16} onScroll={onScroll} showsVerticalScrollIndicator={false}>
            {!isSeasonComplete ? (
              <RewardsList
                donationTemplates={donationTemplates}
                showCoinAnimation={showCoinAnimation}
                disclaimer={disclaimer}
              />
            ) : (
              <BattlePassSeasonComplete rewards={rewards} title={title} />
            )}
          </ScrollView>
        </Box>
      </Box>
      {showNavigation ? (
        <Box position="absolute" top={0} w="100%" pt={TOP_BAR.PADDING_TOP}>
          <TopBarAbsolute type="white" leftIcon={LeftIcon.BACK} onPressLeftIcon={onBackPress} />
        </Box>
      ) : null}
    </>
  );
};

export default memo(BattlePassScreen);
