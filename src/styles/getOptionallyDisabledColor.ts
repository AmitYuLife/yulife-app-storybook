import Colours from "./colours";

interface IGetOptionallyDisabledColor {
  color: string;
  disabled: boolean;
}

export const getOptionallyDisabledColor = ({ color, disabled }: IGetOptionallyDisabledColor) => {
  if (!disabled) {
    return color;
  }

  const disabledColor = disabledColorHashMap[color];

  return disabledColor || color;
};

const disabledColorHashMap = {
  [Colours.primary.p600]: Colours.primary.p100,
  [Colours.primary.p600Shadow]: Colours.primary.p200,
};
