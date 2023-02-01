import React, { memo, useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Source } from "react-native-fast-image";
import { GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons as IButtons } from "@graphql/_core/schema";
import { GenericHeadingPad, MediaListItems, MediaListButtons, GenericHeadingAbsolute } from "@organisms";
import { MediaListHeader, SecondaryButton } from "@molecules";
import { Colours, Style } from "@styles";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { t } from "@locale";

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
}: IProps) => {
  const logoProps = useMemo(() => ({ uri: logo, width: Style.adjust(39), height: Style.adjust(18), bottom: 3 }), []);
  return (
    <View style={styles.flex}>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
});

export default memo(FiitMediaCategoryListScreen);
