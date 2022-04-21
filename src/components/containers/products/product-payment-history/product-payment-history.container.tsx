import React, { memo } from "react";
import { TextTemplate } from "@atoms";
import { TEXT_TEMPLATE } from "@ids";
import { Colours } from "@styles";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { PaymentHistoryItem } from "./sub-components/payment-history-item";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_PRODUCT_PAYMENT_HISTORY } from "@graphql/yuscreen/getPaymentHistory.gql";
import { GetProductPaymentHistory, GetProductPaymentHistoryVariables } from "@graphql/_core/schema";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { InfoPanel } from "@components/molecules";
import { styles } from "./styles";

enum PAYMENT_PLAN_INVOICE_STATUS {
  CHARGED = "charged",
  FAILED = "failed",
}

interface IProps {
  customerProductId: string;
}

const failure = Colours.status.er300;
const success = Colours.status.su400;

const onLeftIconPress = () => {
  Navigation.pop(ROUTES.productPaymentHistory);
  return true;
};

export const ProductPaymentHistoryContainer = ({ customerProductId }: IProps) => {
  useBackHandler(onLeftIconPress);

  const { data, loading } = useQuery<GetProductPaymentHistory, GetProductPaymentHistoryVariables>(
    GQL_QUERY_PRODUCT_PAYMENT_HISTORY,
    {
      variables: {
        customerProductId,
      },
      fetchPolicy: "cache-and-network",
    }
  );

  if (!data?.getProductPaymentHistory || loading) {
    return (
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator />
      </View>
    );
  }

  const {
    getProductPaymentHistory: { items, infoPanel },
  } = data;

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView style={styles.elementWrapper}>
        <View style={styles.headingWrapper}>
          <TextTemplate type={"h2"} testID={TEXT_TEMPLATE("Payment History")}>
            Payment History
          </TextTemplate>
        </View>
        <View>
          {items.map(({ id, date, amount, status }) => {
            const charged = status === PAYMENT_PLAN_INVOICE_STATUS.CHARGED;
            return (
              <PaymentHistoryItem
                key={id}
                amount={amount}
                colour={charged ? success : failure}
                date={date}
                label={charged ? "Paid" : "Failed"}
                invoiceId={id}
                textColour={charged ? undefined : failure}
              />
            );
          })}
        </View>
        <View style={styles.infoPanelWrapper}>
          <InfoPanel markdown={infoPanel.markdown} remoteImage={infoPanel?.remoteImage} type="info" />
        </View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={onLeftIconPress} />
    </View>
  );
};

export default memo(ProductPaymentHistoryContainer);
