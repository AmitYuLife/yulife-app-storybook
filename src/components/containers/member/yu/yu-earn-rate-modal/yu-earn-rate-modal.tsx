import React, { useCallback } from "react";
import { StyleSheet, View, ViewStyle, ScrollView, TextStyle, Platform, ActivityIndicator } from "react-native";
import { Style } from "@styles";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { Button, TextTemplate } from "@atoms";
import { Table } from "./table/table";
import { useQuery } from "@apollo/react-hooks";
import media from "@styles/media";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { useBackHandler } from "@services/hooks/useBackHandler";
import Markdown from "@components/molecules/markdown/markdown";
import { GetProductEarnRate, GetProductEarnRateVariables } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { GQL_QUERY_GET_PRODUCT_EARN_RATE } from "@graphql/yuscreen/getProductEarnRate";

interface Props {
  slotIcon: React.ReactElement;
  customerProductId: string;
  coverType: CoverType;
}

const YuEarnRateModal = ({ slotIcon, customerProductId, coverType }: Props) => {
  const { data } = useQuery<GetProductEarnRate, GetProductEarnRateVariables>(GQL_QUERY_GET_PRODUCT_EARN_RATE, {
    variables: {
      customerProductId,
    },
    fetchPolicy: "no-cache",
  });

  const backHandler = useCallback(() => {
    dismissOverlay();
    return true;
  }, []);

  useBackHandler(backHandler);

  if (!data?.getProductEarnRate) {
    return <ActivityIndicator />;
  }

  const { heading, footer, columns } = data.getProductEarnRate;

  return (
    <GenericOverlay onClose={dismissOverlay}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.headingWrapper}>
          {slotIcon}
          <View style={slotIcon ? styles.margin : null}>
            <TextTemplate type="h2">{heading}</TextTemplate>
          </View>
        </View>
        <Table activeCoverType={coverType} columns={columns} loading={false} />
        <View style={styles.footerWrapper}>
          <Markdown text={footer.markdown} markdownStyles={markdownStyles} />
        </View>
        <View style={styles.bottomPad} />
      </ScrollView>
      <View pointerEvents="box-none" style={styles.confirmWrapper}>
        <Button wrapperStyle={styles.confirm} size="Large" onPress={dismissOverlay} label="Got it!" />
      </View>
    </GenericOverlay>
  );
};

const markdownStyles = {
  text: {
    textAlign: "center",
  },
};

const CTA_BOTTOM = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.DEVICE_HEIGHT >= media.DEVICES.iPhone12ProMax.height,
      value: 128,
    },
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: 120,
    },
  ],
  92
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  bottomPad: {
    height: Style.adjust(140),
  } as ViewStyle,
  innerWrapper: {
    height: Style.DEVICE_HEIGHT,
    borderRadius: 16,
    backgroundColor: "white",
    overflow: "hidden",
  } as ViewStyle,
  close: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: Style.adjust(16),
  } as ViewStyle,
  headingWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Style.adjust(20),
    flexDirection: "row",
  } as ViewStyle,
  footerWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(32),
  } as ViewStyle,
  footer: {
    fontSize: Style.adjust(16),
    letterSpacing: 0.8,
    lineHeight: Style.adjust(24),
  } as TextStyle,
  confirm: {
    position: "absolute",
    bottom: CTA_BOTTOM,
  } as ViewStyle,
  confirmWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: Style.DEVICE_HEIGHT,
  } as ViewStyle,
  margin: {
    marginLeft: Style.adjust(8),
  } as ViewStyle,
});

export default YuEarnRateModal;

async function dismissOverlay() {
  await Navigation.dismissModal(MODALS.earnRate);
}
