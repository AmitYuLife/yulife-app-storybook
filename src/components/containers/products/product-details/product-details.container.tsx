import React, { ComponentProps } from "react";
import { View, ActivityIndicator, StyleSheet, ViewStyle } from "react-native";
import { ProductDetailsScreen } from "./product-details.screen";
import { useQuery } from "@apollo/react-hooks";
import {
  GetProductDetails,
  GetProductDetailsVariables,
  GetProductDetails_getProductDetails,
} from "@graphql/_core/schema";
import { GQL_QUERY_GET_PRODUCT_DETAILS } from "@graphql/products/getProductDetails";
import { Colours } from "@styles";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

interface Props {
  productId: string;
}

const ProductDetailsContainer = ({ productId = "" }: Props) => {
  const { data, loading } = useQuery<GetProductDetails, GetProductDetailsVariables>(GQL_QUERY_GET_PRODUCT_DETAILS, {
    variables: {
      id: productId,
    },
    fetchPolicy: "network-only", // TODO: Delete when done TESTing, keep until we use real data
  });

  if (!data || loading) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator color={Colours.primary.p600} />
      </View>
    );
  }

  const productItem = data.getProductDetails;

  if (!productItem) {
    // https://yulife.atlassian.net/browse/TP-765
    // Not expected to happen
    // TODO: Pending DES error page to handle more gracefully
    Navigation.setRoot({
      root: {
        component: {
          id: ROUTES.offline,
          name: ROUTES.offline,
        },
      },
    });
  }

  return (
    <ProductDetailsScreen
      coverType={productItem.coverType}
      productName={productItem.productName}
      productIconUri={productItem.productIconUri}
      benefitDescription={productItem.benefit?.description || ""}
      benefitValue={productItem.benefit?.value || ""}
      benefitDescriptionLong={productItem.productDescription}
      yuCoinDescription="YuCoin Power"
      yuCoinValue={productItem.earnRate.toString()}
      lastUpdated={productItem.policyLastUpdated}
      modalProps={getModalProps(productItem)}
      productId={productItem.productId}
      disclaimer={productItem.disclaimer}
    />
  );
};

export default ProductDetailsContainer;

const getModalProps = (productItem: GetProductDetails_getProductDetails) =>
  !productItem.certificate
    ? null
    : ({
        coverType: productItem.coverType,
        disclaimer: productItem.disclaimer,
        content: [
          {
            type: "pair",
            content: {
              label: productItem.certificate.heading?.description || "",
              value: productItem.certificate.heading?.value || "",
            },
          },
          {
            type: "body",
            content: productItem.certificate.body,
          },
          {
            type: "pairs",
            content: (productItem.certificate.condition || []).map((item) => ({
              label: item.description,
              value: item.value,
            })),
          },
        ],
        keyValuePairs: [
          {
            label: "Client name",
            value: productItem.certificate.customerFullName,
          },
          {
            label: "Company name",
            value: productItem.certificate.companyName,
          },
          {
            label: "Policy number",
            value: productItem.policyNumber,
          },
          {
            label: "Date joined",
            value: productItem.certificate.customerJoinDate,
          },
        ],
        title: productItem.productName,
      } as ComponentProps<typeof ProductDetailsScreen>["modalProps"]);

const styles = StyleSheet.create({
  loadingWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  } as ViewStyle,
});
