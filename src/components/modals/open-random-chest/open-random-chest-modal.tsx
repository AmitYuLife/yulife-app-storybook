import React, { memo, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { CloseSvg, Image } from "@atoms";
import { Pressable } from "@molecules";
import { Navigation } from "@navigation/main";
import { useMutation, useQuery } from "@apollo/client";
import { gql, MobileGameChestCollectionType } from "@graphql/__generated";
import { Style } from "@styles";
import ListPickReward from "./subcomponents/stages/pick-stages/list-pick-reward-stage";
import { ChestStage, IPickStageProps } from "./open-random-chest.types";
import GlowPickReward from "./subcomponents/stages/pick-stages/glow-pick-reward-stage";
import ChestRedeemedStage from "./subcomponents/stages/chest-redeemed-stage";
import { ChestStagingStage } from "./subcomponents/stages/chest-staging-stage";
import ChestImagePreloader from "./subcomponents/chest-image-preloader";
import { useInsetStyles } from "../../../hooks/useInsetStyles";
import { t } from "@locale";
import { BUTTON_CLOSE } from "@ids";
import { AppDataType } from "@redux/user/user.types";
import { getUserDataStart } from "@redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { prizesAwarded } from "@redux/prizes/prizes.actions";
import { isEmpty } from "lodash";
import AllPickRewardStage from "./subcomponents/stages/pick-stages/all-pick-reward-stage";
import { getActiveSocialGroupId } from "@redux/leaderboards/leaderboards.selectors";

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
  const { data } = useQuery(gql("GetMobileGameBattlePassChestDetailsDocument"), {
    variables: { participationId, milestoneId },
    fetchPolicy: "network-only",
  });

  const dispatch = useDispatch();
  const socialGroupId = useSelector(getActiveSocialGroupId);

  const [openChest, { loading: openLoading }] = useMutation(gql("OpenMobileGameBattlePassChestDocument"));
  const [claimPrizes, { loading: claimLoading }] = useMutation(gql("ClaimMobileGameBattlePassChestPrizesDocument"), {
    refetchQueries: [{ query: gql("GetMobileGameBattlePassFullDocument"), variables: { socialGroupId } }],
  });

  const [stage, setStage] = useState<ChestStage>(ChestStage.loading);
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);

  const setNewStage = useCallback(() => {
    const { openedRewards, possibleRewards, redeemedRewards } = data?.getMobileGameBattlePassChestDetails || {};

    setStage(ChestStage.staging);
    if (openedRewards?.length) {
      setStage(ChestStage.pick);
      return;
    }

    if (possibleRewards?.length) {
      setStage(ChestStage.staging);
      return;
    }

    if (redeemedRewards?.length) {
      setStage(ChestStage.redeemed);
      return;
    }
  }, [data]);

  useEffect(() => {
    if (!data?.getMobileGameBattlePassChestDetails || stage !== "loading") {
      return;
    }

    setNewStage();
  }, [data?.getMobileGameBattlePassChestDetails, setNewStage, stage]);

  const onOpenPress = useCallback(async () => {
    setIsDetailsLoading(true);
    try {
      await openChest({
        variables: { rewardId: data?.getMobileGameBattlePassChestDetails?.id, participationId },
      });

      setStage(ChestStage.ingest);
    } finally {
      setIsDetailsLoading(false);
    }
  }, [data?.getMobileGameBattlePassChestDetails?.id, openChest, participationId]);

  const onClosePress = useCallback(async () => {
    Navigation.dismissAllModals();
  }, []);

  const onClaimItems = useCallback(
    async (rewardIds: string[]) => {
      const result = await claimPrizes({
        variables: {
          rewardId: data?.getMobileGameBattlePassChestDetails?.id,
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
      Navigation.dismissAllModals();
    },
    [claimPrizes, data?.getMobileGameBattlePassChestDetails?.id, dispatch, participationId]
  );

  const possibleItems = data?.getMobileGameBattlePassChestDetails?.possibleRewards;
  const openedItems = data?.getMobileGameBattlePassChestDetails?.openedRewards;
  const redeemedItems = data?.getMobileGameBattlePassChestDetails?.redeemedRewards;
  const collectionType = data?.getMobileGameBattlePassChestDetails?.collectionType;

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

    if (stage === "redeemed") {
      return (
        <ChestImagePreloader images={redeemedItems.map((item) => item.image.uri)}>
          <ChestRedeemedStage redeemedItems={redeemedItems} onClose={onClosePress} />
        </ChestImagePreloader>
      );
    }

    if (stage === "pick") {
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
  ]);

  const backgroundSource = useMemo(() => ({ uri: backgroundImage }), [backgroundImage]);
  const { scrollStyles, closeStyles } = useInsetStyles();

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
});

export default memo(OpenRandomChestModal);
