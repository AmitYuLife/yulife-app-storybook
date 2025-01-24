import { memo } from "react";
import { Box } from "@atoms";
import { Button, IChallengesListProps } from "@molecules";
import { t } from "@locale";

const ChallengesListAccessibility = ({ challenges }: IChallengesListProps) => {
  return (
    <Box>
      {challenges?.map((challenge) => (
        <Button
          key={challenge.heading}
          testID={challenge.heading}
          size="Large"
          translatedLabel={
            challenge.isLocked
              ? t("screens.challenge_list.level_locked")
              : t("screens.challenge_list.accessibility.description", {
                  heading: challenge.heading,
                  reward: challenge.reward,
                  duration: challenge.duration,
                })
          }
          onPress={challenge.onPress}
        />
      ))}
    </Box>
  );
};

export default memo(ChallengesListAccessibility);
