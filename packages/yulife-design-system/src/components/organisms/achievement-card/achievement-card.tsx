import { CSSProperties } from "react";
import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";

export type AchievementStatus = "locked" | "unlocked" | "equipped";

export interface IAchievementCardProps {
  name: string;
  description: string;
  onPress?: () => void;
  points?: number;
  status?: AchievementStatus;
  icon: { uri?: string; id: string };
}

const statusBadgeStyle: CSSProperties = {
  position: "absolute",
  top: 8,
  right: 8,
  padding: "2px 8px",
  borderRadius: 12,
  fontSize: 11,
  fontWeight: 700,
};

const STATUS_LABEL: Record<AchievementStatus, string> = {
  locked: "🔒",
  unlocked: "✓",
  equipped: "★",
};

const STATUS_BG: Record<AchievementStatus, string> = {
  locked: Colours.neutral.n200,
  unlocked: Colours.status.su100,
  equipped: Colours.primary.p40,
};

const STATUS_COLOR: Record<AchievementStatus, string> = {
  locked: Colours.neutral.n700,
  unlocked: Colours.status.su400,
  equipped: Colours.primary.p600,
};

export const AchievementCard = ({
  name,
  description,
  onPress,
  points,
  status = "unlocked",
  icon,
}: IAchievementCardProps) => (
  <Box
    style={{
      position: "relative",
      cursor: onPress ? "pointer" : "default",
      borderRadius: 16,
      border: `1px solid ${Colours.neutral.n150}`,
      backgroundColor: Colours.neutral.white,
      padding: 12,
      width: 160,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
    }}
    onClick={onPress as any}
  >
    {icon.uri ? <Image source={{ uri: icon.uri }} width={100} height={80} style={{ objectFit: "contain" }} /> : null}
    <div style={{ ...statusBadgeStyle, backgroundColor: STATUS_BG[status], color: STATUS_COLOR[status] }}>
      {STATUS_LABEL[status]}
    </div>
    <Box gap={2} alignItems="center">
      <Text type="b2b" color={Colours.neutral.n900} align="center" numberOfLines={1}>
        {name}
      </Text>
      <Text type="l2" color={Colours.neutral.n700} align="center" numberOfLines={1}>
        {description}
      </Text>
      {typeof points === "number" ? (
        <Text type="l2b" color={Colours.primary.p600}>
          {points.toLocaleString()} pts
        </Text>
      ) : null}
    </Box>
  </Box>
);
