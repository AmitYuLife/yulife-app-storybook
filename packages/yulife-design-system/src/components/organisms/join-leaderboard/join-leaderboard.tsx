import { Box } from "../../box";
import { Text } from "../../text";
import { Button } from "../../button";
import { Colours } from "../../../tokens/colours";

export interface IJoinLeaderboardProps {
  onPress: () => void;
  heading?: string;
  description?: string;
  buttonLabel?: string;
}

export const JoinLeaderboard = ({
  onPress,
  heading = "Join the leaderboard",
  description = "Connect with friends and colleagues to see how you compare on the leaderboard.",
  buttonLabel = "Join leaderboard",
}: IJoinLeaderboardProps) => (
  <Box flexDirection="column" alignItems="center" gap={12} ph={30} pt={30} pb={16}>
    <Text type="b2b" color={Colours.neutral.n900} align="center">
      {heading}
    </Text>
    <Text type="b2" color={Colours.neutral.n700} align="center">
      {description}
    </Text>
    <Button label={buttonLabel} onClick={onPress} style={{ width: "100%" }} />
  </Box>
);
