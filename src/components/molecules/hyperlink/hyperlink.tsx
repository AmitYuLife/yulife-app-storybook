import * as React from "react";
import { TouchableOpacityWithDelay } from "@molecules";
import { TextTemplate } from "@atoms";
import { Colours, TemplateTextType } from "@styles";
import { handleLinkPress } from "@services/app-link";
import { ITextDecorationType } from "@atoms/text/text-template";

interface IHyperLink {
  title: string;
  url?: string;
  type?: TemplateTextType;
  onPress?: () => void;
  accessible?: boolean;
  accessibilityLabel?: string;
  decoration?: ITextDecorationType;
}

const Hyperlink = ({
  title,
  url,
  onPress,
  type = "b2",
  accessible,
  accessibilityLabel,
  decoration = "underline",
}: IHyperLink) => (
  <TouchableOpacityWithDelay
    onPress={onPress || handleLinkPress(url)}
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
  >
    <TextTemplate type={type} color={Colours.darkHotPink} decoration={decoration}>
      {title}
    </TextTemplate>
  </TouchableOpacityWithDelay>
);

export default Hyperlink;
