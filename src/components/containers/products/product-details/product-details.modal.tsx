import React, { useRef, useEffect, useCallback, ComponentProps } from "react";
import { StyleSheet, View, ViewStyle, Animated, ScrollView, Platform, ImageStyle } from "react-native";
import { Style } from "@styles";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { GroupProductDisclaimer } from "@molecules";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { useBackHandler } from "@hooks";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { CertificateLayout } from "./subcomponents/certificate/certificate-layout";
import { ContentKeyValues } from "./subcomponents/certificate/content-key-values";
import { Image, ProductColorTheme } from "@atoms";
import { ContentBody } from "./subcomponents/certificate/content-body";
import { ContentHead } from "./subcomponents/certificate/content-head";
import media from "@styles/media";

interface Pair {
  label: string;
  value: string;
}

interface ProductDetailsModalProps {
  coverType: CoverType;
  keyValuePairs: Pair[];
  content: ComponentProps<typeof ContentBody>["items"];
  title: string;
  subtitle?: string;
  imageUri?: string;
  disclaimer?: string;
}

const ProductDetailsModal = (props: ProductDetailsModalProps) => {
  const {
    coverType = CoverType.common,
    keyValuePairs = [],
    content = [],
    title = "",
    subtitle,
    imageUri,
    disclaimer = null,
  } = props;

  const translateY = useRef(new Animated.Value(Style.DEVICE_HEIGHT)).current;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
      delay: 100,
    }).start();
  }, [translateY]);

  const backHandler = useCallback(() => {
    dismissOverlay();
    return true;
  }, []);

  useBackHandler(backHandler);

  return (
    <GenericOverlay onClose={dismissOverlay}>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <CertificateLayout coverType={coverType}>
          <ContentHead title={title} subtitle={subtitle} coverType={coverType} />
          <ProductColorTheme.Separator coverType={coverType} />
          <ContentBody items={content} />
          <ProductColorTheme.Separator coverType={coverType} />
          <ContentKeyValues pairs={keyValuePairs} />
          {!imageUri ? null : (
            <Image
              style={styles.image}
              height={Style.adjust(84)}
              width={Style.adjust(132)}
              source={{ uri: imageUri }}
            />
          )}
        </CertificateLayout>
        {!disclaimer ? null : <GroupProductDisclaimer text={disclaimer} containerStyle={styles.disclaimer} />}
        <View style={styles.bottomPad} />
      </ScrollView>
    </GenericOverlay>
  );
};

const BOTTOM_PADDING = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: Style.adjust(140),
    },
  ],
  Style.adjust(100)
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  scroll: {
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  bottomPad: {
    height: BOTTOM_PADDING,
  } as ViewStyle,
  image: {
    width: Style.adjust(132),
    height: Style.adjust(84),
    marginTop: Style.adjust(-40),
    marginBottom: Style.adjust(80),
    marginLeft: Style.adjust(19),
  } as ImageStyle,
  disclaimer: {
    marginTop: Style.adjust(16),
  },
});

export default ProductDetailsModal;

async function dismissOverlay() {
  await Navigation.pop(MODALS.policyCertificate);
}
