import { useEffect, useState } from "react";
import { AccessibilityInfo } from "react-native";

export function useScreenReaderChange() {
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);

  useEffect(() => {
    const screenReaderEnabledListener = AccessibilityInfo.addEventListener("screenReaderChanged", (isEnabled) => {
      setIsScreenReaderEnabled(isEnabled);
    });

    return () => {
      screenReaderEnabledListener?.remove();
    };
  }, []);

  return isScreenReaderEnabled;
}
