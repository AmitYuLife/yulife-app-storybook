import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";
import { StarRating } from "../../star-rating";

export interface IAvPlayerDescriptionProps {
  title: string;
  subtitle?: string;
  description: string;
  duration?: number;
  stars?: number;
  yuCoin: number;
  logo: string;
  tag?: string;
}

const formatDuration = (seconds?: number): string | null => {
  if (seconds == null) {
    return null;
  }

  if (seconds < 60) {
    return `${Math.floor(seconds)}s`;
  }

  return `${Math.floor(seconds / 60)}min`;
};

export const AvPlayerDescription = ({
  title,
  subtitle,
  description,
  duration,
  stars,
  yuCoin,
  logo,
  tag,
}: IAvPlayerDescriptionProps) => {
  const durationText = formatDuration(duration);
  const subtitleText = [subtitle, durationText].filter(Boolean).join(" • ");

  return (
    <Box flexDirection="column" gap={12} p={16}>
      <Box flexDirection="row" alignItems="flex-start" justifyContent="space-between" gap={12}>
        <Box flexDirection="column" gap={4} style={{ flex: 1 }}>
          {tag ? (
            <Box
              ph={8}
              pv={2}
              br={12}
              bg={Colours.primary.p40}
              style={{ display: "inline-flex", alignSelf: "flex-start" }}
            >
              <Text type="l2b" color={Colours.primary.p600}>
                {tag}
              </Text>
            </Box>
          ) : null}
          <Text type="b1b" color={Colours.neutral.n900}>
            {title}
          </Text>
          {subtitleText ? (
            <Text type="l1" color={Colours.neutral.n700}>
              {subtitleText}
            </Text>
          ) : null}
        </Box>
        {logo ? <Image source={{ uri: logo }} width={40} height={40} borderRadius={8} /> : null}
      </Box>
      <Box flexDirection="row" alignItems="center" gap={12}>
        {typeof stars === "number" ? <StarRating totalStars={5} activeStars={stars} /> : null}
        <Text type="b2b" color={Colours.primary.p600}>
          +{yuCoin} YuCoins
        </Text>
      </Box>
      <Text type="b2" color={Colours.neutral.n700}>
        {description}
      </Text>
    </Box>
  );
};
