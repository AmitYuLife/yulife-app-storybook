import React, { memo, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { GenericHeadingPad, MediaListItems, MediaListButtons, GenericHeadingAbsolute } from "@organisms";
import { MediaListHeader, PromotionPanel, SecondaryButton } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { t } from "@locale";
import { FIIT_CATEGORY_LIST_SCREEN } from "@ids";
import { Source } from "@atoms";
import { GetQuestMapLevelQuery } from "@graphql/__generated";

type InternalContent = GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][number]["details"]["internalContent"][number];
type IButtons = InternalContent["buttons"][number];
type IPromotionReward = InternalContent["promotionReward"];

interface IProps {
  title: string;
  description: string;
  items: Partial<IITem[]>;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  handleFiitApp: (appName: string, button?: IButtons) => void;
  logo: Source;
  buttons: IButtons[];
  onItemPress: (item: Partial<IITem>) => void;
  handleTutorialLink: () => void;
  otherAppLoading: string;
  moreInformationPress: () => void;
  promotionReward: IPromotionReward;
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
  promotionReward,
}: IProps) => {
  const logoProps = useMemo(() => ({ uri: logo, width: Style.adjust(39), height: Style.adjust(18), bottom: 3 }), []);
  const flexProp = useMemo(() => (promotionReward ? null : { flex: 1 }), [promotionReward]);
  return (
    <View style={flexProp} testID={FIIT_CATEGORY_LIST_SCREEN}>
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
            <SecondaryButton size="Fill" translationKey="setup_tutorial" onPress={handleTutorialLink} />
          </View>
        </View>
        {!promotionReward ? null : (
          <PromotionPanel
            {...promotionReward}
            id="fiit-media-category-list-promotion"
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

export default memo(FiitMediaCategoryListScreen);
