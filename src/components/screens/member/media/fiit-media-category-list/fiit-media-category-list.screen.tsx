import React, { memo, useMemo } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Source } from "react-native-fast-image";
import { GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons as IButtons } from "@graphql/_core/schema";
import { GenericHeadingPad, MediaListItems, MediaListButtons, GenericHeadingAbsolute } from "@organisms";
import { MediaListHeader, SecondaryButton } from "@molecules";
import { Colours, Style } from "@styles";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { t } from "@locale";
import { TextTemplate } from "@atoms";
import { FiitPromotionIcon } from "@atoms/icon/fiit-promotion-icon";

interface IProps {
  title: string;
  description: string;
  items: Partial<IITem[]>;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  handleFiitApp: () => void;
  logo: Source;
  buttons: IButtons[];
  onItemPress: (item: Partial<IITem>) => void;
  handleTutorialLink: () => void;
  otherAppLoading: string;
  moreInformationPress: () => void;
}

const FiitMediaCategoryListScreen = ({
  title,
  description,
  items,
  onLeftIconPress,
  onRightIconPress,
  handleFiitApp,
  logo,
  buttons,
  onItemPress,
  handleTutorialLink,
  otherAppLoading,
  moreInformationPress,
}: IProps) => {
  const logoProps = useMemo(() => ({ uri: logo, width: Style.adjust(39), height: Style.adjust(18), bottom: 3 }), []);
  return (
    <View style={styles.flex}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <MediaListHeader title={title} description={description} logo={logoProps} />
          <MediaListItems items={items} type="category" onPress={onItemPress} />
          <View>
            <MediaListButtons
              title={t("user_other_app")}
              buttons={buttons}
              onPress={handleFiitApp}
              otherAppLoading={otherAppLoading}
            />
            <SecondaryButton size="Fill" label={t("setup_tutorial")} onPress={handleTutorialLink} />
          </View>
        </View>
        {!moreInformationPress ? null : (
          <View style={styles.promotionWrapper}>
            <Image
              source={require("./images/background.jpg")}
              width={Style.DEVICE_WIDTH}
              height={249}
              style={styles.promotionBackgroundImage}
            />
            <View style={styles.promotionLogoWrapper}>
              <View style={styles.promotionLogo}>
                <FiitPromotionIcon />
              </View>
            </View>
            <TextTemplate type="b2b" color={Colours.neutral.white} textAlign="center">
              {t("screens.fiit_media_category_list.promotion.title")}
            </TextTemplate>
            <View style={styles.promotionDescription}>
              <TextTemplate type="b2" color={Colours.neutral.white} textAlign="center">
                {t("screens.fiit_media_category_list.promotion.description")}
              </TextTemplate>
            </View>
            <SecondaryButton
              label={t("screens.fiit_media_category_list.promotion.button_label")}
              onPress={moreInformationPress}
              size="Small"
              textColor={BUTTON_COLOR}
              borderColor={BUTTON_COLOR}
            />
          </View>
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

const BUTTON_COLOR = "#F186BA";
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: Style.adjust(16),
    flex: 1,
  },
  promotionWrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: Style.adjust(30),
    paddingHorizontal: Style.adjust(48),
    height: "100%",
    marginBottom: Style.adjust(80),
  },
  promotionBackgroundImage: {
    width: Style.DEVICE_WIDTH,
    height: "100%",
    position: "absolute",
  },
  promotionLogoWrapper: {
    marginTop: Style.adjust(25),
    alignItems: "center",
  },
  promotionLogo: {
    marginLeft: Style.adjust(30),
    marginBottom: Style.adjust(16),
  },
  promotionDescription: {
    marginTop: 2,
    marginBottom: Style.adjust(15),
  },
});

export default memo(FiitMediaCategoryListScreen);
