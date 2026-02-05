import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-native";
import { t } from "@locale";
import { GenericModal } from "@components/modals";
import { pathwayChallengeCancel } from "../redux/pathways.actions";

interface UseCancelPathwayChallengeArgs {
  challengeId: string;
  onCancel: () => void;
}

export const useCancelPathwayChallenge = ({ challengeId, onCancel }: UseCancelPathwayChallengeArgs) => {
  const dispatch = useDispatch();
  const isCompletedRef = useRef(false);
  const [isCancelRequested, setIsCancelRequested] = useState(false);

  const markAsCompleted = useCallback(() => {
    isCompletedRef.current = true;
  }, []);

  const showCancelModal = useCallback(() => {
    setIsCancelRequested(true);
  }, []);

  const hideCancelModal = useCallback(() => {
    setIsCancelRequested(false);
  }, []);

  const handleConfirmCancel = useCallback(() => {
    setIsCancelRequested(false);
    onCancel();
  }, [onCancel]);

  const cancelChallengeModal = useMemo(() => {
    if (!isCancelRequested) {
      return null;
    }

    return (
      <Modal
        statusBarTranslucent={true}
        animationType="slide"
        visible={isCancelRequested}
        onRequestClose={hideCancelModal}
      >
        <GenericModal
          onPress={handleConfirmCancel}
          onPressSecondary={hideCancelModal}
          heading={t("modals.generic_modal.cancel_challenge.heading")}
          subheading={t("modals.generic_modal.cancel_challenge.subheading")}
          ctaLabel={t("modals.generic_modal.on_pathways_challenge_cancel.cta_label")}
          ctaLabelSecondary={t("labels.cta.cancel")}
        />
      </Modal>
    );
  }, [isCancelRequested, hideCancelModal, handleConfirmCancel]);

  useEffect(() => {
    return () => {
      if (challengeId && !isCompletedRef.current) {
        dispatch(pathwayChallengeCancel());
      }
    };
  }, [challengeId, dispatch]);

  return { markAsCompleted, showCancelModal, hideCancelModal, cancelChallengeModal };
};
