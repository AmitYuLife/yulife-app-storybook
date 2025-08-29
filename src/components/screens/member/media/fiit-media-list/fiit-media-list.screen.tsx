import React, { memo, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { GenericHeadingPad, MediaListItems, GenericHeadingAbsolute } from "@organisms";
import { MediaListHeader } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { FIIT_MEDIA_SCROLL_VIEW } from "@ids";
import { Source } from "@atoms";
import { GetQuestMapLevelQuery } from "@graphql/__generated";

type ProviderLogo =
  GetQuestMapLevelQuery["getQuestMapLevel"]["slots"][number]["details"]["internalContent"][number]["providerLogo"];
interface IProps {
  title: string;
  description: string;
  items: IITem[];
  loading: boolean;
  logo: Source;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  onItemPress: (item: IITem) => void;
  providerLogo: ProviderLogo;
}

const FiitMediaListScreen = ({
  title,
  description,
  items,
  onLeftIconPress,
  onRightIconPress,
  onItemPress,
  providerLogo,
  logo,
  loading,
}: IProps) => {
  const providerLogoProps = useMemo(
    () => ({
      uri: providerLogo?.logo,
      width: Style.adjust(providerLogo?.width),
      height: Style.adjust(providerLogo?.height),
      bottom: Style.adjust(2),
    }),
    [providerLogo]
  );

  // TODO: Purge when fiit swapped with workouts
  const logoProps = useMemo(() => ({ uri: logo, width: Style.adjust(39), height: Style.adjust(18), bottom: 3 }), []);

  return (
    <View style={styles.flex}>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false} testID={FIIT_MEDIA_SCROLL_VIEW}>
          <MediaListHeader
            title={title}
            description={description}
            logo={providerLogo ? providerLogoProps : logoProps}
          />
          <MediaListItems isLoading={loading} items={items} type="media" onPress={onItemPress} />
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

export default memo(FiitMediaListScreen);
