import React, { memo, useMemo } from "react";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { Style } from "@styles";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { Body } from "@components/containers/products/product-step/sections";
import { ContentItemForm } from "@molecules";
import {
  GetPerkSubscriptionInfo_getPerkSubscriptionInfo,
  GetPersonalProductStep_getPersonalProductStep_body as IBody,
} from "@graphql/_core/schema";
import { IElement } from "@components/molecules/content-item-form/content-item-form";

interface IProps {
  handleBack: () => void;
  onSubmit: (formValues: Record<string, string>) => void;
  item: GetPerkSubscriptionInfo_getPerkSubscriptionInfo;
  loading: boolean;
}

const PerkSubscriptionInfoScreen = ({ handleBack, item, onSubmit, loading }: IProps) => {
  const getForm: any = useMemo(() => item?.content?.find((i) => i?.__typename === "ContentItemForm"), [item?.content]);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainerStyle}>
        <View style={styles.block}>
          <Body headerHeight={0} body={item.content as IBody[]} />
          <ContentItemForm elements={getForm.elements as IElement[]} onSubmit={onSubmit} isLoading={loading} />
        </View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  block: {
    paddingHorizontal: Style.adjust(24),
  },
  contentItemButtonWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  scrollContentContainerStyle: {
    paddingBottom: Style.adjust(32),
  },
  contentButtonWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  headerAndCopy: {
    marginTop: Style.adjust(40),
  },
  imageWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  imageStyle: {
    borderRadius: 8,
  },
});

export default memo(PerkSubscriptionInfoScreen);
