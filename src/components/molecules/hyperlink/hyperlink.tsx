import * as React from "react";
import { TouchableOpacityWithDelay } from "@molecules";
import { TextTemplate } from "@atoms";
import { TemplateTextType } from "@styles";
import { handleLinkPress } from "@services/app-link";
import { ITextDecorationType } from "@atoms/text/text-template";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

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
}: IHyperLink) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacityWithDelay
      onPress={onPress || handleLinkPress(url)}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
    >
      <TextTemplate type={type} color={theme.colors.primary.p600} decoration={decoration}>
        {title}
      </TextTemplate>
    </TouchableOpacityWithDelay>
  );
};

export default Hyperlink;
