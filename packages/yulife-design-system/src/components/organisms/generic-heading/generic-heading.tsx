import { Box } from "../../box";
import { Text } from "../../text";
import { Colours } from "../../../tokens/colours";

export interface IGenericHeadingProps {
  heading?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  leftIcon?: "back" | "menu" | "close";
  rightIcon?: "close" | "info" | "share";
  color?: string;
}

const BACK_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CLOSE_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MENU_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ICON_MAP: Record<string, JSX.Element> = {
  back: BACK_ICON,
  menu: MENU_ICON,
  close: CLOSE_ICON,
  info: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  share: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const IconButton = ({ icon, onPress, color }: { icon: string; onPress: () => void; color?: string }) => (
  <button
    onClick={onPress}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 8,
      color: color ?? Colours.neutral.n900,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {ICON_MAP[icon] ?? BACK_ICON}
  </button>
);

export const GenericHeading = ({
  heading,
  onLeftIconPress,
  onRightIconPress,
  leftIcon = "back",
  rightIcon = "close",
  color,
}: IGenericHeadingProps) => (
  <Box flexDirection="row" alignItems="center" justifyContent="space-between" ph={8} pv={4} style={{ minHeight: 56 }}>
    <Box w={44} alignItems="flex-start">
      {onLeftIconPress ? (
        <IconButton icon={leftIcon} onPress={onLeftIconPress} color={color} />
      ) : (
        <div style={{ width: 44 }} />
      )}
    </Box>
    <Box style={{ flex: 1 }} alignItems="center" justifyContent="center">
      {heading ? (
        <Text type="b2b" color={color ?? Colours.neutral.n900} align="center" numberOfLines={1}>
          {heading}
        </Text>
      ) : null}
    </Box>
    <Box w={44} alignItems="flex-end">
      {onRightIconPress ? (
        <IconButton icon={rightIcon} onPress={onRightIconPress} color={color} />
      ) : (
        <div style={{ width: 44 }} />
      )}
    </Box>
  </Box>
);
