import { Navigation } from "@navigation/main";
import React, { ComponentProps } from "react";
import FloatingModal from "./floating-modal";
import { ViewStyle } from "react-native";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { BlurViewProps } from "@react-native-community/blur";

type BlurTypes = Pick<BlurViewProps, "blurAmount" | "blurType"> & {
  withBlurBackground?: boolean;
  blurBackgroundColor?: string;
};

type Args = {
  modalId?: string;
  closeOnBlur?: boolean;
  onClose?: VoidFunctionOrSduiActionPayload;
  overlayStyle?: ViewStyle;
} & BlurTypes &
  ComponentProps<typeof FloatingModal>;

export function showFloatingModal({
  modalId,
  closeOnBlur,
  onClose,
  withBlurBackground,
  blurType,
  blurAmount,
  blurBackgroundColor,
  ...modalArgs
}: Args) {
  const modal = <FloatingModal {...modalArgs} />;
  return Navigation.showOverlayWithChild(
    modal,
    withBlurBackground,
    { flexDirection: "column-reverse", ...modalArgs.overlayStyle },
    modalId,
    closeOnBlur,
    onClose,
    {
      blurType,
      blurAmount,
      backgroundColor: blurBackgroundColor,
    }
  );
}
