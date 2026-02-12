import { createContext, ReactNode } from "react";

export interface IModalContextValue {
  showModal: (createModal: ({ onClose }: { onClose: () => void }) => ReactNode) => void;
}

export const ModalContext = createContext<IModalContextValue | null>(null);
