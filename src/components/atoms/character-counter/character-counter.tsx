import { memo, useMemo } from "react";
import { Colours } from "@styles";
import { TextTemplate } from "../text/text-template";

interface CharacterCounterProps {
  currentLength: number;
  maxLength?: number;
  error?: boolean;
}

const CharacterCounter = ({ currentLength, maxLength, error: errorProp }: CharacterCounterProps) => {
  const error = useMemo(
    () => (typeof errorProp === "boolean" ? errorProp : currentLength > (maxLength || 0)),
    [currentLength, maxLength, errorProp]
  );

  return (
    <TextTemplate type="l3" color={error ? Colours.status.er300 : Colours.inkSubtle}>
      {typeof maxLength === "number" ? `[${currentLength}/${maxLength}]` : `[${currentLength}]`}
    </TextTemplate>
  );
};

export default memo(CharacterCounter);
