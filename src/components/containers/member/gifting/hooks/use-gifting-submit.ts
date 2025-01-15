import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { UserSearchItem } from "@redux/_core/types";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import Logger from "@services/logging/logger";
import { useCallback, useState } from "react";
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";
import { GiftSendingStates } from "../context/gifting-manager.types";

type Props = {
  selectedUsers: UserSearchItem[];
  amount: number;
  messagePresetId: string;
  backgroundId: string;
  stickerId: string;
};

export const useGiftingSubmit = ({ selectedUsers, amount, messagePresetId, backgroundId, stickerId }: Props) => {
  const [sendGift] = useMutation(gql("SendGiftToRecipientsDocument"));
  const [sendingState, setSendingState] = useState<GiftSendingStates>(null);
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

      setSendingState(GiftSendingStates.SENDING);
      const result = await sendGift({ variables });

      if (result?.data?.sendGiftToRecipients?.success?.length) {
        dispatch(getUserDataStart({ types: [AppDataType.coinLedger] }));
        setSendingState(GiftSendingStates.SENT);
      }
    } catch (e) {
      setSendingState(GiftSendingStates.ERROR);
      Logger.error(e, { location: "gifting-use-submit" });
    }
  }, [selectedUsers, amount, messagePresetId, sendGift, dispatch, backgroundId, stickerId]);

  return {
    sendingState,
    handleSubmit,
  };
};
