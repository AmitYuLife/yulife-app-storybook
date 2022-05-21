import React from "react";
import { Keyboard, Platform } from "react-native";

export function useKeyboardListeners() {
  const [isShowingKeyboard, setKeyboardIsShown] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.select({ ios: "keyboardWillShow", android: "keyboardDidShow" }),
      () => {
        setKeyboardIsShown(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.select({ ios: "keyboardWillHide", android: "keyboardDidHide" }),
      () => {
        setKeyboardIsShown(false);
      }
    );

    return () => {
      keyboardDidShowListener?.remove();
      keyboardDidHideListener?.remove();
    };
  }, []);

  return isShowingKeyboard;
}
