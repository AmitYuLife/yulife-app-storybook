import { memo, useCallback, useEffect } from "react";
import { Keyboard } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { useBackHandler } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { Colours } from "@styles";
import GiftViewScreen from "./gift-view.screen";
import { useDispatch } from "react-redux";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";

type Props = {
  giftId: string;
};

const GiftViewContainer = ({ giftId }: Props) => {
  const dispatch = useDispatch();
  const {
    data,
    loading: getGiftLoading,
    error: getGiftError,
  } = useQuery(gql(`GetGiftDocument`), {
    fetchPolicy: "network-only",
    variables: {
      giftId,
    },
  });

  const [claimGift, claimGiftResponse] = useMutation(gql(`ClaimGiftDocument`), {
    onCompleted: () => dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] })),
  });
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
              // The avatar image from the sender is already cropped to show only the face
              // instead of the whole body, so there is no need to zoom in
              avatarHeightScale: 1,
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
  const hasError = (!getGiftLoading && !data?.getGift) || !!getGiftError;

  return (
    <GiftViewScreen
      loading={loading}
      hasError={hasError}
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
