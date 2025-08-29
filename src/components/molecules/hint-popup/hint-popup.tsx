import { Box, CloseSvg, TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { SecondaryButton } from "../button";
import Pressable from "../pressable/pressable";
import { memo, useCallback, useEffect, useRef } from "react";

interface IHintPopupProps {
  title?: string;
  description?: string;
  buttonTranslationKey?: string;
  hideCloseButton?: boolean;
  onPress?: () => void;
  onClose: () => void;
}

const HintPopup = ({
  title,
  onClose,
  onPress,
  hideCloseButton,
  buttonTranslationKey = "labels.cta.close",
  description,
}: IHintPopupProps) => {
  const hasClosedRef = useRef(false);

  useEffect(() => {
    return () => {
      if (hasClosedRef.current) {
        return;
      }

      hasClosedRef.current = true;
      // If you close by pressing outside of the popup, onClose will not be called
      // So we need to listen for unmount
      onClose();
    };
  }, [onClose]);

  // Avoid dupe between pressing the button and the unmount useEffect
  const onClosePress = useCallback(() => {
    if (hasClosedRef.current) {
      return;
    }

    hasClosedRef.current = true;
    onClose();
  }, [onClose]);

  return (
    <Box px={20} pb={10} pt={20} gap={15}>
      <Box gap={10}>
        <Box flex={1} flexDirection="row" justifyContent="space-between" alignItems="center">
          <TextTemplate type="b1b">{title}</TextTemplate>
          {!hideCloseButton ? (
            <Pressable onPress={onClosePress} delay={1000}>
              <CloseSvg stroke={Colours.darkestGray} size={Style.adjust(22)} />
            </Pressable>
          ) : null}
        </Box>
        <TextTemplate type="b2">{description}</TextTemplate>
      </Box>
      <SecondaryButton wrapperStyle={styles.button} onPress={onPress} translationKey={buttonTranslationKey} />
    </Box>
  );
};

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: "100%",
  },
});

export default memo(HintPopup);
