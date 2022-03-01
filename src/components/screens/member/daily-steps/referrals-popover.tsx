import React, { FC, useState, useEffect, memo, useCallback } from "react";
import { View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setOnboardingReferralsBadge } from "@redux/onboarding/onboarding.actions";
import { useMutation } from "@apollo/react-hooks";
import {
  GetReferralOnboardingPopover,
  GetReferralOnboardingPopover_getReferralOnboardingPopover,
} from "@graphql/_core/schema";
import { GQL_QUERY_GET_REFERRAL_ONBOARDING_POPOVER } from "@graphql/referrals";
import { GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP } from "@graphql/onboardingSteps/performMobileOnboardingStep.gql";
import {
  PerformMobileOnboardingStep,
  PerformMobileOnboardingStepVariables,
} from "@graphql/_core/schema/PerformMobileOnboardingStep";
import { useDebouncedQuery } from "@services/hooks/useDebouncedQuery";
import Logger from "@services/logging/logger";
import { Popover } from "@molecules";
import Markdown from "@molecules/markdown/markdown";
import { TOP_BAR, Style } from "@styles";
import styles, { markdownStyles } from "./referrals-popover.styles";
import { getUserSessionCount } from "@redux/user/user.selectors";
import AsyncStorage from "@react-native-community/async-storage";

interface IProps {
  onLeftMenuPress: () => void;
}

const STORAGE_KEY = "@YuStore:referralsPopover";

const ReferralsPopover: FC<IProps> = ({ onLeftMenuPress }) => {
  const [getReferralOnboardingPopover, { data, error }] = useDebouncedQuery<
    GetReferralOnboardingPopover,
    GetReferralOnboardingPopover_getReferralOnboardingPopover
  >(GQL_QUERY_GET_REFERRAL_ONBOARDING_POPOVER, {
    fetchPolicy: "network-only",
  });
  const [performOnboardingStep] = useMutation<PerformMobileOnboardingStep, PerformMobileOnboardingStepVariables>(
    GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP
  );

  const [popoverVisible, setPopoverVisible] = useState(false);
  const dispatch = useDispatch();
  const sessionCount = useSelector(getUserSessionCount);

  const { showPopover, id, onboardingMessage, image } = data?.getReferralOnboardingPopover || {};

  const startOnboarding = useCallback(async () => {
    try {
      setPopoverVisible(true);
      dispatch(setOnboardingReferralsBadge(true));
      await performOnboardingStep({ variables: { step: id } });
      await AsyncStorage.setItem(STORAGE_KEY, "true");
    } catch (error) {
      Logger.error(error, { file: "referrals-popover" });
    }
  }, [id]);

  useEffect(() => {
    (async () => {
      const isOnboard = await AsyncStorage.getItem(STORAGE_KEY);
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
      Logger.error(error, { file: "referrals-popover" });
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
