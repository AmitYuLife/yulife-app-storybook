import React, { memo, useMemo } from "react";
import { ImageSource } from "expo-image";
import { useBackHandler } from "@hooks";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import Markdown from "@molecules/markdown/markdown";
import { t } from "@locale";
import StepFeedbackHalfModal from "./half-modal/step-feedback-half-modal.modal";
import { HALF_MODAL_SUBTITLE } from "@ids";

export interface ISduiStepFeedbackHalfModalProps {
  image?: {
    image: ImageSource;
    width: number;
  };
  backgroundColor?: string;
  displayRays?: boolean;
  starMultiplier?: number;
  title?: string;
  descriptionMarkdown?: string;
  ctaLabel?: string;
  onCtaClick: () => void;
  onBackgroundClick?: () => void;

  sduiStateContext: Record<string, never>;
}

const MODAL_DESIRED_HEIGHT = 480;

const SduiStepFeedbackHalfModal = ({
  image,
  backgroundColor,
  displayRays,
  starMultiplier,

  title,
  descriptionMarkdown,
  ctaLabel,

  onCtaClick,
  onBackgroundClick,

  sduiStateContext,
}: ISduiStepFeedbackHalfModalProps) => {
  useBackHandler(() => {
    if (onBackgroundClick) {
      onBackgroundClick();
      return true;
    }

    onCtaClick();
    return true;
  });

  const { handleSduiAction: handleOnCtaClick } = useSduiCallbackFunctionOrReduxAction(
    onCtaClick,
    undefined,
    sduiStateContext
  );
  const { handleSduiAction: handleOnBackgroundClick } = useSduiCallbackFunctionOrReduxAction(
    onBackgroundClick,
    undefined,
    sduiStateContext
  );

  const ctaButtonLabel = useMemo(() => ctaLabel ?? t("modals.step_feedback.next"), [ctaLabel]);

  return (
    <StepFeedbackHalfModal
      levelRewardColor={backgroundColor}
      overlayIcon={image.image}
      title={title}
      rewardSubtitleComponent={
        <Markdown text={descriptionMarkdown} testID={HALF_MODAL_SUBTITLE(descriptionMarkdown)} />
      }
      ctaLabel={ctaButtonLabel}
      onCtaClick={handleOnCtaClick}
      onBackgroundClick={handleOnBackgroundClick}
      showCloseIcon={false}
      desiredHeight={MODAL_DESIRED_HEIGHT}
      imageSize={image?.width}
      starMultiplier={starMultiplier}
      displayRays={displayRays}
    />
  );
};

export default memo(SduiStepFeedbackHalfModal);
