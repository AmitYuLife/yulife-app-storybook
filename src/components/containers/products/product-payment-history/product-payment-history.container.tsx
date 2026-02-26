import React, { memo, useMemo, useState } from "react";
import { TextTemplate } from "@atoms";
import { TEXT_TEMPLATE } from "@ids";
import { Colours } from "@styles";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { PaymentHistoryItem } from "./sub-components/payment-history-item";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { useQuery } from "@apollo/client";
import { useBackHandler } from "@hooks";
import { InfoPanel } from "@components/molecules";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { gql } from "@graphql/__generated";

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
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  const onClose = () => setVisible(false);

  const { data, loading } = useQuery(gql("GetProductPaymentHistoryDocument"), {
    variables: {
      customerProductId,
    },
    fetchPolicy: "cache-and-network",
  });

  const infoPanel = data?.getProductPaymentHistory?.infoPanel;

  const infoPanelContainerOnPress = useMemo(
    () =>
      infoPanel?.containerActions
        ? () => {
            const { containerActions } = infoPanel;
            dispatch({
              type: containerActions.onPress.type,
              payload: {
                serverPayload: containerActions.onPress.payload,
              },
            });
            if (containerActions.event) {
              try {
                const payload = JSON.parse(containerActions.event.payload);

                dispatch(logMixpanelEventActionCreator(payload.name || "button_pressed", payload.props));
              } catch {}
            }
          }
        : null,
    [dispatch, infoPanel]
  );

  const infoPanelButton = useMemo(
    () =>
      infoPanel?.button
        ? {
            label: infoPanel.button.label,
            onPress: () => {
              const { button } = infoPanel;
              dispatch({
                type: button.onPress.type,
                payload: {
                  serverPayload: button.onPress.payload,
                },
              });
              if (button.event) {
                try {
                  const payload = JSON.parse(button.event.payload);

                  dispatch(logMixpanelEventActionCreator(payload.name || "button_pressed", payload.props));
                } catch {}
              }
            },
          }
        : null,
    [dispatch, infoPanel]
  );

  if (!data?.getProductPaymentHistory || loading) {
    return (
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator />
      </View>
    );
  }

  const {
    getProductPaymentHistory: { items },
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
          {visible ? (
            <InfoPanel
              markdown={infoPanel.markdown}
              type={infoPanel.type}
              remoteImage={infoPanel.remoteImage}
              titleMarkdown={infoPanel.titleMarkdown}
              button={infoPanelButton}
              showIcon={!!infoPanel.remoteImage}
              onClose={infoPanel.showCloseIcon ? onClose : null}
              containerOnPress={infoPanelContainerOnPress}
            />
          ) : null}
        </View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={onLeftIconPress} />
    </View>
  );
};

export default memo(ProductPaymentHistoryContainer);
