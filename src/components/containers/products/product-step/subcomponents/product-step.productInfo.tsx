import React, { useCallback, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import Markdown from "@molecules/markdown/markdown";
import { TryOnYumojiPart } from "@organisms/yumoji/yumoji.try-on";
import { GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductInfo as GqlButton } from "@graphql/_core/schema";
import { YuWorld } from "@graphql/_core/schema/globalTypes";
import { ProductStepContext } from "../product-step.context";

type Props = GqlButton;

export const ProductStepProductInfo = (props: Props) => {
  const { customerProductId, setDynamicData } = useContext(ProductStepContext);

  const handleYumojiPartChange = useCallback(
    (worldId: YuWorld) => setDynamicData((oldState) => ({ ...oldState, worldId })),
    []
  );

  return (
    <View style={styles.wrapper}>
      <View>
        <TryOnYumojiPart
          customerProductId={customerProductId}
          coverType={props.coverType}
          onChange={handleYumojiPartChange}
        />
      </View>
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
        <Markdown text={props.productDescription?.parsedMarkdown} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    marginLeft: Style.adjust(24),
    marginBottom: Style.adjust(48),
  },
  info: {
    flex: 1,
    margin: Style.adjust(16),
  },
  titleAndIcon: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    marginRight: Style.adjust(8),
  },
});
