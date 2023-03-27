import React, { memo, useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Source } from "react-native-fast-image";
import { GenericHeadingPad, MediaListItems, GenericHeadingAbsolute } from "@organisms";
import { MediaListHeader } from "@molecules";
import { Colours, Style } from "@styles";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { FIIT_MEDIA_SCROLL_VIEW } from "@ids";

interface IProps {
  title: string;
  description: string;
  items: IITem[];
  loading: boolean;
  logo: Source;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  onItemPress: (item: IITem) => void;
}

const FiitMediaListScreen = ({
  title,
  description,
  items,
  onLeftIconPress,
  onRightIconPress,
  onItemPress,
  logo,
  loading,
}: IProps) => {
  const logoProps = useMemo(() => ({ uri: logo, width: Style.adjust(39), height: Style.adjust(18), bottom: 3 }), []);
  return (
    <View style={styles.flex}>
      <GenericHeadingPad />
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false} testID={FIIT_MEDIA_SCROLL_VIEW}>
          <MediaListHeader title={title} description={description} logo={logoProps} />
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
