import { memo, useCallback, useEffect } from "react";
import { Keyboard } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { GiftClaimType, gql } from "@graphql/__generated";
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
  const [sendThanks, sendThanksResponse] = useMutation(gql(`SendThanksForGiftDocument`));

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

  const onClose = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(ROUTES.giftView);

    return true;
  }, []);

  useBackHandler(onClose);

  const { id, background, from, message, sticker, yuCoinAmount, hasBeenClaimed, hasSaidThankYou, claimType } =
    data?.getGift || {};

  useEffect(() => {
    (async () => {
      if (!id || hasBeenClaimed || claimGiftResponse?.loading) {
        return;
      }

      try {
        await claimGift({ variables: { giftId: id } });
      } catch {}
    })();
  }, [id, hasBeenClaimed, claimGiftResponse?.loading, claimGift]);

  const textColor = background?.textColor || Colours.neutral.n800;
  const yuCoinTextColor = background?.yuCoinTextColor || Colours.primary.p600;

  const handlePressReply = useCallback(async () => {
    if (claimType === GiftClaimType.Company) {
      await Navigation.popToRoot(ROUTES.giftView, {
        bottomTabs: {
          currentTabIndex: 4,
        },
      });

      return;
    }

    Navigation.push(ROUTES.giftView, {
      component: {
        id: ROUTES.gifting,
        name: ROUTES.gifting,
      },
    });
  }, [claimType]);

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
      yuCoinTextColor={yuCoinTextColor}
      message={message}
      sender={from}
      background={background}
      sticker={sticker}
      claimType={claimType}
    />
  );
};

export default memo(GiftViewContainer);
