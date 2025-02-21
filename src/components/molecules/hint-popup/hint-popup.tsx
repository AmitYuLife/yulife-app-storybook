import { Box, CloseSvg, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";
import { SecondaryButton } from "../button";
import Pressable from "../pressable/pressable";
import { memo } from "react";

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
  return (
    <Box px={20} pb={10} pt={20} gap={15}>
      <Box gap={10}>
        <Box flex={1} flexDirection="row" justifyContent="space-between" alignItems="center">
          <TextTemplate type="b1b">{title}</TextTemplate>
          {!hideCloseButton ? (
            <Pressable onPress={onClose} delay={1000}>
              <CloseSvg stroke={Colours.darkestGray} size={Style.adjust(22)} />
            </Pressable>
          ) : null}
        </Box>
        <TextTemplate type="b2">{description}</TextTemplate>
      </Box>
      <SecondaryButton
        wrapperStyle={styles.button}
        onPress={onPress ?? onClose}
        translationKey={buttonTranslationKey}
      />
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
