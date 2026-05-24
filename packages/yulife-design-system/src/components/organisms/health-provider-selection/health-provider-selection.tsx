import { Box } from "../../box";
import { Text } from "../../text";
import { Radio } from "../../radio";
import { Colours } from "../../../tokens/colours";

export interface IHealthProviderSelectionProps {
  provider: string;
  label: string;
  isRecommended?: boolean;
  isSelected: boolean;
  onPress?: () => void;
  logoSrc?: string;
  supportedTypes?: string[];
  "data-state"?: string;
}

export const HealthProviderSelection = ({
  label,
  isRecommended,
  isSelected,
  onPress,
  logoSrc,
  supportedTypes,
  "data-state": dataState,
}: IHealthProviderSelectionProps) => (
  <Box flexDirection="column">
    <Box
      className="yu-pressable-row"
      data-state={dataState}
      flexDirection="row"
      alignItems="center"
      gap={16}
      p={16}
      bg={Colours.neutral.white}
      borderWidth={1}
      borderColor={Colours.neutral.n150}
      style={{
        borderRadius: isSelected && supportedTypes?.length ? "8px 8px 0 0" : 8,
        cursor: onPress ? "pointer" : "default",
      }}
      onClick={onPress as any}
    >
      <Box w={48} h={48} br={8} bg={Colours.neutral.n20} justifyContent="center" alignItems="center" overflow="hidden">
        {logoSrc ? (
          <img src={logoSrc} alt={label} style={{ width: 36, height: 36, objectFit: "contain" }} />
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill={Colours.neutral.n100} />
          </svg>
        )}
      </Box>
      <Box flexDirection="column" gap={2} style={{ flex: 1 }}>
        <Text type="b2b" color={Colours.neutral.n900}>
          {label}
        </Text>
        <Text type="l1" color={isRecommended ? Colours.primary.p300 : Colours.neutral.n700}>
          {isRecommended ? "Recommended" : "Optional"}
        </Text>
      </Box>
      <Radio name={label} value={label} checked={isSelected} onChange={onPress ? () => onPress() : undefined} />
    </Box>
    {isSelected && supportedTypes && supportedTypes.length > 0 ? (
      <Box
        p={12}
        bg={Colours.neutral.n50}
        borderWidth={1}
        borderColor={Colours.neutral.n150}
        style={{ borderTop: "none", borderRadius: "0 0 8px 8px" }}
        flexDirection="row"
        flexWrap="wrap"
        gap={6}
      >
        {supportedTypes.map((type) => (
          <Box key={type} ph={8} pv={4} br={12} bg={Colours.neutral.n100}>
            <Text type="l2" color={Colours.neutral.n700}>
              {type}
            </Text>
          </Box>
        ))}
      </Box>
    ) : null}
  </Box>
);
