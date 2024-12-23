import { memo, useCallback, useEffect } from "react";
import { Keyboard } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { useBackHandler } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { Colours } from "@styles";
import GiftViewScreen from "./gift-view.screen";

type Props = {
  giftId: string;
};

const GiftViewContainer = ({ giftId }: Props) => {
  const { data, loading: getGiftLoading } = useQuery(gql(`GetGiftDocument`), {
    fetchPolicy: "network-only",
    variables: {
      giftId,
    },
  });

  const [claimGift, claimGiftResponse] = useMutation(gql(`ClaimGiftDocument`));
  const [sendThanks, sendThanksResponse] = useMutation(gql(`SendThanksForGiftDocument`));

  const onClose = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(ROUTES.giftView);

    return true;
  }, []);

  useBackHandler(onClose);

  const { id, background, from, message, sticker, yuCoinAmount, hasBeenClaimed, hasSaidThankYou } = data?.getGift || {};

  useEffect(() => {
    (async () => {
      if (!id || hasBeenClaimed || claimGiftResponse?.loading) {
        return;
      }

      try {
        await claimGift({ variables: { giftId: id } });
      } catch {}
    })();
  }, [id, hasBeenClaimed, claimGiftResponse?.loading]);

  const textColor = background?.textColor || Colours.neutral.n800;

  const handlePressReply = useCallback(() => {
    Navigation.push(ROUTES.giftView, {
      component: {
        id: ROUTES.gifting,
        name: ROUTES.gifting,
        passProps: {
          users: [
            {
              avatar: from.avatar,
              id: from.id,
              name: from.fullName,
              shortName: from.shortName,
            },
          ],
        },
      },
    });
  }, [from]);

  const handleSendThanks = useCallback(async () => {
    if (hasSaidThankYou || sendThanksResponse?.loading) {
      return;
    }

    try {
      await sendThanks({ variables: { giftId } });
    } catch {}
  }, [hasSaidThankYou, sendThanksResponse?.loading, giftId, sendThanks]);

  const loading = getGiftLoading || !data?.getGift;

  return (
    <GiftViewScreen
      loading={loading}
      onSendGift={handlePressReply}
      onThankYouPress={handleSendThanks}
      hasSaidThankYou={hasSaidThankYou}
      onClose={onClose}
      textColor={textColor}
      yuCoinAmount={yuCoinAmount}
      message={message}
      sender={from}
      background={background}
      sticker={sticker}
    />
  );
};

export default memo(GiftViewContainer);
