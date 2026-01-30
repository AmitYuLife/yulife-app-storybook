import { memo, FC, useCallback } from "react";
import { ImageSourcePropType, ScrollView } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { t } from "@locale";
import { ImageBackground } from "expo-image";
import { BattlePassProgressBar, BattlePassTopBar } from "@organisms";
import { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { IDonationListItem } from "@organisms/donation-list-item/donation-list-item";
import BattlePassListItem from "@organisms/battle-pass-list-item/battle-pass-list-item";
import BattlePassFirstLevelDonationCard from "./battle-pass-first-level-donation-card";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { BATTLE_PASS_FIRST_LEVEL_SCREEN, BATTLE_PASS_FIRST_LEVEL_TITLE } from "@ids";

interface Props {
  backgroundImage: ImageSourcePropType;
  donationTemplates: IDonationListItem[];
  progressStatus: IBattlePassProgressBar;
  reward: IBattlePassListItem;
  showCoinAnimation: boolean;
  onBackPress: () => void;
  showNavigation: boolean;
  componentId: string;
  headingPt: number;
}

const BattlePassFirstLevelVariant: FC<Props> = ({
  backgroundImage,
  donationTemplates,
  progressStatus,
  reward,
  showCoinAnimation,
  onBackPress,
  showNavigation,
  componentId,
  headingPt,
}) => {
  const onHandleInfoPress = useCallback(
    (rewardId: string) => {
      Navigation.push(componentId, {
        component: {
          id: ROUTES.sduiStatic,
          name: ROUTES.sduiStatic,
          passProps: {
            stepId: `reward_info`,
            dynamicId: rewardId,
          },
        },
      });
    },
    [componentId]
  );

  const title = t("screens.battle_pass.ftux.title");

  return (
    <Box flex={1} testID={BATTLE_PASS_FIRST_LEVEL_SCREEN}>
      <ImageBackground source={backgroundImage} contentFit="cover" style={styles.backgroundImage}>
        {showNavigation ? <BattlePassTopBar onBackPress={onBackPress} /> : null}
        <Box alignItems="center" pt={headingPt} pointerEvents="box-none" gap={26}>
          <Box>
            <TextTemplate
              type="b1b"
              color={Colours.neutral.white}
              textAlign="center"
              testID={BATTLE_PASS_FIRST_LEVEL_TITLE(title)}
            >
              {title}
            </TextTemplate>
          </Box>
          <BattlePassListItem {...reward} battlePassType="esg" />
        </Box>

        <Box px={16} mt={24} mb={-50}>
          <BattlePassProgressBar {...progressStatus} />
        </Box>
      </ImageBackground>

      <Box px={16} flex={1} mt={24}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box mt={24} pb={30}>
            <Box flexDirection="row" flexWrap="wrap" gap={24} justifyContent="center">
              {donationTemplates.map((template) => (
                <BattlePassFirstLevelDonationCard
                  key={template.id}
                  id={template.id}
                  title={template.title}
                  image={template.image}
                  rewardId={template.rewardId}
                  yuCoin={template.yuCoin}
                  showAnimation={showCoinAnimation}
                  onSubmit={template.onSubmit}
                  onHandleInfoPress={onHandleInfoPress}
                />
              ))}
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    paddingBottom: Style.adjust(28),
    backgroundColor: Colours.backgrounds.darkPurple,
  },
});

export default memo(BattlePassFirstLevelVariant);
