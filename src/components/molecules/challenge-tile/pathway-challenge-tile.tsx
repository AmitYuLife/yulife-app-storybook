import { memo, useMemo } from "react";
import { Platform, Image as RNImage } from "react-native";
import styles, { IMAGE_SIZE, TOP_HEIGHT, BOTTOM_HEIGHT, SHADOW_WIDTH, BORDER_RADIUS } from "./challenge-tile.styles";
import { Colours, Style, StyleSheet } from "@styles";
import { Image, Box, TextTemplate, TimeCounter } from "@atoms";
import { t } from "@locale";
import colours from "@styles/colours";
import { ArrowIcon } from "@atoms/icon/arrow";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";
import { getUserAvatar } from "@redux/user/user.selectors";
import PathwayNoAvatar from "./pathway-no-avatar";
import LottieView from "lottie-react-native";
import shineAnimation from "./pathway-challenge-shine.json";
import moment from "moment";
import Pressable from "../pressable/pressable";

export interface IPathwayChallengeTileProps {
  heading?: string;
  onPress?: () => void;
  reward?: string;
  isCompleted?: boolean;
  isLocked?: boolean;
  expiresAt?: string;
}

const DEFAULT_IMAGE_SCALE = 1.75;
const DEFAULT_IMAGE_OFFSET_Y = 185;

