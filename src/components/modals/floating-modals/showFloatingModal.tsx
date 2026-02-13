import { Navigation } from "@navigation/main";
import React, { ComponentProps } from "react";
import FloatingModal from "./floating-modal";
import { ViewStyle } from "react-native";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { IBlurProps } from "@atoms/blur/blur";

type BlurTypes = Pick<Partial<IBlurProps>, "type"> & {
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
  type,
  blurBackgroundColor,
  ...modalArgs
}: Args) {
  const modal = <FloatingModal {...modalArgs} />;
  return Navigation.showOverlayWithChild({
    children: modal,
    withBlurBackground,
    wrapperStyle: { flexDirection: "column-reverse", ...modalArgs.overlayStyle },
    modalId,
    closeOnBlur,
    onClose,
    passProps: {
      type,
      backgroundColor: blurBackgroundColor,
    },
  });
}
