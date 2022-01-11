import React, { ComponentProps, useEffect, useMemo } from "react";
import moment from "moment";
import { View, ActivityIndicator, StyleSheet, ViewStyle } from "react-native";
import { ProductDetailsScreen } from "./product-details.screen";
import { useLazyQuery } from "@apollo/react-hooks";
import {
  GetProductDetails,
  GetProductDetailsVariables,
  GetProductDetails_getProductDetails,
} from "@graphql/_core/schema";
import { GQL_QUERY_GET_PRODUCT_DETAILS } from "@graphql/products/getProductDetails";
import { Colours } from "@styles";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { PolicyStatus } from "@graphql/_core/schema/globalTypes";
import { ProductDetailsCountdown } from "./product-details.countdown/product-details.countdown";

interface Props {
  productId: string;
}

const ProductDetailsContainer = ({ productId = "" }: Props) => {
  const [queryGetProductDetails, { data, loading }] = useLazyQuery<GetProductDetails, GetProductDetailsVariables>(
    GQL_QUERY_GET_PRODUCT_DETAILS,
    {
      variables: {
        id: productId,
      },
    }
  );

  const isBeforePolicyStartDate = useMemo(() => {
    if (!data?.getProductDetails) {
      return null;
    }

    const { policyStartDate } = data.getProductDetails;
    moment(policyStartDate).isAfter(moment());
  }, [data?.getProductDetails]);

  useEffect(queryGetProductDetails, []);

  if (!data?.getProductDetails || loading) {
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

  const { policyStatus, policyStartDate, secondsUntilStartDate } = data.getProductDetails;

  if (isBeforePolicyStartDate || policyStatus === PolicyStatus.NOT_LIVE_YET) {
    return (
      <ProductDetailsCountdown
        policyStartDate={policyStartDate}
        secondsUntilStartDate={secondsUntilStartDate}
        refetchQuery={queryGetProductDetails}
      />
    );
  }

  return (
    <ProductDetailsScreen
      productCodeId={productItem.productCodeId}
      isPersonalProduct={productItem.isPersonalProduct}
      hasBeneficiariesEnabled={productItem.hasBeneficiariesEnabled}
      coverType={productItem.coverType}
      productName={productItem.productName}
      policyNumber={productItem.policyNumber || ""}
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
