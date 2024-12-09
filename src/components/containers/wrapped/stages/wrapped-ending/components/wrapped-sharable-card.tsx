import { Box, Logo, TextTemplate } from "@atoms";
import { IWrappedStageProps } from "@components/containers/wrapped/wrapped.types";
import { getDuration } from "@components/games/sudoku/sudoku-utils";
import { Yumoji } from "@components/molecules";
import { t } from "@locale";
import { getUserAvatar, getUserFirstName } from "@redux/user/user.selectors";
import colours from "@styles/colours";
import { addCommasToNumber } from "@utils";
import { RefObject, memo, useMemo } from "react";
import ViewShot from "react-native-view-shot";
import { useSelector } from "react-redux";

interface ISharableCardProps {
  viewShotRef: RefObject<ViewShot>;
  stats: IWrappedStageProps["stats"];
}

const SharableCard = ({ viewShotRef, stats }: ISharableCardProps) => {
  const avatar = useSelector(getUserAvatar);
  const firstName = useSelector(getUserFirstName);
  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;

  const statItems = useMemo(() => {
    return [
      {
        label: t("screens.wrapped.sharable_card.best_yudoku_time"),
        value: getDuration(stats.bestYudokuTime),
      },
      {
        label: t("screens.wrapped.sharable_card.total_steps"),
        value: addCommasToNumber(stats.totalSteps),
      },
      {
        label: t("screens.wrapped.sharable_card.yucoin_earned"),
        value: addCommasToNumber(stats.totalYuCoin),
      },
      {
        label: t("screens.wrapped.sharable_card.challenges_completed"),
        value: addCommasToNumber(stats.totalChallenges),
      },
    ];
  }, [stats.bestYudokuTime, stats.totalChallenges, stats.totalSteps, stats.totalYuCoin]);

  return (
    <ViewShot ref={viewShotRef}>
      <Box pb={5} bg={colours.neutral.n250} br={8} my={20} mb={0}>
        <Box bg="white" w="100%" br={10} p={10} px={30} flexDirection="row" alignItems="center">
          <Box w={30} ml={-30} mr={35}>
            <Yumoji uri={yumojiRemoteUrl} width={90} height={200} />
          </Box>
          <Box p={10} pl={30} pr={30}>
            <Box mb={10} w="100%" flexDirection="row" justifyContent="space-between" alignItems="center">
              <Logo type="full" width={70} height={40} />
              <Box mt={10}>
                <TextTemplate type="b1b" color="#290163">
                  {t("screens.wrapped.sharable_card.year")}
                </TextTemplate>
              </Box>
            </Box>
            <TextTemplate type="b1b" color="#290163">
              {t("screens.wrapped.sharable_card.title", { firstName })}
            </TextTemplate>
            <Box mt={10}>
              {statItems.map((item, index) => (
                <TextTemplate key={index} type="b2" color="#290163">
                  <TextTemplate type="b2b">{item.value}</TextTemplate> {item.label}
                </TextTemplate>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </ViewShot>
  );
};

export default memo(SharableCard);
