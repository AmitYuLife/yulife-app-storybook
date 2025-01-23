import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { t } from "@locale";
import { useMemo } from "react";

export const useGiftOptions = () => {
  const { data, loading } = useQuery(gql("GetOptionsForGiftDocument"), {
    fetchPolicy: "network-only",
  });

  return useMemo(() => {
    if (!data?.data) {
      return {
        maxRecipientsPerGiftRequest: 0,
        maxDailySendsPerUser: 0,
        backgrounds: [],
        stickers: [],
        messagePresets: [],
        yuCoinOptions: [],
        sendsRemainingToday: 0,
        loading,
      };
    }

    const {
      maxRecipientsPerGiftRequest,
      backgrounds,
      stickers,
      messagePresets,
      yuCoinDenominations,
      sendsRemainingToday,
      maxDailySendsPerUser,
    } = data.data;

    const yuCoinOptions = yuCoinDenominations.map((denomination) => ({
      id: denomination,
      label: !denomination ? t("screens.gifting.no_yu_coin") : t("yu_coin.amount", { amount: denomination }),
    }));

    return {
      maxRecipientsPerGiftRequest: Math.min(maxRecipientsPerGiftRequest, sendsRemainingToday),
      sendsRemainingToday,
      maxDailySendsPerUser,
      backgrounds,
      stickers,
      messagePresets,
      yuCoinOptions,
      loading,
    };
  }, [data, loading]);
};
