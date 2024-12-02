import { TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import { TemplateTextType } from "@styles";
import { memo } from "react";

type Props = {
  template?: {
    color: string;
    type: TemplateTextType;
    label: string;
  };
};

export const ListItemRightIcon = memo(({ template }: Props) => {
  if (template) {
    return (
      <TextTemplate color={template.color} type={template.type}>
        {template.label}
      </TextTemplate>
    );
  }

  return <ArrowIcon />;
});
