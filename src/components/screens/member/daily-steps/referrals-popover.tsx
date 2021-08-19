import React, { FC, useState, useEffect, memo, useCallback } from "react";
import { View, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getReferralsOnboarding } from "@redux/onboarding/onboarding.selectors";
import { setReferralsOnboardingPopoverShown } from "@redux/onboarding/onboarding.actions";
import {
  GetReferralOnboardingPopover,
  GetReferralOnboardingPopover_getReferralOnboardingPopover,
} from "@graphql/_core/schema";
import { GQL_QUERY_GET_REFERRAL_ONBOARDING_POPOVER } from "@graphql/referrals";
import { useDebouncedQuery } from "@services/hooks/useDebouncedQuery";
import Logger from "@services/logging/logger";
import { Loading } from "@atoms";
import { Popover } from "@molecules";
import Markdown from "@molecules/markdown/markdown";
import { TOP_BAR, Style } from "@styles";
import styles, { markdownStyles } from "./referrals-popover.styles";

interface IProps {
  onLeftMenuPress: () => void;
}

const ReferralsPopover: FC<IProps> = ({ onLeftMenuPress }) => {
  const [getReferralOnboardingPopover, { data, loading, error }] = useDebouncedQuery<
    GetReferralOnboardingPopover,
    GetReferralOnboardingPopover_getReferralOnboardingPopover
  >(GQL_QUERY_GET_REFERRAL_ONBOARDING_POPOVER, {
    fetchPolicy: "cache-and-network",
  });
  const { showPopover } = useSelector(getReferralsOnboarding);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showPopover) {
      getReferralOnboardingPopover();
      setPopoverVisible(true);
    }
  }, [showPopover]);

  useEffect(() => {
    if (!loading && data?.getReferralOnboardingPopover) {
      dispatch(setReferralsOnboardingPopoverShown());
    }
  }, [loading, data]);

  useEffect(() => {
    if (error) {
      setPopoverVisible(false);
      Logger.error(error, { file: "referrals-popover" });
    }
  }, [error]);

  const onPopoverClose = useCallback(() => {
    setPopoverVisible(false);
  }, []);

  if (!popoverVisible) {
    return null;
  }

  const PopoverContent = () => {
    if (loading || !data?.getReferralOnboardingPopover) {
      return <Loading />;
    }

    const {
      onboardingMessage,
      image: { uri },
    } = data.getReferralOnboardingPopover;

    return (
      <View style={styles.popover}>
        <View style={styles.popoverTextWrapper}>
          <Markdown text={onboardingMessage} markdownStyles={markdownStyles} />
        </View>
        <Image style={styles.popoverImage} resizeMode="contain" source={{ uri }} />
      </View>
    );
  };

  return (
    <Popover {...POPOVER_TARGET} onTouchTarget={onLeftMenuPress} onClose={onPopoverClose}>
      <PopoverContent />
    </Popover>
  );
};

export default memo(ReferralsPopover);

const POPOVER_TARGET = {
  targetX: Style.adjust(26),
  targetY: TOP_BAR.PADDING_TOP + Style.adjust(24),
};
