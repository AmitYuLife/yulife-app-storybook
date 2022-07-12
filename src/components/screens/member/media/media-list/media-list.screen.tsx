import { Image, Logo, TextTemplate } from "@atoms";
import { GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media as Video } from "@graphql/_core/schema";
import { t } from "@locale";
import { SecondaryButton } from "@molecules";
import { ROUTES } from "@navigation/constants";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import React, { memo, useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Source } from "react-native-fast-image";
import { Navigation } from "react-native-navigation";
import MediaList from "./media-list";
import MediaListLoading from "./media-list-loading";

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
  handleOpenContentApp: () => void;
  handleOtherApp: () => void;
  levelSlotId: string;
  openContentAppLabel: string;
  contentAppLogo: Source;
  contentAppButtonLogo: Source;
  contentAppButtonColor: string;
}

const MediaListScreen = ({
  videos,
  title,
  description,
  loading,
  onLeftIconPress,
  onRightIconPress,
  handleOpenContentApp,
  handleOtherApp,
  levelSlotId,
  openContentAppLabel,
  contentAppLogo,
  contentAppButtonLogo,
  contentAppButtonColor,
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

  return (
    <View style={styles.flex}>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.yuLifeLogo}>
              <Logo type="full" width={61} height={32} />
            </View>
            <View style={styles.divider} />
            <View style={styles.appLogo}>
              <Image source={contentAppLogo} width={98} height={20} />
            </View>
          </View>
          <View style={styles.description}>
            <TextTemplate type="b2" textAlign="center">
              {description}
            </TextTemplate>
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
            <TextTemplate type="l1">{t("screens.mediaList.differentAppCtaLabel")}</TextTemplate>
          </View>
          <View>
            <SecondaryButton
              borderColor={contentAppButtonColor}
              textColor={contentAppButtonColor}
              size="Fill"
              label={openContentAppLabel}
              onPress={handleOpenContentApp}
              wrapperStyle={styles.buttonStyle}
              leftIcon={<Image source={contentAppButtonLogo} width={31} height={24} />}
            />
            <SecondaryButton size="Fill" label={t("screens.mediaList.differentAppCtaLabel")} onPress={handleOtherApp} />
          </View>
        </ScrollView>
      </View>
      <GenericHeadingAbsolute
        backgroundColor="transparent"
        heading={<TextTemplate type="b1">{title}</TextTemplate>}
        onLeftIconPress={onLeftIconPress}
        color={Colours.neutral.n800}
        onRightIconPress={onRightIconPress}
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
    marginBottom: Style.adjust(32),
    flexDirection: "row",
    justifyContent: "center",
  },
  yuLifeLogo: {
    width: "50%",
    alignItems: "flex-end",
    paddingRight: Style.adjust(16),
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: "#D9D9D7",
  },
  appLogo: {
    width: "50%",
    paddingLeft: Style.adjust(16),
  },
  description: {
    paddingHorizontal: Style.adjust(85),
    marginBottom: Style.adjust(24),
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
