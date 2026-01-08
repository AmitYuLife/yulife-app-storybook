import React, { memo, useCallback, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { Navigation } from "@navigation/main";
import { t } from "@locale";
import { MediaListHeader, PromotionPanel, SecondaryButton } from "@molecules";
import { ROUTES } from "@navigation/constants";
import { GenericHeadingAbsolute, GenericHeadingPad, MediaListButtons, MediaListItems } from "@organisms";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { Colours, Style, StyleSheet } from "@styles";
import { USE_OTHER_APP_BUTTON, TODAYS_MEDITATION_SCREEN } from "@ids";
import { Source } from "@atoms";
import { GetQuestMapLevelQuery } from "@graphql/__generated";

type IInternalContent = GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][0]["details"]["internalContent"][0];
type IButton = IInternalContent["buttons"][0];
type IPromotionReward = IInternalContent["promotionReward"];

interface IProps {
  videos: IITem[];
  title: string;
  description: string;
  loading: boolean;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  handleOtherMeditationApp: (appName: string, button?: IButton) => void;
  otherAppLoading: string;
  logo: Source;
  buttons: IButton[];
  moreInformationPress: () => void;
  promotionReward: IPromotionReward;
  level: number;
  levelSlotTemplateId: string;
}

const MeditopiaMediaListScreen = ({
  videos,
  title,
  description,
  loading,
  onLeftIconPress,
  onRightIconPress,
  handleOtherMeditationApp,
  otherAppLoading,
  logo,
  buttons,
  promotionReward,
  moreInformationPress,
  level,
  levelSlotTemplateId,
}: IProps) => {
  const handleOnPress = useCallback((video: IITem) => {
    Navigation.push(ROUTES.meditopiaMediaList, {
      component: {
        id: ROUTES.mediaPlayer,
        name: ROUTES.mediaPlayer,
        passProps: {
          video,
          onLeftIconPress: () => Navigation.popTo(ROUTES.meditopiaMediaList),
          eventType: "mindfulness",
          orientation: "portrait",
          startChallengeButtonLabel: t("screens.meditopia_media_list.startChallengeButtonLabel"),
          level,
          levelSlotTemplateId,
        },
        options: {
          popGesture: false,
        },
      },
    });
  }, []);

  const handleOtherAppPress = useCallback(() => handleOtherMeditationApp("otherApp"), [otherAppLoading]);

  const logoProps = useMemo(() => ({ uri: logo, width: 98, height: 20 }), [logo.uri]);
  const flexProp = useMemo(() => (promotionReward ? null : { flex: 1 }), [promotionReward]);
  return (
    <View style={flexProp} testID={TODAYS_MEDITATION_SCREEN}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <MediaListHeader title={title} description={description} logo={logoProps} />
          <MediaListItems items={videos} isLoading={loading} type="media" onPress={handleOnPress} />
          <View>
            <MediaListButtons
              title={t("screens.media_list.different_app_section_label")}
              buttons={buttons}
              onPress={handleOtherMeditationApp}
              otherAppLoading={otherAppLoading}
            />
            <SecondaryButton
              isLoading={otherAppLoading === "otherApp"}
              size="Fill"
              translationKey="screens.media_list.different_app_cta_label"
              onPress={handleOtherAppPress}
              testID={USE_OTHER_APP_BUTTON}
            />
          </View>
        </View>
        {!promotionReward ? null : (
          <PromotionPanel
            {...promotionReward}
            id="meditopia-media-category-list-promotion"
            logo={promotionReward.logo.uri}
            backgroundImage={promotionReward.backgroundImage.uri}
            onPress={moreInformationPress}
          />
        )}
      </ScrollView>
      <GenericHeadingAbsolute
        backgroundColor="transparent"
        onLeftIconPress={onLeftIconPress}
        color={Colours.neutral.n800}
        onRightIconPress={onRightIconPress}
        logo="yulife"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: Style.adjust(16),
    flex: 1,
  },
});

export default memo(MeditopiaMediaListScreen);
