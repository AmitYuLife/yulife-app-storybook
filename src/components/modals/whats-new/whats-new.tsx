import React, { useMemo } from "react";
import { FullScreenSwiper } from "@organisms/full-screen-swiper/full-screen-swiper";
import { GetMobileWhatsNewModal } from "@graphql/_core/schema";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/react-hooks";
import { GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP } from "@graphql/onboardingSteps/performMobileOnboardingStep.gql";
import { Navigation } from "react-native-navigation";

type ModalProps = GetMobileWhatsNewModal["getMobileWhatsNewModal"] & {
  componentId: string;
};

const WhatsNewModal = (props: ModalProps) => {
  const dispatch = useDispatch();
  const [performMobileOnboardingStep] = useMutation(GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP);

  const performMobileOnboardingStepArgs = useMemo(() => {
    return {
      variables: { step: props.id },
      refetchQueries: props?.refetchQueries || [],
    };
  }, [props.id, props?.refetchQueries]);

  const derivedProps = useMemo(
    () => ({
      ...props,
      button: {
        ...props.button,
        onPress: async () => {
          try {
            await performMobileOnboardingStep(performMobileOnboardingStepArgs);
            if (props.button?.onPress) {
              dispatch({
                type: props.button.onPress.type,
                payload: { serverPayload: props.button.onPress.payload },
              });
            }
          } finally {
            Navigation.dismissModal(props.componentId);
          }
        },
      },
      close: {
        ...props.close,
        onPress: async () => {
          try {
            await performMobileOnboardingStep(performMobileOnboardingStepArgs);
            if (props.close?.onPress) {
              dispatch(props.close.onPress);
            }
          } finally {
            Navigation.dismissModal(props.componentId);
          }
        },
      },
    }),
    [props, dispatch, performMobileOnboardingStep]
  );

  return <FullScreenSwiper {...derivedProps} />;
};

export default WhatsNewModal;
