import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";

export type BattlePassListItemStatus = "completed" | "claimed" | "pending" | null;

export interface IBattlePassListItemProps {
  position: number;
  title?: string;
  icon: { uri?: string; width?: number; height?: number };
  backgroundColour: string;
  titleColour?: string;
  status?: BattlePassListItemStatus;
  onPress?: () => void;
  buttonLabel?: string;
}

const STATUS_BG: Record<string, string> = {
  completed: Colours.primary.p600,
  claimed: Colours.neutral.n200,
  pending: Colours.neutral.n100,
};

export const BattlePassListItem = ({
  position,
  title,
  icon,
  backgroundColour,
  titleColour = Colours.neutral.white,
  status,
  onPress,
  buttonLabel,
}: IBattlePassListItemProps) => {
  const ctaLabel = buttonLabel ?? (status === "completed" ? "Claim" : status === "claimed" ? "Claimed" : "");

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      br={16}
      overflow="hidden"
      style={{
        width: 130,
        backgroundColor: backgroundColour,
        cursor: onPress ? "pointer" : "default",
      }}
      onClick={onPress as any}
    >
      <Box pv={12} ph={8} flexDirection="column" alignItems="center" gap={8} style={{ width: "100%" }}>
        <Text type="l2b" color={titleColour} style={{ opacity: 0.7 }}>
          {position}
        </Text>
        {icon.uri ? (
          <Image
            source={{ uri: icon.uri }}
            width={icon.width ?? 60}
            height={icon.height ?? 50}
            style={{ objectFit: "contain" }}
          />
        ) : null}
        {title ? (
          <Text type="l2b" color={titleColour} align="center" numberOfLines={2}>
            {title}
          </Text>
        ) : null}
      </Box>
      {ctaLabel ? (
        <Box
          style={{ width: "100%", backgroundColor: STATUS_BG[status ?? "pending"] ?? Colours.neutral.n100 }}
          pv={6}
          alignItems="center"
        >
          <Text type="l2b" color={status === "completed" ? Colours.neutral.white : Colours.neutral.n700}>
            {ctaLabel}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
};
