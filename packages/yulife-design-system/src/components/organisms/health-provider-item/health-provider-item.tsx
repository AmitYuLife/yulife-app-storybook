import { Box } from "../../box";
import { Text } from "../../text";
import { Colours } from "../../../tokens/colours";

export type HealthProvider = "apple_health" | "google_fit" | "fitbit" | "garmin" | "samsung_health" | string;

export interface IHealthProviderItemProps {
  provider: HealthProvider;
  label: string;
  isRecommended?: boolean;
  onPress?: () => void;
  logoSrc?: string;
  "data-state"?: string;
}

export const HealthProviderItem = ({
  label,
  isRecommended,
  onPress,
  logoSrc,
  "data-state": dataState,
}: IHealthProviderItemProps) => (
  <Box
    className="yu-pressable-row"
    data-state={dataState}
    flexDirection="row"
    alignItems="center"
    gap={16}
    p={16}
    br={12}
    borderWidth={1}
    borderColor={Colours.neutral.n150}
    bg={Colours.neutral.white}
    style={{ cursor: onPress ? "pointer" : "default" }}
    onClick={onPress as any}
  >
    <Box w={58} h={58} br={12} bg={Colours.neutral.n20} justifyContent="center" alignItems="center" overflow="hidden">
      {logoSrc ? (
        <img src={logoSrc} alt={label} style={{ width: 40, height: 40, objectFit: "contain" }} />
      ) : (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="8" fill={Colours.neutral.n100} />
          <path d="M14 8v12M8 14h12" stroke={Colours.neutral.n500} strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </Box>
    <Box flexDirection="column" gap={2} style={{ flex: 1 }}>
      <Text type="b2b" color={Colours.neutral.n900}>
        {label}
      </Text>
      <Text type="l1" color={isRecommended ? Colours.primary.p300 : Colours.neutral.n600}>
        {isRecommended ? "Recommended" : "Optional"}
      </Text>
    </Box>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M7 14l4-4-4-4"
        stroke={Colours.primary.p600}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Box>
);
