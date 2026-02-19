import { useContext } from "react";
import { ModalContext } from "./modal.context";

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

export type ShowModalProp = ReturnType<typeof useModal>["showModal"];
