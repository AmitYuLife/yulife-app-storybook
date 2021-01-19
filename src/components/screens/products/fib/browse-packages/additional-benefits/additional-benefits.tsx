import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import AdditionalBenefitsCard from "./subcomponents/additional-benefits.card";
import { getAdditionalBenefitsData } from "./additional-benefits.helper";
import { Heading } from "../subcomponents/common";
import { Colours, Style } from "@styles";

const AdditionalBenefits = memo(function () {
  const items = getAdditionalBenefitsData();
  return (
    <>
      <Heading title="Other benefits" />
      <View style={styles.wrapper}>
        {items.map((item, index) => (
          <AdditionalBenefitsCard
            key={item.id}
            text={item.text}
            title={item.title}
            showSeparator={index + 1 !== items.length}
          />
        ))}
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
    padding: Style.adjust(24),
    borderColor: Colours.neutral.n100,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default AdditionalBenefits;
