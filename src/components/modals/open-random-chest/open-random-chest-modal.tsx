import { memo, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { CloseSvg, Image } from "@atoms";
import { Pressable } from "@molecules";
import { Navigation } from "@navigation/main";
import { useMutation, useQuery } from "@apollo/client";
import { gql, MobileGameBattlePassType, MobileGameChestCollectionType } from "@graphql/__generated";
import { Style, StyleSheet } from "@styles";
import ListPickReward from "./subcomponents/stages/pick-stages/list-pick-reward-stage";
import { ChestStage, IPickStageProps } from "./open-random-chest.types";
import GlowPickReward from "./subcomponents/stages/pick-stages/glow-pick-reward-stage";
import { ChestStagingStage } from "./subcomponents/stages/chest-staging-stage";
import ChestImagePreloader from "./subcomponents/chest-image-preloader";
import { useSafeAreaViewOffset } from "../../../hooks/useSafeAreaViewOffset";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { t } from "@locale";
import { BUTTON_CLOSE } from "@ids";
import { AppDataType } from "@redux/user/user.types";
import { getUserDataStart } from "@redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { prizesAwarded } from "@redux/prizes/prizes.actions";
import { isEmpty } from "lodash";
import AllPickRewardStage from "./subcomponents/stages/pick-stages/all-pick-reward-stage";
import { getActiveSocialGroupId } from "@redux/leaderboards/leaderboards.selectors";
import DefaultRedeemedStage from "./subcomponents/stages/redeemed-stages/default-redeemed-stage";
import SingleRedeemedRewardStage from "./subcomponents/stages/redeemed-stages/single-redeemed-reward-stage";
import MultipleRedeemedRewardStage from "./subcomponents/stages/redeemed-stages/multiple-redeemed-reward-stage";

interface IOpenRandomChestModalProps {
  overlayImage?: string;
  backgroundImage?: string;
  milestoneId: string;
  participationId?: string;
}

const CHEST_PICK_STAGE_TYPES: Record<MobileGameChestCollectionType, (props: IPickStageProps) => ReactNode> = {
  [MobileGameChestCollectionType.List]: ListPickReward,
  [MobileGameChestCollectionType.Glow]: GlowPickReward,
  [MobileGameChestCollectionType.All]: AllPickRewardStage,
};

const OpenRandomChestModal = ({
  participationId,
  milestoneId,
  backgroundImage,
  overlayImage,
}: IOpenRandomChestModalProps) => {
  const { data, refetch } = useQuery(gql("GetMobileGameBattlePassChestDetailsDocument"), {
    variables: { participationId, milestoneId },
    fetchPolicy: "network-only",
  });

  const dispatch = useDispatch();
  const socialGroupId = useSelector(getActiveSocialGroupId);

  const [openChest, { loading: openLoading }] = useMutation(gql("OpenMobileGameBattlePassChestDocument"));
  const [claimPrizes, { loading: claimLoading, data: claimedChestData }] = useMutation(
    gql("ClaimMobileGameBattlePassChestPrizesDocument"),
    {
      refetchQueries:
        data?.details?.battlePassType === MobileGameBattlePassType.Unlockables
          ? [{ query: gql("GetMobileUnlockableBattlePassVouchersDocument"), errorPolicy: "ignore" }]
          : [
              {
                query: gql("GetMobileGameBattlePassFullDocument"),
                variables: { socialGroupId },
                errorPolicy: "ignore",
              },
            ],
    }
  );

  const [stage, setStage] = useState<ChestStage>(ChestStage.loading);
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);

  const setNewStage = useCallback(() => {
    const { openedRewards, possibleRewards, redeemedRewards } = data?.details || {};

    setStage(ChestStage.staging);

    if (redeemedRewards?.length) {
      setStage(ChestStage.redeemed);
      return;
    }

    if (openedRewards?.length) {
      setStage(ChestStage.pick);
      return;
    }

    if (possibleRewards?.length) {
      setStage(ChestStage.staging);
      return;
    }
  }, [data]);

  useEffect(() => {
    if (!data?.details || stage !== "loading") {
      return;
    }

    setNewStage();
  }, [data?.details, setNewStage, stage]);

  const onClaimItems = useCallback(
    async (rewardIds: string[], shouldSetStage: boolean = true) => {
      const result = await claimPrizes({
        variables: {
          rewardId: data?.details?.id,
          prizeIds: rewardIds,
          participationId,
        },
      });

      const awardedPrizeTypes = new Set(
        result.data.claimMobileGameBattlePassChestPrizes.rewards.flatMap((prize) => prize.awardedPrizeTypes)
      );

      if (!isEmpty(awardedPrizeTypes)) {
        dispatch(prizesAwarded({ prizeTypes: Array.from(awardedPrizeTypes) }));
      }

      dispatch(getUserDataStart({ types: [AppDataType.inventoryInfo] }));

      await refetch();

      if (shouldSetStage) {
        setStage(ChestStage.redeemed);
      }
    },
    [claimPrizes, data?.details?.id, dispatch, participationId, refetch]
  );

  const onOpenPress = useCallback(async () => {
    setIsDetailsLoading(true);
    try {
      const result = await openChest({
        variables: { rewardId: data?.details?.id, participationId },
      });

      const { shouldClaimImmediately, openedRewards } = result.data.openMobileGameBattlePassChest.chest;

      if (shouldClaimImmediately) {
        await onClaimItems(
          openedRewards.map((item) => item.id),
          false
        );
      }

      setStage(ChestStage.ingest);
    } finally {
      setIsDetailsLoading(false);
    }
  }, [data?.details?.id, onClaimItems, openChest, participationId]);

  const onClosePress = useCallback(async () => {
    Navigation.dismissAllModals();
  }, []);

  const possibleItems = data?.details?.possibleRewards;
  const openedItems = data?.details?.openedRewards;
  const redeemedItems = data?.details?.redeemedRewards;
  const collectionType = data?.details?.collectionType;
  const contentNode = useMemo((): ReactNode => {
    if (stage === ChestStage.staging || stage === ChestStage.ingest) {
      return (
        <ChestImagePreloader images={[overlayImage, ...possibleItems.map((item) => item.image.uri)]}>
          <ChestStagingStage
            stage={stage}
            overlayImage={overlayImage}
            isLoading={openLoading || isDetailsLoading}
            possibleItems={possibleItems}
            onFinish={setNewStage}
            onOpen={onOpenPress}
          />
        </ChestImagePreloader>
      );
    }

    if (stage === ChestStage.redeemed) {
      const claimedItems = claimedChestData?.claimMobileGameBattlePassChestPrizes.rewards;

      // fallback in case the user somehow sees the redeemed stage when he shouldn't
      if (!claimedItems?.length) {
        return (
          <ChestImagePreloader images={redeemedItems.map((item) => item.image.uri)}>
            <DefaultRedeemedStage redeemedItems={redeemedItems} onClose={onClosePress} />
          </ChestImagePreloader>
        );
      }

      const awardedPrizeTypes = claimedItems.flatMap((prize) => prize.awardedPrizeTypes);

      const RedeemedStage = redeemedItems.length === 1 ? SingleRedeemedRewardStage : MultipleRedeemedRewardStage;

      return (
        <ChestImagePreloader images={redeemedItems.map((item) => item.image.uri)}>
          <RedeemedStage redeemedItems={redeemedItems} onClose={onClosePress} awardedPrizeTypes={awardedPrizeTypes} />
        </ChestImagePreloader>
      );
    }

    if (stage === ChestStage.pick) {
      const PickStage =
        CHEST_PICK_STAGE_TYPES[collectionType] ?? CHEST_PICK_STAGE_TYPES[MobileGameChestCollectionType.List];

      return (
        <ChestImagePreloader images={[overlayImage, ...openedItems.map((item) => item.item.image.uri)]}>
          <PickStage
            overlayImage={overlayImage}
            openedItems={openedItems}
            isLoading={claimLoading}
            onClaim={onClaimItems}
          />
        </ChestImagePreloader>
      );
    }

    return null;
  }, [
    stage,
    onClaimItems,
    onOpenPress,
    openLoading,
    openedItems,
    setNewStage,
    claimLoading,
    onClosePress,
    overlayImage,
    possibleItems,
    redeemedItems,
    collectionType,
    isDetailsLoading,
    claimedChestData,
  ]);

  const backgroundSource = useMemo(() => ({ uri: backgroundImage }), [backgroundImage]);
  const { safeAreaViewOffset } = useSafeAreaViewOffset();
  const safeAreaInsets = useSafeAreaInsets();
  const scrollStyles = useMemo(
    () => ({
      minHeight: Style.DEVICE_HEIGHT - safeAreaViewOffset.y - Style.adjust(100),
    }),
    [safeAreaViewOffset.y]
  );
  const closeStyles = useMemo(
    () => [styles.closeButton, { top: safeAreaInsets.top + Style.adjust(10) }],
    [safeAreaInsets.top]
  );

  return (
    <View style={styles.container}>
      <Image
        suppressLoadingUi={true}
        source={backgroundSource}
        width={Style.DEVICE_WIDTH}
        style={styles.backgroundImage}
      />
      {data ? (
        <ScrollView contentContainerStyle={scrollStyles} showsVerticalScrollIndicator={false} bounces={false}>
          <SafeAreaView>
            <View>{contentNode}</View>
          </SafeAreaView>
        </ScrollView>
      ) : null}

      <View style={closeStyles}>
        <Pressable
          onPress={onClosePress}
          delay={1000}
          accessible={true}
          accessibilityLabel={t("labels.cta.close")}
          testID={BUTTON_CLOSE}
        >
          <CloseSvg />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#290163",
  },
  backgroundImage: {
    position: "absolute",
    top: Style.adjust(32),
    opacity: 0.4,
  },
  closeButton: {
    position: "absolute",
    right: Style.adjust(24),
    top: Style.adjust(38),
  },
});

export default memo(OpenRandomChestModal);
