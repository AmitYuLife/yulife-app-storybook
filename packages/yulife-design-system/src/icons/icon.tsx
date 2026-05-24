import React from "react";

export type IconSize = 16 | 20 | 24 | 28 | 32;
export type IconColor = string;

export interface IconProps {
  /**
   * The SVG component to render. Pass a SVGR-transformed component.
   */
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  /**
   * Size of the icon in px. Maps to both width and height.
   * @default 24
   */
  size?: IconSize;
  /**
   * Icon color — any valid CSS color string.
   * Falls back to `currentColor` (inherits from parent).
   */
  color?: IconColor;
  /**
   * Accessible label for screen readers.
   * When omitted the icon is treated as decorative (aria-hidden).
   */
  accessibilityLabel?: string;
  /**
   * Additional CSS class names.
   */
  className?: string;
  /**
   * Test ID for automated testing.
   */
  testID?: string;
}

export const Icon: React.FC<IconProps> = ({
  svg: SvgComponent,
  size = 24,
  color = "currentColor",
  accessibilityLabel,
  className,
  testID,
}) => {
  const ariaProps = accessibilityLabel
    ? { role: "img" as const, "aria-label": accessibilityLabel }
    : { "aria-hidden": true as const };

  return (
    <SvgComponent
      width={size}
      height={size}
      style={{ color }}
      className={className}
      data-testid={testID}
      {...ariaProps}
    />
  );
};

export default Icon;
