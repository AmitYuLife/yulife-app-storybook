import * as React from "react";
import { FunctionComponent } from "react";
import { GetMobileCopy_getMobileCopy_screens_needHelpLoggingIn as ResetPasswordCopy } from "@graphql/_core/schema";
import { Blurb, Button, Heading, LinkButton, Pad, TextInput, UnauthorisedGradient } from "@atoms";
import styles from "./reset-password.screen.styles";
import { INPUT_RESET_PASSWORD } from "@ids";
import { CentredScreen } from "@molecules";

interface IProps {
  disableSubmit: boolean;
  email: string;
  emailError: string;
  isSubmitting: boolean;
  onCancelPress: () => void;
  onEmailChange: (email: string) => void;
  onSubmitPress: () => void;
  copy: ResetPasswordCopy;
}

const ResetPasswordScreen: FunctionComponent<IProps> = ({
  disableSubmit,
  email,
  emailError,
  isSubmitting,
  onCancelPress,
  onEmailChange,
  onSubmitPress,
  copy,
}) => (
  <CentredScreen footerImage="forest" BackgroundGradient={<UnauthorisedGradient />}>
    <Pad height={120} />
    <Heading style={styles.heading} label={copy.heading} />
    <Pad height={9} />
    <Blurb wrapperStyle={styles.blurbWrapper} label={copy.subheading} />
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
      label={isSubmitting ? "submitting ..." : copy.ctaLabel}
      onPress={onSubmitPress}
    />
    <Pad height={10} />
    <LinkButton label={copy.ctaLabelSecondary} onPress={onCancelPress} />
  </CentredScreen>
);

export default ResetPasswordScreen;
