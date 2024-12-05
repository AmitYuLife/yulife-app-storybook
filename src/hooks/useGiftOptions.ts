import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { t } from "@locale";
import { useMemo } from "react";

export const useGiftOptions = () => {
  const { data } = useQuery(gql("GetOptionsForGiftDocument"), {
    fetchPolicy: "network-only",
  });

  return useMemo(() => {
    if (!data?.data) {
      return {
        maxRecipientsPerGiftRequest: 0,
        backgrounds: [],
        stickers: [],
        messagePresets: [],
        yuCoinOptions: [],
      };
    }

    const { maxRecipientsPerGiftRequest, backgrounds, stickers, messagePresets, yuCoinDenominations } = data.data;

    const yuCoinOptions = yuCoinDenominations.map((denomination) => ({
      id: denomination,
      label: !denomination ? t("screens.gifting.no_yu_coin") : t("yu_coin.amount", { amount: denomination }),
    }));

    return {
      maxRecipientsPerGiftRequest,
      backgrounds,
      stickers,
      messagePresets,
      yuCoinOptions,
    };
  }, [data]);
};
