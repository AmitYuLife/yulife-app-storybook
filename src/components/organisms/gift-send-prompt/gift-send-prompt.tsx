import { GiftIcon } from "@atoms/icon/gift-icon";
import { t } from "@locale";
import { Card } from "@molecules";
import { VoidFunction } from "@utils";
import { memo } from "react";

type Props = {
  name: string;
  onPress: VoidFunction;
};

const GiftSendPrompt = ({ name, onPress }: Props) => (
  <Card
    image={<GiftIcon />}
    title={t("screens.gifting.send_prompt.title")}
    description={t("screens.gifting.send_prompt.description", { name })}
    buttonPress={onPress}
    buttonTranslationKey="screens.gifting.send_prompt.button"
  />
);

export default memo(GiftSendPrompt);
