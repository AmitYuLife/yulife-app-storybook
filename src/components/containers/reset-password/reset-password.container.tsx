import { GQL_MUTATION_SEND_MAGIC_LINK, SendMagicLinkMutationTuple } from "@graphql/user";
import React, { useState, useMemo, FC, useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import {
  GetMobileCopy_getMobileCopy_screens_emailSent as EmailSentCopy,
  GetMobileCopy_getMobileCopy_screens_needHelpLoggingIn as ResetPasswordCopy,
} from "../../../graphql/_core/schema";

import { IReduxState } from "../../../redux/_core/reducers";
import { getCopy } from "../../../redux/copy/copy.selectors";
import { EmailSentScreen, ResetPasswordScreen } from "../../screens";
import { validateEmail } from "../login/login.helpers";
import { useMutation } from "@apollo/react-hooks";
import Logger from "@services/logging/logger";

interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & ConnectedState;

const ResetPasswordContainer: FC<Props> = ({ copy, copyEmailSent, componentId }: Props) => {
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
        copy={copyEmailSent}
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
      copy={copy}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "needHelpLoggingIn") as ResetPasswordCopy,
  copyEmailSent: getCopy(state, "emailSent") as EmailSentCopy,
});

export default connect<ConnectedState, {}>(mapStateToProps, null)(ResetPasswordContainer);
