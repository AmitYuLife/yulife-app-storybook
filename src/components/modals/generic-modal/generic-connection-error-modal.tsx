import React from "react";
import { GenericScreen } from "@screens";
import { t } from "@locale";

interface IProps {
  onPress: () => void;
}

const GenericConnectionErrorModal = ({ onPress }: IProps) => (
  <GenericScreen
    onPress={onPress}
    heading={t("modals.generic_connection_error.offline.heading")}
    subheading={t("modals.generic_connection_error.offline.subheading")}
    ctaLabel={t("labels.cta.back")}
  />
);

export default GenericConnectionErrorModal;