const PathwayChallengeTile: React.FC<IPathwayChallengeTileProps> = ({
  isLocked,
  onPress,
  reward,
  isCompleted,
  expiresAt,
  heading,
}) => {
  const userAvatar = useSelector(getUserAvatar);

  const shouldShowTimeRemaining = useMemo(
    () => !isCompleted && moment(expiresAt).diff(moment(), "hours") <= 24,
    [expiresAt, isCompleted]
  );

  return (
    <Pressable
      onPress={onPress}
      enableAnimation={true}
      disabled={isLocked || isCompleted}
      mt={Style.adjust(13)}
      width={IMAGE_SIZE}
      disableAutoAdjust={true}
    >
      <Box bg={colours.neutral.n250} br={BORDER_RADIUS} pb={SHADOW_WIDTH} disableAutoAdjust={true}>
        <LinearGradient
          colors={["#FF7B26", Colours.neutral.white, Colours.yellow.y50]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={pathwayStyles.gradientBorder}
        >
          <Box
            h={TOP_HEIGHT - Style.adjust(2)}
            disableAutoAdjust={true}
            borderTopRadius={BORDER_RADIUS - Style.adjust(2)}
            overflow="hidden"
          >
            <LinearGradient
              colors={[Colours.yellow.y100, Colours.yellow.y50]}
              style={pathwayStyles.innerImageBackground}
            />
            {userAvatar?.avatarRemoteFiles?.svgFull ? (
              <Image
                source={{ uri: userAvatar.avatarRemoteFiles.svgFull }}
                width={IMAGE_SIZE * DEFAULT_IMAGE_SCALE}
                height={IMAGE_SIZE * DEFAULT_IMAGE_SCALE}
                theme="light"
                style={[
                  styles.remoteImage,
                  {
                    transform: [{ translateY: DEFAULT_IMAGE_OFFSET_Y }],
                    left: -(IMAGE_SIZE * (DEFAULT_IMAGE_SCALE - 1)) / 2,
                  },
                ]}
                suppressLoadingUi={true}
              />
            ) : (
              <Box alignItems="center" pt={25}>
                <PathwayNoAvatar />
              </Box>
            )}
            <Box
              position="absolute"
              top={0}
              left={0}
              borderTopRadius={BORDER_RADIUS - Style.adjust(2)}
              overflow="hidden"
            >
              <LottieView
                source={shineAnimation}
                autoPlay={true}
                loop={true}
                style={{ width: IMAGE_SIZE, height: TOP_HEIGHT }}
              />
            </Box>
          </Box>
          <Box
            position="absolute"
            top={10}
            left={10}
            flexDirection="row"
            gap={4}
            bg={Colours.neutral.white}
            br={20}
            px={2}
            py={2}
          >
            {shouldShowTimeRemaining ? (
              <>
                <Box bg={Colours.primary.p600} br={20} px={4} py={2} justifyContent="center" alignItems="center">
                  <TextTemplate type="l2b" color={Colours.neutral.white}>
                    {t("screens.challenge_list.time_remaining")}
                  </TextTemplate>
                </Box>
                <Box justifyContent="center" alignItems="center" pr={4} py={2}>
                  <TextTemplate type="l2b" color={Colours.primary.p600} fontVariant={["tabular-nums"]}>
                    <TimeCounter time={expiresAt} />
                  </TextTemplate>
                </Box>
              </>
            ) : null}
          </Box>
          <Box
            bg={Colours.neutral.white}
            flexDirection="row"
            h={BOTTOM_HEIGHT}
            borderBottomRadius={BORDER_RADIUS - Style.adjust(2)}
            overflow="hidden"
            disableAutoAdjust={true}
          >
            <Box flex={1} px={15} pt={Platform.select({ ios: 16, android: 13 })}>
              <Box>
                <TextTemplate type="b2b">{heading}</TextTemplate>
              </Box>
              <Box flexDirection="row" justifyContent="space-between" alignItems="center" mt={8}>
                <Box flexDirection="row" alignItems="center" h={26}>
                  <TextTemplate type="b2b" color={Colours.neutral.n850}>
                    {reward}
                  </TextTemplate>
                  <Image
                    width={Style.adjust(16)}
                    height={Style.adjust(16)}
                    suppressLoadingUi={true}
                    source={require("@assets/icons/yucoin.png")}
                    style={styles.yucoin}
                  />
                </Box>
                {isCompleted ? (
                  <Box flexDirection="row" alignItems="center" bg={colours.status.su100} br={48} px={8} h={26}>
                    <TextTemplate type="l2b" color={colours.secondary.s200S1}>
                      {t("screens.challenge_list.level_completed")}
                    </TextTemplate>
                  </Box>
                ) : null}
                {!isCompleted && !isLocked ? (
                  <Box bg={Colours.yellow.y100} br={99} size={24} justifyContent="center" alignItems="center">
                    <ArrowIcon intent="primary" color={Colours.darkPink} />
                  </Box>
                ) : null}
                {!isCompleted && isLocked ? (
                  <Box>
                    <Box
                      br={6}
                      p={8}
                      py={2}
                      pr={28}
                      bg={Colours.neutral.n150}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <TextTemplate type="l3b" color={colours.inkSubtle}>
                        {t("screens.challenge_list.level_locked")}
                      </TextTemplate>
                    </Box>
                    <Box
                      borderWidth={2}
                      rounded={true}
                      alignItems="center"
                      position="absolute"
                      top={-4}
                      borderColor={Colours.neutral.white}
                      w={28}
                      right={-5}
                      h={28}
                      justifyContent="center"
                      bg={Colours.neutral.n150}
                    >
                      <RNImage
                        resizeMode="contain"
                        tintColor={colours.inkSubtle}
                        style={styles.lockedImage}
                        source={require("@assets/icons/lock-light.webp")}
                      />
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </Box>
          </Box>
        </LinearGradient>
      </Box>
    </Pressable>
  );
};

export default memo(PathwayChallengeTile);

const BORDER_WIDTH = Style.adjust(2);

const pathwayStyles = StyleSheet.create({
  gradientBorder: {
    borderRadius: BORDER_RADIUS,
    padding: BORDER_WIDTH,
  },
  innerImageBackground: {
    bottom: 0,
    height: TOP_HEIGHT - BORDER_WIDTH,
    start: 0,
    position: "absolute",
    end: 0,
    borderTopLeftRadius: BORDER_RADIUS - BORDER_WIDTH,
    borderTopRightRadius: BORDER_RADIUS - BORDER_WIDTH,
  },
});
