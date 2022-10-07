import * as React from "react";
import { TouchableOpacityWithDelay } from "@molecules";
import { TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { handleLinkPress } from "@services/app-link";
import { ITextTemplateType } from "@atoms/text/text-template";

interface IHyperLink {
  title: string;
  url?: string;
  type?: ITextTemplateType;
  onPress?: () => void;
  accessible?: boolean;
  accessibilityLabel?: string;
}

const Hyperlink = ({ title, url, onPress, type = "b2", accessible, accessibilityLabel }: IHyperLink) => (
  <TouchableOpacityWithDelay
    onPress={onPress || handleLinkPress(url)}
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
  >
    <TextTemplate type={type} color={Colours.darkHotPink} decoration="underline">
      {title}
    </TextTemplate>
  </TouchableOpacityWithDelay>
);

export default Hyperlink;
