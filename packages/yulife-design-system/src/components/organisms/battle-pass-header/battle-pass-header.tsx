import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";

export interface IBattlePassProgressBarStatus {
  level: number;
  step: number;
  steps: number;
  status?: string;
  backgroundColor?: string;
  fillColor?: string;
  icon?: string;
}

export interface IBattlePassHeaderProps {
  title: string;
  description: string;
  backgroundImage?: string;
  textColor?: string;
  progressStatus: IBattlePassProgressBarStatus;
  onPressWallet?: () => void;
}

export const BattlePassHeader = ({
  title,
  description,
  backgroundImage,
  textColor = Colours.neutral.white,
  progressStatus,
  onPressWallet,
}: IBattlePassHeaderProps) => {
  const { level, step, steps, fillColor = Colours.primary.p600, backgroundColor = "#EFF0FA" } = progressStatus;
  const pct = steps > 0 ? Math.min((step / steps) * 100, 100) : 0;

  return (
    <Box
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: backgroundImage ? undefined : Colours.primary.p600,
        borderRadius: 16,
        overflow: "hidden",
      }}
    >
      <Box
        ph={16}
        pt={20}
        pb={16}
        flexDirection="column"
        gap={8}
        style={{ background: backgroundImage ? "rgba(0,0,0,0.3)" : undefined }}
      >
        <Box flexDirection="row" justifyContent="space-between" alignItems="flex-start">
          <Box flexDirection="column" gap={4} style={{ flex: 1 }}>
            <Text type="b1b" color={textColor}>
              {title}
            </Text>
            <Text type="l1" color={textColor}>
              {description}
            </Text>
          </Box>
          {onPressWallet ? (
            <button
              onClick={onPressWallet}
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: 20,
                padding: "4px 12px",
                color: textColor,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Wallet
            </button>
          ) : null}
        </Box>
        <Box flexDirection="row" alignItems="center" gap={8}>
          {progressStatus.icon ? <Image source={{ uri: progressStatus.icon }} width={20} height={20} /> : null}
          <Box style={{ flex: 1 }}>
            <div
              style={{
                width: "100%",
                height: 8,
                borderRadius: 4,
                backgroundColor,
                overflow: "hidden",
              }}
            >
              <div style={{ width: `${pct}%`, height: "100%", borderRadius: 4, backgroundColor: fillColor }} />
            </div>
          </Box>
          <Text type="l2b" color={textColor}>
            Lv {level}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
