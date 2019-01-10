import React, { SFC } from "react";
import GenericModal from "./generic-modal";

interface IProps {
    onPress: () => void;
}

const GenericConnectionErrorModal: SFC<{ onPress: IProps["onPress"] }> = ({ onPress }) => (
    <GenericModal
        onPress={onPress}
        heading="oops!"
        subheading="there was an error retrieving data. please try again later."
        ctaLabel="back"
    />
);

export default GenericConnectionErrorModal;
