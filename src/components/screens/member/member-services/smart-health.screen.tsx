import React, { useMemo } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Style } from "@styles";
import { smartHealthData } from "./member-services.data";
import { CardInformation, HeadingAndCopy } from "@components/molecules";
import { handleLinkPress } from "@services/app-link";
import { Hyperlink, Button } from "@atoms";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { ITextTemplateType } from "@atoms/text/text-template";
import styles from "./member-services.style";

const yuDocDescription =
  "YuDoc is an on-demand virtual service providing you with 24/7 access by phone or video to: \n\n• Remote GP appointments \n• Second opinions\n• Prescription services\n\n...and more, for you and your family.  Log in to access services, plus helpful resources on stress management, healthy eating, and keeping fit.";

const marginBottom = 8;

const SmartHealth = () => {
  const accessDetails = useMemo(
    () => ({
      contact: [
        { name: "Contact number", type: "b2b" as ITextTemplateType, separator: false, style: { marginBottom } },
        {
          component: (
            <Hyperlink
              title={smartHealthData.contactNumber}
              url={`tel:${smartHealthData.contactNumber.split(" ").join("")}`}
            />
          ),
          separator: true,
        },
        { name: "Customer service email", type: "b2b" as ITextTemplateType, separator: false, style: { marginBottom } },
        {
          component: (
            <Hyperlink
              title={smartHealthData.customerServiceEmail}
              url={`mailto:${smartHealthData.customerServiceEmail}`}
            />
          ),
        },
      ],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeadingAndCopy title="What is YuDoc?" description={yuDocDescription} />
        <HeadingAndCopy
          title="Accessing YuDoc"
          description="To create a profile and request services you will need your policy number, found below."
          marginBottom={24}
        />

        <View style={styles.button}>
          <Button
            type="Tertiary"
            size="Fill"
            onPress={handleLinkPress(smartHealthData.website)}
            label="Access YuDoc"
            height={Style.adjust(60)}
            leftIcon={BUTTON_ICON.DOC}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
          />
        </View>
        <View style={styles.pad} />
        <CardInformation title="Contact YuMatter services" items={accessDetails.contact} />
        <View style={styles.pad} />
        <HeadingAndCopy
          title="Have a question?"
          description="Chat to us through the app, or read more about YuDoctor in our Help Centre."
          marginBottom={0}
        />
        <View style={styles.button}>
          <Button
            type="Tertiary"
            size="Fill"
            onPress={handleLinkPress(smartHealthData.yulifeHelpCenter)}
            label="Help Centre"
            height={Style.adjust(60)}
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
