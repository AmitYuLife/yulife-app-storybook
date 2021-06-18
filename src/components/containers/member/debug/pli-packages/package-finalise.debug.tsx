//@TODO PLI: Use this code on the live version and delete this file after
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { PackageAvatarChooseStyle } from "@components/molecules";
import { Hyperlink, PackageMonthPrice, TertiaryButton, TextTemplate } from "@atoms";
import { Style } from "@styles";
import Wrapper from "../wrapper.debug";
import { PackageSelector } from "@organisms/lump-calculator/package-selector";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { FIB_DOCUMENTS } from "../../../products/fib/fib.types";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

interface IProps {
  componentId: string;
}

const PackageFinaliseDemo = ({ componentId }: IProps) => {
  console.log(componentId, "componetid");
  const [selectedPackage, setSelectedPackage] = useState<CoverType>(CoverType.common);
  const onPress = () =>
    Navigation.push(componentId, {
      component: {
        id: ROUTES.fib,
        name: ROUTES.fib,
        passProps: {
          initialRoute: FIB_DOCUMENTS,
        },
      },
    });

  return (
    <Wrapper>
      <View style={styles.wrapper}>
        <View style={styles.packageSelector}>
          <PackageSelector selectedPackage={selectedPackage} onPackageSelected={setSelectedPackage} />
        </View>
        <PackageAvatarChooseStyle stylesTitle="Choose your style:">
          <TextTemplate type="b2">Should you pass away, we’ll pay out £2,500 a month until 20th May 2065</TextTemplate>
          <View style={styles.price}>
            <PackageMonthPrice price={20} />
          </View>
          <Hyperlink title="Customise your cover" />
        </PackageAvatarChooseStyle>
        <View style={styles.button}>
          <TertiaryButton
            size="Fill"
            onPress={onPress}
            label="View your documents"
            leftIcon={BUTTON_ICON.YELLOW_DOC}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
          />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  packageSelector: {
    marginBottom: Style.adjust(30),
  },
  logo: {
    marginRight: Style.adjust(8),
  },
  description: {
    marginBottom: Style.adjust(16),
  },
  price: {
    marginTop: Style.adjust(8),
  },
  button: {
    marginTop: Style.adjust(25),
  },
});

export default PackageFinaliseDemo;
