import { ReactNode, useCallback, useMemo, useState, memo } from "react";
import { ModalContext, IModalContextValue } from "./modal.context";
import { BlurTarget } from "@danielsaraldi/react-native-blur-view";
import { StyleSheet } from "@styles";
import { Box } from "@atoms";
import { MODAL_PREFIX } from "@navigation/constants";

interface IModalProviderProps {
  children: ReactNode;
  componentId: string;
}

const ModalProvider = ({ children, componentId }: IModalProviderProps) => {
  const [modal, setModal] = useState<ReactNode>(null);

  const showModal = useCallback((createModal: ({ onClose }: { onClose: () => void }) => ReactNode) => {
    const renderedModal = createModal({ onClose: () => setModal(null) });
    setModal(
      <Box position="absolute" w="100%" h="100%" top={0} left={0}>
        {renderedModal}
      </Box>
    );
  }, []);

  const value = useMemo<IModalContextValue>(() => ({ showModal }), [showModal]);

  // only the main screens should be wrapped in the BlurTarget otherwise it will cause an infinite recursion
  if (componentId.includes(MODAL_PREFIX)) {
    return <>{children}</>;
  }

  return (
    <ModalContext.Provider value={value}>
      <BlurTarget id={componentId} style={styles.children}>
        {children}
      </BlurTarget>
      {modal}
    </ModalContext.Provider>
  );
};

const styles = StyleSheet.create({
  children: {
    flex: 1,
  },
});

export default memo(ModalProvider);
