import React, { useCallback, useContext, memo } from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import Markdown from "@molecules/markdown/markdown";
import { YumojiSwipeTryOn } from "@organisms/yumoji/yumoji.swipe-try-on";
import { GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductInfo as GqlButton } from "@graphql/_core/schema";
import { YuWorld } from "@graphql/_core/schema/globalTypes";
import { ProductStepContext } from "../product-step.context";

type Props = GqlButton;

export const ProductStepProductInfo = memo((props: Props) => {
  const { customerProductId, setDynamicData } = useContext(ProductStepContext);

  const handleYumojiPartChange = useCallback(
    (worldId: YuWorld) => setDynamicData((oldState) => ({ ...oldState, worldId })),
    []
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.info}>
        <View style={styles.titleAndIcon}>
          {!props?.providerImageUrl?.uri ? null : (
            <Image
              source={{ uri: props?.providerImageUrl.uri }}
              width={Style.adjust(16)}
              height={Style.adjust(16)}
              theme="light"
              style={styles.icon}
            />
          )}
          <TextTemplate type="h3">{props.productTitle}</TextTemplate>
        </View>
        <Markdown markdownStyles={markdownStyles} text={props.productDescription?.parsedMarkdown} />
      </View>
      <View>
        <YumojiSwipeTryOn
          customerProductId={customerProductId}
          coverType={props.coverType}
          onChange={handleYumojiPartChange}
        />
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
});

const markdownStyles = {
  text: {
    textAlign: "center",
  },
};
