import { Box } from "../../box";
import { Text } from "../../text";
import { Button } from "../../button";
import { Card } from "../../card";
import { Colours } from "../../../tokens/colours";

export interface IGiftSendPromptProps {
  name: string;
  onPress: () => void;
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export const GiftSendPrompt = ({
  name,
  onPress,
  title = "Send a gift",
  description,
  buttonLabel = "Send gift",
}: IGiftSendPromptProps) => (
  <Card padding={16}>
    <Box flexDirection="column" alignItems="center" gap={12} pv={8}>
      <Box w={48} h={48} br={24} bg={Colours.primary.p40} justifyContent="center" alignItems="center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"
            stroke={Colours.primary.p600}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Text type="b2b" color={Colours.neutral.n900} align="center">
        {title}
      </Text>
      <Text type="b2" color={Colours.neutral.n700} align="center">
        {description ?? `Send ${name} a reward from your collection`}
      </Text>
      <Button label={buttonLabel} onClick={onPress} style={{ width: "100%" }} />
    </Box>
  </Card>
);
