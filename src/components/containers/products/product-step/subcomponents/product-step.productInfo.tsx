import React, { useCallback, useContext, memo } from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import Markdown from "@molecules/markdown/markdown";
import { YumojiSwipeTryOn } from "@organisms/yumoji/yumoji.swipe-try-on";
import { YumojiSwipePart } from "@organisms/yumoji/yumoji.swipe-part";
import { ContentItemPersonalProductInfoFragment as Props, YuWorld } from "@graphql/__generated";
import { ProductStepContext } from "../product-step.context";
import { mapServerStyles } from "@components/sdui";
import { PACKAGE_INFO, YULIFE_AND_PROVIDER_LOGO } from "@ids";

export const ProductStepProductInfo = memo((props: Props) => {
  const { customerProductId, setDynamicData } = useContext(ProductStepContext);
  const {
    partType,
    coverType,
    selectedYuWorld,
    flatListItemOverlayStyles,
    productTitle,
    productDescription,
    providerImageUrl,
    largeProviderImageUrl,
    swiperTopText,
  } = props;

  const handleYumojiPartChange = useCallback(
    (worldId: YuWorld) => setDynamicData((oldState) => ({ ...oldState, worldId })),
    []
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.info}>
        <View style={styles.titleAndIcon}>
          {!providerImageUrl?.uri ? null : (
            <Image
              source={providerImageUrl}
              width={Style.adjust(16)}
              height={Style.adjust(16)}
              theme="light"
              style={styles.icon}
            />
          )}
          <TextTemplate textAlign={"center"} type="h3">
            {productTitle}
          </TextTemplate>
        </View>

        <View style={styles.providerImageContainer}>
          {!largeProviderImageUrl?.uri ? null : (
            <Image
              source={largeProviderImageUrl}
              width={Style.DEVICE_WIDTH - Style.adjust(200)}
              theme="light"
              style={styles.icon}
              testID={YULIFE_AND_PROVIDER_LOGO}
            />
          )}
        </View>

        <Markdown markdownStyles={markdownStyles} text={productDescription.parsedMarkdown} />
      </View>
      <View testID={PACKAGE_INFO}>
        {partType ? (
          <YumojiSwipePart
            onChange={handleYumojiPartChange}
            selectedYuWorld={selectedYuWorld}
            partType={partType}
            coverType={coverType}
            topText={swiperTopText}
          />
        ) : (
          <YumojiSwipeTryOn
            customerProductId={customerProductId}
            coverType={coverType}
            onChange={handleYumojiPartChange}
            flatListItemOverlayStyles={mapServerStyles(flatListItemOverlayStyles)}
            topText={swiperTopText}
          />
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginRight: Style.adjust(0),
    marginLeft: Style.adjust(0),
    marginBottom: Style.adjust(48),
  },
  info: {
    margin: Style.adjust(16),
    marginRight: Style.adjust(24),
    marginLeft: Style.adjust(24),
    marginBottom: Style.adjust(8),
  },
  titleAndIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: Style.adjust(8),
  },
  providerImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: Style.adjust(8),
  },
});

const markdownStyles = {
  text: {
    textAlign: "center",
  },
};
