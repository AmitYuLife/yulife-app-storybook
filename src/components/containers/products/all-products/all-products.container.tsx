import React from "react";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_YU_SCREEN_PRODUCT_LIST } from "@graphql/yuscreen/getYuScreenProductList.gql";
import { GetYuScreenProductList, GetYuScreenProductList_getYuScreenProductList_body } from "@graphql/_core/schema";
import { CarouselCard } from "@components/containers/member/yu/subcomponents/carousel/carousel-card";
import { AllProductsLayout } from "./all-products.layout";
import { YuScreenCarouselItemVariant } from "@graphql/_core/schema/globalTypes";
import { useBackHandler } from "@hooks";
import { handleNavigateBack } from "@navigation/utils";

interface Props {
  componentId: string;
}
const AllProductsScreen = ({ componentId }: Props) => {
  const { data, error, loading } = useQuery<GetYuScreenProductList>(GQL_QUERY_GET_YU_SCREEN_PRODUCT_LIST, {
    fetchPolicy: "cache-and-network",
  });

  useBackHandler(() => {
    handleNavigateBack(componentId)();
    return true;
  });

  if (loading) {
    return (
      <AllProductsLayout>
        <ActivityIndicator color={Colours.primary.p600} />
      </AllProductsLayout>
    );
  }

  if (!data?.getYuScreenProductList?.body?.length || error) {
    return (
      <AllProductsLayout>
        <TextTemplate textAlign="center" type="h1">
          Nothing to see here!
        </TextTemplate>
      </AllProductsLayout>
    );
  }

  const {
    body,
    heading,
  }: { body: GetYuScreenProductList_getYuScreenProductList_body[]; heading: string } = data?.getYuScreenProductList;

  return (
    <AllProductsLayout>
      {!heading ? null : (
        <TextTemplate textAlign="center" type="h3">
          {heading}
        </TextTemplate>
      )}
      {body.map((item) => (
        <View key={item.id} style={styles.cardWrapper}>
          <CarouselCard {...item} variant={YuScreenCarouselItemVariant.full} />
        </View>
      ))}
    </AllProductsLayout>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  cardWrapper: {
    width: Style.DEVICE_WIDTH,
    alignItems: "center",
    marginTop: Style.adjust(24),
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AllProductsScreen;
