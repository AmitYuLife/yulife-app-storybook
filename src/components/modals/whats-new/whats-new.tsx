import React, { useMemo } from "react";
import { FullScreenSwiper } from "@organisms/full-screen-swiper/full-screen-swiper";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { Navigation } from "@navigation/main";
import { filterRefetchQueries } from "@graphql/_core/filterRefetchQueries";
import { GetMobileWhatsNewModalQuery, gql } from "@graphql/__generated";

type ModalProps = GetMobileWhatsNewModalQuery["getMobileWhatsNewModal"] & {
  componentId: string;
};

const WhatsNewModal = (props: ModalProps) => {
  const dispatch = useDispatch();
  const [performMobileOnboardingStep] = useMutation(gql("PerformMobileOnboardingStepDocument"));

  const performMobileOnboardingStepArgs = useMemo(() => {
    return {
      variables: { step: props.id },
      refetchQueries: filterRefetchQueries(props?.refetchQueries || []),
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
