import React, { memo, useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { t } from "@locale";
import { Image, TextTemplate } from "@atoms";
import { SecondaryButton } from "@molecules";
import { ROUTES } from "@navigation/constants";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import MediaList from "./media-list";
import {
  GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media as Video,
  GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons as IButtons,
} from "@graphql/_core/schema";
import MediaListLoading from "./media-list-loading";
import { Source } from "react-native-fast-image";

export interface IVideo extends Video {
  reward: number;
  stars: number;
  formattedDuration: string;
}

interface IProps {
  videos: IVideo[];
  title: string;
  description: string;
  loading: boolean;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  handleOtherMeditationApp: (appName: string, button?: IButtons) => void;
  otherAppLoading: string;
  levelSlotId: string;
  logo: Source;
  buttons: IButtons[];
}

const MediaListScreen = ({
  videos,
  title,
  description,
  loading,
  onLeftIconPress,
  onRightIconPress,
  handleOtherMeditationApp,
  otherAppLoading,
  levelSlotId,
  logo,
  buttons,
}: IProps) => {
  const handleOnPress = useCallback((video: Video) => {
    Navigation.push(ROUTES.mediaList, {
      component: {
        id: ROUTES.mediaPlayer,
        name: ROUTES.mediaPlayer,
        passProps: {
          video,
          levelSlotId,
        },
      },
    });
  }, []);

  const handleOtherAppPress = useCallback(() => handleOtherMeditationApp("otherApp"), [otherAppLoading]);

  return (
    <View style={styles.flex}>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TextTemplate type="b1b">{title}</TextTemplate>
          </View>
          <View style={styles.description}>
            <TextTemplate type="b2" textAlign="center">
              {description}
            </TextTemplate>
            <View style={styles.appLogo}>
              <Image source={logo} width={98} height={20} />
            </View>
          </View>
          {loading ? (
            <MediaListLoading limit={3} />
          ) : (
            videos?.map((video) => (
              <MediaList
                key={video.id}
                title={video.title}
                duration={video.duration}
                reward={video.reward}
                onPress={() => handleOnPress(video)}
                thumbnail={video.thumbnail.uri}
              />
            ))
          )}
          <View style={styles.additionalInfo}>
            <TextTemplate type="l1b">{t("screens.mediaList.differentAppSectionLabel")}</TextTemplate>
          </View>
          <View>
            {buttons.map((button) => (
              <SecondaryButton
                key={button.title}
                isLoading={otherAppLoading === button.options.appName}
                label={button.title}
                borderColor={button.color}
                textColor={button.color}
                size="Fill"
                onPress={() => handleOtherMeditationApp(button.options.appName, button)}
                wrapperStyle={styles.buttonStyle}
                leftIcon={<Image source={{ uri: button.logo.uri }} width={button.width} height={button.height} />}
              />
            ))}
            <SecondaryButton
              isLoading={otherAppLoading === "otherApp"}
              size="Fill"
              label={t("screens.mediaList.differentAppCtaLabel")}
              onPress={handleOtherAppPress}
            />
          </View>
        </ScrollView>
      </View>
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
  flex: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: Style.adjust(16),
    flex: 1,
  },
  header: {
    alignItems: "center",
    marginTop: Style.adjust(10),
    marginBottom: Style.adjust(10),
    flexDirection: "row",
    justifyContent: "center",
  },
  yuLifeLogo: {
    width: "50%",
    alignItems: "flex-end",
    paddingRight: Style.adjust(16),
  },
  appLogo: {
    paddingLeft: Style.adjust(8),
  },
  description: {
    paddingHorizontal: Style.adjust(70),
    marginBottom: Style.adjust(24),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  additionalInfo: {
    alignItems: "center",
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(32),
  },
  buttonStyle: {
    marginBottom: Style.adjust(12),
  },
  subscriptionWrapper: {
    paddingHorizontal: Style.adjust(50),
    backgroundColor: Colours.metallic.m100,
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingVertical: Style.adjust(25),
    marginBottom: Style.adjust(40),
  },
  subscriptionOffer: {
    backgroundColor: Colours.neutral.white,
    paddingHorizontal: Style.adjust(8),
    paddingVertical: Style.adjust(13),
    borderRadius: 16,
    marginBottom: Style.adjust(8),
  },
  pillWrapper: {
    position: "absolute",
    right: -40,
    top: -10,
  },
  subscriptionDescription: {
    marginTop: Style.adjust(2),
    marginBottom: Style.adjust(16),
  },
});

export default memo(MediaListScreen);
