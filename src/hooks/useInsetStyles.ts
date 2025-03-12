import { Style } from "@styles";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaViewOffset } from "./useSafeAreaViewOffset";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useInsetStyles = () => {
  const insets = useSafeAreaViewOffset();
  const safeAreaInsets = useSafeAreaInsets();
  const scrollStyles = useMemo(
    () => ({ minHeight: Style.DEVICE_HEIGHT - insets.safeAreaViewOffset.y - Style.adjust(50) }),
    [insets.safeAreaViewOffset.y]
  );
  const closeStyles = useMemo(() => {
    return [styles.closeButton, { top: safeAreaInsets.top + Style.adjust(10) }];
  }, [safeAreaInsets.top]);

  return { scrollStyles, closeStyles };
};

const styles = StyleSheet.create({
  closeButton: { position: "absolute", right: Style.adjust(24), top: Style.adjust(38) },
});
