import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@atoms/index";
import { EarnRateDetails_getEarnRateDetails } from "@graphql/_core/schema";
import { Colours, Style } from "@styles";
import { TableHeader, TableBackground } from "./layout-components";
import { TableRow } from "./data-components";
import { EARN_RATE_COLUMN_WIDTH, MARGIN_EDGE_RIGHT } from "./table.styles";

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
  const hasProducts = earnRate !== 1;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Earn Rate Explained</Text>
      {loading ? null : (
        <View style={styles.table}>
          <TableBackground width={EARN_RATE_COLUMN_WIDTH} />
          {!hasProducts ? null : <TableHeader earnRate={earnRate} />}
          {explainData.map((data, index) => {
            return (
              <TableRow key={`${data.label}_${index}`} data={data} totalEarnRate={earnRate} hasProducts={hasProducts} />
            );
          })}
        </View>
      )}
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
});
