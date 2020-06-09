import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@atoms/index";
import { EarnRateDetails_getEarnRateDetails } from "@graphql/_core/schema";
import { Colours, Style } from "@styles";
import TableHeader from "./table.header";
import TableRow from "./table.row";

interface IProps {
  earnRate: number;
  explainData: EarnRateDetails_getEarnRateDetails[];
}

function EarnRateTable(props: { earnRate: number; explainData: IProps["explainData"] }) {
  const { earnRate, explainData } = props;
  const hasProducts = earnRate !== 1;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Earn Rate Explained</Text>
      <View style={styles.table}>
        {!hasProducts ? null : <TableHeader earnRate={earnRate} />}
        {explainData.map((data, index) => {
          return (
            <TableRow
              key={`${data.label}_${index}`}
              data={data}
              totalEarnRate={earnRate}
              index={index}
              lastRow={explainData.length - 1}
              hasProducts={hasProducts}
            />
          );
        })}
      </View>
    </View>
  );
}

export default EarnRateTable;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.yuscreen.white,
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 32,
    marginBottom: 64,
    textAlign: "center",
  },
  header: {
    color: "#838385",
    fontSize: 20,
    letterSpacing: 0.4,
    lineHeight: 24,
    marginHorizontal: 16,
    marginVertical: 16,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  table: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
});
