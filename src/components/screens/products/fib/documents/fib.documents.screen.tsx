import React, { memo } from "react";
import { Linking, Platform, ScrollView, StyleSheet, View } from "react-native";
import Logger from "@services/logging/logger";
import { handleOpenWebView } from "@navigation/utils";
import fibDocumentsItems from "@components/containers/products/fib/data/documents-data";
import { Documents } from "@components/screens/products/fib/browse-packages/subcomponents/documents/documents";
import { YugiHeader } from "@atoms";
import { YugiDocumentsIcon } from "@atoms/icon/yugi-documents-icon";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { Colours, Style } from "@styles";

const documents = fibDocumentsItems.map((document) => ({
  label: document.question,
  onPress: async () => {
    try {
      Platform.OS === "ios"
        ? handleOpenWebView({ uri: document.url, title: document.question })
        : await Linking.openURL(document.url);
    } catch (e) {
      Logger.error(e, {
        documentId: document.id,
        file: "fib.documents.screen",
        platform: Platform.select({ ios: "ios", android: "android" }),
      });
    }
  },
  icon: document.icon,
}));

interface IProps {
  onNavigateBack: () => void;
}

const FibDocumentsScreen = (props: IProps) => {
  const { onNavigateBack } = props;

  const backHandler = React.useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <YugiHeader title="Your policy docs, in one easy place." icon={<YugiDocumentsIcon />} />
          </View>
          <View style={styles.documents}>
            <Documents title="" items={documents} />
          </View>
        </View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={onNavigateBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  },
  container: {
    marginTop: Style.adjust(24),
  },
  documents: {
    marginTop: Style.adjust(32),
    marginHorizontal: Style.adjust(24),
  },
  header: {
    paddingLeft: Style.adjust(24),
  },
});

export default memo(FibDocumentsScreen);
