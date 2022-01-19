import React, { memo, useCallback, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { Navigation } from "react-native-navigation";
import moment from "moment";
import { CloseSvg, TextTemplate } from "@atoms";
import { PressableWithDelay } from "@components/molecules";
import { ROUTES } from "@navigation/constants";
import { Colours } from "@styles";
import styles from "./styles";
import { Header } from "./subcomponents/header";
import { Disclaimer } from "./subcomponents/disclaimer";
import { PackageDetailsButton } from "./subcomponents/package-details-button";
import { PowerUpCopy } from "./subcomponents/power-up-copy";
import { NotCoveredWarning } from "./subcomponents/not-covered-warning";
import { WrappedYuCoinPower } from "./subcomponents/yu-coin-power";

interface Props {
  secondsUntilStartDate: number;
  policyStartDate: string;
  refetchQuery: () => void;
}
const _ProductDetailsCountdown = ({ secondsUntilStartDate, policyStartDate, refetchQuery }: Props) => {
  const handleClose = useCallback(() => {
    Navigation.pop(ROUTES.productDetails);
  }, []);

  const startDateDisplay = useMemo(() => {
    return moment(policyStartDate).format("DD/MM/YYYY");
  }, [policyStartDate]);

  return (
    <View style={styles.wrapper}>
      <Header refetchQuery={refetchQuery} secondsUntilStartDate={secondsUntilStartDate} />
      <View style={styles.topPad} />
      <View style={styles.scrollViewWrapper}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <View style={styles.scrollTopPad} />
          <View style={styles.contentWrapper}>
            <TextTemplate textAlign="center" type="b1b">
              If approved, your policy goes live on*:
            </TextTemplate>
            <TextTemplate textAlign="center" type="h3">
              {startDateDisplay}
            </TextTemplate>
            <NotCoveredWarning />
            <PowerUpCopy />
            <WrappedYuCoinPower coins={5} />
            <PackageDetailsButton />
            <Disclaimer />
          </View>
          <View style={styles.scrollBottomPad} />
        </ScrollView>
      </View>
      <PressableWithDelay style={styles.closeWrapper} onPress={handleClose}>
        <CloseSvg stroke={Colours.neutral.white} />
      </PressableWithDelay>
    </View>
  );
};

export const ProductDetailsCountdown = memo(_ProductDetailsCountdown);
