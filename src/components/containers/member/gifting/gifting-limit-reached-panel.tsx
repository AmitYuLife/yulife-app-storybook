import { memo, useCallback, useContext, useEffect, useState } from "react";
import { GiftingManagerContext } from "./context";
import { InfoPanel } from "@components/molecules";
import { t } from "@locale";
import { Box } from "@atoms";
import { FadeInDown } from "react-native-reanimated";

const TIMEOUT = 5000;

export const GiftingLimitReachedPanel = memo(() => {
  const { maxDailySend } = useContext(GiftingManagerContext);
  const [dismissed, setDismissed] = useState(false);

  const dismiss = useCallback(() => setDismissed(true), []);

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
