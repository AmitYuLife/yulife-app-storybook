import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { t } from "@locale";
import { UserSearchItem } from "@redux/_core/types";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import Logger from "@services/logging/logger";
import { VoidFunction } from "@utils";
import { useCallback } from "react";
import { Alert } from "react-native";
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";

type Props = {
  selectedUsers: UserSearchItem[];
  amount: number;
  messagePresetId: string;
  backgroundId: string;
  onFinish: VoidFunction;
};

export const useGiftingSubmit = ({ selectedUsers, amount, messagePresetId, backgroundId, onFinish }: Props) => {
  const [sendGift, { loading }] = useMutation(gql("SendGiftToRecipientsDocument"));
  const dispatch = useDispatch();

  const handleSubmit = useCallback(async () => {
    try {
      const result = await sendGift({
        variables: {
          yuCoinAmount: amount,
          messagePresetId,
          recipientIds: selectedUsers.map((x) => x.id),
          deduplicationKey: uuid.v4().toString(),
          backgroundId,
        },
      });

      if (result?.data?.sendGiftToRecipients?.success?.length) {
        dispatch(getUserDataStart({ types: [AppDataType.coinLedger] }));
        Alert.alert(
          t("screens.gifting.success_alert.title"),
          t("screens.gifting.success_alert.description", { smart_count: selectedUsers.length }),
          [
            {
              text: t("screens.gifting.success_alert.cta_label"),
              onPress: onFinish,
            },
          ]
        );
      }
    } catch (e) {
      Logger.error(e, { location: "gifting-use-submit" });
    }
  }, [selectedUsers, amount, messagePresetId, backgroundId, sendGift, dispatch]);

  return {
    loading,
    handleSubmit,
  };
};
