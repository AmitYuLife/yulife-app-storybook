import { gql } from "@graphql/__generated";
import { useMutatationAllRegions } from "@hooks";
import { REGION } from "@locale";
import { useCaptcha } from "@organisms/captcha-input";
import { useCallback, useEffect } from "react";

interface SendMagicLinkArgs {
  email: string;
  captcha: ReturnType<typeof useCaptcha>;
  onSuccess?: (results: { hasSetPassword: boolean; region: REGION }[]) => Promise<void>;
  onFailure?: (error: string) => void;
}

export const useSendMagicLink = ({ email, captcha, onSuccess, onFailure }: SendMagicLinkArgs) => {
  const {
    mutate,
    result: { loading, lastError },
  } = useMutatationAllRegions(gql("SendMagicLinkDocument"));

  useEffect(() => {
    if (lastError) {
      onFailure?.(lastError);
    }
  }, [lastError, onFailure]);

  const sendMagicLink = useCallback(async () => {
    try {
      const captchaResponse = await captcha.submit();

      const results = await mutate({
        variables: { email, captchaResponse },
      });

      if (onSuccess && results.length > 0) {
        await onSuccess(
          results.map((result) => ({
            hasSetPassword: !!result.data?.sendMagicLink.hasSetPassword,
            region: result.region,
          }))
        );
      }
    } catch (e) {
      onFailure?.(e.message);
    }
  }, [email, captcha, mutate, onFailure, onSuccess]);

  return {
    sendMagicLink,
    loading,
  };
};
