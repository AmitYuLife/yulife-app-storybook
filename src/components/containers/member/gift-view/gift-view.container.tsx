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

  const [claimGift] = useMutation(gql(`ClaimGiftDocument`));

  const onClose = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(ROUTES.giftView);

    return true;
  }, []);

  useBackHandler(onClose);

  useEffect(() => {
    (async () => {
      if (!data?.getGift?.id || data?.getGift?.hasBeenClaimed) {
        return;
      }

      try {
        await claimGift({ variables: { giftId } });
      } catch {}
    })();
  }, [data?.getGift?.id, data?.getGift?.hasBeenClaimed]);

  const { background, from, message, sticker, yuCoinAmount } = data?.getGift || {};

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

  const loading = getGiftLoading || !data?.getGift;

  return (
    <GiftViewScreen
      loading={loading}
      onPressReply={handlePressReply}
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
