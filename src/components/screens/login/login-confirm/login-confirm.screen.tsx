import * as React from "react";
import { memo } from "react";
import { Box, TextTemplate, UnauthorisedGradient } from "@atoms";
import { LinkButton, CentredScreen } from "@molecules";
import { Style } from "@styles";
import { StyleSheet } from "react-native";
import { t } from "@locale";

interface IProps {
  email: string;
  hasSetPassword: boolean;
  onPressBack: () => void;
}

const LoginConfirmScreen = ({ email, hasSetPassword, onPressBack }: IProps) => {
  return (
    <CentredScreen
      backgroundImage={require("@assets/centred-screen/forestBackground.png")}
      style={styles.wrapper}
      BackgroundGradient={<UnauthorisedGradient />}
    >
      <Box pt={100} pb={40} pl={30} pr={30}>
        <TextTemplate type="h2">
          {t("screens.login_confirm.heading")} {email} {hasSetPassword ? "has set password" : "has not set password"}
        </TextTemplate>
      </Box>
      <LinkButton translationKey="labels.cta.back" onPress={onPressBack} />
    </CentredScreen>
  );
};

export default memo(LoginConfirmScreen);

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(265),
  },
  flex: {
    flex: 1,
  },
  fullScreenWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
});
