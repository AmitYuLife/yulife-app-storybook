import { GQL_MUTATION_SEND_MAGIC_LINK } from "@graphql/user";
import React, { useState, useMemo, FC, useCallback } from "react";
import { Navigation } from "@navigation/main";
import { EmailSentScreen, ResetPasswordScreen } from "@screens";
import Logger from "@services/logging/logger";
import { validateEmail } from "@utils/email";
import { useMutatationAllRegions } from "@hooks";
import { SendMagicLink } from "@graphql/_core/schema";

interface IProps {
  componentId: string;
  email?: string;
}

const ResetPasswordContainer: FC<IProps> = (props) => {
  const { componentId } = props;
  const [{ wasEmailSent, email, emailError }, setState] = useState({
    email: props?.email || "",
    emailError: "",
    wasEmailSent: false,
  });

  const {
    mutate: sendMagicLink,
    result: { loading },
  } = useMutatationAllRegions<SendMagicLink>(GQL_MUTATION_SEND_MAGIC_LINK);

  const disableSubmit = useMemo(() => email === "" || emailError !== "", [email, emailError]);

  const handleSubmit = useCallback(async () => {
    if (!validateEmail(email)) {
      try {
        const results = await sendMagicLink({
          variables: {
            email,
            isResetPasswordRequest: true,
          },
        });

        if (results.length > 0) {
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
