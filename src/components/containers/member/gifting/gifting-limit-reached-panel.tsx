import { memo, useCallback, useContext, useEffect, useState } from "react";
import { GIFTING_PAGE, GiftingManagerContext } from "./context";
import { InfoPanel } from "@components/molecules";
import { t } from "@locale";
import { Box } from "@atoms";
import { FadeInDown } from "react-native-reanimated";

const TIMEOUT = 5000;

type Props = {
  page: GIFTING_PAGE;
};

export const GiftingLimitReachedPanel = memo(({ page }: Props) => {
  const { maxDailySend } = useContext(GiftingManagerContext);
  const [dismissed, setDismissed] = useState(false);

  const dismiss = useCallback(() => setDismissed(true), []);

  useEffect(() => {
    if (page !== GIFTING_PAGE.SELECT_RECIPIENTS) {
      setDismissed(true);
    }
  }, [page]);

  useEffect(() => {
    const timeout = setTimeout(dismiss, TIMEOUT);

    return () => clearTimeout(timeout);
  }, []);

  return dismissed ? null : (
    <Box mb={24} mh={24} entering={FadeInDown.duration(150)}>
      <InfoPanel
        markdown={t("screens.gifting.limit_reached.info", { smart_count: maxDailySend })}
        type="info-toast"
        onClose={dismiss}
        showIcon={true}
      />
    </Box>
  );
});
