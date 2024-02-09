import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Image } from "@atoms";
import { TertiaryButton, YugiHeader } from "@molecules";
import { Style } from "@styles";
import { ContentItemPersonalProductDocumentsFragment as GqlDocuments } from "@graphql/__generated";
import { Linking, Platform, ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import { sduiEventActionCreator } from "@components/containers/products/product-step/utils/sduiEventActionCreator";

export const ContentItemDocuments = memo((props: GqlDocuments) => {
  const { documents, headingMarkdown, headingImage } = props;

  const dispatch = useDispatch();

  const onPress = async (document: GqlDocuments["documents"][0]) => {
    try {
      Platform.OS === "ios"
        ? handleOpenWebView({ uri: document.url, title: document.linkLabel })
        : await Linking.openURL(document.url);

      dispatch(
        sduiEventActionCreator("document_viewed", {
          document_id: document.id,
          document_name: document.linkLabel,
        })
      );
    } catch (e) {
      Logger.error(e, {
        documentId: document.id,
        file: "documents.screen",
        platform: Platform.select({ ios: "ios", android: "android" }),
      });
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.yugiHeader}>
          <YugiHeader
            title={headingMarkdown.parsedMarkdown}
            icon={<Image width={Style.adjust(120)} source={headingImage.image} />}
          />
        </View>
        <View style={styles.bodyWrapper}>
          {documents.map((item) => (
            <View key={item.id} style={styles.buttonWrapper}>
              <TertiaryButton
                size="Fill"
                onPress={() => onPress(item)}
                label={item.linkLabel}
                iconUri={item.leftIcon.uri}
                rightIconUri={item.rightIcon.uri}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  bodyWrapper: {
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(32),
    marginBottom: Style.adjust(40),
  } as ViewStyle,
  buttonWrapper: {
    marginTop: Style.adjust(12),
  } as ViewStyle,
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: Style.adjust(24),
    minHeight: Style.adjust(56),
  } as ViewStyle,
  right: {
    marginLeft: "auto",
  } as ViewStyle,
  nestedButton: {
    paddingHorizontal: Style.adjust(20),
    marginTop: Style.adjust(20),
  },
  yugiHeader: {
    marginLeft: Style.adjust(24),
  },
});
