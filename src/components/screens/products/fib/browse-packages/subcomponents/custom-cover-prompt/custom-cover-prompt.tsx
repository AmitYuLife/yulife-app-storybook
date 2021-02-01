import React, { memo } from "react";
import { CommonWrapperWithButton } from "../common";
import { customCoverPromptSVG } from "./assets/icon";

interface ICustomCoverPrompt {
  onPressCustomCoverPrompt: () => void;
}

export const CustomCoverPrompt = memo(({ onPressCustomCoverPrompt }: ICustomCoverPrompt) => (
  <CommonWrapperWithButton
    title="Custom cover"
    description="Looking for a different amount of cover? Tap below to set a custom percentage."
    buttonLabel="Create custom cover"
    onPress={onPressCustomCoverPrompt}
    iconSvgXml={customCoverPromptSVG}
  />
));
