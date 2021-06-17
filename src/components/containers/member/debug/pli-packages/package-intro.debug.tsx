//@TODO PLI: Use this code on the live version and delete this file after
import React from "react";
import { StyleSheet, View } from "react-native";
import { PackageAvatarChooseStyle } from "@components/molecules";
import Logo from "@atoms/logo";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";
import Wrapper from "../wrapper.debug";

const PackageIntroDemo = () => (
  <Wrapper>
    <PackageAvatarChooseStyle stylesTitle="Try on different styles:">
      <View style={styles.header}>
        <Logo width={15} height={15} style={styles.logo} />
        <TextTemplate type="h3">Life Insurance</TextTemplate>
      </View>
      <View style={styles.description}>
        <TextTemplate type="b2">Insurance that protects you in the Yuniverse and beyond.</TextTemplate>
      </View>
      <TextTemplate type="b2">Owning this insurance will power up your Yumoji with brand new equipment.</TextTemplate>
    </PackageAvatarChooseStyle>
  </Wrapper>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginRight: Style.adjust(8),
  },
  description: {
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(16),
  },
});

export default PackageIntroDemo;
