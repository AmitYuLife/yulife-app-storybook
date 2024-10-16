import { Style } from "@styles";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaViewOffset } from "./useSafeAreaViewOffset";

export const useInsetStyles = () => {
  const insets = useSafeAreaViewOffset();
  const scrollStyles = useMemo(
    () => ({ minHeight: Style.DEVICE_HEIGHT - insets.safeAreaViewOffset.y - Style.adjust(50) }),
    [insets.safeAreaViewOffset.y]
  );
  const closeStyles = useMemo(() => {
    return [styles.closeButton, { top: insets.safeAreaViewOffset.y + Style.adjust(10) }];
  }, [insets?.safeAreaViewOffset?.y]);

  return { scrollStyles, closeStyles };
};

const styles = StyleSheet.create({
  closeButton: { position: "absolute", right: Style.adjust(24), top: Style.adjust(38) },
});
