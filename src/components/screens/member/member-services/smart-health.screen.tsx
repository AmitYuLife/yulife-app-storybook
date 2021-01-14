import { Text } from "@atoms/index";
import * as React from "react";
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Style } from "../../../../styles";
import { smartHealthData } from "./member-services.data";
import styles from "./smart-health.screen.styles";
import { TextWithBoldText } from "@components/molecules";
import { handleLinkPress } from "@services/app-link";

const defaultInstructionCopy = "your group life scheme number, which can be provided by your HR manager";
const instantInstructionCopy = "<bold>“yulifeinstant”</bold> in the Policy number / Scheme code field.";

type Props = {
  isInstant: boolean;
};

const SmartHealth = (props: Props) => {
  const instructionCopy = props.isInstant ? instantInstructionCopy : defaultInstructionCopy;
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <View style={styles.smartHeathWrapper}>
          <Text style={styles.smartHealth}>{`SmartHealth`}</Text>
          <Text style={styles.content}>
            SmartHealth is a doctor-on-demand service offered through our partnership with AIG. It gives you 24/7 access
            to a GP as well as a range of other health and wellbeing expertise including:
          </Text>

          <Text style={styles.expertise}>
            • Mental health support {`\n`}• Nutritionist consultations {`\n`}• An online fitness programme
          </Text>

          <Text style={styles.content}>To access SmartHealth, you can download the SmartHealth by AIG app.</Text>
          <View style={styles.hyperlinkWrapper}>
            <Text style={styles.content}>You can also </Text>
            <TouchableOpacity onPress={handleLinkPress(smartHealthData.website)}>
              <Text style={styles.globalHyperLink}>request services online here.</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.content}>
            To create a profile or request services, you will need to enter <TextWithBoldText value={instructionCopy} />
          </Text>

          <Text style={styles.header}>SmartHealth by AIG</Text>

          <TouchableOpacity onPress={handleLinkPress(getStoreUrl())}>
            <Image style={styles.storeImage} source={getStoreImage()} />
          </TouchableOpacity>

          <Text style={styles.content}>Questions? Chat to us through the app, or read </Text>
          <View style={styles.contentHelpCenter}>
            <Text style={StyleSheet.flatten([styles.content, { marginTop: Style.adjust(1) }])}>
              more about SmartHealth in our{" "}
            </Text>
            <TouchableOpacity onPress={handleLinkPress(smartHealthData.yulifeHelpCenter)}>
              <Text style={styles.globalHyperLinkNoMargin}>Help Center.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function getStoreUrl(): string {
  return Platform.select(smartHealthData.appLinks);
}

function getStoreImage() {
  return Platform.select({
    ios: require("../../../../../assets/member-services/appstore.png"),
    android: require("../../../../../assets/member-services/google-play.png"),
  });
}

export default SmartHealth;
