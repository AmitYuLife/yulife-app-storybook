import React from "react";
import { View, StyleSheet, ActivityIndicator, ViewStyle } from "react-native";
import { Text } from "@atoms/index";
import { EarnRateDetails_getEarnRateDetails } from "@graphql/_core/schema";
import { Colours, Style } from "@styles";
import { TableHeader, TableBackground } from "./layout-components";
import { TableRow } from "./data-components";
import { EARN_RATE_COLUMN_WIDTH, MARGIN_EDGE_RIGHT } from "./table.styles";
import { EARN_RATE_TABLE } from "@ids";

interface IProps {
  earnRate: number;
  explainData: EarnRateDetails_getEarnRateDetails[];
  loading: boolean;
}

export interface IColumnSize {
  height: number;
}

function EarnRateTable(props: IProps) {
  const { earnRate, explainData, loading } = props;
  return (
    <View style={styles.wrapper} testID={EARN_RATE_TABLE}>
      <Text style={styles.header}>Earn Rate Explained</Text>
      <TableLoader loading={loading} surged={earnRate > 1} />
      <TableData loading={loading} explainData={explainData} earnRate={earnRate} />
    </View>
  );
}

export default EarnRateTable;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: Style.adjust(16),
    marginBottom: Style.adjust(16),
    borderRadius: 8,
    textAlign: "center",
    backgroundColor: Colours.yuscreen.white,
  },
  header: {
    color: "#6E6E70",
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    marginHorizontal: Style.adjust(16),
    marginVertical: Style.adjust(16),
    letterSpacing: 0.4,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  table: {
    marginBottom: Style.adjust(16),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: MARGIN_EDGE_RIGHT,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  loadingHeight: {
    minHeight: 240,
  } as ViewStyle,
  loadingHeightWithHeading: {
    minHeight: 288,
  } as ViewStyle,
});

function TableLoader({ loading, surged }: { loading: boolean; surged: boolean }) {
  if (!loading) {
    return null;
  }

  return (
    <View style={[styles.loading, surged ? styles.loadingHeight : styles.loadingHeightWithHeading]}>
      <ActivityIndicator />
    </View>
  );
}

function TableData({ loading, explainData, earnRate }: IProps) {
  if (loading) {
    return null;
  }

  const hasProducts = earnRate !== 1;
  return (
    <View style={styles.table}>
      <TableBackground width={EARN_RATE_COLUMN_WIDTH} />
      <TableHeader earnRate={earnRate} show={hasProducts} />
      {explainData.map((data, index) => (
        <TableRow
          key={index} // no reorder
          data={data}
          totalEarnRate={earnRate}
          hasProducts={hasProducts}
        />
      ))}
    </View>
  );
}
