import { MobileGameTheme } from "@app/modules/themes/types";

interface IGetOptionallyDisabledColor {
  color: string;
  disabled: boolean;
  theme: MobileGameTheme;
}

export const getOptionallyDisabledColor = ({ color, disabled, theme }: IGetOptionallyDisabledColor) => {
  if (!disabled) {
    return color;
  }

  const disabledColor = disabledColorHashMap(theme)[color];

  return disabledColor || color;
};

const disabledColorHashMap = (theme: IGetOptionallyDisabledColor["theme"]) => ({
  [theme.colors.primary.p600]: theme.colors.primary.p100,
  [theme.colors.primary.p600Shadow]: theme.colors.primary.p200,
});
