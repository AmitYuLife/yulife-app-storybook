import { GQL_MUTATION_SEND_MAGIC_LINK, SendMagicLinkMutationTuple } from "@graphql/user";
import React, { useState, useMemo, FC, useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { EmailSentScreen, ResetPasswordScreen } from "@screens";
import { validateEmail } from "../login/login.helpers";
import { useMutation } from "@apollo/react-hooks";
import Logger from "@services/logging/logger";

interface IProps {
  componentId: string;
}

const ResetPasswordContainer: FC<IProps> = ({ componentId }) => {
  const [{ wasEmailSent, email, emailError }, setState] = useState({
    email: "",
    emailError: "",
    wasEmailSent: false,
  });

  const [sendMagicLink, { loading }]: SendMagicLinkMutationTuple = useMutation(GQL_MUTATION_SEND_MAGIC_LINK);

  const disableSubmit = useMemo(() => email === "" || emailError !== "", [email, emailError]);

  const handleSubmit = useCallback(async () => {
    if (!validateEmail(email)) {
      try {
        const results = await sendMagicLink({
          variables: {
            email,
          },
        });

        if (results && results.data) {
          setState({ wasEmailSent: true, emailError, email });
        }
      } catch (e) {
        Logger.error(e, { file: "reset-password.container" });
      }
    }
  }, [email, emailError, sendMagicLink]);

  const handleEmailChange = useCallback(
    (newEmail: string) => {
      setState({ email: newEmail, emailError: validateEmail(newEmail), wasEmailSent });
    },
    [wasEmailSent]
  );

  if (wasEmailSent) {
    return (
      <EmailSentScreen
        email={email}
        onCtaPress={() => Navigation.popToRoot(componentId)}
        onSecondaryCtaPress={() => setState({ wasEmailSent: false, email, emailError })}
      />
    );
  }

  return (
    <ResetPasswordScreen
      disableSubmit={disableSubmit}
      email={email}
      emailError={emailError}
      isSubmitting={loading}
      onCancelPress={() => Navigation.pop(componentId)}
      onEmailChange={handleEmailChange}
      onSubmitPress={handleSubmit}
    />
  );
};

export default ResetPasswordContainer;
