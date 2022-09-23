import { MODALS } from "@navigation/constants";
import { getMenuScreenStateActive, getModalState } from "@redux/app/app.selectors";
import { useMemo } from "react";
import { AccessibilityPropsAndroid } from "react-native";
import { useSelector } from "react-redux";

export const useAccessibilityHiddenElements = () => {
  const currentModal = useSelector(getModalState);
  const isMenuOpened = useSelector(getMenuScreenStateActive);

  const { androidImportantForAccessibility, accessibilityElementsHidden } = useMemo(
    () =>
      currentModal === MODALS.blurredOverlay || isMenuOpened
        ? {
            androidImportantForAccessibility: "no-hide-descendants" as AccessibilityPropsAndroid["importantForAccessibility"],
            accessibilityElementsHidden: true,
          }
        : {
            androidImportantForAccessibility: "auto" as AccessibilityPropsAndroid["importantForAccessibility"],
            accessibilityElementsHidden: false,
          },
    [currentModal, isMenuOpened]
  );

  return { androidImportantForAccessibility, accessibilityElementsHidden };
};
