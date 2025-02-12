import { ReactNode, useCallback, useState } from "react";
import { Modal } from "react-native";

// This hook can be used as an alternative to Navigation.showOverlayWithChild which does not work with accessibility
// TODO: We could put this in a global context and not return the modal. More work needs to be done to figure out the best solution

export const useModal = () => {
  const [modal, setModal] = useState<ReactNode>();
  const showModal = useCallback((createModal: ({ onClose }: { onClose: () => void }) => ReactNode) => {
    const renderedModal = createModal({ onClose: () => setModal(undefined) });
    setModal(
      <Modal transparent={true} animationType="fade">
        {renderedModal}
      </Modal>
    );
  }, []);

  return { modal, showModal };
};

export type ShowModal = ReturnType<typeof useModal>["showModal"];
