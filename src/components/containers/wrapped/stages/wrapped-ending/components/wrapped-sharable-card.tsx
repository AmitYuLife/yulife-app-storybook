import { Box, Image, TextTemplate } from "@atoms";
import WrappedLogo from "@components/containers/wrapped/components/wrapped-logo";
import { IWrappedStageProps } from "@components/containers/wrapped/wrapped.types";
import { getDuration } from "@components/games/sudoku/sudoku-utils";
import { Yumoji } from "@components/molecules";
import { t } from "@locale";
import { getUserAvatar, getUserFirstName } from "@redux/user/user.selectors";
import { Style } from "@styles";
import { addCommasToNumber } from "@utils";
import { RefObject, memo, useMemo } from "react";
import { StyleSheet } from "react-native";
import ViewShot from "react-native-view-shot";
import { useSelector } from "react-redux";

interface ISharableCardProps {
  viewShotRef: RefObject<ViewShot>;
  stats: IWrappedStageProps["stats"];
}

const STEPS_ICON = require("../../wrapped-stage-2/assets/challenge-icons/steps.png");
const YUCOIN_ICON = require("../assets/stat-yucoin.webp");
const YUDOKU_ICON = require("../../wrapped-stage-2/assets/challenge-icons/yudoku.png");
const CHALLENGES_ICON = require("../assets/challenges.webp");
const SharableCard = ({ viewShotRef, stats }: ISharableCardProps) => {
  const avatar = useSelector(getUserAvatar);
  const firstName = useSelector(getUserFirstName);
  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;

  const statItems = useMemo(() => {
    return [
      {
        icon: YUDOKU_ICON,
        label: t("screens.wrapped.sharable_card.best_yudoku_time"),
        value: getDuration(stats.bestYudokuTime),
      },
      {
        icon: STEPS_ICON,
        label: t("screens.wrapped.sharable_card.total_steps"),
        value: addCommasToNumber(stats.totalSteps),
      },
      {
        icon: YUCOIN_ICON,
        label: t("screens.wrapped.sharable_card.yucoin_earned"),
        value: addCommasToNumber(stats.totalYuCoin),
      },
      {
        icon: CHALLENGES_ICON,
        label: t("screens.wrapped.sharable_card.challenges_completed"),
        value: addCommasToNumber(stats.totalChallenges),
      },
    ];
  }, [stats.bestYudokuTime, stats.totalChallenges, stats.totalSteps, stats.totalYuCoin]);

  return (
    <ViewShot ref={viewShotRef}>
      <Box pb={5} my={20} mb={0} w="100%">
        <Box w="100%" bg="white" borderWidth={1} borderColor={"#e3e3e1"} p={5} br={12}>
          <Box bg="white" w="100%" br={5} alignItems="center">
            <Box
              p={10}
              h={180}
              w="100%"
              bg="#f4f0ff"
              overflow="hidden"
              borderTopLeftRadius={10}
              borderTopRightRadius={10}
            >
              <Image
                suppressLoadingUi={true}
                source={require("../assets/confetti.webp")}
                style={styles.confetti}
                width={Style.DEVICE_WIDTH - 80}
                height={200}
              />
              <Box pl={5} w="100%" pr={5} flexDirection="row" justifyContent="flex-end">
                <WrappedLogo size="small" />
              </Box>
              <Box justifyContent="center" position="absolute" mt={10}>
                <Yumoji uri={yumojiRemoteUrl} width={Style.DEVICE_WIDTH - 80} height={300} />
              </Box>
            </Box>
            <Box p={10} py={10} w="100%" br={10} bg="#fafafe" mt={-20}>
              <Box w="100%" flexDirection="row" justifyContent="center" alignItems="center">
                <Box mt={10} justifyContent="center" alignItems="center" mb={2}>
                  <TextTemplate type="b2b" textAlign="center">
                    {t("screens.wrapped.sharable_card.title", { firstName })}
                  </TextTemplate>
                </Box>
              </Box>
              <Box mt={10} flexDirection="row" flexWrap="wrap" w="100%">
                {statItems.map((item, index) => (
                  <Box width={"50%"} flexDirection="row" key={index}>
                    <Box p={5} w="100%">
                      <Box
                        br={5}
                        py={10}
                        px={15}
                        pl={10}
                        w="100%"
                        bg="white"
                        key={index}
                        borderWidth={1}
                        flexDirection="row"
                        borderColor="#e3e3e1"
                      >
                        <Box pr={10} mt={2}>
                          <Image source={item.icon} width={25} height={25} />
                        </Box>
                        <Box>
                          <TextTemplate type="b2b">{item.value}</TextTemplate>
                          <Box mt={-4}>
                            <TextTemplate key={index} type="l3">
                              {item.label}
                            </TextTemplate>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ViewShot>
  );
};

const styles = StyleSheet.create({
  confetti: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default memo(SharableCard);
