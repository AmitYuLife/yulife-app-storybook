import { TextTemplate } from "@atoms";
import HintContainer from "@components/molecules/hint/hint.container";
import { Colours, Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { ROUTES } from "@navigation/constants";
import { t } from "@locale";

interface Props {
  maximumAgeOfMessageInDays: number;
}

const NotificationFooter = ({ maximumAgeOfMessageInDays }: Props) => {
  return (
    <>
      <HintContainer screen={ROUTES.notifications} />
      <View style={styles.wrapper}>
        <TextTemplate type="b2" color={Colours.neutral.n400} textAlign="center">
          {t("screens.notifications.deleted_disclaimer", { days: maximumAgeOfMessageInDays })}
        </TextTemplate>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(12),
    paddingHorizontal: Style.adjust(20),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(NotificationFooter);
