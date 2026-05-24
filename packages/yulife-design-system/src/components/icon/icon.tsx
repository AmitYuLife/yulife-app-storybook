import { memo, SVGProps } from "react";

export interface IIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const HeartIcon = memo(({ size = 24, color = "currentColor", ...props }: IIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
HeartIcon.displayName = "HeartIcon";

export const SearchIcon = memo(({ size = 24, color = "currentColor", ...props }: IIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2" />
    <path d="m21 21-4.35-4.35" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
));
SearchIcon.displayName = "SearchIcon";

export const ChevronRightIcon = memo(({ size = 24, color = "currentColor", ...props }: IIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="m9 18 6-6-6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));
ChevronRightIcon.displayName = "ChevronRightIcon";

export const ChevronLeftIcon = memo(({ size = 24, color = "currentColor", ...props }: IIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="m15 18-6-6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));
ChevronLeftIcon.displayName = "ChevronLeftIcon";

export const CloseIcon = memo(({ size = 24, color = "currentColor", ...props }: IIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M18 6 6 18M6 6l12 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));
CloseIcon.displayName = "CloseIcon";

export const CheckIcon = memo(({ size = 24, color = "currentColor", ...props }: IIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M20 6 9 17l-5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
));
CheckIcon.displayName = "CheckIcon";

export const StarIcon = memo(
  ({ size = 24, color = "currentColor", fill = "none", ...props }: IIconProps & { fill?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} {...props}>
      <path
        d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
StarIcon.displayName = "StarIcon";

export const InfoIcon = memo(({ size = 24, color = "currentColor", ...props }: IIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <path d="M12 16v-4M12 8h.01" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
));
InfoIcon.displayName = "InfoIcon";

export const Icon = {
  Heart: HeartIcon,
  Search: SearchIcon,
  ChevronRight: ChevronRightIcon,
  ChevronLeft: ChevronLeftIcon,
  Close: CloseIcon,
  Check: CheckIcon,
  Star: StarIcon,
  Info: InfoIcon,
};
