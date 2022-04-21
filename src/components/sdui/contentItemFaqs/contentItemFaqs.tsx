import React, { memo, useContext, useState } from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { ProductStepMarkdown } from "@components/containers/products/product-step/subcomponents";
import { ArrowRightSvg, Image, TextTemplate } from "@atoms";
import { PressableWithDelay, TertiaryButton, YugiHeader } from "@molecules";
import { Colours, Style } from "@styles";
import {
  GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs as GqlDocuments,
  GetPersonalProductStepDetachedFaqs_getPersonalProductStepDetachedFaqs_body_ContentItemPersonalProductFaqs_faqs as GqlDocument,
} from "@graphql/_core/schema";
import { ProductStepDetachedNavigationContext } from "@components/containers/products/product-step/product-step-detached-navigation.context";

type Props = GqlDocuments;

export const ContentItemFaqs = memo((props: Props) => {
  const { faqs, headingMarkdown, headingImage } = props;

  const [showingContent, setShowingContent] = useState(null as GqlDocument);
  const { pushNestedHistory, nestedHistory } = useContext(ProductStepDetachedNavigationContext);

  const findDocumentById = (id: string) => {
    return faqs.find((doc) => doc.id === id);
  };

  const pushSubDocument = (documentId: string) => {
    pushNestedHistory(documentId);
    setShowingContent(findDocumentById(documentId));
  };

  React.useEffect(() => {
    setShowingContent(findDocumentById(nestedHistory[nestedHistory.length - 1]));
  }, [nestedHistory]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {showingContent ? (
        <View>
          <ProductStepMarkdown
            key={1}
            parsedMarkdown={showingContent.content.parsedMarkdown}
            id="1"
            markdown={null}
            title={showingContent.content.title}
            perkId={null}
            styles={showingContent.content.styles}
            markdownContainerStyle={null}
          />
          {showingContent.links?.map((x: any) => (
            <TertiaryButton
              onPress={() => pushSubDocument(faqs.find((d) => d.id === x.contentItemDocumentId).id)}
              key={x.id}
              label={x.label}
              size="Fill"
              wrapperStyle={styles.nestedButton}
            />
          ))}
        </View>
      ) : (
        <View>
          <View style={styles.yugiHeader}>
            <YugiHeader
              title={headingMarkdown.parsedMarkdown}
              icon={<Image width={Style.adjust(120)} source={headingImage.image} />}
            />
          </View>
          <View style={styles.bodyWrapper}>
            {faqs.map((item) => (
              <PressableWithDelay
                key={item.accessButtonText}
                style={styles.button}
                onPress={() => pushSubDocument(item.id)}
              >
                <View style={styles.left}>
                  <TextTemplate type="b2b">{item.accessButtonText}</TextTemplate>
                </View>
                <View style={styles.right}>
                  <ArrowRightSvg colour={Colours.primary.p600} />
                </View>
              </PressableWithDelay>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  bodyWrapper: {
    backgroundColor: Colours.neutral.white,
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(32),
    borderRadius: 8,
    borderColor: Colours.metallic.m100,
    borderWidth: 1,
    marginBottom: Style.adjust(40),
  } as ViewStyle,
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: Style.adjust(24),
    minHeight: Style.adjust(56),
  } as ViewStyle,
  left: {
    flex: 1,
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
