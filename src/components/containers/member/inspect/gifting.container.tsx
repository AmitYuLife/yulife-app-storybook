import { useMutation, useQuery } from "@apollo/client";
import React, { memo, useCallback } from "react";
import uuid from "react-native-uuid";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useBackHandler } from "@hooks";
import { gql } from "@graphql/__generated";
import GiftingScreen from "@components/screens/member/gifting/gifting.screen";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { t } from "@locale";
import Logger from "@services/logging/logger";

interface IProps {
  componentId: string;
  recipientId: string;
  yumoji: string;
  name: string;
}

const GiftingContainer = ({ yumoji, recipientId, name }: IProps) => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    Navigation.pop(ROUTES.inspect);
    return true;
  }, []);

  useBackHandler(onClose);

  const { data } = useQuery(gql("GetOptionsForGiftDocument"));
  const [sendGift, { loading }] = useMutation(gql("SendGiftToRecipientsDocument"));

  const handleSubmit = useCallback(
    async (amount: number, messagePresetId: string) => {
      try {
        const result = await sendGift({
          variables: {
            yuCoinAmount: amount,
            messagePresetId,
            recipientIds: [recipientId],
            deduplicationKey: uuid.v4().toString(),
          },
        });

        if (result?.data?.sendGiftToRecipients?.success?.length) {
          dispatch(getUserDataStart({ types: [AppDataType.coinLedger] }));
          Alert.alert(
            t("screens.gifting.success_alert.title"),
            t("screens.gifting.success_alert.description", { name }),
            [{ text: t("screens.gifting.success_alert.cta_label"), onPress: onClose }]
          );
        }
      } catch (e) {
        Logger.error(e, { recipientId });
      }
    },
    [name, recipientId, sendGift, dispatch, onClose]
  );

  if (!data?.data?.maxRecipientsPerGiftRequest) {
    return <LoadingScreen onBack={onClose} />;
  }

  return (
    <GiftingScreen
      isSubmitting={loading}
      description={t("screens.gifting.heading", { name })}
      yuCoinOptions={data.data.yuCoinDenominations}
      onClose={onClose}
      onSubmit={handleSubmit}
      yumoji={yumoji}
      messages={data.data.messagePresets}
      sendsRemainingToday={data.data.sendsRemainingToday}
    />
  );
};

export default memo(GiftingContainer);
