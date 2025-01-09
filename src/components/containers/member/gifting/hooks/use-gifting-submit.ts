import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { UserSearchItem } from "@redux/_core/types";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import Logger from "@services/logging/logger";
import { VoidFunction } from "@utils";
import { useCallback } from "react";
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";

type Props = {
  selectedUsers: UserSearchItem[];
  amount: number;
  messagePresetId: string;
  onSuccess: VoidFunction;
  backgroundId: string;
  stickerId: string;
};

export const useGiftingSubmit = ({
  selectedUsers,
  amount,
  messagePresetId,
  onSuccess,
  backgroundId,
  stickerId,
}: Props) => {
  const [sendGift, { loading }] = useMutation(gql("SendGiftToRecipientsDocument"));
  const dispatch = useDispatch();

  const handleSubmit = useCallback(async () => {
    try {
      const variables = {
        yuCoinAmount: amount,
        backgroundId,
        stickerId,
        messagePresetId,
        recipientIds: selectedUsers.map((x) => x.id),
        deduplicationKey: uuid.v4().toString(),
      };

      const result = await sendGift({ variables });

      if (result?.data?.sendGiftToRecipients?.success?.length) {
        dispatch(getUserDataStart({ types: [AppDataType.coinLedger] }));
        onSuccess();
      }
    } catch (e) {
      Logger.error(e, { location: "gifting-use-submit" });
    }
  }, [selectedUsers, amount, messagePresetId, sendGift, dispatch, backgroundId, stickerId]);

  return {
    loading,
    handleSubmit,
  };
};
