import { memo, ReactNode, useCallback, useMemo } from "react";
import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";
import { Box, TextTemplate, Image } from "@atoms";
import { Button } from "@molecules";
import { Colours, StyleSheet, Style } from "@styles";
import { t } from "@locale";
import { getUserAvatar } from "@redux/user/user.selectors";
import { PathwaysHeartIcon } from "./pathways-heart-icon";
import { PathwaysWorkoutIcon } from "./pathways-workout-icon";
import { PathwaysDonateIcon } from "./pathways-donate-icon";
import { PathwaysHeadingBackground } from "./pathways-heading-background";
import { PathwaysMissingAvatar } from "./pathways-missing-avatar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GenericHeadingAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { Navigation } from "@navigation/main";

const GRADIENT_COLORS = ["#FFEE00", "#FFAC00"] as const;
const AVATAR_HEIGHT_RATIO = 1.3;
const MISSING_AVATAR_HEIGHT_RATIO = 0.6;
const MIN_BUTTON_SPACING = Style.adjust(32);
const HEADER_PARTITION = 3;

const AVATAR_TRANSLATE_Y_RATIO = 0.6;
const MISSING_AVATAR_TRANSLATE_Y_RATIO = 0.1;

interface IProps {
  onPressCta: () => void;
  componentId: string;
}

const PathwaysChallengeIntroScreen = ({ onPressCta, componentId }: IProps) => {
  const { bottom } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const userAvatar = useSelector(getUserAvatar);

  const onPressBack = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const headerHeight = height / HEADER_PARTITION;
  const avatarSize = headerHeight * AVATAR_HEIGHT_RATIO;
  const missingAvatarHeight = headerHeight * MISSING_AVATAR_HEIGHT_RATIO;

  const scrollContentStyle = useMemo(() => {
    const availableHeight = height - headerHeight;
    return {
      minHeight: availableHeight,
      flexGrow: 1,
    };
  }, [height, headerHeight]);

  return (
    <Box flex={1} bg={Colours.neutral.white}>
      <Box h={headerHeight} alignItems="center" justifyContent="flex-start" overflow="hidden">
        <LinearGradient colors={[...GRADIENT_COLORS]} style={styles.headerGradient} />
        <Box position="absolute" top={0} left={0} right={0} alignItems="center">
          <PathwaysHeadingBackground width={width} height={headerHeight} />
        </Box>

        <Box flex={1} justifyContent="flex-end" alignItems="center">
          {userAvatar?.avatarRemoteFiles?.svgFull ? (
            <Image
              source={{ uri: userAvatar.avatarRemoteFiles.svgFull }}
              width={avatarSize}
              height={avatarSize}
              theme="light"
              style={[{ transform: [{ translateY: avatarSize * AVATAR_TRANSLATE_Y_RATIO }] }]}
              suppressLoadingUi={true}
              disableAutoAdjust={true}
            />
          ) : (
            <Box style={[{ transform: [{ translateY: missingAvatarHeight * MISSING_AVATAR_TRANSLATE_Y_RATIO }] }]}>
              <PathwaysMissingAvatar width={missingAvatarHeight} height={missingAvatarHeight} />
            </Box>
          )}
        </Box>
      </Box>

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={scrollContentStyle}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <Box flex={1} justifyContent="space-between" gap={MIN_BUTTON_SPACING}>
          <Box px={24} pt={24}>
            <Box gap={8} mb={24}>
              <TextTemplate type="h3" color={Colours.neutral.n800}>
                {t("screens.pathways.challenge_intro.title")}
              </TextTemplate>
              <TextTemplate type="b2" color={Colours.neutral.n800}>
                {t("screens.pathways.challenge_intro.description")}
              </TextTemplate>
            </Box>

            <Box gap={24}>
              <BulletItem icon={<PathwaysHeartIcon />} text={t("screens.pathways.challenge_intro.bullet_point_1")} />
              <BulletItem icon={<PathwaysWorkoutIcon />} text={t("screens.pathways.challenge_intro.bullet_point_2")} />
              <BulletItem icon={<PathwaysDonateIcon />} text={t("screens.pathways.challenge_intro.bullet_point_3")} />
            </Box>
          </Box>
        </Box>
      </Animated.ScrollView>
      <Box px={32} pb={32} style={{ paddingBottom: Math.max(bottom, 32) }}>
        <Button translationKey="labels.cta.continue" onPress={onPressCta} size="Fill" />
      </Box>

      <GenericHeadingAbsolute
        leftIcon={LeftIcon.BACK}
        onLeftIconPress={onPressBack}
        backgroundColor="transparent"
        heading={t("screens.pathways.challenge_intro.heading")}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  headerGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollView: {
    flex: 1,
  },
});

export default memo(PathwaysChallengeIntroScreen);

interface IBulletItemProps {
  icon: ReactNode;
  text: string;
}

const BulletItem = ({ icon, text }: IBulletItemProps) => (
  <Box flexDirection="row" alignItems="center" gap={16}>
    {icon}
    <Box flex={1} flexShrink={1}>
      <TextTemplate type="b2" color={Colours.neutral.n800}>
        {text}
      </TextTemplate>
    </Box>
  </Box>
);
