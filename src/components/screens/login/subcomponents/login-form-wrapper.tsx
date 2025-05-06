import { memo } from "react";
import { Box, Pad, TextTemplate, UnauthorisedGradient } from "@atoms";
import { CentredScreen } from "@molecules";
import { Style } from "@styles";
import { ScrollView, StyleSheet } from "react-native";
import { TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import LoginBackgroundSvg from "@components/screens/login/subcomponents/svgs/login-background-svg";
import { LOGIN_SCREEN_HEADER } from "@ids";

interface ILoginFormWrapperProps {
  onPressBack: () => void;
  heading: string;
  /**
   * Variant of the login form wrapper. This only affects the background image.
   * - `default`: Default login form wrapper.
   * - `magicLink`: Login form wrapper for magic link, containing a bird with a letter.
   */
  variant?: "default" | "magicLink";
  children: React.ReactNode;
}

export const LoginFormWrapper = ({ onPressBack, heading, variant = "default", children }: ILoginFormWrapperProps) => {
  return (
    <CentredScreen
      backgroundImage={<LoginBackgroundSvg showBird={variant === "magicLink"} />}
      style={styles.wrapper}
      BackgroundGradient={<UnauthorisedGradient />}
    >
      <ScrollView keyboardShouldPersistTaps={"handled"} showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <Pad height={32} />
        <Box pt={60} pb={40} px={30}>
          <TextTemplate type="h2" testID={LOGIN_SCREEN_HEADER}>
            {heading}
          </TextTemplate>
        </Box>
        {children}
        <Pad height={40} />
      </ScrollView>
      <TopBarAbsolute
        leftIcon={LeftIcon.BACK}
        rightIcon={null}
        onPressLeftIcon={onPressBack}
        skipFetchingNotifications={true}
      />
    </CentredScreen>
  );
};

export default memo(LoginFormWrapper);

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(265),
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  fullScreenWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
});
