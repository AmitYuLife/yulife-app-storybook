import React, { SFC } from "react";
import GenericModal from "./generic-modal";

interface IProps {
    onPress: () => void;
}

const GenericConnectionErrorModal: SFC<{ onPress: IProps["onPress"] }> = ({ onPress }) => (
    <GenericModal
        onPress={onPress}
        heading="you're offline"
        subheading="check your internet connection"
        ctaLabel="back"
    />
);

export default GenericConnectionErrorModal;
