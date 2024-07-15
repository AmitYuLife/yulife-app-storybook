import * as React from "react";
import { FunctionComponent } from "react";
import { Blurb, Heading, Pad, UnauthorisedGradient } from "@atoms";
import { Button, LinkButton, TextInput, CentredScreen } from "@molecules";
import styles from "./reset-password.screen.styles";
import { INPUT_RESET_PASSWORD } from "@ids";
import { useTranslation } from "@hooks";

interface IProps {
  disableSubmit: boolean;
  email: string;
  emailError: string;
  isSubmitting: boolean;
  onCancelPress: () => void;
  onEmailChange: (email: string) => void;
  onSubmitPress: () => void;
}

const ResetPasswordScreen: FunctionComponent<IProps> = ({
  disableSubmit,
  email,
  emailError,
  isSubmitting,
  onCancelPress,
  onEmailChange,
  onSubmitPress,
}) => {
  const translations = useTranslation([
    "screens.reset_password.heading",
    "screens.reset_password.subheading",
    "screens.reset_password.cta_label",
    "labels.cta.back",
    "screens.reset_password.submitting",
  ]);

  return (
    <CentredScreen
      backgroundImage={require("@assets/centred-screen/forestBackground.png")}
      style={styles.wrapper}
      BackgroundGradient={<UnauthorisedGradient />}
    >
      <Pad height={120} />
      <Heading style={styles.heading} label={translations["screens.reset_password.heading"]} />
      <Pad height={9} />
      <Blurb wrapperStyle={styles.blurbWrapper} label={translations["screens.reset_password.subheading"]} />
      <Pad height={21} />
      <TextInput
        testID={INPUT_RESET_PASSWORD}
        errorMessage={emailError}
        hasError={!!emailError}
        onChange={onEmailChange}
        type={TextInput.Types.EMAIL}
        value={email}
      />
      <Pad height={30} />
      <Button
        isLoading={isSubmitting}
        disabled={disableSubmit || isSubmitting}
        translationKey={isSubmitting ? "screens.reset_password.submitting" : "screens.reset_password.cta_label"}
        onPress={onSubmitPress}
      />
      <Pad height={10} />
      <LinkButton label={translations["labels.cta.back"]} onPress={onCancelPress} />
    </CentredScreen>
  );
};

export default ResetPasswordScreen;
