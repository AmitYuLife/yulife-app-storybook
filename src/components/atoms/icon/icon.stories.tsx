import React from "react";
import { ScrollView, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Icon from "./index";
import { Colours } from "@styles";

storiesOf("Icon", module).add("all", () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Icon.YugiCertificateHead />
      <Pad />
      <Icon.YugiCertificateHead fill={Colours.products.fib.rare} accent={Colours.secondary.s10S2} />
      <Pad />
      <Icon.YugiCertificateHead fill={Colours.products.fib.epic} accent={Colours.secondary.s10S3} />
      <Pad height={24} />
      <Icon.Clock />
    </ScrollView>
  );
});

const Pad = ({ height = 8 }) => <View style={{ height }} />;
