import { Text } from "@atoms/index";
import * as React from "react";
import { Linking, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import { Style } from "../../../../styles";
import { yuMatterData } from "./member-services.data";
import styles from "./yumatter.screen.styles";
import { handleOpenWebView } from "@navigation/utils";
import { ROUTES } from "@navigation/constants";

const Yumatter = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <View style={styles.yumatterWrapper}>
        <Text style={styles.yumatter}>{`YuMatter`}</Text>
        <Text style={styles.content}>
          YuMatter is a confidential employee assistance program designed to support your mental, financial, and
          professional wellbeing. We are delighted to offer YuMatter through our partnership with Workplace Options.
        </Text>
        <Text style={styles.header}>Structured clinical counselling:</Text>
        <Text style={styles.content}>
          Face‐to‐face or telephone sessions with a local clinician, including evening and weekend appointments.
        </Text>
        <Text style={styles.header}>Financial Support:</Text>
        <Text style={styles.content}>Money advisers available to support people facing financial challenges.</Text>
        <Text style={styles.header}>Career coaching:</Text>
        <Text style={styles.content}>One-off telephone session providing advice on career development.</Text>
        <View style={styles.loginDetailsWrapper}>
          <Text style={styles.loginHeader}>To login and access YuMatter services:</Text>
          <Text style={styles.content}>Website: </Text>
          <TouchableOpacity
            onPress={() => handleOpenWebView(ROUTES.memberServices, { uri: yuMatterData.website, title: "YuMatter" })}
          >
            <Text style={styles.globalHyperLink}>{yuMatterData.website}</Text>
          </TouchableOpacity>

          <Text style={StyleSheet.flatten([styles.content, { marginTop: Style.adjust(30) }])}>
            {`Company code: ${yuMatterData.companyCode}`}
          </Text>
          <Text style={StyleSheet.flatten([styles.content, { marginTop: Style.adjust(1) }])}>
            {`Password: ${yuMatterData.password}`}
          </Text>
          <Text style={StyleSheet.flatten([styles.content, { marginTop: Style.adjust(30) }])}>
            Contact number:{" "}
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL(`tel:${yuMatterData.contactNumber.split(" ").join("")}`)}>
            <Text style={styles.globalHyperLink}>{yuMatterData.contactNumber}</Text>
          </TouchableOpacity>
          <Text style={StyleSheet.flatten([styles.content, { marginTop: Style.adjust(30) }])}>
            Customer service email:
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${yuMatterData.customerServiceEmail}`)}>
            <Text
              style={StyleSheet.flatten([
                styles.globalHyperLink,
                { marginTop: Style.adjust(1), marginBottom: Style.adjust(15) },
              ])}
            >
              {yuMatterData.customerServiceEmail}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.content}>Questions? Chat to us through the app, or read </Text>
        <View style={styles.contentHelpCenter}>
          <Text style={StyleSheet.flatten([styles.content, { marginTop: Style.adjust(1) }])}>
            more about YuMatter in our{" "}
          </Text>
          <TouchableOpacity
            onPress={() =>
              handleOpenWebView(ROUTES.memberServices, { uri: yuMatterData.yulifeHelpCenter, title: "YuMatter" })
            }
          >
            <Text style={styles.globalHyperLink}>Help Center</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Yumatter;
