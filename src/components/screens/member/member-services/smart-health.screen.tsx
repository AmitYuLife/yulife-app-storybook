import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { smartHealthData } from "./member-services.data";
import { HeadingAndCopy } from "@components/molecules";
import { handleLinkPress } from "@services/app-link";
import { TertiaryButton } from "@atoms";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import styles from "./member-services.style";

const yuDocDescription =
  "Smart Health is a doctor-on-demand service offered through our partnership with AIG. It gives you 24/7 access to a GP as well as a range of other health and wellbeing expertise including: \n\n• Mental health support \n• Nutritionist consultations\n• An online fitness programme";

const SmartHealth = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeadingAndCopy title="What is Smart Health?" description={yuDocDescription} />
        <HeadingAndCopy
          title="Accessing Smart Health"
          description={`To access Smart Health, you can download the Smart Health by AIG app. You can also request the service online.\n\nTo create a profile or request services, you will need to enter your group life scheme number.`}
          marginBottom={24}
        />

        <View style={styles.button}>
          <TertiaryButton
            size="Fill"
            onPress={handleLinkPress(smartHealthData.website)}
            label="Access Smart Health online"
            leftIcon={BUTTON_ICON.SMART_HEALTH}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
          />
          <View style={styles.marginTop}>
            <TertiaryButton
              size="Fill"
              onPress={handleLinkPress(smartHealthData.appUrl)}
              label="Download Smart Health app"
              leftIcon={smartHealthData.appIcon}
              rightIcon={BUTTON_ICON.ARROW_RIGHT}
            />
          </View>
        </View>
        <View style={styles.pad} />
        <HeadingAndCopy
          title="Have a question?"
          description="Chat to us through the app, or read more about YuDoctor in our Help Centre."
          marginBottom={0}
        />
        <View style={styles.button}>
          <TertiaryButton
            size="Fill"
            onPress={handleLinkPress(smartHealthData.yulifeHelpCenter)}
            label="Help Centre"
            leftIcon={BUTTON_ICON.QUESTION_BUBBLE}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
          />
        </View>
        <View style={styles.padBottom} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SmartHealth;
