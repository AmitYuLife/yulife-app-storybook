import React, { FC, useState, useEffect, memo, useCallback } from "react";
import { View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setOnboardingReferralsBadge } from "@redux/onboarding/onboarding.actions";
import { useMutation } from "@apollo/client";
import { MobileOnboardingStepPerformed, gql } from "@graphql/__generated";
import { useDebouncedQuery } from "@hooks";
import Logger from "@services/logger/logger";
import { Popover } from "@molecules";
import Markdown from "@molecules/markdown/markdown";
import { TOP_BAR, Style } from "@styles";
import styles, { markdownStyles } from "./referrals-popover.styles";
import { getUserSessionCount } from "@redux/user/user.selectors";
import { Storage, StorageKey } from "@utils/storage";

interface IProps {
  onLeftMenuPress: () => void;
}

const ReferralsPopover: FC<IProps> = ({ onLeftMenuPress }) => {
  const [getReferralOnboardingPopover, { data, error }] = useDebouncedQuery(
    gql("GetReferralOnboardingPopoverDocument"),
    {
      fetchPolicy: "network-only",
    }
  );
  const [performOnboardingStep] = useMutation(gql("PerformMobileOnboardingStepDocument"));

  const [popoverVisible, setPopoverVisible] = useState(false);
  const dispatch = useDispatch();
  const sessionCount = useSelector(getUserSessionCount);

  const { showPopover, id, onboardingMessage, image } = data?.getReferralOnboardingPopover || {};

  const startOnboarding = useCallback(async () => {
    try {
      setPopoverVisible(true);
      dispatch(setOnboardingReferralsBadge({ showReferralsBadge: true }));
      await performOnboardingStep({ variables: { step: id as unknown as MobileOnboardingStepPerformed } }); //remove unknown when we finish to refactor getYuScreen.gql
      await Storage.setItem(StorageKey.referralsPopover, "true");
    } catch (e) {
      Logger.notify(e, { file: "referrals-popover" });
    }
  }, [id]);

  useEffect(() => {
    (async () => {
      const isOnboard = await Storage.getItem(StorageKey.referralsPopover);
      if (sessionCount > 1 && !isOnboard) {
        getReferralOnboardingPopover();
      }
    })();
  }, []);

  useEffect(() => {
    if (showPopover) {
      startOnboarding();
    }
  }, [showPopover]);

  useEffect(() => {
    if (error) {
      setPopoverVisible(false);
      Logger.notify(error, { file: "referrals-popover" });
    }
  }, [error]);

  const onPopoverClose = useCallback(() => {
    setPopoverVisible(false);
  }, []);

  if (!popoverVisible || !onboardingMessage || !image) {
    return null;
  }

  return (
    <Popover {...POPOVER_TARGET} onTouchTarget={onLeftMenuPress} onClose={onPopoverClose}>
      <View style={styles.popover}>
        <View style={styles.popoverTextWrapper}>
          <Markdown text={onboardingMessage} markdownStyles={markdownStyles} />
        </View>
        <Image style={styles.popoverImage} resizeMode="contain" source={image} />
      </View>
    </Popover>
  );
};

export default memo(ReferralsPopover);

const POPOVER_TARGET = {
  targetX: Style.adjust(26),
  targetY: TOP_BAR.PADDING_TOP + Style.adjust(24),
};
