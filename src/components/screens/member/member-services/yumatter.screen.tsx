import React, { useMemo } from "react";
import { ScrollView, View, SafeAreaView } from "react-native";
import { yuMatterData } from "./member-services.data";
import { handleLinkPress } from "@services/app-link";
import { CardInformation, HeadingAndCopy } from "@molecules";
import { Button, Hyperlink } from "@atoms";
import { Style } from "@styles";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { ITextTemplateType } from "@atoms/text/text-template";
import styles from "./member-services.style";

const marginBottom = 8;

const Yumatter = () => {
  const accessDetails = useMemo(
    () => ({
      access: [
        { name: "Login details", type: "b2b" as ITextTemplateType, separator: false, style: { marginBottom } },
        { name: "Company code: yulife\nPassword: employee", type: "b2" as ITextTemplateType, separator: true },
        { name: "Website", type: "b2b" as ITextTemplateType },
        {
          component: <Hyperlink title={yuMatterData.website} url={yuMatterData.website} />,
        },
      ],
      contact: [
        { name: "Contact number", type: "b2b" as ITextTemplateType, separator: false, style: { marginBottom } },
        {
          component: (
            <Hyperlink
              title={yuMatterData.contactNumber}
              url={`tel:${yuMatterData.contactNumber.split(" ").join("")}`}
            />
          ),
          separator: true,
        },
        { name: "Customer service email", type: "b2b" as ITextTemplateType, separator: false, style: { marginBottom } },
        {
          component: (
            <Hyperlink title={yuMatterData.customerServiceEmail} url={`mailto:${yuMatterData.customerServiceEmail}`} />
          ),
        },
      ],
    }),
    []
  );

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeadingAndCopy
          title="How does it work?"
          description="YuMatter is a confidential employee assistance program designed to support your mental, financial, and professional wellbeing. We are delighted to offer YuMatter through our partnership with Workplace Options."
        />
        <HeadingAndCopy
          title="Structured clinical counselling"
          description="Face‐to‐face or telephone sessions with a local clinician, including evening and weekend appointments."
        />
        <HeadingAndCopy
          title="Financial support"
          description="Money advisers available to support people facing financial challenges."
        />
        <HeadingAndCopy
          title="Career coaching"
          description="One-off telephone session providing advice on career development."
        />
        <CardInformation title="Access YuMatter services" items={accessDetails.access} />
        <View style={styles.button}>
          <Button
            type="Tertiary"
            size="Fill"
            onPress={handleLinkPress(yuMatterData.website)}
            label="Access YuMatter"
            height={Style.adjust(60)}
            leftIcon={BUTTON_ICON.YULIFE_LOGO}
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
            onPress={handleLinkPress(yuMatterData.yulifeHelpCenter)}
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

export default Yumatter;
