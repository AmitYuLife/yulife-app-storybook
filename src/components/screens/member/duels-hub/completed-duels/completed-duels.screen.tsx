import { useCallback, useMemo, memo } from "react";
import { View } from "react-native";
import styles from "./completed-duels.styles";
import { useQuery } from "@apollo/client";
import { DuelEntry } from "../subcomponents";
import { useSelector } from "react-redux";
import { getCurrentUserId, getUserFeatures } from "@redux/user/user.selectors";
import { Box, Pad, TextTemplate } from "@atoms";
import { DuelSkeleton } from "../subcomponents/duel-skeleton/duel-skeleton";
import { GetDuelsCompletedQuery, gql } from "@graphql/__generated";
import { Pressable } from "@components/molecules";
import { Colours, Style } from "@styles";
import { RefreshIcon } from "@atoms/icon/refresh-icon";
import { FlashList } from "@shopify/flash-list";
import { t } from "@locale";

type IGetDuelsCompleted = GetDuelsCompletedQuery["getDuelsCompleted"][0];

const CompletedDuelsScreen = () => {
  const { data, loading: getDuelsCompletedLoading } = useQuery(gql("GetDuelsCompletedDocument"), {
    fetchPolicy: "no-cache",
  });

  const features = useSelector(getUserFeatures);
  const userId = useSelector(getCurrentUserId);
  const duels = useMemo(
    () =>
      (data?.getDuelsCompleted || []).map((item) => {
        // TODO: we'll need this one when sync and confirm will be added
        // const isSyncing = duelsSyncInProgressDate.includes(item.date);
        // const stepsSynced = stepsSyncedDate.has(item.date);
        // const isConfirming = duelsConfirmDate.includes(item.date);
        return {
          ...item,
          isSyncing: false,
          isConfirming: false,
          stepsSynced: false,
        };
      }),
    [data?.getDuelsCompleted]
  );

  const onSyncPress = useCallback(async (_date: string, _maxUserScore: number) => {
    // TODO: implement sync duel
  }, []);

  const onConfirmPress = useCallback(async (_date: string) => {
    // TODO: implement confirm duel
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: IGetDuelsCompleted & { isSyncing: boolean; stepsSynced: boolean; isConfirming: boolean } }) => {
      const hideConfirmSection =
        !features.tempGameConfirmDuelScore ||
        item.duels.every(
          ({ opponents, status }) =>
            opponents.find(({ userId: id }) => userId === id)?.status === "confirmed_by_user" || status === "finished"
        );

      const maxUserScore = Math.max(
        ...item.duels.map(({ opponents }) => {
          const user = opponents.find(({ userId: id }) => userId === id);
          return user?.score;
        })
      );

      const headerDescription = item.isSyncing
        ? t("modals.duels.hub.duel_syncing")
        : item.isConfirming
        ? t("modals.duels.hub.duel_confirming")
        : t("modals.duels.hub.all_day_steps", { userScore: maxUserScore });

      return (
        <Box
          w={Style.DEVICE_WIDTH - 48}
          ml={24}
          alignItems="stretch"
          borderWidth={1}
          borderColor={"#E3E3E1"}
          br={8}
          mv={12}
        >
          <Box
            pv={11}
            pl={16}
            pr={8}
            borderBottomWidth={1}
            borderColor={"#E3E3E1"}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <TextTemplate type="b1b">{item.id}</TextTemplate>
              <TextTemplate type="l1">{headerDescription}</TextTemplate>
            </Box>
            {hideConfirmSection ? null : (
              <ConfirmDuel
                isSyncing={item.isSyncing}
                isConfirming={item.isConfirming}
                onSyncPress={() => onSyncPress("item.date", maxUserScore)}
                onConfirmPress={() => onConfirmPress("item.date")}
              />
            )}
          </Box>
          <Box pv={16} gap={16}>
            {item.duels.map(({ id, opponents, duration, type, yucoin, status }) => (
              <Box key={id} ph={16}>
                <DuelEntry
                  duel={{
                    id,
                    opponents,
                    duration,
                    type,
                    yucoin,
                    status,
                  }}
                  type="completed"
                  userId={userId}
                  confirmDuelEnabled={features.tempGameConfirmDuelScore}
                  stepsSynced={item.stepsSynced}
                />
              </Box>
            ))}
          </Box>
        </Box>
      );
    },
    [userId, onConfirmPress, onSyncPress, features.tempGameConfirmDuelScore]
  );

  if (getDuelsCompletedLoading) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.skeletonWrapper}>
          <DuelSkeleton />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlashList
        renderItem={renderItem}
        data={duels}
        estimatedItemSize={100} // Calculate average height
      />
    </View>
  );
};

const ConfirmDuel = ({
  isSyncing,
  isConfirming,
  onSyncPress,
  onConfirmPress,
}: {
  isSyncing: boolean;
  isConfirming: boolean;
  onSyncPress: () => void;
  onConfirmPress: () => void;
}) => {
  return (
    <Box flexDirection="row">
      <Pressable onPress={onSyncPress} delay={1000}>
        <Box
          h={40}
          w={40}
          borderWidth={1}
          borderColor={Colours.neutral.n250}
          br={24}
          justifyContent="center"
          alignItems="center"
        >
          <RefreshIcon width={24} height={24} colour={isSyncing || isConfirming ? "#A0A09B" : "#5C5757"} />
        </Box>
      </Pressable>
      <Pad width={8} />

      <Pressable onPress={onConfirmPress} delay={1000}>
        <Box
          h={40}
          w={90}
          bg={isSyncing || isConfirming ? Colours.primary.p100 : Colours.primary.p600}
          br={48}
          justifyContent="center"
          alignItems="center"
        >
          <TextTemplate type="b2b" color={"white"}>
            {t("labels.cta.confirm")}
          </TextTemplate>
        </Box>
      </Pressable>
    </Box>
  );
};

export default memo(CompletedDuelsScreen);
