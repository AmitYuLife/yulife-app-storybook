import * as React from "react";
import { TouchableOpacityWithDelay } from "@molecules";
import { TextTemplate } from "@atoms";
import { Colours, TemplateTextType } from "@styles";
import { handleLinkPress } from "@services/app-link";

interface IHyperLink {
  title: string;
  url?: string;
  type?: TemplateTextType;
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
