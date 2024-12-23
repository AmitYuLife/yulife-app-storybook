import { t } from "@locale";

type Props = {
  maxRecipientsPerGiftRequest: number;
  selectedCount: number;
};

export const getGiftingCopyPageHeadings = ({ maxRecipientsPerGiftRequest, selectedCount }: Props) =>
  [
    {
      title: "",
      description: "",
    },
    {
      title: t("screens.gifting.top_bar.select_target.heading"),
      description: !maxRecipientsPerGiftRequest
        ? ""
        : t("screens.gifting.top_bar.select_target.description", { smart_count: maxRecipientsPerGiftRequest }),
    },
    {
      title: t("screens.gifting.top_bar.select_message.heading"),
      description: t("screens.gifting.top_bar.select_message.description", { smart_count: selectedCount }),
    },
    {
      title: t("screens.gifting.top_bar.set_coins.heading"),
      description: t("screens.gifting.top_bar.set_coins.description", { smart_count: selectedCount }),
    },
    {
      title: t("screens.gifting.top_bar.message_preview.heading"),
      description: "",
    },
  ] as const;
